import type { Metadata } from "next";
import { Section } from "@/components/bento";
import { PageHero } from "@/components/sections/page-hero";
import { WorkGrid } from "@/components/sections/work-grid";
import { ClientLogos } from "@/components/sections/client-logos";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from Reload — SaaS platforms, web apps, and internal tools with measurable engineering outcomes.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected projects"
        title="Work we're proud to put our name on"
        description="A sample of products we've designed and built. Every one shipped, and every one moved a number that mattered to the business behind it."
      />

      <Section>
        <WorkGrid />
      </Section>

      <ClientLogos />

      <CtaSection
        title="Your project could be next"
        description="We take on a handful of engagements at a time so each one gets a senior team. Book a call to see if we're a fit."
      />
    </>
  );
}
