import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/about`
  }
};

export default function AboutPage() {
  return (
    <main className="bg-surface-container-lowest px-6 pb-20 pt-[136px] md:px-14 md:pb-24">
      <section className="mx-auto max-w-[960px] rounded-[24px] bg-white p-8 shadow-soft md:p-12">
        <p className="font-label-sm text-[13px] font-semibold uppercase tracking-[0.18em] text-primary-container">
          Placeholder Page
        </p>
        <h1 className="mt-4 font-hero-heading text-[38px] font-extrabold leading-[1.08] text-text-dark md:text-[58px]">
          About
        </h1>
        <p className="mt-5 max-w-[620px] font-body-main text-[16px] leading-7 text-text-muted">
          This page is intentionally kept as a placeholder for now. We can add the doctor profile,
          clinic story, values, and credentials here in the next round.
        </p>
      </section>
    </main>
  );
}
