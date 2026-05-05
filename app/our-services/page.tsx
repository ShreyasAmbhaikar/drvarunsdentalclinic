import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Explore dental care services at ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/our-services`
  }
};

export default function OurServicesPage() {
  return (
    <main className="bg-surface-container-lowest px-6 pb-20 pt-[136px] md:px-14 md:pb-24">
      <section className="mx-auto max-w-[960px] rounded-[24px] bg-white p-8 shadow-soft md:p-12">
        <p className="font-label-sm text-[13px] font-semibold uppercase tracking-[0.18em] text-primary-container">
          Placeholder Page
        </p>
        <h1 className="mt-4 font-hero-heading text-[38px] font-extrabold leading-[1.08] text-text-dark md:text-[58px]">
          Our Services
        </h1>
        <p className="mt-5 max-w-[620px] font-body-main text-[16px] leading-7 text-text-muted">
          This page is set up and ready. We can add the full services content here next while keeping
          the shared header, footer, and WhatsApp button consistent across the site.
        </p>
      </section>
    </main>
  );
}
