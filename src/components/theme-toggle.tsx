"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — the resolved theme is only known on the client.
  // This one-shot mount flag is the documented next-themes pattern.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={
        mounted
          ? isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle color theme"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "glass-icon-btn inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-all duration-300 hover:scale-105",
        className,
      )}
    >
      {mounted ? (
        <Icon name={isDark ? "sun" : "moon"} size={18} />
      ) : (
        <span className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
