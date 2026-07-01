"use client";

import {
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export function Card3D({
  children,
  className,
  innerClassName,
  intensity = 10,
  glare = true,
  float = false,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  intensity?: number;
  glare?: boolean;
  float?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    el.style.setProperty("--rx", `${-y * intensity}deg`);
    el.style.setProperty("--ry", `${x * intensity}deg`);
    el.style.setProperty("--tz", "12px");

    if (glare) {
      el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
      el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
    }
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;

    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--tz", "0px");
  }

  return (
    <div
      ref={ref}
      className={cn("card-3d-scene", float && "card-3d-float", className)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className={cn("card-3d-inner", innerClassName)}>{children}</div>
      {glare && <div className="card-3d-glare" aria-hidden />}
    </div>
  );
}
