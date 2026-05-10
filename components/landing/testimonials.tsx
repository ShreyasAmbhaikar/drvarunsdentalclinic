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
      className="overflow-hidden bg-[linear-gradient(180deg,#fff9f1_0%,#fff4e7_56%,#fff9f1_100%)] px-6 py-20 md:px-14 md:py-24"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5 md:pt-10">
          <h2 className="mb-4 max-w-[12ch] font-section-heading text-[40px] font-extrabold leading-[1.04] text-text-dark md:text-[56px]">
            <span className="block whitespace-nowrap">What Patients</span>
            <span className="block whitespace-nowrap">Are Saying</span>
          </h2>
          <p className="mb-8 max-w-[30ch] font-body-main text-[16px] leading-7 text-text-muted">
            Here are some recent wonderful comments we have received from patients who trust{" "}
            {siteConfig.shortName} for calm, confident dental care.
          </p>
          <div className="flex w-full max-w-[396px] items-center gap-4 rounded-[22px] bg-[linear-gradient(135deg,#c96a12_0%,#9d4e08_100%)] px-6 py-6 text-white shadow-[0_26px_48px_rgba(157,78,8,0.26)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(145deg,#fff3bf_0%,#ffd761_100%)] shadow-[0_0_22px_rgba(255,212,77,0.38)]">
              <Star
                className="h-6 w-6 fill-current text-[#d98412] drop-shadow-[0_0_8px_rgba(255,243,191,0.7)]"
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="font-hero-heading text-[42px] font-extrabold leading-none">4.8</div>
              <div className="mt-1 font-label-sm text-[13px] font-semibold text-white/88">
                122 reviews
              </div>
            </div>
          </div>
        </div>

        <div className="relative md:col-span-7">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#fff9f1] via-[#fff9f1]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-[#fff9f1] via-[#fff9f1]/88 to-transparent" />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6 md:pt-5">
              {leftColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>

            <div className="space-y-6 md:pt-16">
              {rightColumn.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  fadedBottom={index === rightColumn.length - 1}
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
  return (
    <article
      className={`relative overflow-hidden rounded-[24px] border border-[#f2e1cb] bg-white/96 p-6 shadow-[0_24px_44px_rgba(133,82,32,0.08)] backdrop-blur ${
        fadedBottom ? "border-b-transparent" : ""
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="overflow-hidden rounded-full border border-[#ecd7bd] bg-[#fff4e8]">
            <Image
              src={testimonial.image}
              alt={testimonial.alt}
              width={56}
              height={56}
              className="h-14 w-14 object-cover"
            />
          </div>
          <div>
            <h3 className="font-card-title text-[20px] font-bold leading-tight text-text-dark">
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

      <p className="font-body-main text-[15px] leading-8 text-text-muted">
        {truncateQuote(testimonial.quote, 220)}
      </p>

      {fadedBottom ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[-2px] bottom-[-2px] h-28 rounded-b-[26px] bg-gradient-to-t from-[#fff7ee] via-[#fff7ee]/95 to-transparent"
        />
      ) : null}
    </article>
  );
}
