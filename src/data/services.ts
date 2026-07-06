import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "full-stack-development",
    icon: "code",
    title: "Full-Stack Development",
    summary:
      "Production-grade apps from database to UI — Next.js, MERN, APIs, and infrastructure that scales.",
    description:
      "We engineer complete products end to end: typed front-ends, resilient APIs, data models, auth, and deployment pipelines. Whether you are launching an MVP or hardening an existing platform, we pick the right stack and ship code your team can maintain.",
    offerings: [
      "Next.js & React applications",
      "MERN stack builds (MongoDB, Express, React, Node)",
      "REST & GraphQL API design",
      "PostgreSQL, MongoDB & Redis",
      "Auth, roles, billing & admin dashboards",
      "CI/CD, testing & production monitoring",
    ],
    process: [
      "Architecture & stack selection",
      "Data modelling & API contracts",
      "Front-end & back-end implementation",
      "QA, performance & security review",
      "Deployment & handoff documentation",
    ],
    tags: ["Next.js", "MERN", "TypeScript", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    slug: "website-development",
    icon: "globe",
    title: "Website Development",
    summary:
      "Fast, conversion-focused sites on WordPress, Next.js, or MERN — built for SEO and easy updates.",
    description:
      "Not every project needs a full product build. We deliver marketing sites, company pages, blogs, and content-driven experiences on the stack that fits your team — from WordPress CMS workflows to blazing Next.js front-ends and custom MERN applications.",
    offerings: [
      "Custom WordPress themes & plugins",
      "Headless WordPress + Next.js",
      "Next.js marketing & landing pages",
      "MERN stack content apps",
      "SEO, analytics & performance tuning",
      "Hosting, DNS & launch support",
    ],
    process: [
      "Content & sitemap planning",
      "Design or theme implementation",
      "CMS setup & editor training",
      "Integrations (forms, CRM, analytics)",
      "Launch, SEO baseline & support",
    ],
    tags: ["WordPress", "Next.js", "MERN", "SEO", "CMS", "Vercel"],
  },
  {
    slug: "android-development",
    icon: "smartphone",
    title: "Android Development",
    summary:
      "Native Android apps in Kotlin — plus WebView and TWA wrappers when speed-to-market matters.",
    description:
      "We build Android experiences that feel native on device and integrate cleanly with your back-end. Ship a full Kotlin app with Jetpack Compose, or wrap your existing web product in a polished Android shell for the Play Store.",
    offerings: [
      "Native Android with Kotlin",
      "Jetpack Compose UI",
      "WebView & Trusted Web Activity wrappers",
      "Play Store submission & updates",
      "Push notifications & deep linking",
      "API integration & offline support",
    ],
    process: [
      "Platform strategy (native vs wrapper)",
      "UI/UX & navigation architecture",
      "Kotlin development & API wiring",
      "Device testing & Play Store prep",
      "Release, monitoring & iteration",
    ],
    tags: ["Kotlin", "Android", "Jetpack Compose", "WebView", "TWA", "Play Store"],
  },
  {
    slug: "ai-agents",
    icon: "sparkles",
    title: "AI Agents",
    summary:
      "Custom agents that automate workflows, reason over your data, and integrate with your tools.",
    description:
      "Go beyond a chat box. We design AI agents that take action — querying your database, calling APIs, drafting documents, triaging tickets, and running multi-step workflows with guardrails, logging, and human-in-the-loop controls.",
    offerings: [
      "Custom LLM agent design",
      "Tool use & API orchestration",
      "RAG over docs, wikis & databases",
      "Workflow automation (n8n, custom pipelines)",
      "Evaluation, prompt tuning & cost control",
      "Secure deployment & access policies",
    ],
    process: [
      "Use-case mapping & success metrics",
      "Data sources & tool integration",
      "Agent prototyping & eval suite",
      "Production deployment & monitoring",
      "Iteration & team enablement",
    ],
    tags: ["OpenAI", "Claude", "RAG", "LangChain", "Automation", "Agents"],
  },
  {
    slug: "chatbots",
    icon: "messageCircle",
    title: "Chatbots",
    summary:
      "Support, sales, and onboarding bots for web, WhatsApp, and in-app — trained on your content.",
    description:
      "We build conversational experiences that actually resolve requests. From FAQ bots on your marketing site to support assistants wired into your CRM, we handle conversation design, retrieval, escalation paths, and analytics.",
    offerings: [
      "Website & in-app chat widgets",
      "WhatsApp & messaging integrations",
      "Knowledge-base & document-trained bots",
      "Lead capture & CRM handoff",
      "Human escalation & ticket routing",
      "Conversation analytics & tuning",
    ],
    process: [
      "Conversation flows & intents",
      "Knowledge ingestion & RAG setup",
      "Widget / channel integration",
      "Testing with real user scenarios",
      "Launch, monitor & improve responses",
    ],
    tags: ["Chatbots", "RAG", "WhatsApp", "Support", "CRM", "Widgets"],
  },
  {
    slug: "feature-implementation",
    icon: "plus",
    title: "Feature Implementation",
    summary:
      "Ship the next slice fast — new modules, integrations, and product features in existing codebases.",
    description:
      "Already have a product? We embed with your team to design and deliver specific features — payment flows, dashboards, admin tools, third-party integrations, or entire user-facing modules — without derailing your roadmap.",
    offerings: [
      "New product features & user flows",
      "Third-party API integrations",
      "Payment, auth & subscription upgrades",
      "Admin panels & internal tools",
      "Performance & refactor passes",
      "Brownfield code review & hardening",
    ],
    process: [
      "Scope & technical discovery",
      "Implementation plan & milestones",
      "Feature build in your repo",
      "Code review, tests & documentation",
      "Staged rollout & post-ship support",
    ],
    tags: ["Integrations", "Stripe", "Dashboards", "Refactors", "APIs", "MVP"],
  },
  {
    slug: "technical-consultation",
    icon: "compass",
    title: "Technical Consultation",
    summary:
      "Senior guidance on architecture, stack choices, audits, and roadmaps — before you commit budget.",
    description:
      "Sometimes you need clarity more than capacity. We help founders and engineering leads make the right technical calls: stack selection, architecture reviews, hiring plans, cost optimisation, and phased roadmaps you can execute with confidence.",
    offerings: [
      "Architecture & codebase audits",
      "Stack selection (Next.js vs MERN vs WordPress)",
      "Mobile strategy (native vs web wrapper)",
      "AI readiness & integration planning",
      "Scaling, security & cost reviews",
      "Roadmap & team structure advice",
    ],
    process: [
      "Goals, constraints & context review",
      "System / codebase assessment",
      "Written recommendations & options",
      "Roadmap & priority matrix",
      "Optional follow-up implementation support",
    ],
    tags: ["Architecture", "Audits", "Roadmaps", "Strategy", "Due Diligence"],
  },
  {
    slug: "saas-product-development",
    icon: "layers",
    title: "SaaS Product Development",
    summary:
      "From zero to billable — multi-tenant products with auth, billing, dashboards, and admin tooling.",
    description:
      "We take SaaS ideas from whiteboard to revenue. Auth, billing, multi-tenancy, onboarding, and the unglamorous plumbing that makes a subscription business run — built so you can iterate without rewrites.",
    offerings: [
      "Multi-tenant architecture",
      "Stripe billing & usage metering",
      "Onboarding & self-serve flows",
      "Customer & admin dashboards",
      "Team roles & permissions",
      "Analytics, webhooks & integrations",
    ],
    process: [
      "MVP scoping & phased roadmap",
      "Auth, billing & tenancy foundation",
      "Core product build",
      "Beta launch & feedback loop",
      "Scale, monitor & iterate",
    ],
    tags: ["SaaS", "Stripe", "Multi-tenancy", "Dashboards", "Auth", "B2B"],
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
