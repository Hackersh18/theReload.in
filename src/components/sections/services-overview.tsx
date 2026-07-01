import Link from "next/link";
import { AnimBars } from "@/components/anim-bars";
import { Section, SectionHeader } from "@/components/bento";
import { ServiceCard } from "@/components/service-card";
import { Reveal, RevealStagger } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { Icon } from "@/components/icons";
import { services } from "@/data/services";

/** Home preview — equal cards; SaaS in the centre gets animated highlight. */
const preview = [services[0], services[2], services[1]];

const capabilities = [
  { icon: "code" as const, label: "Full-stack builds" },
  { icon: "layers" as const, label: "SaaS products" },
  { icon: "plug" as const, label: "API integrations" },
  { icon: "compass" as const, label: "Architecture" },
  { icon: "rocket" as const, label: "Fast launches" },
  { icon: "lifebuoy" as const, label: "Post-launch support" },
];

export function ServicesOverview() {
  return (
    <Section dark id="services" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[min(920px,92%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/45 to-transparent" />
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[110px]" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-purple/10 blur-[100px]" />
      </div>

      <div className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeader
              eyebrow={<Eyebrow variant="lime">Our Services</Eyebrow>}
              title="Everything you need to ship software"
              description="From architecture to launch — we cover the full stack so your team can move fast without cutting corners."
              inverted
              className="max-w-2xl"
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="flex gap-3 lg:pb-2">
              {[
                { value: "5", label: "Core services" },
                { value: "6–12", label: "Week avg. delivery" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="stat-card hover-3d-lift min-w-[120px] rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-2xl font-extrabold tracking-tight text-accent">
                      {stat.value}
                    </p>
                    <AnimBars count={3} className="h-5 w-6" barClassName="w-0.5 bg-accent/50" />
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-white/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
            {preview.map((service, i) => (
              <Reveal key={service.slug} delay={i * 100} className="min-h-0">
                <ServiceCard
                  service={service}
                  variant="compact"
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>

        <Reveal delay={280}>
          <RevealStagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" step={70}>
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="stat-card flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-accent/30 hover:bg-accent/5"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-accent">
                  <Icon name={cap.icon} size={17} />
                </span>
                <span className="text-sm font-bold text-white/80">{cap.label}</span>
              </div>
            ))}
          </RevealStagger>
        </Reveal>

        <Reveal delay={380}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="max-w-md text-center text-sm text-white/55 sm:text-left">
              Need a custom engagement? We combine services into a single roadmap —
              discovery to production.
            </p>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-accent bg-accent px-7 py-3 text-sm font-bold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              Explore all services
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
