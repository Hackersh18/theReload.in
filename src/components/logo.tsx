import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

/** SoftSole mark — four rounded squares in lime + purple. */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <rect x="2" y="2" width="13" height="13" rx="3" fill="#c6ff00" />
      <rect x="17" y="2" width="13" height="13" rx="3" fill="#6b4eff" />
      <rect x="2" y="17" width="13" height="13" rx="3" fill="#6b4eff" />
      <rect x="17" y="17" width="13" height="13" rx="3" fill="#c6ff00" />
    </svg>
  );
}

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  /** Light text on dark backgrounds (footer, dark sections). */
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md",
        className,
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      <LogoMark size={28} />
      <span
        className={cn(
          "text-lg font-bold tracking-tight",
          onDark ? "text-white" : "text-foreground",
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
