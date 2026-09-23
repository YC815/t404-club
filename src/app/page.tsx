import { About } from "@/components/sections/about";
import { Activities } from "@/components/sections/activities";
import { FaqSection } from "@/components/sections/faq-section";
import { Gallery } from "@/components/sections/gallery";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Join } from "@/components/sections/join";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <About />
        <Activities />
        <Gallery />
        <HowItWorks />
        <FaqSection />
        <Join />
      </main>
      <SiteFooter />
    </>
  );
}
