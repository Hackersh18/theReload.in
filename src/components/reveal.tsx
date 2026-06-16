"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms, applied via inline transition-delay. */
  delay?: number;
  as?: ElementType;
  /** Play on mount (above-the-fold hero content) instead of waiting for scroll. */
  immediate?: boolean;
  direction?: RevealDirection;
}

const directionClass: Record<RevealDirection, string> = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
};

/**
 * Fades + lifts its children into view once on scroll using IntersectionObserver.
 * Respects prefers-reduced-motion (handled in globals.css).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  immediate = false,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <Tag
      ref={ref}
      className={cn(
        "reveal",
        directionClass[direction],
        visible && "is-visible",
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
