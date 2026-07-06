import Link from "next/link";
import type { Service } from "@/types";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  variant = "compact",
  className,
}: {
  service: Service;
  variant?: "compact" | "full";
  className?: string;
}) {
  const tags =
    variant === "full" ? service.tags : service.tags.slice(0, 3);

  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-accent transition-colors group-hover:border-accent/35 group-hover:bg-accent/10">
          <Icon name={service.icon} size={20} />
        </span>
        <Icon
          name="arrowUpRight"
          size={18}
          className="shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>

      <div className="mt-4 flex-1">
        <h3 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-accent sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {variant === "full" ? service.description : service.summary}
        </p>

        {variant === "full" && (
          <ul className="mt-4 space-y-1.5 border-t border-white/8 pt-4">
            {service.offerings.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-white/70"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        )}

        {variant === "compact" && (
          <ul className="mt-3 space-y-1">
            {service.offerings.slice(0, 3).map((item) => (
              <li key={item} className="text-xs text-white/50">
                · {item}
              </li>
            ))}
          </ul>
        )}

        {variant === "full" && (
          <ul className="mt-4 space-y-2 border-t border-white/8 pt-4">
            {service.process.map((step) => (
              <li
                key={step}
                className="flex items-start gap-2 text-sm text-white/75"
              >
                <Icon
                  name="check"
                  size={14}
                  className="mt-0.5 shrink-0 text-accent"
                />
                {step}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/8 pt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-white/55"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const cardClass = cn(
    "group stat-card relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:z-10 hover:border-accent/30 hover:bg-white/[0.05] sm:p-6",
    className,
  );

  if (variant === "compact") {
    return (
      <Link href="/services" className={cardClass}>
        {body}
      </Link>
    );
  }

  return <article className={cardClass}>{body}</article>;
}
