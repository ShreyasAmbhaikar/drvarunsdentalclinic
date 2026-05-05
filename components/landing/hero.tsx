import Image from "next/image";
import { CalendarCheck, SmilePlus, UsersRound } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-container-lowest px-6 pb-16 pt-16 md:px-14">
      <div className="relative z-10 mx-auto max-w-[1180px] text-center">
        <div className="mb-7 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {siteConfig.images.avatars.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  width={40}
                  height={40}
                  alt={`Happy patient avatar ${index + 1}`}
                  className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                  priority={index === 0}
                />
              ))}
            </div>
            <span className="font-label-sm text-[13px] font-semibold text-text-muted">
              16k+ Satisfied Patients
            </span>
          </div>
        </div>

        <h1 className="mx-auto mb-5 max-w-5xl font-hero-heading text-[38px] font-extrabold leading-[1.07] text-text-dark sm:text-[50px] md:text-[64px]">
          <span className="text-primary-container">Dental</span> Clinic{" "}
          <span className="mx-2 inline-block h-[40px] w-[98px] align-middle sm:h-[48px] sm:w-[120px]">
            <Image
              src={siteConfig.images.smilePill}
              width={120}
              height={48}
              alt="Healthy smile"
              className="h-full w-full rounded-full object-cover shadow-sm"
              priority
            />
          </span>
          That <br />
          You Can Trust
        </h1>

        <p className="mx-auto mb-9 max-w-[640px] font-body-main text-[15px] leading-7 text-text-muted">
          Experience gentle, modern dental care designed to keep your smile
          healthy, confident, and bright. Our trusted team is here to make every
          visit comfortable.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="inline-flex h-[46px] items-center justify-center rounded-full bg-primary-container px-[28px] font-label-sm text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark"
          >
            View Services
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex h-[46px] items-center justify-center rounded-full border-2 border-cyan-soft px-[28px] font-label-sm text-sm font-semibold text-cyan-soft transition-colors duration-200 hover:bg-cyan-soft/10"
          >
            Schedule a Call
          </a>
        </div>
      </div>

      <div className="absolute left-[10%] top-28 hidden h-[126px] w-[126px] items-center justify-center lg:flex">
        <svg className="rotating-badge absolute h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
          <path
            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            fill="none"
            id="heroBadgeCircle"
          />
          <text className="fill-text-dark text-[10px] font-bold uppercase tracking-[0.2em]">
            <textPath href="#heroBadgeCircle" startOffset="0%">
              Dr Varun Dental Clinic - 12+ Years Experience -
            </textPath>
          </text>
        </svg>
        <SmilePlus className="absolute h-10 w-10 text-cyan-soft" aria-hidden="true" />
      </div>

      <div className="absolute right-[10%] top-28 hidden h-[118px] w-[118px] items-center justify-center lg:flex">
        <Image
          src={siteConfig.images.tooth3d}
          width={130}
          height={130}
          alt="3D tooth illustration"
          className="tooth-float h-full w-full object-contain"
        />
      </div>

      <div className="mx-auto mt-16 grid max-w-[1140px] grid-cols-1 gap-6 px-0 sm:grid-cols-2 md:grid-cols-4 md:px-4">
        <div className="relative h-[306px] overflow-hidden rounded-[22px] shadow-sm">
          <Image
            src={siteConfig.images.heroCheckup}
            alt="Dental checkup with dentist and patient"
            fill
            sizes="(min-width: 768px) 260px, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative h-[225px] overflow-hidden rounded-[22px] shadow-sm md:mt-[81px]">
          <Image
            src={siteConfig.images.childPatient}
            alt="Child dental patient"
            fill
            sizes="(min-width: 768px) 240px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative flex h-[306px] flex-col justify-end rounded-[22px] bg-primary-container p-7 shadow-sm">
          <span className="absolute left-7 top-7 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white/20 text-white">
            <UsersRound className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="mt-auto">
            <div className="mb-2 font-hero-heading text-[36px] font-extrabold leading-none text-white">
              86+
            </div>
            <div className="font-body-main text-[15px] text-white/90">
              Skilled Dentists
            </div>
          </div>
        </div>
        <div className="relative h-[306px] overflow-hidden rounded-[22px] shadow-sm">
          <Image
            src={siteConfig.images.smilingPatient}
            alt="Smiling dental patient"
            fill
            sizes="(min-width: 768px) 260px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-10 hidden rounded-full bg-cyan-soft/10 p-4 text-cyan-soft md:block">
        <CalendarCheck className="h-6 w-6" aria-hidden="true" />
      </div>
    </section>
  );
}
