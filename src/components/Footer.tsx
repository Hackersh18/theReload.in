"use client";

import React from "react";
import { Icons } from "./Icons";

export default function Footer() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#02050d] border-t border-white/5 py-12 md:py-16 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute right-0 bottom-0 w-[250px] h-[250px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info (Col Span 5) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white focus:outline-none">
              <span className="relative flex h-3 w-3">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
                Aura Dynamics
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We engineer state-of-the-art websites, custom web applications, and immersive branding materials for high-growth businesses.
            </p>
          </div>

          {/* Quick Links (Col Span 3) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quick Links</h5>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Input (Col Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Newsletter</h5>
            <p className="text-gray-400 text-sm">
              Subscribe to get our latest insights on web development and product design.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                required
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-primary flex-1 min-w-0"
                placeholder="you@example.com"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-primary hover:bg-accent text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} Aura Dynamics. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
