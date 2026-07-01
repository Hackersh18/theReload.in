import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/bento";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { Icon } from "@/components/icons";
import { services, processSteps } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack web development, SaaS builds, and technical consulting — Reload helps teams ship production-ready software.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Expertise that ships to production"
        description="Full-stack web development, SaaS product builds, APIs, and technical consulting — scoped for real engineering outcomes."
      />

      <Section dark className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-px w-[min(900px,90%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
          <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-accent/6 blur-[110px]" />
        </div>

        <Reveal>
          <SectionHeader
            eyebrow={<Eyebrow variant="lime">Capabilities</Eyebrow>}
            title="Five ways we help teams ship"
            description="Pick a lane or combine them — every engagement ends in working software in production."
            inverted
            align="center"
            className="relative mx-auto"
          />
        </Reveal>

        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 90}>
              <ServiceCard
                service={service}
                variant="full"
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-4">
        <Reveal>
          <SectionHeader
            eyebrow={<Eyebrow>How we work</Eyebrow>}
            title="A process built on momentum"
            description="Five phases, each ending in something real you can see and use."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="relative mt-14">
          {/* Timeline connector — desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-11 hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block" />

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 90} as="li">
                <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[var(--radius-bento)] border border-border bg-surface p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.18)]">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/15" />

                  <div className="relative flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent-subtle text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon name={step.icon} size={20} />
                    </span>
                    <span className="text-2xl font-extrabold text-border-strong transition-colors group-hover:text-accent/50">
                      {step.step}
                    </span>
                  </div>
                  <div className="relative">
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
