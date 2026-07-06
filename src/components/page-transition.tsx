"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { lockPageScroll, unlockPageScroll } from "@/lib/scroll-lock";
import {
  playTpnWipeIn,
  playTpnWipeOut,
  TpnWipeRenderer,
  type WipeUniforms,
} from "@/lib/tpn-wipe";

type Phase = "idle" | "cover" | "reveal";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function pathOnly(href: string) {
  try {
    return new URL(href, window.location.origin).pathname;
  } catch {
    return href.split("#")[0]?.split("?")[0] ?? href;
  }
}

function fullPath(href: string) {
  try {
    const url = new URL(href, window.location.origin);
    return url.pathname + url.search + url.hash;
  } catch {
    return href;
  }
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");
  const [content, setContent] = useState(children);
  const childrenRef = useRef(children);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<TpnWipeRenderer | null>(null);
  const runningRef = useRef(false);
  const pendingHrefRef = useRef<string | null>(null);
  const awaitingRouteRef = useRef<string | null>(null);
  const isFirst = useRef(true);

  childrenRef.current = children;

  useLayoutEffect(() => {
    if (!runningRef.current && !awaitingRouteRef.current) {
      setContent(childrenRef.current);
    }
  }, [children]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || rendererRef.current) return;

    try {
      const renderer = new TpnWipeRenderer(canvas);
      renderer.resize();
      rendererRef.current = renderer;

      const onResize = () => renderer.resize();
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        rendererRef.current = null;
      };
    } catch {
      rendererRef.current = null;
    }
  }, []);

  const beginTransition = useRef(async (href: string) => {
    if (prefersReducedMotion()) {
      router.push(href);
      return;
    }

    const renderer = rendererRef.current;
    if (!renderer) {
      router.push(href);
      return;
    }

    if (runningRef.current) {
      pendingHrefRef.current = href;
      return;
    }

    runningRef.current = true;
    lockPageScroll();
    setPhase("cover");

    await playTpnWipeIn(renderer, (state: WipeUniforms) => renderer.draw(state));

    awaitingRouteRef.current = fullPath(href);
    router.push(href);
  });

  beginTransition.current = async (href: string) => {
    if (pathOnly(href) === pathname && !href.includes("#")) return;

    if (prefersReducedMotion()) {
      router.push(href);
      return;
    }

    const renderer = rendererRef.current;
    if (!renderer) {
      router.push(href);
      return;
    }

    if (runningRef.current) {
      pendingHrefRef.current = href;
      return;
    }

    runningRef.current = true;
    lockPageScroll();
    setPhase("cover");

    await playTpnWipeIn(renderer, (state: WipeUniforms) => renderer.draw(state));

    awaitingRouteRef.current = fullPath(href);
    router.push(href);
  };

  useEffect(() => {
    const expected = awaitingRouteRef.current;
    if (!expected || pathOnly(expected) !== pathname) return;

    const renderer = rendererRef.current;
    awaitingRouteRef.current = null;

    if (!renderer) {
      setContent(childrenRef.current);
      unlockPageScroll(true);
      runningRef.current = false;
      return;
    }

    setContent(childrenRef.current);

    void (async () => {
      setPhase("reveal");
      await playTpnWipeOut(renderer, (state) => renderer.draw(state));
      setPhase("idle");
      unlockPageScroll(true);
      runningRef.current = false;

      const queued = pendingHrefRef.current;
      if (queued) {
        pendingHrefRef.current = null;
        await beginTransition.current(queued);
      }
    })();
  }, [pathname]);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      const next = fullPath(href);
      if (pathOnly(next) === pathname && !url.hash) {
        event.preventDefault();
        return;
      }

      if (pathOnly(next) === pathname) return;

      event.preventDefault();
      void beginTransition.current(next);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  const animating = phase !== "idle";

  return (
    <>
      <canvas
        ref={canvasRef}
        className={
          animating
            ? "pointer-events-auto fixed inset-0 z-[55]"
            : "pointer-events-none fixed inset-0 z-[55]"
        }
        aria-hidden
      />
      <div className={animating ? "page-transition-content" : undefined}>{content}</div>
    </>
  );
}
