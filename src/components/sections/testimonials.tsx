import { Section, SectionHeader } from "@/components/bento";
import { Reveal } from "@/components/reveal";
import { TestimonialShowcase } from "@/components/testimonial-showcase";
import { Eyebrow } from "@/components/ui";
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

      <Reveal delay={120}>
        <TestimonialShowcase items={testimonials} className="mt-10" />
      </Reveal>
    </Section>
  );
}
