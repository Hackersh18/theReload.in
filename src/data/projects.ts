import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "flowdesk",
    name: "Flowdesk",
    tagline: "B2B SaaS productivity dashboard",
    category: "SaaS",
    outcome: "Reduced onboarding time by 60%",
    color: "#4f46e5",
    initials: "Fd",
    year: "2025",
    caseStudy: {
      duration: "14 weeks",
      role: "Design & full-stack build",
      services: ["Product Design", "Full-Stack Development", "Design System"],
      tech: ["Next.js", "TypeScript", "PostgreSQL", "tRPC"],
      challenge:
        "Flowdesk's first version worked, but new teams were churning in the first week. Onboarding spanned eleven screens and most users never reached the moment the product became useful.",
      approach: [
        "Mapped the activation journey and found the single action that predicted retention, then designed the whole onboarding around reaching it fast.",
        "Rebuilt the dashboard on a documented design system so the team could ship consistent UI without us.",
        "Added contextual, dismissible guidance instead of an upfront wizard — help where it's needed, not a gate.",
      ],
      results: [
        { value: "60%", label: "Faster time to first value" },
        { value: "2.4×", label: "Week-one activation" },
        { value: "11→4", label: "Onboarding steps" },
      ],
      quote: {
        text: "They found the one screen that mattered and built everything around it. Activation hasn't looked back.",
        name: "Dana Whitfield",
        role: "VP of Product, Flowdesk",
      },
    },
  },
  {
    slug: "orbita",
    name: "Orbita",
    tagline: "E-commerce platform redesign",
    category: "Design",
    outcome: "34% increase in checkout conversion",
    color: "#0f766e",
    initials: "Or",
    year: "2025",
    caseStudy: {
      duration: "9 weeks",
      role: "UX redesign & front-end build",
      services: ["UX Research", "UI Design", "Front-End Development"],
      tech: ["Next.js", "TypeScript", "Shopify", "Tailwind CSS"],
      challenge:
        "Orbita had strong traffic but a leaky funnel. The checkout was a five-step maze and mobile shoppers abandoned in droves.",
      approach: [
        "Ran session replays and a heuristic audit to pinpoint exactly where carts were dying.",
        "Collapsed checkout into a single accountless flow with express payment options up top.",
        "Rebuilt the product and cart pages mobile-first, shaving page weight by more than half.",
      ],
      results: [
        { value: "34%", label: "Higher checkout conversion" },
        { value: "−52%", label: "Mobile page weight" },
        { value: "5→1", label: "Checkout steps" },
      ],
      quote: {
        text: "Same traffic, a third more revenue. The redesign paid for itself in the first month.",
        name: "Sofia Marin",
        role: "Head of Growth, Orbita",
      },
    },
  },
  {
    slug: "pulsehr",
    name: "PulseHR",
    tagline: "HR management app for mid-size teams",
    category: "Web Apps",
    outcome: "Built from zero to launch in 8 weeks",
    color: "#b45309",
    initials: "Ph",
    year: "2024",
    caseStudy: {
      duration: "8 weeks",
      role: "0→1 product design & build",
      services: ["Product Strategy", "Design", "Full-Stack Development"],
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      challenge:
        "PulseHR needed to get a real, billable HR platform in front of customers before a funding milestone — a hard eight-week deadline with no product yet.",
      approach: [
        "Scoped a ruthless MVP focused on the one workflow HR managers do daily.",
        "Shipped working software every Friday so the founders could test with real users throughout.",
        "Launched to a controlled cohort first, then iterated on live feedback for the final two weeks.",
      ],
      results: [
        { value: "8 wks", label: "Idea to launch" },
        { value: "500", label: "Users in 10 weeks" },
        { value: "92%", label: "Onboarding completion" },
      ],
      quote: {
        text: "We hit the deadline with a product people actually wanted to use. That's rare.",
        name: "Tom Albright",
        role: "Founder, PulseHR",
      },
    },
  },
  {
    slug: "meridian-capital",
    name: "Meridian Capital",
    tagline: "Financial advisory landing site",
    category: "Design",
    outcome: "3× increase in qualified lead inflow",
    color: "#1e3a8a",
    initials: "Mc",
    year: "2024",
    caseStudy: {
      duration: "5 weeks",
      role: "Brand site design & build",
      services: ["Messaging", "UI Design", "Front-End Development"],
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      challenge:
        "Meridian's old site looked like every other advisory firm and converted like it too. Visitors couldn't tell what made them different — or take the next step.",
      approach: [
        "Rewrote the messaging around a single, credible promise instead of generic finance-speak.",
        "Designed a calm, trustworthy interface with one clear path to booking a consultation.",
        "Instrumented the funnel so Meridian could see exactly which sections drove enquiries.",
      ],
      results: [
        { value: "3×", label: "Qualified leads" },
        { value: "+47%", label: "Time on page" },
        { value: "AA", label: "Accessibility rating" },
      ],
      quote: {
        text: "For the first time our website actually sounds like us — and the inbound shows it.",
        name: "Helen Voss",
        role: "Managing Partner, Meridian",
      },
    },
  },
  {
    slug: "stackd",
    name: "Stackd",
    tagline: "Developer tool for API documentation",
    category: "Web Apps",
    outcome: "10,000 users in the first month",
    color: "#9333ea",
    initials: "St",
    year: "2024",
    caseStudy: {
      duration: "12 weeks",
      role: "Product design & full-stack build",
      services: ["Developer UX", "Full-Stack Development", "API Design"],
      tech: ["Next.js", "TypeScript", "OpenAPI", "Redis"],
      challenge:
        "Stackd wanted to make API docs that developers enjoy. Existing tools were slow, ugly, or both — and the bar for a developer audience is brutal.",
      approach: [
        "Designed a keyboard-first, instant-search experience tuned for the way developers actually read docs.",
        "Built a rendering pipeline that turns an OpenAPI spec into a polished site in seconds.",
        "Obsessed over performance — sub-100ms search and near-instant navigation.",
      ],
      results: [
        { value: "10k", label: "Users in month one" },
        { value: "<100ms", label: "Search latency" },
        { value: "4.8/5", label: "Developer rating" },
      ],
      quote: {
        text: "It's the first docs tool our engineers didn't immediately want to replace.",
        name: "Raj Patel",
        role: "CTO, Stackd",
      },
    },
  },
  {
    slug: "lumio",
    name: "Lumio",
    tagline: "EdTech platform for online learning",
    category: "SaaS",
    outcome: "Designed and built the full product",
    color: "#be123c",
    initials: "Lu",
    year: "2023",
    caseStudy: {
      duration: "16 weeks",
      role: "End-to-end product partner",
      services: ["Product Design", "Full-Stack Development", "SaaS Platform"],
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      challenge:
        "Lumio had a vision for delightful online courses but no product. They needed a partner to design and build the whole platform — learners, instructors, and billing.",
      approach: [
        "Designed parallel experiences for learners and instructors from a shared design system.",
        "Built the full platform: course authoring, video, progress tracking, and subscription billing.",
        "Set up analytics and an iteration loop so Lumio could keep improving after launch.",
      ],
      results: [
        { value: "100%", label: "Built in-house by us" },
        { value: "4 mo", label: "To full launch" },
        { value: "87%", label: "Course completion" },
      ],
      quote: {
        text: "They didn't just build what we asked for — they helped us figure out what to build.",
        name: "Amara Okafor",
        role: "Founder & CEO, Lumio",
      },
    },
  },
];

export const featuredProjects = projects.slice(0, 3);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = [
  "All",
  "Web Apps",
  "Design",
  "SaaS",
  "Consulting",
] as const;
