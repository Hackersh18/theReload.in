import React from "react";
import { Icons } from "./Icons";

export default function About() {
  const stats = [
    { value: "48+", label: "Projects Shipped" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "5+", label: "Years Experience" },
    { value: "12", label: "Creative Engineers" },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#030712] border-t border-white/5">
      {/* Background glowing orb */}
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-xs font-semibold tracking-wider text-accent uppercase">About Our Agency</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              We Breathe Life Into Code & Design
            </h3>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              At Aura Dynamics, we believe every digital touchpoint is an opportunity to make a lasting impression. We are a tightly knit team of software engineers, designers, and systems architects who are passionate about crafting clean, modern interfaces and high-performance backend systems.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              We skip the bloated corporate meetings and standard templates. Instead, we work directly with founders and product leaders to engineer products that look stunning, feel incredibly fast, and are designed to scale.
            </p>
            
            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Icons.Check size={14} />
                </div>
                <span className="text-sm font-medium text-white">Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Icons.Check size={14} />
                </div>
                <span className="text-sm font-medium text-white">High-Fidelity Animations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                  <Icons.Check size={14} />
                </div>
                <span className="text-sm font-medium text-white">AI Engine Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Icons.Check size={14} />
                </div>
                <span className="text-sm font-medium text-white">DevOps & Cloud Scale</span>
              </div>
            </div>
          </div>

          {/* Right Column: stats grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl glass-panel text-center flex flex-col justify-center items-center gap-2 group relative overflow-hidden"
              >
                {/* Hover border glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
