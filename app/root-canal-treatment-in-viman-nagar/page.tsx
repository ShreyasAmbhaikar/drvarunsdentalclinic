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

const pagePath = "/root-canal-treatment-in-viman-nagar";
const pageUrl = `${siteConfig.url}${pagePath}`;
const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
const heroImage = "/images/root-canal-treatment-clinic.jpg";
const clinicImage = "/images/root-canal-clinic-room.jpg";
const heroImageAbsolute = new URL(heroImage, siteConfig.url).toString();

export const metadata: Metadata = {
  title: "Root Canal Treatment in Viman Nagar | Painless RCT Near Me",
  description:
    "Get painless root canal treatment in Viman Nagar at Dr. Varun's Dental Clinic. Visit an experienced dentist for tooth pain, infection, RCT, filling and dental crown care.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Root Canal Treatment in Viman Nagar, Pune",
    description:
      "Comfortable, tooth-saving root canal treatment for tooth pain, swelling, sensitivity, and dental infection in Viman Nagar.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: heroImageAbsolute,
        width: 1200,
        height: 630,
        alt: "Root canal treatment in Viman Nagar at Dr Varun Dental Clinic"
      }
    ]
  }
};

const symptoms = [
  "Continuous tooth pain or throbbing pain",
  "Sensitivity to hot or cold food and drinks",
  "Pain while chewing or biting",
  "Swelling around the gums or jaw",
  "Deep cavity or black discoloration in the tooth",
  "Pus, gum boil, or recurring infection",
  "Cracked, fractured, or injured tooth",
  "Pain that disturbs sleep or daily routine"
] as const;

const treatmentSteps = [
  {
    title: "Dental Examination and X-Ray",
    text: "The tooth is checked carefully and an X-ray may be advised to understand the root shape, infection level, and surrounding bone condition."
  },
  {
    title: "Local Anaesthesia",
    text: "The treatment area is numbed so the root canal procedure can be completed comfortably."
  },
  {
    title: "Cleaning the Infected Pulp",
    text: "The infected pulp is removed and the root canals are cleaned, shaped, and disinfected with precision."
  },
  {
    title: "Filling and Sealing",
    text: "The cleaned canals are filled with a suitable biocompatible material to seal the internal space."
  },
  {
    title: "Tooth Restoration",
    text: "The tooth is restored with a filling, and in many molars or premolars a dental crown is recommended for long-term chewing strength."
  }
] as const;

const benefits = [
  "Relief from tooth pain and infection",
  "Saves the natural tooth",
  "Restores chewing comfort",
  "Prevents infection from spreading",
  "Maintains smile appearance",
  "Avoids unnecessary tooth removal",
  "Helps maintain proper bite balance",
  "Supports long-term oral health"
] as const;

const reasons = [
  {
    icon: BadgeCheck,
    title: "17+ Years Experience",
    text: "Dr. Varun Tomke brings advanced dental care experience with a calm, explanatory approach."
  },
  {
    icon: ShieldCheck,
    title: "Comfort-First RCT",
    text: "Modern anaesthesia, gentle handling, and clear planning help keep treatment reassuring."
  },
  {
    icon: Sparkles,
    title: "Clean Clinic Environment",
    text: "The clinic focuses on hygiene, punctuality, and a patient-friendly experience."
  },
  {
    icon: MapPin,
    title: "Easy Viman Nagar Location",
    text: "Visit Shop No. 3, Ideal Landmark, besides PNG Jewellers in Viman Nagar."
  }
] as const;

