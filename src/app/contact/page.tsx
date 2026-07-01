import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/bento";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Faq } from "@/components/sections/faq";
import { Reveal } from "@/components/reveal";
import { CalButton, Eyebrow } from "@/components/ui";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Reload. Send a message, see our FAQs, or book a discovery call to discuss your web app or SaaS build.",
  alternates: { canonical: "/contact" },
};

const socialItems: { name: IconName; href: string; label: string }[] = [
  { name: "twitter", href: siteConfig.socials.twitter, label: "X (Twitter)" },
  { name: "linkedin", href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { name: "github", href: siteConfig.socials.github, label: "GitHub" },
];

const contactDetails: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "mail", label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: "calendar", label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` },
  { icon: "mapPin", label: "Based", value: siteConfig.location },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        description="Whether you've got a tightly-scoped brief or a half-formed idea, we'd love to hear it. Tell us what you're working on and we'll take it from there."
      />

      <Section>
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: human details */}
          <Reveal>
            <div className="flex h-full flex-col rounded-[var(--radius-bento)] border border-border bg-surface p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
                Talk to a real person
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                No account managers, no phone trees. You&rsquo;ll talk to the
                people who&rsquo;ll actually design and build your product. We
                reply within one business day.
              </p>

              <ul className="mt-8 space-y-5">
                {contactDetails.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-subtle text-accent">
                      <Icon name={item.icon} size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-foreground transition-colors hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Follow along
                </p>
                <div className="mt-3 flex gap-2">
                  {socialItems.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
                    >
                      <Icon name={s.name} size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>

        {/* Cal.com booking card */}
        <Reveal className="mt-4">
          <div className="flex flex-col items-center justify-between gap-5 rounded-[var(--radius-bento)] border border-accent/30 bg-foreground px-8 py-10 text-background sm:flex-row sm:px-10">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Prefer to talk directly? Skip the form.
              </h2>
              <p className="mt-2 max-w-lg text-sm opacity-90">
                Grab a slot that suits you. Thirty focused minutes, no
                obligation, no sales pitch.
              </p>
            </div>
            <CalButton
              variant="primary"
              size="lg"
              className="shrink-0"
              label="Book a 30-Min Discovery Call"
            />
          </div>
        </Reveal>
      </Section>

      <Section id="faq" className="pt-4">
        <SectionHeader
          eyebrow={<Eyebrow>FAQ</Eyebrow>}
          title="Questions, answered"
          description="The things clients ask us most. Don't see yours? Send it over."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10">
          <Faq />
        </div>
      </Section>
    </>
  );
}
