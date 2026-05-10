import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarCheck2,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock4,
  MapPin,
  Phone,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Stethoscope,
  WandSparkles
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const pagePath = "/teeth-cleaning-in-viman-nagar";
const pageUrl = `${siteConfig.url}${pagePath}`;
const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
const heroImage = "/images/teeth-cleaning-viman-nagar.jpg";
const clinicImage = "/images/root-canal-treatment-clinic.jpg";
const heroImageAbsolute = new URL(heroImage, siteConfig.url).toString();

export const metadata: Metadata = {
  title: "Teeth Cleaning in Viman Nagar | Dental Scaling Near Me",
  description:
    "Get professional teeth cleaning and dental scaling in Viman Nagar at Dr. Varun's Dental Clinic. Visit an experienced dentist for tartar removal, polishing, bad breath and gum care.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Teeth Cleaning in Viman Nagar, Pune",
    description:
      "Professional dental scaling, polishing, tartar removal, bad breath care, and bleeding gums evaluation in Viman Nagar.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: heroImageAbsolute,
        width: 1200,
        height: 630,
        alt: "Teeth cleaning in Viman Nagar at Dr Varun Dental Clinic"
      }
    ]
  }
};

const symptoms = [
  "Yellow or brown tartar deposits",
  "Bad breath that does not improve with brushing",
  "Bleeding gums while brushing",
  "Swollen or tender gums",
  "Food getting stuck between teeth",
  "Visible stains from tea, coffee, tobacco, or smoking",
  "Rough feeling on teeth",
  "Long gap since your last dental checkup"
] as const;

const cleaningSteps = [
  {
    title: "Dental Examination",
    text: "The dentist checks tartar build-up, plaque deposits, gum bleeding, bad breath, cavities, stains, existing restorations, and overall oral hygiene."
  },
  {
    title: "Plaque and Tartar Removal",
    text: "Plaque and hardened tartar are removed from the tooth surface and gumline using dental scaling instruments or ultrasonic cleaning."
  },
  {
    title: "Cleaning Between Teeth",
    text: "Areas between the teeth are cleaned carefully to remove food debris and deposits where gum problems and cavities often begin."
  },
  {
    title: "Teeth Polishing",
    text: "After scaling, polishing may be done to smoothen the tooth surface and remove minor external stains."
  },
  {
    title: "Oral Hygiene Guidance",
    text: "The dentist may guide you on brushing technique, flossing, interdental brushes, mouthwash, gum care, and follow-up intervals."
  }
] as const;

const benefits = [
  "Removes tartar and plaque build-up",
  "Reduces gum bleeding",
  "Improves bad breath",
  "Helps prevent gum infection",
  "Reduces stains and improves cleanliness",
  "Supports long-term gum health",
  "Helps detect cavities and gum problems early",
  "Maintains crowns, bridges, braces, and implants better"
] as const;

const reasons = [
  {
    icon: BadgeCheck,
    title: "17+ Years Experience",
    text: "Dr. Varun Tomke provides preventive and advanced dental care with patient-first guidance."
  },
  {
    icon: ShieldCheck,
    title: "Gentle Scaling",
    text: "Cleaning is planned to remove deposits carefully while keeping the visit comfortable."
  },
  {
    icon: Sparkles,
    title: "Scaling and Polishing",
    text: "Professional cleaning can remove tartar, plaque, and minor external stains for a fresher feel."
  },
  {
    icon: MapPin,
    title: "Near PNG Jewellers",
    text: "Visit Shop No. 3, Ideal Landmark, besides PNG Jewellers in Viman Nagar."
  }
] as const;

