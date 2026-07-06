import { Footer } from "@/components/footer";
import { LoadingIntro } from "@/components/loading-intro";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingIntro />
      <Navbar />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
