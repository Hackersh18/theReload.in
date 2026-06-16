import { Section, SectionHeader } from "@/components/bento";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { clientLogos } from "@/data/content";

export function ClientLogos() {
  return (
    <Section>
      <SectionHeader
        eyebrow={<Eyebrow>Selected clients</Eyebrow>}
        title="Teams we've shipped alongside"
        align="center"
        className="mx-auto"
      />
      <Reveal className="mt-10">
        <div className="grid grid-cols-2 overflow-hidden rounded-[var(--radius-bento)] border border-border sm:grid-cols-4">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center border-b border-r border-border bg-surface p-8 last:border-r-0"
            >
              <span className="font-display text-xl font-medium tracking-tight text-muted/80">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
