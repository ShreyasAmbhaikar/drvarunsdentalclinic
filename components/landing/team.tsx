import Image from "next/image";
import { Award, BadgeCheck, Cross, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Team() {
  const [doctor] = siteConfig.team;

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-primary-container px-6 pb-14 pt-14 md:px-14 md:pb-16 md:pt-16"
    >
      <div className="absolute right-[-6%] top-20 h-56 w-56 rounded-full bg-white/6 blur-3xl" />

      <div className="relative mx-auto max-w-[1140px]">
        <DoctorProfile doctor={doctor} />
      </div>
    </section>
  );
}

type Doctor = (typeof siteConfig.team)[number];

function DoctorProfile({ doctor }: { doctor: Doctor }) {
  const highlightIcons = [Cross, Award, BadgeCheck] as const;

  return (
    <article className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10">
      <div className="relative mx-auto w-full max-w-[380px]">
        <div className="pointer-events-none absolute -left-6 -top-6 z-[15] h-[84px] w-[84px] rounded-full border-2 border-dashed border-[rgba(243,224,196,0.9)] sm:-left-7 sm:-top-7 sm:h-[92px] sm:w-[92px]" />
        <div className="pointer-events-none absolute -bottom-6 right-1 z-[15] h-[76px] w-[76px] rounded-full border-2 border-dashed border-[rgba(214,151,38,0.72)] sm:-bottom-8 sm:right-[-10px] sm:h-[88px] sm:w-[88px]" />
        <div className="absolute inset-x-6 bottom-8 top-12 rounded-[42px] bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_100%)]" />
        <div className="absolute left-0 top-14 h-[72%] w-[76%] rounded-[36px] border border-white/10" />

        <div className="relative z-10 overflow-hidden rounded-[34px]">
          <Image
            src={doctor.image}
            alt={doctor.alt}
            width={760}
            height={940}
            sizes="(min-width: 1024px) 470px, (min-width: 768px) 50vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="absolute bottom-6 left-4 z-20 rounded-full border border-white/12 bg-[rgba(255,255,255,0.92)] px-4 py-3 shadow-[0_16px_36px_rgba(37,20,6,0.18)]">
          <span className="font-label-sm text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-container">
            Dental Surgeon and Implantologist
          </span>
        </div>
      </div>

      <div className="text-white lg:pl-4">
        <h3 className="font-card-title text-[32px] font-extrabold leading-tight text-white md:text-[50px]">
          {doctor.name}
        </h3>
        <p className="mt-4 font-label-sm text-[13px] font-semibold uppercase tracking-[0.18em] text-white/74">
          {doctor.role}
        </p>
        <p className="mt-4 max-w-[580px] font-body-main text-[16px] leading-7 text-white/84">
          {doctor.summary}
        </p>

        <div className="mt-7 space-y-4">
          {doctor.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index] ?? Sparkles;

            return (
              <div
                key={highlight}
                className="flex items-start gap-4 border-b border-white/12 pb-5 last:border-b-0 last:pb-0"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-primary-container shadow-[0_12px_28px_rgba(37,20,6,0.16)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="font-body-main text-[15px] leading-6 text-white/88">
                  {highlight}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0)_100%)]" />
          <p className="font-label-sm text-[12px] font-semibold uppercase tracking-[0.24em] text-white/66">
            Personal care | Modern dentistry
          </p>
        </div>
      </div>
    </article>
  );
}
