import { Reveal } from "@/components/reveal";
import { clientLogos } from "@/data/content";

export function SocialProof() {
  const loop = [...clientLogos, ...clientLogos];

  return (
    <section className="relative z-10 px-3 sm:px-5">
      <div className="glass-section mx-auto max-w-6xl overflow-hidden rounded-2xl px-5 py-8 sm:rounded-[var(--radius-bento)] sm:px-6">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
            Trusted by product teams shipping real software
          </p>
        </Reveal>
        <div className="group/marquee relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12">
            {loop.map((logo, i) => (
              <span
                key={`${logo.name}-${i}`}
                className="text-xl font-bold tracking-tight text-muted/70 transition-colors hover:text-foreground"
                aria-hidden={i >= clientLogos.length}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
