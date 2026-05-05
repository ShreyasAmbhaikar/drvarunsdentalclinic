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
            <article
              key={service.title}
              className="flex h-full min-h-[236px] flex-col rounded-[16px] bg-white p-7 shadow-sm"
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
              <a
                href={`#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="mt-auto inline-flex h-[38px] w-max items-center rounded-full border border-primary-container px-6 font-label-sm text-[14px] font-semibold text-primary-container transition-colors hover:bg-primary-container/5"
              >
                Learn More
              </a>
            </article>
          );
        })}
      </div>
      <div className="mt-[52px] text-center">
        <a
          href="#faq"
          className="inline-flex h-[42px] items-center rounded-full bg-cyan-soft px-[28px] font-label-sm text-sm font-semibold text-white transition-colors duration-200 hover:bg-cyan"
        >
          View All Services
        </a>
      </div>
    </section>
  );
}
