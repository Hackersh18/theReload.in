import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Frosted horizontal band — blurs content as sections meet. */
export function GlassSeam({
  variant = "neutral",
  className,
}: {
  variant?: "neutral" | "to-dark" | "to-light";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "glass-seam pointer-events-none relative z-20",
        variant === "to-dark" && "glass-seam-to-dark",
        variant === "to-light" && "glass-seam-to-light",
        className,
      )}
    />
  );
}

export function SectionShell({
  children,
  id,
  tone = "default",
  sheet = false,
  className,
  innerClassName,
}: {
  children: ReactNode;
  id?: string;
  tone?: "default" | "glass" | "dark";
  sheet?: boolean;
  className?: string;
  innerClassName?: string;
}) {
  const isDark = tone === "dark";
  const isGlass = tone === "glass";

  if (tone === "default" && !sheet) {
    return (
      <section
        id={id}
        className={cn(
          "mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20",
          className,
        )}
      >
        {children}
      </section>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        "relative",
        sheet && "section-sheet",
        isDark && "section-dark",
        isGlass && "glass-section",
        className,
      )}
    >
      {sheet && <div className="glass-sheet-edge" aria-hidden />}
      <div
        className={cn(
          "relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
