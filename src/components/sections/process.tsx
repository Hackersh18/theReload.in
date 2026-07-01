import { Section, SectionHeader } from "@/components/bento";
import { Reveal, RevealStagger } from "@/components/reveal";
import { CalButton, Eyebrow } from "@/components/ui";

const steps = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "Free 30 minutes. We map goals, constraints, and what success looks like for your product.",
  },
  {
    step: "02",
    title: "Scope & proposal",
    description:
      "A fixed-range estimate, technical plan, and timeline — no vague ballparks.",
  },
  {
    step: "03",
    title: "Design & build",
    description:
      "Weekly demos, async updates, and production-quality code from sprint one.",
  },
  {
    step: "04",
    title: "Launch & handoff",
    description:
      "Deploy, docs, and knowledge transfer so your team owns the codebase.",
  },
  {
    step: "05",
    title: "Iterate & scale",
    description:
      "Optional retainer for roadmap work, performance, and new features.",
  },
];

export function Process() {
  return (
    <Section>
      <Reveal>
        <SectionHeader
          eyebrow={<Eyebrow>How we work</Eyebrow>}
          title="From first call to production"
          description="No mystery and no long sales cycle. Five clear steps from discovery to a product running in the wild."
          align="center"
          className="mx-auto"
        />
      </Reveal>

      <RevealStagger className="mt-12 grid gap-4 lg:grid-cols-5" step={90}>
        {steps.map((item, i) => (
          <div
            key={item.step}
            className="stat-card relative rounded-2xl border border-border bg-surface p-5"
          >
            <div className="mb-4 flex gap-1">
              {steps.map((_, barIndex) => (
                <span
                  key={barIndex}
                  className="bar-travel h-1 flex-1 rounded-full bg-border"
                  style={{ animationDelay: `${barIndex * 0.4 + i * 0.08}s` }}
                />
              ))}
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
              Step {item.step}
            </p>
            <h3 className="mt-2 text-base font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </div>
        ))}
      </RevealStagger>

      <Reveal delay={200} className="mt-10 flex justify-center">
        <CalButton size="lg" label="Book a Discovery Call" />
      </Reveal>
    </Section>
  );
}
