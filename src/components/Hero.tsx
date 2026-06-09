"use client";

import React from "react";
import { Icons } from "./Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#030712]"
    >
      {/* Background Animated Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/20 blur-[80px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px] animate-blob-delayed" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full bg-secondary/15 blur-[90px] animate-blob-slow" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Hero Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-xs font-medium text-gray-300 shadow-inner">
          <Icons.Sparkles size={14} className="text-secondary animate-pulse-slow" />
          <span>Innovating the Digital Frontier</span>
        </div>

        {/* Hero Title */}
        <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-8">
          We Design & Build{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-pulse-slow">
            Digital Masterpieces
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl text-base sm:text-xl text-gray-400 leading-relaxed mb-12">
          Aura Dynamics is a boutique agency delivering next-generation web apps, stunning UI/UX designs, and scalable cloud solutions for forward-thinking brands.
        </p>

        {/* Hero Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-300"
          >
            Explore Projects
            <Icons.ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl backdrop-blur-md transition-all duration-300"
          >
            Talk to an Expert
          </a>
        </div>

        {/* Mockup Dashboard Section for Visual WOW factor */}
        <div className="w-full max-w-5xl rounded-2xl glass-panel p-2 shadow-2xl shadow-primary/5 border border-white/5 animate-fade-in relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10 rounded-2xl" />
          <div className="rounded-xl overflow-hidden bg-gray-950 border border-white/5 p-6 md:p-8 flex flex-col gap-6 text-left">
            {/* Mock Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs text-gray-500 font-mono">dashboard.auradynamics.com</div>
              <div className="w-4 h-4" />
            </div>
            
            {/* Mock Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-2">
                <div className="text-xs text-gray-400">Total Operations</div>
                <div className="text-2xl font-bold text-white tracking-tight">1,842,931</div>
                <div className="text-xs text-secondary font-medium">↑ 12.4% vs last week</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-2">
                <div className="text-xs text-gray-400">Server Latency</div>
                <div className="text-2xl font-bold text-white tracking-tight">14ms</div>
                <div className="text-xs text-primary font-medium">Optimal Performance</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-2">
                <div className="text-xs text-gray-400">Conversion Rate</div>
                <div className="text-2xl font-bold text-white tracking-tight">3.82%</div>
                <div className="text-xs text-accent font-medium">↑ 4.1% vs last month</div>
              </div>
            </div>

            {/* Mock Chart Area */}
            <div className="h-48 rounded-lg bg-white/5 border border-white/5 p-4 flex flex-col justify-end gap-4 relative overflow-hidden">
              <div className="absolute top-4 left-4 text-xs font-semibold text-gray-400">Growth Statistics</div>
              <div className="flex items-end justify-between h-28 gap-2 px-2">
                <div className="w-full bg-gradient-to-t from-primary/50 to-primary h-[40%] rounded-sm" />
                <div className="w-full bg-gradient-to-t from-accent/50 to-accent h-[65%] rounded-sm" />
                <div className="w-full bg-gradient-to-t from-secondary/50 to-secondary h-[50%] rounded-sm" />
                <div className="w-full bg-gradient-to-t from-primary/50 to-primary h-[85%] rounded-sm" />
                <div className="w-full bg-gradient-to-t from-accent/50 to-accent h-[70%] rounded-sm" />
                <div className="w-full bg-gradient-to-t from-secondary/50 to-secondary h-[95%] rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
