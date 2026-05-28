import { Minus, Plus } from "lucide-react";
import { siteConfig } from "@/lib/site-config";



const mapEmbedUrl = `https://maps.google.com/maps?q=${siteConfig.geo.latitude},${siteConfig.geo.longitude}&z=17&output=embed`;

export function Faq() {
  return (
    <section id="faq" className="deferred-section bg-white px-6 pb-12 pt-10 md:px-14 md:pb-14 md:pt-[52px]">
      <div className="mx-auto mb-8 max-w-[760px] text-center">
        <h2 className="mb-4 font-section-heading text-[29px] font-extrabold text-text-dark md:text-[38px]">
          Frequently Asked
          <br />
          Questions
        </h2>
        <p className="mx-auto max-w-[700px] font-body-main text-[15px] leading-7 text-text-muted">
          Find quick answers about appointments, dental checkups, root canal care,
          dental implants, teeth whitening, and emergency visits at Dr. Varun&apos;s
          Dental Clinic in Viman Nagar, Pune.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-7 md:grid-cols-2">
        <div className="w-full max-w-[520px] space-y-3">
          {siteConfig.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[18px] bg-white text-text-dark shadow-soft transition-colors open:bg-primary-container open:text-white"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-left">
                <span className="flex items-center gap-4">
                  <FaqToothIcon
                    className="h-5 w-5 shrink-0 text-primary-container group-open:text-white"
                    aria-hidden="true"
                  />
                  <span className="font-card-title text-[14px] font-bold md:text-[16px]">
                    {faq.question}
                  </span>
                </span>
                <span className="shrink-0 text-text-muted group-open:text-white">
                  <Plus className="h-5 w-5 group-open:hidden" aria-hidden="true" />
                  <Minus className="hidden h-5 w-5 group-open:block" aria-hidden="true" />
                </span>
              </summary>
              <p className="-mt-1 px-5 pb-5 font-body-main text-[15px] leading-7 text-white/96 group-open:text-white/96">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="relative h-[280px] overflow-hidden rounded-[22px] border border-slate-100 bg-surface-container-low shadow-soft md:h-[380px]">
          <iframe
            title={`${siteConfig.name} location map`}
            src={mapEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function FaqToothIcon({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 240 270"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M72 24 C53 24 38 39 38 59 V105 C38 121 44 136 55 150 C64 161 69 175 70 192 L72 223 C73 240 83 251 96 251 C109 251 118 240 120 223 L124 169 C125 158 131 151 138 151 C145 151 151 158 152 169 L156 223 C158 240 167 251 180 251 C193 251 203 240 204 223 L206 192 C207 175 212 161 221 150 C232 136 238 121 238 105 V59 C238 39 223 24 204 24 C190 24 177 30 163 39 L138 55 L113 39 C99 30 86 24 72 24 Z"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
