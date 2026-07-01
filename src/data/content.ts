import type { ClientLogo, Faq, Metric, Testimonial } from "@/types";

export const metrics: Metric[] = [
  { value: "120", label: "Products shipped" },
  { value: "98%", label: "Client retention" },
  { value: "8", label: "Countries served" },
  { value: "4.2M", label: "Lines of production code" },
];

export const clientLogos: ClientLogo[] = [
  { name: "Northwind" },
  { name: "Brightloop" },
  { name: "Cobalt" },
  { name: "Driftwood" },
  { name: "Vela" },
  { name: "Quanta" },
  { name: "Mosaic" },
  { name: "Harborline" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "They shipped faster than our last two agencies combined, and the code was clean enough that our team picked it up without a single handover call.",
    name: "Dana Whitfield",
    role: "VP of Engineering",
    company: "Brightloop",
  },
  {
    quote:
      "Reload scoped our MVP ruthlessly, built the billing and auth plumbing right, and got us to revenue in ten weeks. Exactly what a pre-seed team needs.",
    name: "Marcus Lee",
    role: "Founder & CEO",
    company: "Cobalt",
  },
  {
    quote:
      "The architecture they put in place let us scale from 200 to 20,000 users without a rewrite. That's the kind of engineering judgment you want early.",
    name: "Priya Nair",
    role: "CTO",
    company: "Vela",
  },
];

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
