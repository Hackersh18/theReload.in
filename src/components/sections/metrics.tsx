import { AnimBars } from "@/components/anim-bars";
import { CountUp } from "@/components/count-up";
import { Reveal, RevealStagger } from "@/components/reveal";
import { metrics } from "@/data/content";

const statCards = [
  {
    value: metrics[0].value,
    suffix: "+",
    label: metrics[0].label,
    detail: "From MVPs to enterprise platforms",
    animate: true,
  },
  {
    value: metrics[1].value,
    suffix: "",
    label: metrics[1].label,
    detail: "Teams that come back for v2",
    animate: true,
  },
  {
    value: metrics[2].value,
    suffix: "",
    label: metrics[2].label,
    detail: "Remote-first, globally distributed",
    animate: true,
  },
  {
    value: "6–12",
    suffix: " wk",
    label: "Avg. delivery",
    detail: "Scoped sprints, predictable shipping",
    animate: false,
  },
] as const;

export function Metrics() {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[min(920px,92%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-accent/80">
            Proven results
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built to perform in production.
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" step={100}>
          {statCards.map((card) => (
            <div
              key={card.label}
              className="stat-card group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-4xl font-extrabold tracking-tight text-accent sm:text-5xl">
                  {card.animate ? (
                    <>
                      <CountUp value={card.value} />
                      {card.suffix && (
                        <span className="text-2xl text-white/80">{card.suffix}</span>
                      )}
                    </>
                  ) : (
                    <>
                      {card.value}
                      <span className="text-2xl text-white/80">{card.suffix}</span>
                    </>
                  )}
                </p>
                <AnimBars count={4} className="h-8 opacity-60" barClassName="bg-accent/60" />
              </div>
              <p className="mt-3 text-sm font-bold text-white">{card.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/55">{card.detail}</p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
