import { Reveal } from "@/components/reveal";
import { clientLogos } from "@/data/content";

export function SocialProof() {
  const loop = [...clientLogos, ...clientLogos];
  const rowA = loop;
  const rowB = [...loop].reverse();

  return (
    <section className="relative z-10 px-3 sm:px-5">
      <div className="glass-section mx-auto max-w-6xl overflow-hidden rounded-2xl px-5 py-8 sm:rounded-[var(--radius-bento)] sm:px-6">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
            Trusted by product teams shipping real software
          </p>
        </Reveal>

        <div className="mt-6 space-y-4">
          <div className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
            <div className="flex w-max animate-marquee-left items-center gap-12">
              {rowA.map((logo, i) => (
                <span
                  key={`a-${logo.name}-${i}`}
                  className="text-xl font-bold tracking-tight text-muted/70 transition-colors duration-300 hover:text-foreground"
                  aria-hidden={i >= clientLogos.length}
                >
                  {logo.name}
                </span>
              ))}
            </div>
          </div>

          <div className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
            <div className="flex w-max animate-marquee-right items-center gap-12">
              {rowB.map((logo, i) => (
                <span
                  key={`b-${logo.name}-${i}`}
                  className="text-lg font-bold tracking-tight text-muted/50 transition-colors duration-300 hover:text-foreground"
                  aria-hidden={i >= clientLogos.length}
                >
                  {logo.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
