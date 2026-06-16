import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { Logo } from "@/components/logo";
import { CalButton } from "@/components/ui";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";

const socialItems: { name: IconName; href: string; label: string }[] = [
  { name: "twitter", href: siteConfig.socials.twitter, label: "X (Twitter)" },
  { name: "linkedin", href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { name: "github", href: siteConfig.socials.github, label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="max-w-sm">
            <Logo onDark />
            <p className="mt-4 text-sm leading-relaxed text-background/65">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialItems.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-background/20 text-background/60 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name={s.name} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Navigate
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-background/65 transition-colors hover:text-background"
                  >
                    Home
                  </Link>
                </li>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/65 transition-colors hover:text-background"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-background/65 transition-colors hover:text-background"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-background/65">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-background"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>{siteConfig.location}</li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Start a project
              </h3>
              <p className="mt-4 text-sm text-background/65">
                Building a web app or SaaS product? Let&rsquo;s talk scope and timeline.
              </p>
              <CalButton variant="footer" size="sm" className="mt-4" label="Book a Call" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-6 text-sm text-background/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
