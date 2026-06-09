import React from "react";
import { Icons } from "./Icons";

export default function Services() {
  const services = [
    {
      icon: <Icons.Code className="text-primary" size={32} />,
      title: "Custom Engineering",
      description: "We build highly performant, scalable, and responsive web applications using modern stacks like Next.js, React, Node.js, and TypeScript.",
    },
    {
      icon: <Icons.Palette className="text-accent" size={32} />,
      title: "UI/UX Design",
      description: "Stunning user interfaces and seamless experiences designed with care. We focus on modern typography, harmonized colors, and interactive micro-animations.",
    },
    {
      icon: <Icons.Cpu className="text-secondary" size={32} />,
      title: "AI & Machine Learning",
      description: "Bring intelligence to your apps. We integrate large language models, build vector search systems, and deploy custom neural networks.",
    },
    {
      icon: <Icons.Globe className="text-primary" size={32} />,
      title: "Cloud Infrastructure",
      description: "Scale with confidence. We architect cloud-native pipelines, containerize applications using Docker, and configure secure AWS, Vercel, and Kubernetes deployments.",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#030712] border-t border-white/5">
      {/* Decorative side blur */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-secondary uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            We Help You Design, Build & Scale
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            Whether you need a sleek landing page or an enterprise cloud application, we have the technical expertise to deliver.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Icon Container */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 shadow-inner flex items-center justify-center shrink-0">
                {service.icon}
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold text-white tracking-tight">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
