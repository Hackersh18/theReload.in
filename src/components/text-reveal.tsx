"use client";

import type { ReactNode } from "react";
import { RevealStagger } from "@/components/reveal";
import { cn } from "@/lib/utils";

/** Line-by-line headline reveal — Nexus-style staggered entrance. */
export function TextReveal({
  lines,
  className,
  lineClassName,
  immediate = false,
  step = 90,
  as = "span",
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  immediate?: boolean;
  step?: number;
  as?: "span" | "div" | "h1" | "h2";
}) {
  return (
    <RevealStagger
      as={as}
      className={className}
      immediate={immediate}
      step={step}
    >
      {lines.map((line, i) => (
        <span key={`line-${i}`} className={cn("block", lineClassName)}>
          {line}
        </span>
      ))}
    </RevealStagger>
  );
}
