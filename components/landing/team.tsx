import Image from "next/image";
import { Award, BadgeCheck, Cross, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Team() {
  const [doctor] = siteConfig.team;

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-primary-container px-6 pb-[96px] pt-20 md:px-14"
    >
      <div className="absolute left-[8%] top-12 h-28 w-28 rounded-full border border-dashed border-white/14" />
      <div className="absolute bottom-16 right-[9%] h-24 w-24 rounded-full border border-dashed border-cyan-soft/30" />
      <div className="absolute right-[-6%] top-20 h-56 w-56 rounded-full bg-white/6 blur-3xl" />

      <div className="relative mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-[760px] text-center text-white">
          <p className="font-label-sm text-[12px] font-semibold uppercase tracking-[0.22em] text-white/68">
            Meet Your Lead Doctor
          </p>
          <h2 className="mt-4 font-section-heading text-[32px] font-extrabold leading-[1.14] text-white md:text-[44px]">
            Your care is personally guided by Dr. Varun Tomke.
          </h2>
          <p className="mt-5 font-body-main text-[16px] leading-8 text-white/78">
            One experienced doctor, one thoughtful point of care, and a calm
            modern dental experience from consultation to treatment.
          </p>
        </div>

        <DoctorProfile doctor={doctor} />
      </div>
    </section>
  );
}

type Doctor = (typeof siteConfig.team)[number];

function DoctorProfile({ doctor }: { doctor: Doctor }) {
  const highlightIcons = [Cross, Award, BadgeCheck] as const;

  return (
    <article className="mt-14 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <div className="relative mx-auto w-full max-w-[430px]">
        <div className="absolute inset-x-6 bottom-8 top-12 rounded-[42px] bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_100%)]" />
        <div className="absolute left-0 top-14 h-[72%] w-[76%] rounded-[36px] border border-white/10" />
        <div className="absolute right-3 top-2 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-white shadow-soft backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-[#ffd45b]" aria-hidden="true" />
          <span className="font-label-sm text-[11px] font-semibold uppercase tracking-[0.18em] text-white/88">
            17+ years of care
          </span>
        </div>

        <div className="relative overflow-hidden rounded-[34px]">
          <Image
            src={doctor.image}
            alt={doctor.alt}
            width={760}
            height={940}
            sizes="(min-width: 1024px) 430px, (min-width: 768px) 50vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="absolute bottom-6 left-4 rounded-full border border-white/12 bg-[rgba(255,255,255,0.92)] px-4 py-3 shadow-[0_16px_36px_rgba(37,20,6,0.18)]">
          <span className="font-label-sm text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-container">
            Viman Nagar • Wagholi
          </span>
        </div>
      </div>

      <div className="text-white lg:pl-4">
        <p className="font-label-sm text-[12px] font-semibold uppercase tracking-[0.22em] text-white/68">
          Lead Doctor Profile
        </p>
        <h3 className="mt-4 font-card-title text-[34px] font-extrabold leading-tight text-white md:text-[54px]">
          {doctor.name}
        </h3>
        <p className="mt-4 font-label-sm text-[13px] font-semibold uppercase tracking-[0.18em] text-white/74">
          {doctor.role}
        </p>
        <p className="mt-6 max-w-[590px] font-body-main text-[18px] leading-9 text-white/84">
          {doctor.summary}
        </p>

        <div className="mt-8 space-y-5">
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
                <p className="font-body-main text-[16px] leading-7 text-white/88">
                  {highlight}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0)_100%)]" />
          <p className="font-label-sm text-[12px] font-semibold uppercase tracking-[0.24em] text-white/66">
            Personal care • Modern dentistry
          </p>
        </div>
      </div>
    </article>
  );
}
