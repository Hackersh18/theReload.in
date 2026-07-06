"use client";

import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";
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
 * Respects prefers-reduced-motion (handled in styles/performance.css).
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

interface RevealStaggerProps {
  children: ReactNode;
  className?: string;
  /** Base delay before the first child animates (ms). */
  delay?: number;
  /** Per-child stagger step (ms). */
  step?: number;
  as?: ElementType;
  immediate?: boolean;
}

/**
 * Staggers children into view — each child fades + lifts with an incremental delay.
 * Nexus-style reveal-stagger pattern.
 */
export function RevealStagger({
  children,
  className,
  delay = 0,
  step = 80,
  as: Tag = "div",
  immediate = false,
}: RevealStaggerProps) {
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  const staggered = Children.toArray(children).map((child, index) => {
    const key =
      isValidElement(child) && child.key != null
        ? String(child.key)
        : `reveal-stagger-${index}`;

    const style = {
      ...(isValidElement<{ style?: CSSProperties }>(child)
        ? child.props.style
        : undefined),
      "--stagger-i": index,
      "--stagger-base": `${delay}ms`,
      "--stagger-step": `${step}ms`,
    } as CSSProperties;

    if (!isValidElement<{ style?: CSSProperties }>(child)) {
      if (child == null) return null;

      return (
        <span key={key} style={style}>
          {child}
        </span>
      );
    }

    return (
      <Fragment key={key}>
        {cloneElement(child, { style })}
      </Fragment>
    );
  });

  return (
    <Tag
      ref={ref}
      className={cn("reveal-stagger", visible && "is-visible", className)}
    >
      {staggered}
    </Tag>
  );
}
