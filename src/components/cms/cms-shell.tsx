"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/icons";
import { clearCmsSession } from "@/app/share/cms/actions";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/share/cms", label: "Dashboard", icon: "layers" as const, exact: true },
  { href: "/share/cms/blog", label: "Blog posts", icon: "penTool" as const },
  { href: "/share/cms/reviews", label: "Client reviews", icon: "messageCircle" as const },
];

export function CmsShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl">
        <aside className="hidden w-64 shrink-0 flex-col border-r border-white/10 p-5 lg:flex">
          <Link href="/share/cms" className="mb-8 inline-flex">
            <Logo />
          </Link>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-accent/80">
            Reload CMS
          </p>
          <nav className="flex flex-1 flex-col gap-1">
            {nav.map((item) => {
              const active = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
                    active
                      ? "bg-accent text-accent-foreground"
                      : "text-white/70 hover:bg-white/5 hover:text-white",
                  )}
                >
                  <Icon name={item.icon} size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto space-y-2 border-t border-white/10 pt-4">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-white/55 hover:bg-white/5 hover:text-white"
            >
              <Icon name="arrowUpRight" size={16} />
              View website
            </Link>
            <form action={clearCmsSession}>
              <button
                type="submit"
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium text-white/55 hover:bg-white/5 hover:text-white"
              >
                <Icon name="close" size={16} />
                Sign out
              </button>
            </form>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="border-b border-white/10 px-5 py-4 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="lg:hidden">
                <Logo />
              </div>
              <p className="text-sm font-semibold text-white/70">Content management</p>
            </div>
            <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
              {nav.map((item) => {
                const active = item.exact
                  ? pathname === item.href
                  : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                      active
                        ? "bg-accent text-accent-foreground"
                        : "bg-white/5 text-white/65",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </header>
          <main className="flex-1 px-5 py-6 lg:px-8 lg:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
