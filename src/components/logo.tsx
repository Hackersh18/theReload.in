import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function LogoMark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
      aria-hidden
    />
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
      <LogoMark size={28} className="logo-3d" />
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