const faqs = [
  {
    question: "What is teeth cleaning or dental scaling?",
    answer:
      "Teeth cleaning, also called dental scaling, is a professional dental procedure used to remove plaque, tartar, stains, and bacterial deposits from the teeth and gumline. It helps maintain clean teeth, healthy gums, and fresh breath."
  },
  {
    question: "Is teeth cleaning painful?",
    answer:
      "Teeth cleaning is usually not painful. Most patients feel mild vibration or pressure. If there is heavy tartar, gum swelling, or sensitivity, slight discomfort may be felt in some areas, but it is generally manageable."
  },
  {
    question: "How often should I get teeth cleaning done?",
    answer:
      "Most patients should get professional teeth cleaning every six months. Patients with gum disease, smoking habits, diabetes, braces, implants, crowns, bridges, or heavy tartar may need more frequent cleaning."
  },
  {
    question: "Does dental scaling make teeth white?",
    answer:
      "Dental scaling removes external stains and tartar, so teeth may look cleaner and brighter after the procedure. It does not change the natural shade of teeth like professional teeth whitening."
  },
  {
    question: "Can teeth cleaning damage enamel?",
    answer:
      "No. Professional teeth cleaning does not damage healthy enamel when done correctly. It removes plaque and tartar deposits from the tooth surface and gumline."
  },
  {
    question: "Why do gums bleed during or after cleaning?",
    answer:
      "Gums may bleed during cleaning if they are already inflamed due to plaque, tartar, or gum infection. After proper cleaning and improved oral hygiene, gum bleeding usually reduces over time."
  },
  {
    question: "Can teeth cleaning remove bad breath?",
    answer:
      "Yes, teeth cleaning can help reduce bad breath caused by plaque, tartar, gum infection, or bacterial deposits. If bad breath continues, the dentist may check for cavities, gum disease, tongue coating, or other causes."
  },
  {
    question: "What is the difference between teeth cleaning and deep cleaning?",
    answer:
      "Routine teeth cleaning removes plaque and tartar from the tooth surface and gumline. Deep cleaning may be needed when gum disease has created deeper pockets around teeth."
  },
  {
    question: "Is polishing included after teeth cleaning?",
    answer:
      "In many cases, polishing is done after scaling to smoothen the tooth surface and remove minor external stains. The dentist will advise whether polishing is suitable based on your teeth and gum condition."
  },
  {
    question: "Where can I get teeth cleaning in Viman Nagar?",
    answer:
      "You can visit Dr. Varun's Dental Clinic in Viman Nagar, Pune for teeth cleaning, dental scaling, teeth polishing, bad breath care, bleeding gums evaluation, and preventive dental checkups."
  }
] as const;

const internalLinks = [
  "routine dental checkup",
  "bleeding gums and gum disease treatment",
  "professional teeth whitening after cleaning",
  "tooth coloured dental filling",
  "urgent dental care for gum swelling or pain"
] as const;

const frequentCleaning = [
  "Bleeding gums",
  "Bad breath",
  "Heavy tartar build-up",
  "Smoking or tobacco habits",
  "Diabetes",
  "Braces or aligners",
  "Dental implants",
  "Crowns or bridges",
  "Gum disease history"
] as const;

