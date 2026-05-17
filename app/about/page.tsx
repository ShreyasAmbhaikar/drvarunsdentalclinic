import type { Metadata } from "next";
import Image from "next/image";
import { Award, BadgeCheck, Cross, SmilePlus, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/about`
  }
};

const clinicHighlights = [
  {
    icon: Cross,
    label: "Calm and reassuring chairside care"
  },
  {
    icon: Sparkles,
    label: "Modern smile planning and aesthetic dentistry"
  },
  {
    icon: BadgeCheck,
    label: "Precision-led hygiene and treatment protocols"
  }
] as const;

const achievements = [
  {
    title: "17+ Years",
    detail: "In Viman Nagar",
    icon: Cross,
    className:
      "left-[-2%] top-[11%] sm:left-[-5%] sm:top-[12%] lg:left-[-8%]",
    delay: "0s",
    duration: "4.2s"
  },
  {
    title: "Best Dentist",
    detail: "Awarded in 2017 and 2022",
    icon: Award,
    className:
      "right-[-1%] top-[11%] sm:right-[-5%] sm:top-[12%] lg:right-[-8%]",
    delay: "1s",
    duration: "4.8s"
  },
  {
    title: "IDA Pune East",
    detail: "President, Pune East branch",
    icon: BadgeCheck,
    className:
      "left-[-1%] bottom-[13%] sm:left-[-5%] sm:bottom-[15%] lg:left-[-8%]",
    delay: "1.8s",
    duration: "4.4s"
  },
  {
    title: "Implants & Smiles",
    detail: "Rehab planning",
    icon: Sparkles,
    className:
      "right-[0%] bottom-[14%] sm:right-[-3%] sm:bottom-[16%] lg:right-[-5%]",
    delay: "2.5s",
    duration: "5.1s"
  }
] as const;

export default function AboutPage() {
  return (
    <main className="bg-surface-container-lowest px-6 pb-14 pt-[88px] md:px-14 md:pb-16 md:pt-[104px]">
      <section className="mx-auto max-w-[1080px]">
        <div className="relative mb-14 md:mb-16">
          <div className="relative grid gap-7 lg:grid-cols-[0.94fr_1.06fr] lg:items-start lg:gap-8">
            <div className="max-w-[560px]">
              <h1 className="max-w-[11ch] font-hero-heading text-[32px] font-extrabold leading-[1.04] text-text-dark md:text-[44px]">
                About The Clinic
              </h1>

              <div className="mt-6 max-w-[33rem] space-y-4 font-body-main text-[15px] leading-7 text-text-dark/90 md:text-[16px] md:leading-7">
                <p>
                  Dr. Varun&apos;s Dental Clinic is built around the belief that
                  exceptional dental care should feel reassuring from the moment a
                  patient walks in. The clinic combines advanced technology, clear
                  treatment planning, and a welcoming environment that helps patients
                  feel relaxed and informed.
                </p>
                <p>
                  From preventive care and smile improvements to complex rehabilitation
                  and implant procedures, every treatment is guided by precision, hygiene,
                  transparency, and long-term oral health outcomes for families in Viman
                  Nagar and beyond.
                </p>
              </div>

              <div className="mt-7 grid w-full max-w-[500px] gap-3 sm:grid-cols-2">
                {clinicHighlights.map((highlight) => {
                  const Icon = highlight.icon;

                  return (
                    <div
                      key={highlight.label}
                      className="flex items-start gap-3 rounded-[16px] border border-primary-container/10 bg-white/88 px-4 py-4 shadow-soft backdrop-blur-sm"
                    >
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-primary-container/10 text-primary-container">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="font-body-main text-[13px] font-semibold leading-5 text-text-dark">
                        {highlight.label}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

            <div className="relative mx-auto w-full max-w-[500px] lg:mt-2">
              <div className="absolute -left-5 top-10 h-[78%] w-[84%] rounded-[40px] bg-[linear-gradient(145deg,rgba(255,245,233,0.96)_0%,rgba(248,210,170,0.62)_100%)]" />
              <div className="absolute -right-3 bottom-10 hidden h-16 w-16 rounded-full border border-dashed border-primary-container/20 md:block" />

              <div className="relative rounded-[30px] border border-white/85 bg-white/92 p-3 shadow-[0_24px_60px_rgba(108,60,17,0.15)] backdrop-blur-sm md:rounded-[38px]">
                <div className="relative overflow-hidden rounded-[24px] md:rounded-[30px]">
                  <Image
                    src="/images/gallery/dr-varun-dental-clinic-exterior-viman-nagar.webp"
                    alt="Dr. Varun's Dental Clinic interior"
                    width={760}
                    height={980}
                    className="h-[300px] w-full object-cover object-[18%_50%] sm:h-[370px] lg:h-[470px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#6c3c11]/42 to-transparent" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/20 bg-white/90 px-5 py-4 shadow-soft backdrop-blur-md md:bottom-5 md:left-5 md:right-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-container text-white">
                      <Cross className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-label-sm text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-container">
                        Patient-first space
                      </p>
                      <p className="mt-1 font-body-main text-[14px] leading-6 text-text-dark/80">
                        A welcoming clinic environment designed to keep every visit calm,
                        clear, and comfortable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:gap-8">
          <div className="lg:hidden">
            <h2 className="font-hero-heading text-[32px] font-extrabold leading-[1.06] text-text-dark sm:text-[36px] md:text-[42px]">
              Dr. Varun Tomke
            </h2>
            <p className="mt-4 font-label-sm text-[12px] font-bold uppercase tracking-[0.16em] text-primary-container sm:text-[13px] md:text-[14px]">
              Dental Surgeon And Implantologist
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[480px] px-3 pt-4 sm:px-4 lg:px-0 lg:pt-0">
            <div className="absolute left-[8%] top-[10%] h-[72%] w-[72%] rounded-[42px] bg-white shadow-[0_28px_80px_rgba(108,60,17,0.14)]" />
            <div className="absolute inset-[6%] rounded-[44px] border border-dashed border-white" />
            <div className="absolute right-3 top-3 hidden h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/85 shadow-soft md:flex">
              <SmilePlus className="h-9 w-9 text-cyan-soft" aria-hidden="true" />
            </div>

            <div className="relative rounded-[44px] border border-white/85 bg-white/94 p-4 shadow-[0_26px_70px_rgba(108,60,17,0.18)] backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[34px] border border-primary-container/10 bg-[linear-gradient(160deg,#fff7ef_0%,#fffdfa_100%)]">
                <div className="absolute left-[-6%] top-[-3%] h-40 w-40 rounded-full bg-white/55 blur-3xl" />
                <Image
                  src="/images/gallery/dr-varun-tomke-portrait-viman-nagar.webp"
                  alt="Dr. Varun Tomke portrait"
                  width={620}
                  height={760}
                  className="relative z-10 h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>

            {achievements.map((achievement) => {
              const Icon = achievement.icon;

              return (
                <div
                  key={achievement.title}
                  className={`about-bounce absolute z-20 w-[128px] rounded-[18px] border border-primary-container/10 bg-white px-2.5 py-2.5 shadow-[0_18px_36px_rgba(108,60,17,0.16)] sm:w-[174px] sm:rounded-[22px] sm:px-3.5 sm:py-3.5 ${achievement.className}`}
                  style={{
                    animationDelay: achievement.delay,
                    animationDuration: achievement.duration
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-container/10 text-primary-container sm:h-9 sm:w-9">
                      <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                    </span>
                    <div className="pt-0.5">
                      <p className="font-body-main text-[10px] font-bold leading-4 text-primary-container sm:text-[13px] sm:leading-5">
                        {achievement.title}
                      </p>
                      <p className="mt-0.5 font-body-main text-[9px] font-semibold leading-3.5 text-primary-container/82 sm:text-[12px] sm:leading-4">
                        {achievement.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-[540px] lg:pl-4">
            <h2 className="hidden font-hero-heading text-[34px] font-extrabold leading-[1.06] text-text-dark lg:block lg:text-[50px]">
              Dr. Varun Tomke
            </h2>
            <p className="hidden font-label-sm text-[14px] font-bold uppercase tracking-[0.18em] text-primary-container lg:mt-6 lg:block">
              Dental Surgeon And Implantologist
            </p>

            <div className="mt-2 flex flex-wrap gap-3 sm:mt-4 lg:mt-6">
              {[
                "Full mouth rehabilitation",
                "Smile makeovers",
                "Dental implants",
                "Advanced surgical care"
              ].map((focus) => (
                <span
                  key={focus}
                  className="inline-flex rounded-full border border-primary-container/10 bg-white px-4 py-2 font-body-main text-[14px] font-medium text-text-dark shadow-soft"
                >
                  {focus}
                </span>
              ))}
            </div>

            <div className="mt-7 space-y-4 font-body-main text-[16px] leading-7 text-text-dark/95">
              <p>
                Dr. Varun Tomke is an eminent dental surgeon and implantologist who has
                served patients in Viman Nagar, Kalyani Nagar and Kharadi for more than 17 years with a
                reputation built on consistency, skill, and compassionate care.
              </p>
              <p>
                His excellence in full mouth rehabilitation, smile makeovers, dental
                surgeries, and implants has earned the trust and confidence of generations
                of patients seeking dependable and advanced treatment.
              </p>
              <p>
                Honoured as Best Dentist in 2017 and again in 2022, and currently serving
                as President of the Indian Dental Association Pune East branch, Dr. Varun
                leads a team that is deeply committed to modern dentistry and lasting
                patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
