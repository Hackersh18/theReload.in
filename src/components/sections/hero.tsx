import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { TextReveal } from "@/components/text-reveal";
import { ButtonLink, CalButton } from "@/components/ui";
import { Icon } from "@/components/icons";
import { metrics } from "@/data/content";
import { siteConfig } from "@/data/site";
import { HeroVisual } from "@/components/sections/hero-visual";

const techStack = ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL"];

const heroMetrics = metrics.slice(0, 3);

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-nav sm:pb-24 lg:pb-28">
      {/* Background layers */}
      <div className="hero-mesh pointer-events-none absolute inset-0 -z-10" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.22] animate-hero-glow" />
      <div className="hero-3d-plane pointer-events-none absolute inset-x-0 -z-10 hidden sm:block" />
      <div
        className="hero-3d-cube pointer-events-none absolute -z-10 hidden h-16 w-16 lg:block"
        style={{ left: "8%", top: "22%", animationDelay: "0s" }}
        aria-hidden
      />
      <div
        className="hero-3d-cube pointer-events-none absolute -z-10 hidden h-12 w-12 opacity-70 lg:block"
        style={{ right: "12%", top: "30%", animationDelay: "-4s" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-64 w-64 rounded-full bg-purple/10 blur-[90px]" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">
          {/* Copy column */}
          <div className="text-center lg:text-left">
            <Reveal immediate delay={0}>
              <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-bold text-foreground shadow-sm backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Available for new projects
                </span>
              </div>
            </Reveal>

            <Reveal immediate delay={80}>
              <TextReveal
                as="h1"
                immediate
                step={100}
                className="mt-6 text-[2.4rem] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem] xl:text-6xl"
                lines={[
                  <span key="hero-line-1">
                    We build{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10">production-ready</span>
                      <span
                        className="absolute -bottom-1 left-0 right-0 z-0 h-[0.38em] bg-accent/55"
                        aria-hidden
                      />
                    </span>
                  </span>,
                  "software for ambitious teams",
                ]}
              />
            </Reveal>

            <Reveal immediate delay={160}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
                {siteConfig.tagline} {siteConfig.name} designs, engineers, and ships web apps,
                SaaS products, and internal tools — from MVP to scale.
              </p>
            </Reveal>

            <Reveal immediate delay={240}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <CalButton size="lg" label="Book a Discovery Call" />
                <ButtonLink href="/work" variant="secondary" size="lg">
                  See Our Work
                  <Icon name="arrowRight" size={16} />
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal immediate delay={320}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface/70 px-3 py-1 text-[11px] font-bold text-muted backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Visual column */}
          <Reveal immediate delay={180} direction="right" className="relative lg:pt-4">
            <HeroVisual />
          </Reveal>
        </div>

        {/* Bottom stats strip */}
        <Reveal delay={400}>
          <div className="glass-section depth-elevated border-beam mt-14 grid grid-cols-3 gap-4 rounded-[var(--radius-bento)] p-5 sm:gap-6 sm:p-6 lg:mt-16">
            {heroMetrics.map((m, i) => (
              <div key={m.label} className="stat-card text-center lg:text-left">
                <p className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  <CountUp value={m.value} duration={1200 + i * 200} />
                  {m.label === "Products shipped" && (
                    <span className="text-accent">+</span>
                  )}
                </p>
                <p className="mt-1 text-xs font-medium text-muted sm:text-sm">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="glass-fade-bottom pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 sm:h-32" />
    </section>
  );
}
