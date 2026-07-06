"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import "@/styles/flowdesk.css";
import { cn } from "@/lib/utils";

const activationBars = [32, 48, 41, 62, 55, 78, 68, 88, 82, 95];

export function FlowdeskProjectVisual({ className }: { className?: string }) {
  const [activation, setActivation] = useState(1.0);
  const [steps, setSteps] = useState(11);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActivation((v) => {
        const next = Math.round((v + 0.2) * 10) / 10;
        return next > 2.4 ? 1.0 : next;
      });
      setSteps((v) => (v <= 4 ? 11 : v - 1));
    }, 1100);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden",
        className,
      )}
      style={{ backgroundColor: "#4f46e5" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 78% 18%, rgba(255,255,255,0.28), transparent 42%), radial-gradient(circle at 12% 88%, rgba(0,0,0,0.3), transparent 48%), linear-gradient(155deg, rgba(198,255,0,0.12), rgba(0,0,0,0.35))",
        }}
      />
      <div className="flowdesk-orb pointer-events-none absolute -left-10 top-1/3 h-32 w-32 rounded-full bg-accent/30 blur-3xl" />
      <div className="flowdesk-orb-alt pointer-events-none absolute -right-8 -top-6 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.14]" />
      <div className="flowdesk-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/90 to-transparent" />

      {/* Dashboard window */}
      <div className="absolute inset-x-4 top-4 overflow-hidden rounded-xl border border-white/25 bg-black/30 shadow-lg backdrop-blur-sm sm:inset-x-5 sm:top-5">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/35" />
            <span className="h-2 w-2 rounded-full bg-white/35" />
            <span className="h-2 w-2 rounded-full bg-white/35" />
            <span className="ml-1 text-[9px] font-medium text-white/55">
              flowdesk.app
            </span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-accent/35 bg-accent/15 px-2 py-0.5 text-[8px] font-bold text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Live
          </span>
        </div>

        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-extrabold text-white/95 sm:text-2xl">
              Fd
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white">
              2025
            </span>
          </div>

          <div className="mt-3 flex h-11 items-end gap-1">
            {activationBars.map((h, i) => (
              <div
                key={i}
                className="flowdesk-bar flex-1 origin-bottom rounded-t-sm bg-white/75"
                style={
                  {
                    height: `${h}%`,
                    "--flowdesk-delay": `${i * 0.12}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 11 }, (_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    i >= 11 - 4
                      ? "flowdesk-step bg-accent shadow-[0_0_6px_rgba(198,255,0,0.8)]"
                      : "bg-white/20",
                  )}
                  style={{ animationDelay: `${i * 0.05}s` }}
                />
              ))}
            </div>
            <span className="text-[9px] font-bold tabular-nums text-white/80">
              <span className="text-accent">{steps}</span>
              <span className="text-white/40"> → 4 steps</span>
            </span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-2 sm:bottom-5 sm:left-5 sm:right-5">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/40 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md">
          <Icon name="sparkles" size={12} className="text-accent" />
          <span className="flowdesk-metric-pulse tabular-nums">60%</span>
          <span className="font-medium text-white/75">faster onboarding</span>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-accent/35 bg-accent/15 px-2.5 py-1 text-[10px] font-bold text-accent backdrop-blur-sm">
          {activation.toFixed(1)}× activation
        </span>
      </div>

      <div className="absolute right-4 top-4 hidden flex-wrap justify-end gap-1 sm:flex sm:max-w-[42%]">
        {["Next.js", "TypeScript", "tRPC"].map((t, i) => (
          <span
            key={t}
            className="flowdesk-pill rounded-md border border-white/20 bg-black/30 px-2 py-0.5 text-[9px] font-bold text-white/90 backdrop-blur-sm"
            style={{ animationDelay: `${i * 0.35}s` }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
