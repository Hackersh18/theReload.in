"use client";

import React, { useState } from "react";
import { Icons } from "./Icons";

interface Project {
  id: number;
  title: string;
  category: "web" | "mobile" | "ai-design";
  categoryLabel: string;
  description: string;
  tags: string[];
  link: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile" | "ai-design">("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "web", label: "Web Applications" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai-design", label: "AI & Design" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "SocietyOne",
      category: "web",
      categoryLabel: "Web App",
      description: "A secure, end-to-end lease agreement and tenant property management system built on React, Node.js, and Dockerized AWS EC2 deployment pipelines.",
      tags: ["Next.js", "Node.js", "Docker", "AWS EC2"],
      link: "#",
    },
    {
      id: 2,
      title: "Aether AI Assistant",
      category: "ai-design",
      categoryLabel: "AI / Design",
      description: "An AI-powered conversational design copilot. Features custom vector embeddings and real-time generation of user interface prototypes.",
      tags: ["React", "Python", "OpenAI", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "Zenith Crypto Wallet",
      category: "mobile",
      categoryLabel: "Mobile App",
      description: "A fast, non-custodial Web3 wallet supporting cross-chain asset swaps and real-time portfolio analytics on iOS and Android.",
      tags: ["React Native", "TypeScript", "Ethers.js", "GraphQL"],
      link: "#",
    },
    {
      id: 4,
      title: "Velocity SaaS Dashboard",
      category: "web",
      categoryLabel: "Web App",
      description: "High-performance enterprise business dashboard with custom real-time charting systems, automated report generators, and full-text search.",
      tags: ["Next.js", "TypeScript", "Tailwind v4", "Charts.js"],
      link: "#",
    },
    {
      id: 5,
      title: "Pulse Health Tracker",
      category: "mobile",
      categoryLabel: "Mobile App",
      description: "Biometric monitoring application designed for professional athletes. Integrates seamlessly with wearable IoT fitness monitors.",
      tags: ["React Native", "Swift", "Bluetooth Low Energy"],
      link: "#",
    },
    {
      id: 6,
      title: "Chronos Brand Identity",
      category: "ai-design",
      categoryLabel: "AI / Design",
      description: "A complete rebranding project for an international Swiss watch manufacturer, including 3D product renders and marketing design assets.",
      tags: ["Figma", "Cinema 3D", "After Effects"],
      link: "#",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="relative py-24 bg-[#030712] border-t border-white/5">
      {/* Background glow orb */}
      <div className="absolute left-0 top-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-xs font-semibold tracking-wider text-primary uppercase mb-3">Portfolio</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Our Latest Creations
            </h3>
            <p className="text-gray-400">
              Take a look at some of the websites, mobile apps, and designs we have built for clients around the globe.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10 self-start md:self-auto backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === cat.id
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col h-full rounded-2xl glass-panel glass-panel-hover overflow-hidden group"
            >
              {/* Image / Thumbnail Placeholder (Pure CSS visual effect instead of generic block) */}
              <div className="h-48 w-full bg-gradient-to-br from-gray-950 to-gray-900 border-b border-white/5 relative flex items-center justify-center overflow-hidden">
                {/* Visual geometric pattern representing code/design */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-xl group-hover:scale-125 transition-transform duration-500" />
                
                {/* Visual logo mockup inside */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    {project.title.substring(0, 1)}
                  </div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{project.categoryLabel}</span>
                </div>

                {/* Cyber accent line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Badges */}
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wider uppercase bg-white/5 border border-white/5 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
