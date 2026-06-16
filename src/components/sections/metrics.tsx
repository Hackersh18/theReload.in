import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { metrics } from "@/data/content";

export function Metrics() {
  const headline = metrics[0];
  const secondary = metrics.slice(1, 3);

  return (
    <section className="section-dark relative">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal direction="left">
            <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-accent sm:text-5xl lg:text-6xl">
              Built to perform in production.
            </h2>
          </Reveal>

          <Reveal delay={120} direction="right">
            <div className="space-y-4">
              <p className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl">
                <CountUp value={headline.value} />
                <span className="text-accent">+</span>
              </p>
              <p className="text-lg font-bold text-accent">{headline.label}</p>
              <p className="max-w-sm text-sm leading-relaxed text-white/65">
                {secondary.map((m, i) => (
                  <span key={m.label}>
                    <CountUp value={m.value} duration={1200} /> {m.label}
                    {i < secondary.length - 1 ? " · " : ""}
                  </span>
                ))}
                . Real outcomes for teams who care about engineering quality.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
