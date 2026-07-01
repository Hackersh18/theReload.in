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

const footerLinks = [
  { href: "/", label: "Home" },
  ...navLinks,
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:gap-8">
          {/* Brand */}
          <div className="max-w-xs [&_img]:h-9 [&_img]:w-9 [&_span]:text-2xl">
            <Logo onDark />
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-sm text-white/55">{siteConfig.location}</li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div className="flex flex-col items-start sm:items-end">
            <div className="flex items-center gap-2.5">
              {socialItems.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/8 text-white/80 transition-colors hover:bg-white/12 hover:text-accent"
                >
                  <Icon name={s.name} size={18} />
                </a>
              ))}
            </div>

            <div className="mt-6 w-full sm:max-w-xs sm:text-right">
              <p className="text-sm text-white/55">
                Building a web app or SaaS product? Let&rsquo;s talk scope and timeline.
              </p>
              <CalButton
                variant="footer"
                size="sm"
                className="mt-4 sm:ml-auto"
                label="Book a Call"
              />
            </div>

            <p className="mt-6 text-xs text-white/40 sm:text-right">
              © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <p className="footer-watermark pointer-events-none relative z-0 select-none" aria-hidden>
        {siteConfig.name}
      </p>
    </footer>
  );
}
