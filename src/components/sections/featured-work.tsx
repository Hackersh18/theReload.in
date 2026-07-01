import { CountUp } from "@/components/count-up";
import { SectionHeader } from "@/components/bento";
import { ProjectCard } from "@/components/project-card";
import { Reveal, RevealStagger } from "@/components/reveal";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { Icon } from "@/components/icons";
import { featuredProjects } from "@/data/projects";

/** Equal cards — Flowdesk centred with animated highlight. */
const preview = [
  featuredProjects[1],
  featuredProjects[0],
  featuredProjects[2],
];

export function FeaturedWork() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-mesh absolute inset-0 opacity-50" />
        <div className="absolute -right-24 top-20 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeader
              eyebrow={<Eyebrow>Recent work</Eyebrow>}
              title="Products we've shipped"
              description="Real client builds — SaaS dashboards, commerce platforms, and internal tools with measurable outcomes."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:pb-1">
              <div className="stat-card flex items-center gap-4 rounded-2xl border border-border bg-surface px-4 py-3">
                <div>
                  <p className="text-2xl font-extrabold tracking-tight text-foreground">
                    <CountUp value={`${featuredProjects.length}`} />+
                  </p>
                  <p className="text-xs font-medium text-muted">Featured builds</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <p className="text-2xl font-extrabold tracking-tight text-foreground">
                    8 wk
                  </p>
                  <p className="text-xs font-medium text-muted">Avg. MVP timeline</p>
                </div>
              </div>
              <ButtonLink href="/work" variant="outline" size="md">
                View all work
                <Icon name="arrowRight" size={16} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {preview.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100}>
              <ProjectCard
                project={project}
                highlight={project.slug === "flowdesk"}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <RevealStagger
            className="mt-8 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3"
            step={60}
          >
            {["SaaS", "Web Apps", "E-commerce", "Internal tools", "API platforms"].map(
              (cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-2 text-xs font-bold text-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent anim-soft-pulse" />
                  {cat}
                </span>
              ),
            )}
          </RevealStagger>
        </Reveal>
      </div>
    </section>
  );
}
