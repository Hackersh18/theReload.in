import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/bento";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/sections/cta";
import { Tag } from "@/components/ui";
import { Icon } from "@/components/icons";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Case study not found" };

  return {
    title: `${project.name} — Case Study`,
    description: `${project.tagline}. ${project.outcome}.`,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} — Case Study`,
      description: `${project.tagline}. ${project.outcome}.`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { caseStudy: cs } = project;
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Section className="pb-0 pt-page-hero">
        <Reveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <Icon name="arrowRight" size={15} className="rotate-180" />
            All work
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Tag>{project.category}</Tag>
            <span className="text-sm text-muted">{project.year}</span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">{project.tagline}</p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-accent-hover"
            >
              Visit live site
              <Icon name="arrowUpRight" size={15} />
            </a>
          )}
        </Reveal>

        {/* Banner */}
        <Reveal delay={100}>
          <div
            className="relative mt-8 aspect-[21/9] w-full overflow-hidden rounded-[var(--radius-bento)]"
            style={{ backgroundColor: project.color }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.28), transparent 45%), radial-gradient(circle at 15% 90%, rgba(0,0,0,0.22), transparent 50%)",
              }}
            />
            <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full border border-white/25" />
            <div className="absolute bottom-10 left-10 h-24 w-24 rotate-12 rounded-2xl border border-white/30" />
            <span className="absolute left-8 top-7 font-display text-7xl font-medium text-white/90">
              {project.initials}
            </span>
          </div>
        </Reveal>
      </Section>

      <Section>
        {/* Meta + results */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <dl className="grid grid-cols-2 gap-6 rounded-[var(--radius-bento)] border border-border bg-surface p-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Timeline
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  {cs.duration}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Our role
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  {cs.role}
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Services
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {cs.services.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Tech
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {cs.tech.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid h-full grid-cols-3 gap-4">
              {cs.results.map((r) => (
                <div
                  key={r.label}
                  className="flex flex-col justify-center rounded-[var(--radius-bento)] border border-border bg-surface p-5"
                >
                  <span className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    {r.value}
                  </span>
                  <span className="mt-1 text-xs leading-snug text-muted">
                    {r.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Challenge + approach */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
              The challenge
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {cs.challenge}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
              What we did
            </h2>
            <ul className="mt-4 space-y-4">
              {cs.approach.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-subtle text-xs font-semibold text-accent">
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-muted">{step}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Quote */}
        {cs.quote && (
          <Reveal className="mt-12">
            <figure className="rounded-[var(--radius-bento)] border border-border bg-surface-muted p-8 sm:p-10">
              <Icon name="quote" size={28} className="text-accent" />
              <blockquote className="mt-4 font-display text-xl leading-relaxed tracking-tight text-foreground sm:text-2xl">
                &ldquo;{cs.quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                <span className="font-medium text-foreground">
                  {cs.quote.name}
                </span>{" "}
                — {cs.quote.role}
              </figcaption>
            </figure>
          </Reveal>
        )}
      </Section>

      {/* More work */}
      <Section className="pt-0">
        <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
          More work
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group flex items-center gap-4 rounded-[var(--radius-bento)] border border-border bg-surface p-4 transition-colors hover:border-border-strong"
            >
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-lg font-medium text-white"
                style={{ backgroundColor: p.color }}
              >
                {p.initials}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-medium text-foreground">
                  {p.name}
                </span>
                <span className="block truncate text-sm text-muted">
                  {p.category}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
