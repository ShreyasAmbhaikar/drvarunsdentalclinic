import type { Metadata } from "next";
import { About } from "@/components/landing/about";
import { BeforeAfterSmile } from "@/components/landing/before-after-smile";
import { Faq } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { StatementCta } from "@/components/landing/statement-cta";
import { Team } from "@/components/landing/team";
import { Testimonials } from "@/components/landing/testimonials";
import { getStructuredData } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.url}/dental-clinic-viman-nagar/`
  }
};

export default function Home() {
  const structuredData = getStructuredData();

  return (
    <>
      <main id="main-content" className="pt-[80px]">
        <Hero />
        <Services />
        <BeforeAfterSmile />
        <About />
        <Team />
        <Testimonials />
        <StatementCta />
        <Faq />
      </main>

      {structuredData.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(entry).replace(/</g, "\\u003c")
          }}
        />
      ))}
    </>
  );
}
