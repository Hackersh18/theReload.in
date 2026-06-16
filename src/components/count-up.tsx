"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function parseMetricValue(value: string) {
  const numeric = Number.parseFloat(value.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(numeric)) return null;

  return {
    numeric,
    prefix: value.match(/^[^\d]*/)?.[0] ?? "",
    suffix: value.match(/[^\d.]*$/)?.[0] ?? "",
    isInteger: !value.includes("."),
  };
}

export function CountUp({
  value,
  duration = 1400,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const parsed = useMemo(() => parseMetricValue(value), [value]);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!parsed) return;

    const node = ref.current;
    if (!node) return;

    const { numeric, prefix, suffix, isInteger } = parsed;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = easeOutCubic(progress);
          const current = numeric * eased;
          const formatted = isInteger
            ? Math.round(current).toString()
            : current.toFixed(1);
          setDisplay(`${prefix}${formatted}${suffix}`);

          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, parsed]);

  if (!parsed) {
    return <span className={cn("tabular-nums", className)}>{value}</span>;
  }

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  );
}
