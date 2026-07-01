import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  dark = false,
  glass = false,
  sheet = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  glass?: boolean;
  sheet?: boolean;
}) {
  const shell = cn(
    "relative",
    sheet && "section-sheet",
    dark && "section-dark",
    glass && "glass-section",
    className,
  );

  if (dark || glass || sheet) {
    return (
      <section id={id} className={shell}>
        {sheet && <div className="glass-sheet-edge" aria-hidden />}
        <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          {children}
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20", className)}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  inverted = false,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow}
      <h2
        className={cn(
          "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl",
          inverted ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed",
            inverted ? "text-white/70" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className,
  as: Tag = "div",
  interactive = false,
  variant = "light",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  interactive?: boolean;
  variant?: "light" | "dark" | "featured";
}) {
  const variants = {
    light: "border-border bg-surface text-foreground",
    dark: "border-white/10 bg-[#1c1c1c] text-white",
    featured:
      "border-accent/40 bg-[#141414] text-white shadow-[inset_0_0_0_1px_rgba(198,255,0,0.12)]",
  };

  return (
    <Tag
      className={cn(
        "relative flex flex-col overflow-hidden rounded-[var(--radius-bento)] border p-6",
        variants[variant],
        interactive &&
          "group hover-3d-lift hover:shadow-[0_24px_56px_-18px_rgba(0,0,0,0.42)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
