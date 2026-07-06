import { Section, SectionHeader } from "@/components/bento";
import { Icon } from "@/components/icons";
import { Reveal, RevealStagger } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { productTypes } from "@/data/content";

export function ProductsWeBuild() {
  return (
    <Section id="products">
      <Reveal>
        <SectionHeader
          eyebrow={<Eyebrow>What we build</Eyebrow>}
          title="Software products teams rely on every day"
          description="From internal portals to customer-facing platforms — we design and ship production-ready products across these categories."
          align="center"
          className="mx-auto"
        />
      </Reveal>

      <RevealStagger
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        step={70}
      >
        {productTypes.map((product) => (
          <article
            key={product.title}
            className="group rounded-[var(--radius-bento)] border border-border bg-surface p-5 transition-colors hover:border-accent/35 hover:bg-accent/[0.03]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
              <Icon name={product.icon} size={18} />
            </span>
            <h3 className="mt-4 text-base font-bold text-foreground">{product.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{product.description}</p>
          </article>
        ))}
      </RevealStagger>
    </Section>
  );
}
