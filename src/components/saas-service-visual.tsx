"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const bars = [38, 52, 45, 68, 58, 82, 74, 92];

export function SaasServiceVisual({ className }: { className?: string }) {
  const [mrr, setMrr] = useState(24);

  useEffect(() => {
    const id = window.setInterval(() => {
      setMrr((v) => (v >= 31 ? 24 : v + 1));
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className={cn(
        "relative h-[140px] overflow-hidden rounded-2xl border border-white/10 bg-black/55",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/25 via-purple/10 to-transparent" />
      <div className="saas-orb pointer-events-none absolute -left-8 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-accent/25 blur-2xl" />
      <div className="saas-orb-delayed pointer-events-none absolute -right-6 -top-4 h-24 w-24 rounded-full bg-purple/20 blur-2xl" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="saas-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />

      <div className="relative flex h-full flex-col justify-between p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
            SaaS core
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[9px] font-bold text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Live
          </span>
        </div>

        <div>
          <div className="flex h-14 items-end gap-1">
            {bars.map((h, i) => (
              <div
                key={i}
                className="saas-bar flex-1 origin-bottom rounded-t-sm bg-accent/85"
                style={
                  {
                    height: `${h}%`,
                    "--saas-delay": `${i * 0.15}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-[10px] font-bold tabular-nums text-accent transition-all duration-500">
              MRR ${mrr}k
              <span className="ml-1 text-white/50">+28% QoQ</span>
            </p>
            <div className="flex gap-1">
              {["Auth", "Billing", "Tenancy"].map((pill, i) => (
                <span
                  key={pill}
                  className="saas-pill rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-[8px] font-bold text-white/70"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