export default function TeethCleaningPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: "Teeth Cleaning in Viman Nagar, Pune",
      url: pageUrl,
      description: metadata.description,
      image: heroImageAbsolute,
      about: {
        "@type": "MedicalProcedure",
        name: "Teeth Cleaning and Dental Scaling",
        howPerformed:
          "Plaque, tartar, stains, and bacterial deposits are removed from the teeth and gumline, followed by polishing and oral hygiene guidance when suitable."
      },
      provider: {
        "@type": "Dentist",
        "@id": `${siteConfig.url}/#dentist`,
        name: siteConfig.name,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Teeth Cleaning in Viman Nagar",
          item: pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    }
  ];

  return (
    <>
      <main className="bg-surface-container-lowest pt-[72px]">
        <section className="relative overflow-hidden bg-[#fff8ef]">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Dental scaling near me for tartar removal in Viman Nagar Pune"
              fill
              sizes="100vw"
              className="object-cover object-[48%_50%]"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(72,39,10,0.92)_0%,rgba(108,60,17,0.68)_46%,rgba(255,248,239,0.08)_100%)]" />
          </div>

          <div className="relative mx-auto grid min-h-[650px] w-full max-w-[1440px] items-end gap-10 px-6 pb-12 pt-20 md:px-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:pb-16">
            <div className="w-full min-w-0 max-w-[300px] pb-8 text-white md:max-w-[820px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Preventive gum care
              </div>
              <h1 className="max-w-full break-words font-hero-heading text-[32px] font-extrabold leading-[1.08] text-white md:max-w-[14ch] md:text-[68px]">
                <span className="block md:inline">Teeth Cleaning </span>
                <span className="block md:inline">in Viman Nagar, </span>
                <span className="block md:inline">Pune</span>
              </h1>
              <p className="mt-6 max-w-[25ch] font-body-main text-[16px] leading-8 text-white/84 md:max-w-[680px] md:text-[19px] md:leading-9">
                Professional dental scaling and polishing to remove tartar, reduce bad
                breath, and support healthier gums.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={phoneHref}
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 font-label-sm text-sm font-bold text-primary-container shadow-soft transition-colors hover:bg-section-light"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call for Cleaning Appointment
                </a>
                <a
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full border border-white/26 bg-white/10 px-6 font-label-sm text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/16"
                >
                  WhatsApp Appointment
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="w-full min-w-0 max-w-[300px] overflow-hidden rounded-[28px] border border-white/18 bg-white/94 p-5 shadow-[0_24px_70px_rgba(37,20,6,0.22)] backdrop-blur-md md:max-w-none">
              <p className="font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] text-primary-container">
                Quick Clinic Details
              </p>
              <div className="mt-5 space-y-4">
                <HeroDetail icon={<MapPin className="h-4 w-4" />} label="Location">
                  Shop No. 3, Ideal Landmark, Besides PNG Jewellers, Viman Nagar
                </HeroDetail>
                <HeroDetail icon={<Clock4 className="h-4 w-4" />} label="Timings">
                  Monday to Saturday, 9 AM to 7 PM
                </HeroDetail>
                <HeroDetail icon={<CalendarCheck2 className="h-4 w-4" />} label="Treatment">
                  Scaling, polishing, bad breath care, and bleeding gums evaluation
                </HeroDetail>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
            <aside className="min-w-0 lg:sticky lg:top-24">
              <div className="w-full min-w-0 max-w-[300px] rounded-[28px] bg-primary-container p-7 text-white shadow-[0_20px_52px_rgba(108,60,17,0.18)] md:max-w-none">
                <p className="font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] text-white/68">
                  You may need cleaning for
                </p>
                <h2 className="mt-3 font-section-heading text-[28px] font-extrabold leading-[1.12] md:text-[30px]">
                  Tartar and gums should not be left waiting.
                </h2>
                <ul className="mt-6 space-y-3">
                  {symptoms.slice(0, 6).map((symptom) => (
                    <li key={symptom} className="flex min-w-0 gap-3 font-body-main text-[14px] leading-6 text-white/84">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-soft" aria-hidden="true" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="min-w-0 space-y-6">
              <SectionKicker>What Is Dental Scaling?</SectionKicker>
              <h2 className="max-w-[780px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                Professional cleaning removes what brushing cannot.
              </h2>
              <div className="space-y-5 font-body-main text-[16px] leading-8 text-text-dark/88 md:text-[17px]">
                <p>
                  Teeth cleaning, also known as dental scaling, removes plaque, tartar,
                  stains, and bacterial deposits from the teeth and gumline. Plaque is
                  soft, but once it hardens into tartar it cannot be removed by brushing
                  or home remedies.
                </p>
                <p>
                  During scaling, the dentist cleans tooth surfaces, the gumline, and
                  areas between teeth using dental instruments or ultrasonic scalers.
                  Polishing may be done afterward to make the tooth surface smoother and
                  cleaner.
                </p>
                <p>
                  The goal is simple: prevent gum disease, control bad breath, reduce
                  tartar build-up, and maintain long-term oral health.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionKicker>Why Choose Us</SectionKicker>
                <h2 className="mt-3 max-w-[720px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                  Gentle preventive care for cleaner teeth and healthier gums.
                </h2>
              </div>
              <p className="max-w-[370px] font-body-main text-[15px] leading-7 text-text-muted">
                Patients receive a gum and teeth evaluation, gentle scaling, polishing
                guidance, and clear home-care advice after treatment.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <article key={reason.title} className="rounded-[18px] bg-white p-6 shadow-soft">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/10 text-primary-container">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-card-title text-[18px] font-bold leading-6 text-text-dark">
                      {reason.title}
                    </h3>
                    <p className="mt-3 font-body-main text-[14px] leading-6 text-text-muted">
                      {reason.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <SectionKicker>The Procedure</SectionKicker>
              <h2 className="mt-3 max-w-[720px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                How teeth cleaning is done at the clinic.
              </h2>
              <div className="mt-8 space-y-4">
                {cleaningSteps.map((step, index) => (
                  <article key={step.title} className="grid gap-4 rounded-[20px] border border-primary-container/10 bg-white p-5 shadow-soft sm:grid-cols-[58px_1fr]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container font-card-title text-[16px] font-extrabold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-card-title text-[18px] font-bold text-text-dark">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-body-main text-[14px] leading-7 text-text-muted">
                        {step.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-8 h-[78%] w-[76%] rounded-[36px] bg-section-light" />
              <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(108,60,17,0.16)]">
                <Image
                  src={clinicImage}
                  alt="Dentist performing professional teeth cleaning in Viman Nagar"
                  width={900}
                  height={1120}
                  className="h-[420px] w-full rounded-[24px] object-cover object-[48%_50%] md:h-[560px]"
                />
                <div className="absolute bottom-8 left-8 right-8 rounded-[22px] bg-white/92 p-5 shadow-soft backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-container text-white">
                      <WandSparkles className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-card-title text-[17px] font-bold text-text-dark">
                        Does cleaning whiten teeth?
                      </p>
                      <p className="mt-1 font-body-main text-[14px] leading-6 text-text-muted">
                        Scaling removes external stains and tartar, so teeth may look
                        cleaner and brighter, but whitening is a separate cosmetic treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-container px-6 py-16 text-white md:px-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] text-white/68">
                Bad breath, bleeding gums and timing
              </p>
              <h2 className="mt-3 font-section-heading text-[34px] font-extrabold leading-[1.08] md:text-[46px]">
                Cleaning helps catch gum problems before they grow.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <InfoTile
                icon={<SmilePlus className="h-5 w-5" aria-hidden="true" />}
                title="Bad breath care"
                text="Scaling can help reduce bad breath caused by tartar, plaque, gum infection, food lodgement, and bacterial deposits."
              />
              <InfoTile
                icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
                title="Bleeding gums"
                text="Cleaning removes bacteria and deposits that irritate gums. With proper home care, bleeding often reduces over time."
              />
              <InfoTile
                icon={<Clock4 className="h-5 w-5" aria-hidden="true" />}
                title="Every six months"
                text="Most patients benefit from cleaning every six months, while gum concerns or heavy tartar may need closer follow-up."
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.94fr_1.06fr]">
            <div>
              <SectionKicker>Benefits</SectionKicker>
              <h2 className="mt-3 max-w-[640px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                Cleaner teeth, fresher breath, and better gum protection.
              </h2>
              <p className="mt-5 max-w-[600px] font-body-main text-[16px] leading-8 text-text-muted">
                Regular dental scaling is one of the simplest preventive ways to protect
                oral health and reduce gum-related problems.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 rounded-full border border-primary-container/10 bg-white px-4 py-3 shadow-soft">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-container" aria-hidden="true" />
                  <span className="font-body-main text-[14px] font-semibold leading-6 text-text-dark">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionKicker>Cost and frequency</SectionKicker>
              <h2 className="mt-3 font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                Cleaning cost depends on tartar, stains, and gum condition.
              </h2>
              <p className="mt-5 font-body-main text-[16px] leading-8 text-text-muted">
                Routine dental scaling usually costs less than advanced gum treatment.
                Heavy tartar, gum infection, deep pockets, or periodontal disease may
                need deep cleaning or additional gum care.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[24px] bg-primary-container p-6 text-white shadow-soft">
                <CircleDollarSign className="h-7 w-7" aria-hidden="true" />
                <h3 className="mt-4 font-card-title text-[20px] font-bold">
                  Estimate after examination
                </h3>
                <p className="mt-3 font-body-main text-[14px] leading-7 text-white/76">
                  The dentist will check tartar level, stains, gum health, polishing needs,
                  and whether deeper gum care is required before confirming the cost.
                </p>
              </div>
              <div className="rounded-[24px] bg-white p-6 shadow-soft">
                <h3 className="font-card-title text-[20px] font-bold text-text-dark">
                  You may need cleaning more often if you have
                </h3>
                <ul className="mt-4 space-y-3">
                  {frequentCleaning.slice(0, 6).map((item) => (
                    <li key={item} className="flex gap-3 font-body-main text-[14px] leading-6 text-text-muted">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary-container" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-10 text-center">
              <SectionKicker>Frequently Asked Questions</SectionKicker>
              <h2 className="mx-auto mt-3 max-w-[780px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                Teeth cleaning questions patients usually ask first.
              </h2>
            </div>

            <div className="mx-auto max-w-[920px] space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-[20px] bg-white px-5 py-4 shadow-soft">
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span className="font-card-title text-[16px] font-bold leading-6 text-text-dark">
                      {faq.question}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-section-light text-primary-container transition-transform group-open:rotate-90">
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="mt-4 border-t border-primary-container/10 pt-4 font-body-main text-[14px] leading-7 text-text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[28px] bg-primary-container p-7 text-white shadow-[0_24px_70px_rgba(108,60,17,0.2)] md:p-10">
              <p className="font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] text-white/68">
                Teeth cleaning near me in Viman Nagar
              </p>
              <h2 className="mt-3 max-w-[720px] font-section-heading text-[34px] font-extrabold leading-[1.08] md:text-[46px]">
                Tartar build-up, bad breath, bleeding gums, or stains should be checked early.
              </h2>
              <p className="mt-5 max-w-[760px] font-body-main text-[16px] leading-8 text-white/80">
                Visit Dr. Varun&apos;s Dental Clinic for teeth cleaning, dental scaling,
                teeth polishing, bad breath care, bleeding gums evaluation, and preventive
                dental checkups in Viman Nagar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={phoneHref}
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 font-label-sm text-sm font-bold text-primary-container transition-colors hover:bg-section-light"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.businessListingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 font-label-sm text-sm font-bold text-white transition-colors hover:bg-white/16"
                >
                  Get Directions
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[24px] bg-section-light p-6">
                <h3 className="font-card-title text-[20px] font-bold text-text-dark">
                  Related Dental Care
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {internalLinks.map((link) => (
                    <Link
                      key={link}
                      href="/our-services"
                      className="rounded-full bg-white px-4 py-2 font-body-main text-[13px] font-semibold leading-6 text-text-dark shadow-soft transition-colors hover:text-primary-container"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-[24px] border border-primary-container/10 bg-white p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-container/10 text-primary-container">
                    <Stethoscope className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-card-title text-[20px] font-bold text-text-dark">
                      Address
                    </h3>
                    <p className="mt-2 font-body-main text-[14px] leading-7 text-text-muted">
                      {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},
                      {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
                    </p>
                    <p className="mt-3 font-body-main text-[14px] font-semibold text-primary-container">
                      {siteConfig.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {structuredData.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(entry).replace(/</g, "\\u003c")
          }}
        />
      ))}
    </>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] text-primary-container">
      {children}
    </p>
  );
}

function HeroDetail({
  icon,
  label,
  children
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 max-w-full gap-3 rounded-[18px] bg-section-light/75 p-4">
      <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-primary-container">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-label-sm text-[11px] font-bold uppercase tracking-[0.16em] text-primary-container/74">
          {label}
        </span>
        <span className="mt-1 block break-words font-body-main text-[14px] font-semibold leading-6 text-text-dark">
          {children}
        </span>
      </span>
    </div>
  );
}

function InfoTile({
  icon,
  title,
  text
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-[20px] border border-white/14 bg-white/10 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-container">
        {icon}
      </span>
      <h3 className="mt-5 font-card-title text-[18px] font-bold leading-6 text-white">
        {title}
      </h3>
      <p className="mt-3 font-body-main text-[14px] leading-7 text-white/76">
        {text}
      </p>
    </article>
  );
}
