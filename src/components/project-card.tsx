import Link from "next/link";
import type { Project } from "@/types";
import { FlowdeskProjectVisual } from "@/components/flowdesk-project-visual";
import { Icon } from "@/components/icons";
import { Tag } from "@/components/ui";
import { cn } from "@/lib/utils";

function ProjectVisual({ project }: { project: Project }) {
  const tech = project.caseStudy.tech.slice(0, 3);

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden"
      style={{ backgroundColor: project.color }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 78% 18%, rgba(255,255,255,0.32), transparent 42%), radial-gradient(circle at 12% 92%, rgba(0,0,0,0.28), transparent 48%), linear-gradient(160deg, rgba(0,0,0,0.08), rgba(0,0,0,0.35))`,
        }}
      />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.12]" />

      <div className="absolute inset-x-4 top-4 overflow-hidden rounded-xl border border-white/20 bg-black/25 shadow-lg backdrop-blur-sm sm:inset-x-5 sm:top-5">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="ml-2 text-[9px] font-medium text-white/50">
            {project.slug}.app
          </span>
        </div>
        <div className="min-h-[88px] p-3 sm:p-4">
          <span className="text-lg font-extrabold text-white/90 sm:text-xl">
            {project.initials}
          </span>
          <div className="mt-3 h-2 w-2/3 rounded-full bg-white/25" />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md">
          <Icon name="sparkles" size={12} className="text-accent" />
          {project.caseStudy.results[0]?.value}{" "}
          <span className="font-medium text-white/75">
            {project.caseStudy.results[0]?.label}
          </span>
        </span>
      </div>

      <div className="absolute right-4 top-4 hidden flex-wrap justify-end gap-1 sm:flex sm:max-w-[45%]">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/20 bg-black/30 px-2 py-0.5 text-[9px] font-bold text-white/90 backdrop-blur-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/30">
        <span className="flex translate-y-3 scale-95 items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
          View case study
          <Icon name="arrowUpRight" size={15} />
        </span>
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  className,
  highlight = false,
}: {
  project: Project;
  className?: string;
  /** Animated spotlight — same size as siblings, distinct motion (home Flowdesk). */
  highlight?: boolean;
}) {
  const isFlowdesk = project.slug === "flowdesk";
  const showFlowdeskMotion = highlight && isFlowdesk;

  const card = (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-bento)] border border-border bg-surface transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_28px_64px_-24px_rgba(0,0,0,0.28)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/15" />

      {showFlowdeskMotion ? (
        <FlowdeskProjectVisual />
      ) : (
        <ProjectVisual project={project} />
      )}

      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
              {project.caseStudy.duration} · {project.caseStudy.role}
            </p>
            <h3 className="mt-1 text-lg font-extrabold tracking-tight text-foreground transition-colors group-hover:text-accent">
              {project.name}
            </h3>
          </div>
          <Tag variant="lime">{project.category}</Tag>
        </div>

        <p className="mt-2 text-sm text-muted">{project.tagline}</p>

        <p className="mt-4 flex items-center gap-1.5 text-sm font-bold text-accent">
          <Icon name="check" size={15} />
          {project.outcome}
        </p>
      </div>
    </Link>
  );

  if (showFlowdeskMotion) {
    return (
      <div className="flowdesk-card-shell relative rounded-[var(--radius-bento)]">
        {card}
      </div>
    );
  }

  return card;
}
