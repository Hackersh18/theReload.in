import { cn } from "@/lib/utils";

/** Pulsing bar visualizer — decorative motion accent. */
export function AnimBars({
  count = 6,
  className,
  barClassName,
}: {
  count?: number;
  className?: string;
  barClassName?: string;
}) {
  return (
    <div className={cn("flex items-end gap-1", className)} aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={cn(
            "anim-bar w-1 rounded-sm bg-accent/80",
            barClassName,
          )}
          style={{
            height: `${28 + ((i * 17) % 40)}%`,
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}
