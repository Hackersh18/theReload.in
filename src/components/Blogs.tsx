import React from "react";
import { Icons } from "./Icons";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export default function Blogs() {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Why Tailwind CSS v4 is a Game-Changer for Performance",
      excerpt: "Exploring the new compilation engine, faster build times, and CSS-first configuration files introduced in Tailwind CSS v4.",
      date: "Jun 08, 2026",
      category: "Engineering",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Designing for the Next Generation: Glassmorphism and Neon Glows",
      excerpt: "How modern visual aesthetics, gradients, and micro-interactions elevate user engagement on web applications.",
      date: "May 29, 2026",
      category: "Design",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Mastering React 19 Server Functions and Actions",
      excerpt: "A deep dive into Server Actions, form state hooks, and client-server transition lifecycle management in React 19.",
      date: "May 14, 2026",
      category: "React",
      readTime: "8 min read",
    },
  ];

  return (
    <section id="blogs" className="relative py-24 bg-[#030712] border-t border-white/5">
      {/* Background glowing orb */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-secondary uppercase mb-3">Our Blogs</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Insights from Our Experts
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            Stay up to date with the latest developments in modern web design, engineering paradigms, and development workflows.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col h-full rounded-2xl glass-panel glass-panel-hover p-6 md:p-8 group cursor-pointer"
            >
              {/* Meta information row */}
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-6">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-gray-300">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Icons.Calendar size={14} />
                  {post.date}
                </span>
              </div>

              {/* Title & Excerpt */}
              <div className="flex flex-col gap-3 flex-1 mb-8">
                <h4 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">{post.readTime}</span>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-primary transition-colors duration-300">
                  <span>Read Post</span>
                  <Icons.ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
