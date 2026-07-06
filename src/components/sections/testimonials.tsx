import { Section, SectionHeader } from "@/components/bento";
import { Reveal } from "@/components/reveal";
import { TestimonialShowcase } from "@/components/testimonial-showcase";
import { Icon } from "@/components/icons";
import { Eyebrow } from "@/components/ui";
import { testimonials } from "@/data/content";

export function Testimonials() {
  const hasReviews = testimonials.length > 0;

  return (
    <Section dark id="reviews">
      <Reveal>
        <SectionHeader
          eyebrow={<Eyebrow variant="lime">What clients say</Eyebrow>}
          title={hasReviews ? "What engineering leaders say" : "Client reviews"}
          description={
            hasReviews
              ? undefined
              : "Published client feedback will appear here. We share a private link with clients after each engagement."
          }
          inverted
          align="center"
          className="mx-auto"
        />
      </Reveal>

      <Reveal delay={120}>
        {hasReviews ? (
          <TestimonialShowcase items={testimonials} className="mt-10" />
        ) : (
          <div className="mx-auto mt-10 max-w-lg rounded-[var(--radius-bento)] border border-dashed border-white/15 bg-white/[0.03] px-8 py-14 text-center">
            <Icon name="quote" size={32} className="mx-auto text-accent/80" />
            <p className="mt-5 text-lg font-semibold text-white">Reviews coming soon</p>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              We&apos;re gathering feedback from recent clients. Approved reviews are published
              here for future visitors to read.
            </p>
          </div>
        )}
      </Reveal>
    </Section>
  );
}
