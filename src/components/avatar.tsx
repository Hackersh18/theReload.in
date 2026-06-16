import { cn } from "@/lib/utils";

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const palette = ["#6b4eff", "#c6ff00", "#5a3de8", "#b8ef00", "#7c5cff"];

/** Generated initial avatar — no stock photos. */
export function Avatar({
  name,
  size = 40,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const color =
    palette[name.charCodeAt(0) % palette.length] ?? palette[0];
  return (
    <span
      aria-hidden
      className={cn(
        "inline-grid shrink-0 place-items-center rounded-full font-display font-medium text-white",
        className,
      )}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        fontSize: size * 0.4,
      }}
    >
      {initialsOf(name)}
    </span>
  );
}
