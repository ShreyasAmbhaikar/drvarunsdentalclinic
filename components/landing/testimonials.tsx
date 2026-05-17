import Image from "next/image";
import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

function truncateQuote(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}...`;
}

export function Testimonials() {
  const leftColumn = siteConfig.testimonials.filter((_, index) => index % 2 === 0);
  const rightColumn = siteConfig.testimonials.filter((_, index) => index % 2 === 1);

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[linear-gradient(180deg,#fff9f1_0%,#fff4e7_56%,#fff9f1_100%)] px-6 pb-8 pt-10 md:px-10 md:pb-10 md:pt-12 lg:px-14"
    >
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-7">
        <div className="lg:col-span-5 lg:pt-6">
          <h2 className="mb-4 max-w-[12ch] font-section-heading text-[34px] font-extrabold leading-[1.04] text-text-dark md:text-[44px] lg:text-[50px]">
            <span className="block whitespace-nowrap">What Patients</span>
            <span className="block whitespace-nowrap">Are Saying</span>
          </h2>
          <p className="mb-6 max-w-[31ch] font-body-main text-[15px] leading-7 text-text-muted">
            Here are some recent wonderful comments we have received from patients who trust{" "}
            {siteConfig.shortName} for calm, confident dental care.
          </p>
          <div className="flex w-full max-w-[360px] items-center gap-4 rounded-[22px] bg-[linear-gradient(135deg,#c96a12_0%,#9d4e08_100%)] px-5 py-5 text-white shadow-[0_26px_48px_rgba(157,78,8,0.26)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(145deg,#fff3bf_0%,#ffd761_100%)] shadow-[0_0_22px_rgba(255,212,77,0.38)]">
              <Star
                className="h-6 w-6 fill-current text-[#d98412] drop-shadow-[0_0_8px_rgba(255,243,191,0.7)]"
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="font-hero-heading text-[38px] font-extrabold leading-none">4.8</div>
              <div className="mt-1 font-label-sm text-[13px] font-semibold text-white/88">
                121 reviews
              </div>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-24 bg-gradient-to-b from-[#fff9f1] via-[#fff9f1]/80 to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-28 bg-gradient-to-t from-[#fff9f1] via-[#fff9f1]/88 to-transparent md:h-32 lg:block" />

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-5 md:pt-3">
              {leftColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>

            <div className="space-y-5 sm:pt-10">
              {rightColumn.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  fadedBottom = false
}: {
  testimonial: (typeof siteConfig.testimonials)[number];
  fadedBottom?: boolean;
}) {
  const fadeMask = fadedBottom
    ? {
        WebkitMaskImage:
          "linear-gradient(to bottom, #000 0%, #000 56%, rgba(0,0,0,0.62) 74%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, #000 0%, #000 56%, rgba(0,0,0,0.62) 74%, transparent 100%)"
      }
    : undefined;

  return (
    <article
      className="relative overflow-hidden rounded-[24px] border border-[#f2e1cb] bg-white/96 p-5 shadow-[0_24px_44px_rgba(133,82,32,0.08)] backdrop-blur md:p-6"
      style={fadeMask}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="shrink-0 overflow-hidden rounded-full border border-[#ecd7bd] bg-[#fff4e8]">
            <Image
              src={testimonial.image}
              alt={testimonial.alt}
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 object-cover"
            />
          </div>
          <div className="min-w-0">
            <h3 className="break-words font-card-title text-[18px] font-bold leading-tight text-text-dark md:text-[20px]">
              {testimonial.name}
            </h3>
            <div className="mt-2 flex gap-1.5">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${
                    index < testimonial.rating
                      ? "fill-current text-[#e58a21]"
                      : "fill-current text-[#f4dcc0]"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="font-section-heading text-[44px] font-black leading-none text-primary-container"
        >
          &rdquo;
        </span>
      </div>

      <p className="font-body-main text-[14px] leading-7 text-text-muted">
        {truncateQuote(testimonial.quote, 220)}
      </p>

    </article>
  );
}
