"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { CalButton } from "@/components/ui";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

function navItemClass(active: boolean) {
  return cn(
    "rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-300",
    active
      ? "glass-pill text-foreground"
      : "glass-pill-hover text-muted hover:text-foreground",
  );
}

function mobileItemClass(active: boolean) {
  return cn(
    "rounded-2xl px-4 py-3 text-base font-medium transition-all duration-300",
    active
      ? "glass-pill text-foreground"
      : "glass-pill-hover text-muted hover:text-foreground",
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname.startsWith(href);
  const howItWorksActive = pathname === "/" || pathname === "/services";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-5 sm:pt-3.5">
      <div
        className={cn(
          "glass-nav animate-header-in mx-auto max-w-5xl rounded-[1.125rem] transition-shadow duration-500 sm:rounded-full",
          scrolled && "shadow-[0_8px_32px_-8px_rgba(0,0,0,0.2)]",
        )}
      >
        <nav className="grid h-12 grid-cols-[1fr_auto_1fr] items-center px-2 sm:h-[3.25rem] sm:px-3">
          {/* Left links — desktop */}
          <div className="hidden items-center gap-0.5 md:flex">
            <Link href="/#services" className={navItemClass(howItWorksActive)}>
              How it works
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navItemClass(isActive(link.href))}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <div className="flex justify-start md:justify-center">
            <Logo />
          </div>

          {/* Right actions */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-2">
            <ThemeToggle className="hidden sm:inline-flex" />
            <Link
              href="/contact#faq"
              className={cn(
                "hidden md:inline-block",
                navItemClass(pathname.startsWith("/contact")),
              )}
            >
              FAQ
            </Link>
            <span className="hidden md:inline-flex">
              <CalButton size="sm" withIcon label="Book a Call" />
            </span>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="glass-icon-btn inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-transform hover:scale-105 md:hidden"
            >
              <Icon name="menu" size={18} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-foreground/25 backdrop-blur-md transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "glass-drawer absolute right-0 top-0 flex h-full w-[82%] max-w-xs flex-col gap-1.5 border-l p-5 transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-3 flex items-center justify-between">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="glass-icon-btn inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={mobileItemClass(pathname === "/")}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={mobileItemClass(isActive(link.href))}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#faq"
            onClick={() => setOpen(false)}
            className={mobileItemClass(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={mobileItemClass(pathname.startsWith("/contact"))}
          >
            Contact
          </Link>

          <CalButton size="lg" className="mt-4 w-full" label="Book a Call" />
        </div>
      </div>
    </header>
  );
}
