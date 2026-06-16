import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "full-stack-web-development",
    icon: "code",
    title: "Full-Stack Web Development",
    summary: "Type-safe apps built to scale from launch to your millionth user.",
    description:
      "We build production web applications end to end — from the data model to the pixels. Our stack favours boring, reliable technology and rigorous testing, so the thing we ship on day one is still maintainable two years later.",
    process: [
      "Architecture & data modelling",
      "Component-driven UI build",
      "Automated testing & CI",
      "Performance & accessibility audit",
    ],
    tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    slug: "ui-ux-product-design",
    icon: "penTool",
    title: "UI/UX & Product Design",
    summary: "Interfaces that feel obvious — backed by a real design system.",
    description:
      "Design that earns its keep. We map the jobs your users are hiring your product for, prototype the flows, and hand off a documented design system your engineers will actually enjoy building against.",
    process: [
      "User & product discovery",
      "Wireframes & prototypes",
      "High-fidelity design system",
      "Engineering handoff & QA",
    ],
    tags: ["Figma", "Design Systems", "Prototyping", "User Research"],
  },
  {
    slug: "saas-product-development",
    icon: "layers",
    title: "SaaS Product Development",
    summary: "From zero to a billable product — multi-tenant, metered, and ready.",
    description:
      "We take SaaS ideas from whiteboard to revenue. Auth, billing, multi-tenancy, dashboards, and the unglamorous plumbing that makes a subscription business actually run — built so you can iterate without rewrites.",
    process: [
      "MVP scoping & roadmap",
      "Auth, billing & tenancy",
      "Core product build",
      "Launch & iteration loop",
    ],
    tags: ["Stripe", "Multi-tenancy", "Dashboards", "Auth"],
  },
  {
    slug: "technical-consulting-architecture",
    icon: "compass",
    title: "Technical Consulting & Architecture",
    summary: "A senior team to pressure-test decisions before they get expensive.",
    description:
      "Sometimes you don't need more hands — you need the right call. We review architecture, untangle legacy systems, and write the technical plan that lets your team move fast without painting itself into a corner.",
    process: [
      "System & codebase review",
      "Architecture recommendations",
      "Scaling & cost plan",
      "Team enablement",
    ],
    tags: ["System Design", "Cloud", "DevOps", "Audits"],
  },
  {
    slug: "api-design-integration",
    icon: "plug",
    title: "API Design & Integration",
    summary: "APIs that are a pleasure to consume and survive 3am traffic spikes.",
    description:
      "Well-designed APIs are a product in themselves. We design clear contracts, build resilient integrations with third parties, and instrument everything so you know exactly what's happening in production.",
    process: [
      "Contract & schema design",
      "Implementation & docs",
      "Third-party integrations",
      "Monitoring & rate limiting",
    ],
    tags: ["REST", "GraphQL", "Webhooks", "OpenAPI"],
  },
];

export const processSteps = [
  {
    step: "01",
    icon: "search" as const,
    title: "Discovery",
    description:
      "We dig into your goals, users, and constraints, then agree on what success looks like before anyone touches a keyboard.",
  },
  {
    step: "02",
    icon: "penTool" as const,
    title: "Design",
    description:
      "Flows, prototypes, and a design system. We validate the experience early so the build phase has no surprises.",
  },
  {
    step: "03",
    icon: "code" as const,
    title: "Build",
    description:
      "Tight, demo-driven sprints. You see working software every week, not status decks.",
  },
  {
    step: "04",
    icon: "rocket" as const,
    title: "Launch",
    description:
      "We ship with confidence — performance budgets met, accessibility checked, monitoring in place.",
  },
  {
    step: "05",
    icon: "lifebuoy" as const,
    title: "Support",
    description:
      "We stick around. Ongoing iteration, fixes, and a roadmap so momentum doesn't stall after go-live.",
  },
];
