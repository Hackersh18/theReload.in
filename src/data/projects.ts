import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "avviare-educations",
    name: "Avviare Educations",
    tagline: "College website for BBA, BCA, MBA, MCA & PGDM programs",
    category: "EdTech",
    outcome: "Live admissions site driving enquiries across Noida",
    color: "#0d4f3c",
    initials: "Av",
    year: "2025",
    url: "https://avviareeducations.org",
    caseStudy: {
      duration: "6 weeks",
      role: "Website design & full-stack build",
      services: ["Website Development", "SEO", "Lead Capture"],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      challenge:
        "Avviare needed a credible, fast college website that showcased programs, campus life, and admissions — and turned visitor traffic into qualified enquiries for counsellors.",
      approach: [
        "Structured program pages for BBA, BCA, MBA, MCA, and AICTE-approved PGDM with clear CTAs.",
        "Built a mobile-first marketing site with enquiry forms wired into the admissions workflow.",
        "Optimised for local SEO, performance, and accessibility so prospects trust the brand on first visit.",
      ],
      results: [
        { value: "Live", label: "Production at avviareeducations.org" },
        { value: "5+", label: "Program pages shipped" },
        { value: "AA", label: "Performance & SEO baseline" },
      ],
      quote: {
        text: "The site finally reflects who we are as an institute — parents and students get it immediately.",
        name: "Admissions Team",
        role: "Avviare Educational Hub",
      },
    },
  },
  {
    slug: "crm-portal",
    name: "CRM Portal",
    tagline: "College & institute lead management for admins and counsellors",
    category: "SaaS",
    outcome: "End-to-end CRM for leads, follow-ups, and counsellor pipelines",
    color: "#1e40af",
    initials: "CP",
    year: "2025",
    caseStudy: {
      duration: "12 weeks",
      role: "Product design & Django full-stack build",
      services: ["Full-Stack Development", "SaaS Product Development", "Android"],
      tech: ["Django", "PostgreSQL", "Redis", "Celery", "Kotlin"],
      challenge:
        "Admissions teams were juggling spreadsheets, WhatsApp threads, and missed follow-ups. They needed one CRM for lead intake, counsellor assignment, activities, targets, and reporting.",
      approach: [
        "Built a Django CRM with separate admin and counsellor workspaces, granular permissions, and analytics.",
        "Shipped bulk lead import from CSV/Excel, webhook intake from the website, and visit scheduling flows.",
        "Extended access with a Kotlin Android app and API layer for counsellors in the field.",
      ],
      results: [
        { value: "2", label: "Role-based portals" },
        { value: "CSV/XLSX", label: "Bulk lead import" },
        { value: "API", label: "Website webhook + mobile" },
      ],
      quote: {
        text: "Counsellors finally work from one system — assignments, follow-ups, and targets are all visible.",
        name: "Operations Lead",
        role: "Institute CRM team",
      },
    },
  },
  {
    slug: "ai-interviewer",
    name: "AI Interviewer Agent",
    tagline: "Automated screening interviews for admissions and hiring",
    category: "AI",
    outcome: "24/7 AI-led interviews with structured scoring and summaries",
    color: "#7c3aed",
    initials: "AI",
    year: "2025",
    caseStudy: {
      duration: "8 weeks",
      role: "AI agent design & integration",
      services: ["AI Agents", "Feature Implementation", "Chatbots"],
      tech: ["OpenAI", "Python", "Next.js", "PostgreSQL", "WebRTC"],
      challenge:
        "Counsellors spent hours on repetitive first-round interviews. The institute needed consistent screening at scale without losing signal on candidate fit.",
      approach: [
        "Designed an interviewer agent with role-specific question banks and adaptive follow-ups.",
        "Captured responses via voice and text, then generated structured scorecards and transcript summaries.",
        "Routed high-intent candidates to human counsellors with full context from the AI session.",
      ],
      results: [
        { value: "24/7", label: "Interview availability" },
        { value: "70%", label: "Less counsellor screening time" },
        { value: "Auto", label: "Scored summaries per candidate" },
      ],
      quote: {
        text: "We screen more applicants without burning out the team — and handoffs to counsellors are much sharper.",
        name: "Admissions Director",
        role: "Education client",
      },
    },
  },
  {
    slug: "ai-appointment-scheduler",
    name: "AI Appointment Scheduler",
    tagline: "Smart booking for campus visits and counsellor calls",
    category: "AI",
    outcome: "Conversational scheduling synced with counsellor calendars",
    color: "#0891b2",
    initials: "AS",
    year: "2025",
    caseStudy: {
      duration: "5 weeks",
      role: "AI workflow & CRM integration",
      services: ["AI Agents", "Chatbots", "Feature Implementation"],
      tech: ["OpenAI", "Django", "Cal.com API", "WhatsApp", "Webhooks"],
      challenge:
        "Prospects dropped off when booking a visit required back-and-forth calls. The team needed instant scheduling that respected counsellor availability and CRM records.",
      approach: [
        "Built a conversational scheduler on web and WhatsApp that collects intent, program interest, and preferred slots.",
        "Synced confirmed appointments to the CRM Portal with automatic counsellor assignment rules.",
        "Added reminders, rescheduling, and no-show follow-ups to keep the pipeline moving.",
      ],
      results: [
        { value: "3×", label: "More visits booked" },
        { value: "<2 min", label: "Avg. booking time" },
        { value: "CRM", label: "Auto-synced activities" },
      ],
      quote: {
        text: "Students book campus visits in minutes — our counsellors show up prepared because the CRM already has context.",
        name: "Counsellor Lead",
        role: "Admissions team",
      },
    },
  },
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

export const featuredProjects = projects.slice(0, 4);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = [
  "All",
  "EdTech",
  "AI",
  "Web Apps",
  "Design",
  "SaaS",
  "Consulting",
] as const;
