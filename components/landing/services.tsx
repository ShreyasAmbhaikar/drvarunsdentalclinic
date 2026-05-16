import Link from "next/link";
import { HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const icons = [Sparkles, ShieldCheck, HeartPulse];

export function Services() {
  return (
    <section id="services" className="bg-primary-container px-6 py-[78px] md:px-14">
      <h2 className="mb-12 text-center font-section-heading text-[31px] font-extrabold text-white md:text-[38px]">
        Our Dental Services
      </h2>
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-7 md:grid-cols-3">
        {siteConfig.services.map((service, index) => {
          const Icon = icons[index];
          return (
            <Link
              key={service.title}
              href={service.href}
              className="group flex h-full min-h-[236px] flex-col rounded-[16px] bg-white p-7 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(108,60,17,0.12)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container text-white">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mb-4 font-card-title text-[20px] font-bold text-text-dark">
                {service.title}
              </h3>
              <p className="mb-8 font-body-main text-[15px] leading-7 text-text-muted">
                {service.description}
              </p>
              <span className="mt-auto inline-flex h-[38px] w-max items-center rounded-full border border-primary-container px-6 font-label-sm text-[14px] font-semibold text-primary-container transition-colors group-hover:bg-primary-container group-hover:text-white">
                Learn More
              </span>
            </Link>
          );
        })}
      </div>
      <div className="mt-[52px] text-center">
        <Link
          href="/our-services"
          className="inline-flex h-[42px] items-center rounded-full bg-cyan-soft px-[28px] font-label-sm text-sm font-semibold text-white transition-colors duration-200 hover:bg-cyan"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
