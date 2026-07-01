import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Metrics } from "@/components/sections/metrics";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ServicesOverview />
      <Metrics />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <CtaSection />
    </>
  );
}
