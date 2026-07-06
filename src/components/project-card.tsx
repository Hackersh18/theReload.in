import Link from "next/link";
import type { Project } from "@/types";
import { FlowdeskProjectVisual } from "@/components/flowdesk-project-visual";
import { Icon } from "@/components/icons";
import { Tag } from "@/components/ui";
import { cn } from "@/lib/utils";

function projectHostname(project: Project) {
  if (project.url) {
    try {
      return new URL(project.url).hostname;
    } catch {
      return project.url;
    }
  }
  return `${project.slug}.app`;
}

function ProjectVisual({ project }: { project: Project }) {
  const hostname = projectHostname(project);

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden"
      style={{ backgroundColor: project.color }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/30" />

      <div className="relative flex h-full flex-col items-center justify-center p-5 text-center">
        <span className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {project.initials}
        </span>
        <span className="mt-2 max-w-full truncate px-2 text-[11px] font-medium text-white/70">
          {hostname}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
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
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-bento)] border border-border bg-surface hover-3d-lift hover:border-accent/35",
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