const faqs = [
  {
    question: "What is root canal treatment?",
    answer:
      "Root canal treatment is a dental procedure used to treat infection inside the tooth. The infected pulp is removed, the root canals are cleaned and disinfected, and the tooth is sealed and restored."
  },
  {
    question: "Is root canal treatment painful?",
    answer:
      "Modern root canal treatment is usually comfortable because the tooth area is numbed before the procedure. The treatment is designed to remove the source of pain caused by infection."
  },
  {
    question: "How do I know if I need a root canal?",
    answer:
      "You may need a root canal if you have continuous tooth pain, swelling, sensitivity to hot or cold, pain while chewing, a deep cavity, gum boil, or tooth discoloration. A dentist can confirm this after examination and X-ray."
  },
  {
    question: "Can root canal treatment save my tooth?",
    answer:
      "Yes. The main purpose of root canal treatment is to save the natural tooth by removing infection from inside it. If the tooth structure is still restorable, RCT can help avoid extraction."
  },
  {
    question: "How many sittings are required for root canal treatment?",
    answer:
      "Some cases can be completed in one sitting, while others need two or more visits depending on infection, swelling, tooth condition, and canal complexity."
  },
  {
    question: "Do I need a cap after root canal treatment?",
    answer:
      "A dental cap or crown is commonly recommended after root canal treatment, especially for back teeth or weak teeth. It helps protect the tooth from fracture and restores chewing strength."
  },
  {
    question: "What happens if I delay root canal treatment?",
    answer:
      "Delaying treatment can allow infection to spread, causing more pain, swelling, pus formation, bone loss, or tooth loss. Early treatment usually gives better outcomes."
  },
  {
    question: "Is root canal better than tooth extraction?",
    answer:
      "If the tooth can be saved, root canal treatment is usually preferred because it preserves your natural tooth. Extraction may be needed only when the tooth is too badly damaged to restore."
  },
  {
    question: "What is the cost of root canal treatment in Viman Nagar?",
    answer:
      "The cost depends on the tooth type, number of canals, infection severity, treatment complexity, and whether a crown is required. A proper dental checkup is needed for an accurate estimate."
  },
  {
    question: "Where can I get root canal treatment in Viman Nagar?",
    answer:
      "You can visit Dr. Varun's Dental Clinic at Shop No. 3, Ideal Landmark, Besides PNG Jewellers, Viman Nagar, Pune, Maharashtra 411014."
  }
] as const;

const internalLinks = [
  "dental crown after root canal treatment",
  "tooth extraction when a tooth cannot be saved",
  "tooth coloured dental filling",
  "emergency tooth pain treatment",
  "routine dental checkup"
] as const;

