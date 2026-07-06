function cubicInOut(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function cubicIn(t: number): number {
  return t * t * t;
}

function cubicOut(t: number): number {
  return 1 - (1 - t) ** 3;
}

function tween(
  from: number,
  to: number,
  durationMs: number,
  ease: (t: number) => number,
  onUpdate: (value: number) => void,
): Promise<void> {
  return new Promise((resolve) => {
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      onUpdate(from + (to - from) * ease(t));
      if (t < 1) requestAnimationFrame(tick);
      else resolve();
    };
    requestAnimationFrame(tick);
  });
}

function tweenCurve(durationHalfMs: number, onUpdate: (v: number) => void): Promise<void> {
  return tween(0, 1, durationHalfMs, cubicIn, onUpdate).then(() =>
    tween(1, 0, durationHalfMs, cubicOut, onUpdate),
  );
}

const VERT = `#version 300 es
in vec2 aPosition;
out vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const FRAG = `#version 300 es
precision highp float;
uniform vec2 uMeshSize;
uniform float uMaskIn;
uniform float uMaskOut;
uniform float uMaskCurveIn;
uniform float uMaskCurveOut;
uniform vec3 uColor;
uniform bool uIsMobileLayout;
in vec2 vUv;
out vec4 outColor;

void main() {
  float curveRatio = uMeshSize.x / uMeshSize.y;
  float cureveSrength = uIsMobileLayout ? 0.115 : 0.15;
  vec2 uvCover = vUv * 2.0 - 1.0;
  float uvSinIn = (1.0 - pow(abs(uvCover.y), 2.0)) * uMaskCurveIn * cureveSrength / curveRatio;
  float uvSinOut = (1.0 - pow(abs(uvCover.y), 2.0)) * uMaskCurveOut * cureveSrength / curveRatio;
  vec4 cDist = vec4(uColor, 1.0);
  cDist.a = mix(cDist.a, 0.0, step(uMaskIn, 1.0 - vUv.x - uvSinIn));
  cDist.a = mix(cDist.a, 0.0, step(uMaskOut, vUv.x + uvSinOut));
  outColor = cDist;
}`;

function parseCssColor(value: string): [number, number, number] {
  const v = value.trim();
  if (!v) return [0, 0, 0];

  if (v.startsWith("#")) {
    const hex = v.slice(1);
    const full =
      hex.length === 3
        ? hex
            .split("")
            .map((c) => c + c)
            .join("")
        : hex;
    const n = Number.parseInt(full, 16);
    return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  }

  const rgb = v.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/);
  if (rgb) {
    return [Number(rgb[1]) / 255, Number(rgb[2]) / 255, Number(rgb[3]) / 255];
  }

  return [0, 0, 0];
}

function getThemeWipeColor(): [number, number, number] {
  const bg = getComputedStyle(document.documentElement).getPropertyValue("--background");
  return parseCssColor(bg);
}

export type WipeUniforms = {
  uMaskIn: number;
  uMaskOut: number;
  uMaskCurveIn: number;
  uMaskCurveOut: number;
};

export class TpnWipeRenderer {
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram;
  private uniforms: Record<string, WebGLUniformLocation | null> = {};
  private meshSize = { x: 1, y: 1 };

  constructor(private canvas: HTMLCanvasElement) {
    const gl = canvas.getContext("webgl2", { alpha: true, antialias: false, premultipliedAlpha: false });
    if (!gl) throw new Error("WebGL2 unavailable");
    this.gl = gl;

    const vs = this.compile(gl.VERTEX_SHADER, VERT);
    const fs = this.compile(gl.FRAGMENT_SHADER, FRAG);
    const program = gl.createProgram();
    if (!vs || !fs || !program) throw new Error("Shader compile failed");
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program) ?? "Program link failed");
    }
    this.program = program;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    for (const name of [
      "uMeshSize",
      "uMaskIn",
      "uMaskOut",
      "uMaskCurveIn",
      "uMaskCurveOut",
      "uColor",
      "uIsMobileLayout",
    ]) {
      this.uniforms[name] = gl.getUniformLocation(program, name);
    }

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  }

  private compile(type: number, source: string) {
    const shader = this.gl.createShader(type);
    if (!shader) return null;
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) return null;
    return shader;
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.floor(window.innerWidth * dpr);
    const h = Math.floor(window.innerHeight * dpr);
    this.canvas.width = w;
    this.canvas.height = h;
    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;
    this.gl.viewport(0, 0, w, h);
    this.meshSize = { x: window.innerWidth, y: window.innerHeight };
  }

  draw(state: WipeUniforms) {
    const { gl, program } = this;
    gl.useProgram(program);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(this.uniforms.uMeshSize, this.meshSize.x, this.meshSize.y);
    gl.uniform1f(this.uniforms.uMaskIn, state.uMaskIn);
    gl.uniform1f(this.uniforms.uMaskOut, state.uMaskOut);
    gl.uniform1f(this.uniforms.uMaskCurveIn, state.uMaskCurveIn);
    gl.uniform1f(this.uniforms.uMaskCurveOut, state.uMaskCurveOut);
    gl.uniform3fv(this.uniforms.uColor, getThemeWipeColor());
    gl.uniform1i(this.uniforms.uIsMobileLayout, window.innerWidth < 768 ? 1 : 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  dispose() {
    const ext = this.gl.getExtension("WEBGL_lose_context");
    ext?.loseContext();
  }
}

function getSpeedMs() {
  return window.innerWidth < 768 ? 800 : 1000;
}

export async function playTpnWipeIn(
  renderer: TpnWipeRenderer,
  onFrame: (state: WipeUniforms) => void,
): Promise<void> {
  const speed = getSpeedMs();
  const half = speed * 0.5;
  const state: WipeUniforms = { uMaskIn: 0, uMaskOut: 1, uMaskCurveIn: 0, uMaskCurveOut: 0 };

  const frame = () => onFrame({ ...state });

  await Promise.all([
    tween(0, 1, speed, cubicInOut, (v) => {
      state.uMaskIn = v;
      frame();
    }),
    tweenCurve(half, (v) => {
      state.uMaskCurveIn = v;
      frame();
    }),
  ]);
}

export async function playTpnWipeOut(
  renderer: TpnWipeRenderer,
  onFrame: (state: WipeUniforms) => void,
): Promise<void> {
  const speed = getSpeedMs();
  const half = speed * 0.5;
  const state: WipeUniforms = { uMaskIn: 1, uMaskOut: 1, uMaskCurveIn: 0, uMaskCurveOut: 0 };

  const frame = () => onFrame({ ...state });

  await Promise.all([
    tween(1, 0, speed, cubicInOut, (v) => {
      state.uMaskOut = v;
      frame();
    }),
    tweenCurve(half, (v) => {
      state.uMaskCurveOut = v;
      frame();
    }),
  ]);

  state.uMaskOut = 1;
  state.uMaskIn = 0;
  frame();
}
