import { BentoCard, BentoGrid, Section, SectionHeader } from "@/components/bento";
import { Reveal } from "@/components/reveal";
import { Avatar } from "@/components/avatar";
import { Eyebrow } from "@/components/ui";
import { Icon } from "@/components/icons";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <Section dark>
      <Reveal>
        <SectionHeader
          eyebrow={<Eyebrow variant="lime">What clients say</Eyebrow>}
          title="What engineering leaders say"
          inverted
          align="center"
          className="mx-auto"
        />
      </Reveal>

      <BentoGrid className="mt-10">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <BentoCard variant="dark" interactive className="h-full justify-between gap-6">
              <Icon name="quote" size={28} className="text-accent" />
              <p className="text-lg font-semibold leading-relaxed text-white sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-sm text-white/60">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </BentoCard>
          </Reveal>
        ))}
      </BentoGrid>
    </Section>
  );
}
