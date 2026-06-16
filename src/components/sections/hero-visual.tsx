import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

const codeLines = [
  { indent: 0, parts: [{ t: "export async function ", c: "text-muted" }, { t: "shipProduct", c: "text-accent" }, { t: "() {", c: "text-muted" }] },
  { indent: 1, parts: [{ t: "const ", c: "text-purple" }, { t: "stack", c: "text-foreground" }, { t: " = ", c: "text-muted" }, { t: '"Next.js · TS · Postgres"', c: "text-accent" }] },
  { indent: 1, parts: [{ t: "await ", c: "text-purple" }, { t: "build", c: "text-foreground" }, { t: "({ tests: ", c: "text-muted" }, { t: "true", c: "text-accent" }, { t: ", a11y: ", c: "text-muted" }, { t: "true", c: "text-accent" }, { t: " })", c: "text-muted" }] },
  { indent: 1, parts: [{ t: "return ", c: "text-purple" }, { t: "deploy", c: "text-foreground" }, { t: "()", c: "text-muted" }] },
  { indent: 0, parts: [{ t: "}", c: "text-muted" }] },
];

const bars = [42, 68, 55, 82, 71, 94, 88];

export function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-lg lg:max-w-none", className)}>
      {/* Ambient ring behind card */}
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-accent/10 blur-3xl" />

      {/* Deploy toast — floats top right */}
      <div className="animate-float-tilt absolute -right-2 top-0 z-20 flex items-center gap-2.5 rounded-2xl border border-accent/30 bg-surface px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] sm:right-0 [animation-delay:0.6s]">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground">
          <Icon name="check" size={16} />
        </span>
        <div>
          <p className="text-xs font-bold text-foreground">Deploy successful</p>
          <p className="text-[11px] text-muted">Production · 42s build</p>
        </div>
      </div>

      {/* Main terminal card */}
      <div className="relative z-10 overflow-hidden rounded-[var(--radius-bento)] border border-white/10 bg-[#0a0a0a] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.55)]">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[11px] font-medium text-white/40">softsole/app · main</span>
          <div className="flex gap-1.5">
            <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-bold text-accent">TS</span>
          </div>
        </div>

        {/* Code editor */}
        <div className="space-y-1 px-4 py-5 font-mono text-[11px] leading-relaxed sm:text-xs sm:px-5 sm:py-6">
          {codeLines.map((line, i) => (
            <div key={i} className="flex" style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
              <span className="mr-4 select-none text-white/20">{i + 1}</span>
              <span>
                {line.parts.map((part, j) => (
                  <span key={j} className={part.c}>
                    {part.t}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>

        {/* Mini metrics strip */}
        <div className="border-t border-white/10 bg-white/[0.03] px-4 py-4 sm:px-5">
          <div className="mb-3 flex items-center justify-between text-[11px]">
            <span className="font-bold text-white/70">Weekly deploys</span>
            <span className="font-bold text-accent">+34%</span>
          </div>
          <div className="flex h-16 items-end gap-1.5">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-accent/80 transition-all duration-500"
                style={{ height: `${h}%`, opacity: 0.35 + (i / bars.length) * 0.65 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stack card — floats bottom left */}
      <div className="animate-float-tilt absolute -bottom-4 -left-2 z-20 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] sm:left-0 [animation-delay:1.2s]">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">Stack</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["Next.js", "React", "Node", "Postgres"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface-muted px-2.5 py-0.5 text-[10px] font-bold text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Uptime pill */}
      <div className="animate-float absolute -bottom-2 right-4 z-20 flex items-center gap-2 rounded-full border border-accent/30 bg-accent-subtle px-3 py-1.5 shadow-sm [animation-delay:0.3s]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="text-[11px] font-bold text-foreground">99.9% uptime</span>
      </div>
    </div>
  );
}
