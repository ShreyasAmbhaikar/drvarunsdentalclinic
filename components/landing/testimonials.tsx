import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

function truncateQuote(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}...`;
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-section-light px-6 py-20 md:px-14">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="mb-4 font-section-heading text-[31px] font-extrabold text-text-dark md:text-[38px]">
            What Patients Are Saying
          </h2>
          <p className="mb-8 font-body-main text-base leading-7 text-text-muted">
            Hear from patients who trust {siteConfig.shortName} for comfortable
            care and lasting results.
          </p>
          <div className="flex h-[110px] w-full max-w-[280px] items-center gap-4 rounded-[16px] bg-primary-container p-6 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <Star className="h-6 w-6 fill-current text-[#ffd34d]" aria-hidden="true" />
            </div>
            <div>
              <div className="font-hero-heading text-3xl font-extrabold">4.8</div>
              <div className="font-label-sm text-[13px] font-semibold opacity-90">
                116 reviews
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:columns-2 sm:gap-6 md:col-span-8">
          {siteConfig.testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="break-inside-avoid rounded-[18px] bg-white p-[28px] shadow-soft"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="overflow-hidden rounded-full border border-primary-container/10 bg-section-light">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.alt}
                      width={52}
                      height={52}
                      className="h-[52px] w-[52px] object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-card-title text-[18px] font-bold text-text-dark">
                      {testimonial.name}
                    </h3>
                    <div className="mt-2 flex gap-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          className="h-4 w-4 fill-current text-[#f6bf3d]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <Quote className="h-8 w-8 shrink-0 text-primary-container" aria-hidden="true" />
              </div>
              <p className="font-body-main text-[14px] leading-6 text-text-muted">
                {truncateQuote(testimonial.quote, 260)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
