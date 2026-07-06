import type { ClientLogo, Faq, Metric, ProductType, Testimonial } from "@/types";
import testimonialsData from "../../data/cms/testimonials.json";

export const metrics: Metric[] = [
  { value: "10", label: "Products shipped" },
  { value: "4", label: "Live production builds" },
  { value: "8", label: "Core services" },
  { value: "70", label: "Less screening time with AI" },
];

export const clientLogos: ClientLogo[] = [
  { name: "Avviare Educations" },
  { name: "CRM Portal" },
  { name: "AI Interviewer Agent" },
  { name: "AI Appointment Scheduler" },
];

export const productTypes: ProductType[] = [
  {
    title: "ERP systems",
    description: "Finance, inventory, operations, and reporting in one connected platform.",
    icon: "layers",
  },
  {
    title: "Employee management portals",
    description: "HR workflows, attendance, leave, payroll hooks, and team self-service.",
    icon: "code",
  },
  {
    title: "Management portals",
    description: "Custom admin dashboards for operations, approvals, and internal tooling.",
    icon: "plug",
  },
  {
    title: "College websites",
    description: "Admissions, programs, lead capture, and CMS-ready sites for institutions.",
    icon: "globe",
  },
  {
    title: "E-commerce websites",
    description: "Product catalogs, checkout flows, and storefronts built to convert.",
    icon: "rocket",
  },
  {
    title: "Wrapper apps",
    description: "Native Android shells around your web product with push, auth, and store launch.",
    icon: "smartphone",
  },
  {
    title: "AI agents",
    description: "Automated screening, scheduling, support, and workflow agents on your data.",
    icon: "bot",
  },
  {
    title: "CRM software",
    description: "Pipelines, contacts, activity tracking, and sales tooling your team actually uses.",
    icon: "messageCircle",
  },
];

export const testimonials: Testimonial[] = testimonialsData as Testimonial[];

export const faqs: Faq[] = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Most web app engagements run 6 to 12 weeks. A focused MVP can ship in four to eight weeks, while a full SaaS platform is usually a phased build over several months. We give you a concrete timeline after discovery — no vague estimates.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. A good chunk of our work is taking founders from idea to a fundable, usable product. We're comfortable with ambiguity and we'll help you scope an MVP that proves the point without burning the runway.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "We default to TypeScript, React, and Next.js on the front end, with Node.js and PostgreSQL on the back end — but we pick the stack to fit your team and constraints. Boring, reliable technology that your engineers can maintain beats shiny choices every time.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Projects typically start around $5K for a focused engagement and scale with scope. We scope to a fixed range up front so there are no surprise invoices. Pick a budget band on the form and we'll tell you honestly what's realistic.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Always. Launch is the start, not the finish line. We offer retainer arrangements for continued iteration, maintenance, and roadmap work so your product keeps improving after go-live.",
  },
  {
    question: "Who owns the code and repositories?",
    answer:
      "You do — completely. Every line of code, every repo, and all documentation is yours. No lock-in, no proprietary platforms you can't leave.",
  },
];
