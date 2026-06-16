import { Section } from "@/components/bento";
import { Reveal } from "@/components/reveal";
import { CalButton } from "@/components/ui";
import { siteConfig } from "@/data/site";

export function CtaSection({
  title = "Ready to build your next product?",
  description = "Tell us what you're shipping. We'll scope it honestly, propose a technical plan, and get you to production — book a free discovery call.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section glass className="pb-20 sm:pb-24">
      <Reveal>
        <div className="glass-section relative overflow-hidden rounded-[var(--radius-section)] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-foreground/92 backdrop-blur-2xl" />
          <div className="bg-watermark pointer-events-none absolute inset-0 opacity-25" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <h2 className="text-3xl font-extrabold tracking-tight text-accent sm:text-5xl">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-background/70 sm:text-lg">
              {description}
            </p>
            <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
              <CalButton size="lg" variant="primary" label="Book a Discovery Call" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-semibold text-background/60 transition-colors hover:text-accent"
              >
                or email {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