export default function RootCanalTreatmentPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: "Root Canal Treatment in Viman Nagar, Pune",
      url: pageUrl,
      description: metadata.description,
      image: heroImageAbsolute,
      about: {
        "@type": "MedicalProcedure",
        name: "Root Canal Treatment",
        howPerformed:
          "The infected pulp is removed, root canals are cleaned and disinfected, and the tooth is sealed and restored with a filling or crown."
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
          name: "Root Canal Treatment in Viman Nagar",
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
              alt="Dentist performing painless root canal treatment in Viman Nagar Pune"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(72,39,10,0.88)_0%,rgba(108,60,17,0.58)_45%,rgba(255,248,239,0.05)_100%)]" />
          </div>

          <div className="relative mx-auto grid min-h-[650px] w-full max-w-[1440px] items-end gap-10 px-6 pb-12 pt-20 md:px-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:pb-16">
            <div className="w-full min-w-0 max-w-[300px] pb-8 text-white md:max-w-[820px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
                <SmilePlus className="h-4 w-4" aria-hidden="true" />
                Tooth-saving RCT in Viman Nagar
              </div>
              <h1 className="max-w-full break-words font-hero-heading text-[32px] font-extrabold leading-[1.08] text-white md:max-w-[14ch] md:text-[68px]">
                <span className="block md:inline">Root Canal </span>
                <span className="block md:inline">Treatment in </span>
                <span className="block md:inline">Viman Nagar, </span>
                <span className="block md:inline">Pune</span>
              </h1>
              <p className="mt-6 max-w-[24ch] font-body-main text-[16px] leading-8 text-white/84 md:max-w-[680px] md:text-[19px] md:leading-9">
                Painless, careful root canal treatment at Dr. Varun&apos;s Dental Clinic
                to relieve tooth pain, control infection, and help save your natural tooth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={phoneHref}
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 font-label-sm text-sm font-bold text-primary-container shadow-soft transition-colors hover:bg-section-light"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call for RCT Consultation
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
                  Single or multiple visits depending on infection and tooth condition
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
                  Common warning signs
                </p>
                <h2 className="mt-3 font-section-heading text-[28px] font-extrabold leading-[1.12] md:text-[30px]">
                  When tooth pain should not wait
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
              <SectionKicker>What Is RCT?</SectionKicker>
              <h2 className="max-w-[780px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                A modern way to remove infection while keeping your natural tooth.
              </h2>
              <div className="space-y-5 font-body-main text-[16px] leading-8 text-text-dark/88 md:text-[17px]">
                <p>
                  Root canal treatment, also called RCT, treats infection inside the tooth.
                  Every tooth has soft inner tissue called pulp, which contains nerves and
                  blood vessels. Deep decay, cracks, trauma, or repeated dental problems can
                  inflame or infect this pulp.
                </p>
                <p>
                  During treatment, the infected pulp is removed, the canals are cleaned and
                  disinfected, and the tooth is sealed before being restored with a filling or
                  crown. The aim is simple: save your natural tooth instead of removing it.
                </p>
                <p>
                  If you are searching for a dentist near me for root canal treatment,
                  painless root canal treatment in Viman Nagar, or a trusted dental clinic
                  near PNG Jewellers, Dr. Varun&apos;s Dental Clinic offers experienced care in
                  a clean, patient-friendly environment.
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
                  Root canal care that feels clear, calm, and carefully planned.
                </h2>
              </div>
              <p className="max-w-[370px] font-body-main text-[15px] leading-7 text-text-muted">
                Patients appreciate the clinic for clear explanations, cleanliness,
                punctuality, and supportive dental care.
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
                How root canal treatment is done at the clinic.
              </h2>
              <div className="mt-8 space-y-4">
                {treatmentSteps.map((step, index) => (
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
                  alt="Dental clinic in Viman Nagar for root canal and crown treatment"
                  width={900}
                  height={1120}
                  className="h-[420px] w-full rounded-[24px] object-cover md:h-[560px]"
                />
                <div className="absolute bottom-8 left-8 right-8 rounded-[22px] bg-white/92 p-5 shadow-soft backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-container text-white">
                      <WandSparkles className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-card-title text-[17px] font-bold text-text-dark">
                        Is RCT painful?
                      </p>
                      <p className="mt-1 font-body-main text-[14px] leading-6 text-text-muted">
                        The tooth area is numbed before treatment, so most patients feel
                        comfortable during the procedure.
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
                Crown, time and cost
              </p>
              <h2 className="mt-3 font-section-heading text-[34px] font-extrabold leading-[1.08] md:text-[46px]">
                What to expect after diagnosis.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <InfoTile
                icon={<SmilePlus className="h-5 w-5" aria-hidden="true" />}
                title="Do you need a crown?"
                text="Back teeth often need a dental crown after RCT, especially if the tooth has deep decay, a large cavity, or a previous filling."
              />
              <InfoTile
                icon={<Clock4 className="h-5 w-5" aria-hidden="true" />}
                title="How long does it take?"
                text="Some root canals can be completed in one visit, while infected or complex teeth may need two or more appointments."
              />
              <InfoTile
                icon={<CircleDollarSign className="h-5 w-5" aria-hidden="true" />}
                title="What is the cost?"
                text="The cost depends on the tooth, number of canals, infection level, complexity, filling, and whether a crown is needed."
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.94fr_1.06fr]">
            <div>
              <SectionKicker>Benefits</SectionKicker>
              <h2 className="mt-3 max-w-[620px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                Save the tooth, restore comfort, protect your bite.
              </h2>
              <p className="mt-5 max-w-[600px] font-body-main text-[16px] leading-8 text-text-muted">
                Timely root canal treatment can make a major difference in saving the
                tooth and preventing infection from spreading.
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
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-10 text-center">
              <SectionKicker>Frequently Asked Questions</SectionKicker>
              <h2 className="mx-auto mt-3 max-w-[780px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                Root canal questions patients usually ask first.
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
                Root canal treatment near me in Viman Nagar
              </p>
              <h2 className="mt-3 max-w-[720px] font-section-heading text-[34px] font-extrabold leading-[1.08] md:text-[46px]">
                Tooth pain, swelling, sensitivity, or chewing discomfort should be checked early.
              </h2>
              <p className="mt-5 max-w-[760px] font-body-main text-[16px] leading-8 text-white/80">
                Visit Dr. Varun&apos;s Dental Clinic, Viman Nagar, Pune for root canal
                treatment, tooth pain treatment, fillings, dental crowns, and other
                dental care services.
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
