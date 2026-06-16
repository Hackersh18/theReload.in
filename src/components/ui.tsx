import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { siteConfig } from "@/data/site";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "secondary" | "ghost" | "purple" | "footer";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-hover",
  outline:
    "border-2 border-accent bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
  secondary:
    "bg-surface text-foreground border border-border-strong hover:bg-surface-muted",
  ghost: "text-foreground hover:bg-surface-muted",
  purple: "bg-purple text-purple-foreground hover:bg-purple-hover",
  footer: "bg-accent text-accent-foreground hover:bg-accent-hover",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function buttonClasses(
  variant: Variant = "outline",
  size: Size = "md",
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

export function ButtonLink({
  href,
  variant = "outline",
  size = "md",
  className,
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}

export function CalButton({
  variant = "outline",
  size = "md",
  className,
  label = "Book a Call",
  withIcon = true,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
  withIcon?: boolean;
}) {
  return (
    <a
      href={siteConfig.calLink}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses(variant, size, className)}
    >
      {label}
      {withIcon && <Icon name="arrowRight" size={16} />}
    </a>
  );
}

export function Tag({
  children,
  className,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "purple" | "lime";
}) {
  const styles = {
    default: "border-border bg-surface-muted text-muted",
    purple: "border-purple/30 bg-purple-subtle text-purple",
    lime: "border-accent/40 bg-accent-subtle text-foreground",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Eyebrow({
  children,
  variant = "purple",
}: {
  children: ReactNode;
  variant?: "purple" | "lime";
}) {
  return (
    <span
      className={cn(
        "text-xs font-bold uppercase tracking-[0.2em]",
        variant === "purple" ? "text-purple" : "text-accent",
      )}
    >
      {children}
    </span>
  );
}

/** Circular arrow button used on service cards. */
export function CircleArrow({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "lime" | "purple";
}) {
  const styles = {
    dark: "bg-foreground text-background",
    lime: "bg-accent text-accent-foreground",
    purple: "bg-purple text-purple-foreground",
  };
  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45",
        styles[variant],
        className,
      )}
    >
      <Icon name="arrowUpRight" size={18} />
    </span>
  );
}
