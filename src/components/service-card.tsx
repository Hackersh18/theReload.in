import Link from "next/link";
import type { Service } from "@/types";
import { SaasServiceVisual } from "@/components/saas-service-visual";
import { Icon } from "@/components/icons";
import { Tag } from "@/components/ui";
import { cn } from "@/lib/utils";

const visualThemes: Record<
  string,
  { mesh: string; glow: string; label: string }
> = {
  "full-stack-web-development": {
    mesh: "from-accent/25 via-transparent to-transparent",
    glow: "bg-accent/30",
    label: "App layer",
  },
  "ui-ux-product-design": {
    mesh: "from-purple/20 via-transparent to-accent/10",
    glow: "bg-purple/25",
    label: "Design system",
  },
  "saas-product-development": {
    mesh: "from-accent/30 via-purple/15 to-transparent",
    glow: "bg-accent/35",
    label: "SaaS core",
  },
  "technical-consulting-architecture": {
    mesh: "from-white/10 via-transparent to-accent/15",
    glow: "bg-white/10",
    label: "Architecture",
  },
  "api-design-integration": {
    mesh: "from-accent/20 via-transparent to-purple/20",
    glow: "bg-purple/20",
    label: "API layer",
  },
};

function ServiceVisual({ slug }: { slug: string }) {
  const theme = visualThemes[slug] ?? visualThemes["full-stack-web-development"];

  return (
    <div className="relative h-[140px] overflow-hidden rounded-2xl border border-white/10 bg-black/50">
      <div className={cn("absolute inset-0 bg-gradient-to-br", theme.mesh)} />
      <div
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl",
          theme.glow,
        )}
      />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.18]" />

      <div className="relative flex h-full flex-col justify-between p-4">
        <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
          {theme.label}
        </span>

        {slug === "full-stack-web-development" && (
          <div className="space-y-1.5 font-mono text-[10px] sm:text-[11px]">
            <p className="text-white/40">
              <span className="text-accent">const</span> app ={" "}
              <span className="text-white/80">createApp()</span>
            </p>
            <p className="text-white/40">
              <span className="text-purple">await</span> app.
              <span className="text-accent">deploy</span>()
            </p>
          </div>
        )}

        {slug === "ui-ux-product-design" && (
          <div className="grid grid-cols-3 gap-2">
            <div className="h-10 rounded-lg border border-dashed border-white/25 bg-white/5" />
            <div className="col-span-2 h-10 rounded-lg border border-white/20 bg-accent/15" />
            <div className="col-span-2 h-8 rounded-lg border border-white/15 bg-white/5" />
            <div className="h-8 rounded-lg border border-white/15 bg-white/5" />
          </div>
        )}

        {slug === "technical-consulting-architecture" && (
          <div className="flex items-center justify-center gap-3">
            {["Client", "API", "DB"].map((node, i) => (
              <div key={node} className="flex items-center gap-1">
                <div className="rounded-lg border border-white/20 bg-white/5 px-2 py-1.5 text-[9px] font-bold text-white/80">
                  {node}
                </div>
                {i < 2 && <span className="text-white/30">→</span>}
              </div>
            ))}
          </div>
        )}

        {slug === "api-design-integration" && (
          <div className="flex flex-wrap gap-1.5">
            {["GET /v1", "POST /auth", "webhooks", "GraphQL"].map((ep) => (
              <span
                key={ep}
                className="rounded-md border border-accent/30 bg-accent/10 px-2 py-1 text-[9px] font-bold text-accent"
              >
                {ep}
              </span>
            ))}
          </div>
        )}

        {slug === "saas-product-development" && (
          <div className="flex h-14 items-end gap-1.5">
            {[35, 55, 42, 72, 58, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-accent/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function ServiceCard({
  service,
  index = 0,
  highlight = false,
  variant = "compact",
  className,
}: {
  service: Service;
  index?: number;
  /** Animated spotlight treatment — same size as siblings, distinct motion. */
  highlight?: boolean;
  variant?: "compact" | "full";
  className?: string;
}) {
  const num = String(index + 1).padStart(2, "0");
  const isSaas = service.slug === "saas-product-development";
  const showSaasMotion = highlight && isSaas && variant === "compact";

  const inner = (
    <>
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-accent transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10",
              showSaasMotion && "saas-orb relative border-accent/30 bg-accent/10",
            )}
          >
            <Icon name={service.icon} size={22} />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
            {num}
          </span>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon name="arrowUpRight" size={16} />
        </span>
      </div>

      <div className="relative mt-5">
        <h3 className="text-xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-accent">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/65">
          {variant === "full" ? service.description : service.summary}
        </p>
      </div>

      <div className="relative mt-5">
        {showSaasMotion ? (
          <SaasServiceVisual />
        ) : (
          <ServiceVisual slug={service.slug} />
        )}
      </div>

      {variant === "full" && (
        <div className="relative mt-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
            How we approach it
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {service.process.map((step) => (
              <li
                key={step}
                className="flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-sm text-white/85"
              >
                <Icon
                  name="check"
                  size={15}
                  className="mt-0.5 shrink-0 text-accent"
                />
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="relative mt-5 flex flex-wrap gap-2">
        {(variant === "full" ? service.tags : service.tags.slice(0, 4)).map(
          (tag) => (
            <Tag key={tag} variant="lime">
              {tag}
            </Tag>
          ),
        )}
      </div>
    </>
  );

  const cardClass = cn(
    "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-bento)] border border-white/10 bg-[#161616] p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-accent/25 hover:shadow-[0_24px_56px_-22px_rgba(0,0,0,0.65)]",
    className,
  );

  const shellClass = cn(
    "relative rounded-[var(--radius-bento)]",
    showSaasMotion && "saas-card-shell",
  );

  if (variant === "compact") {
    return (
      <div className={shellClass}>
        <Link href="/services" className={cardClass}>
          {inner}
        </Link>
      </div>
    );
  }

  return (
    <div className={shellClass}>
      <article className={cardClass}>{inner}</article>
    </div>
  );
}
