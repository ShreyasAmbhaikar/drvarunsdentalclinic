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

const pagePath = "/dental-implant-in-viman-nagar";
const pageUrl = `${siteConfig.url}${pagePath}`;
const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
const heroImage = "/images/dental-implant-treatment-viman-nagar.jpg";
const clinicImage = "/images/root-canal-treatment-clinic.jpg";
const heroImageAbsolute = new URL(heroImage, siteConfig.url).toString();

export const metadata: Metadata = {
  title: "Dental Implant in Viman Nagar | Missing Tooth Replacement Near Me",
  description:
    "Get dental implant treatment in Viman Nagar at Dr. Varun's Dental Clinic. Visit an experienced implant dentist for missing tooth replacement, fixed teeth, crowns and implant-supported dentures.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Dental Implant Treatment in Viman Nagar, Pune",
    description:
      "Carefully planned dental implants for missing teeth, fixed tooth replacement, crowns, bridges, and implant-supported dentures in Viman Nagar.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: heroImageAbsolute,
        width: 1200,
        height: 630,
        alt: "Dental implant treatment in Viman Nagar at Dr Varun Dental Clinic"
      }
    ]
  }
};

const implantParts = [
  "Implant post placed inside the jawbone",
  "Abutment connecting the implant to the crown",
  "Dental crown that replaces the visible tooth"
] as const;

const indications = [
  "One missing tooth",
  "Multiple missing teeth",
  "Loose or uncomfortable dentures",
  "A tooth that cannot be saved",
  "Difficulty chewing due to gaps",
  "Smile gaps affecting confidence",
  "Suitable bone support for implant placement",
  "A fixed alternative to removable dentures"
] as const;

const treatmentSteps = [
  {
    title: "Dental Consultation and Examination",
    text: "The dentist checks your teeth, gums, missing tooth area, bite, and overall oral health. X-rays or scans may be advised to evaluate bone level and implant suitability."
  },
  {
    title: "Personalized Treatment Planning",
    text: "A plan is prepared for implant position, number of implants, crown type, and whether any additional procedure is needed before placement."
  },
  {
    title: "Implant Placement",
    text: "The dental implant is placed into the jawbone under local anaesthesia with careful positioning so it can support the final replacement tooth."
  },
  {
    title: "Healing and Bone Integration",
    text: "The implant is given time to bond with the jawbone. This process is called osseointegration and varies depending on bone quality and case complexity."
  },
  {
    title: "Abutment and Crown Placement",
    text: "Once stable, an abutment and custom-made crown are attached to restore chewing function and match nearby teeth as closely as possible."
  },
  {
    title: "Follow-Up and Maintenance",
    text: "Regular follow-ups help ensure the implant, gums, bite, and crown remain stable. Good oral hygiene is essential for long-term success."
  }
] as const;

const implantTypes = [
  {
    title: "Single Tooth Implant",
    text: "Used when one tooth is missing. It supports one crown without cutting nearby healthy teeth."
  },
  {
    title: "Multiple Teeth Implants",
    text: "Used when two or more teeth are missing. Implants can support crowns or a bridge depending on the gap and bone condition."
  },
  {
    title: "Full Mouth Dental Implants",
    text: "For patients missing most or all teeth, implants can support fixed teeth or implant-supported dentures."
  },
  {
    title: "Implant-Supported Dentures",
    text: "A more stable option for patients with loose dentures, improving comfort while eating and speaking."
  }
] as const;

const benefits = [
  "Natural-looking smile restoration",
  "Better chewing comfort",
  "Fixed replacement for missing teeth",
  "No need to remove them like dentures",
  "Helps maintain jawbone support",
  "Does not depend on adjacent teeth like bridges",
  "Improves speech and confidence",
  "Suitable for single, multiple, or full mouth cases",
  "Long-term solution with proper care",
  "Helps restore facial balance and bite function"
] as const;

const reasons = [
  {
    icon: BadgeCheck,
    title: "Implantologist-Led Care",
    text: "Dr. Varun Tomke brings 17+ years of dental experience with a strong focus on implants and rehabilitation."
  },
  {
    icon: ShieldCheck,
    title: "Careful Implant Planning",
    text: "Treatment is planned around bone support, gum health, bite, missing teeth, and long-term oral stability."
  },
  {
    icon: Sparkles,
    title: "Natural-Looking Teeth",
    text: "Implant crowns are planned to restore chewing function while blending with your smile."
  },
  {
    icon: MapPin,
    title: "Viman Nagar Location",
    text: "Visit Shop No. 3, Ideal Landmark, besides PNG Jewellers in Viman Nagar."
  }
] as const;

const faqs = [
  {
    question: "What is a dental implant?",
    answer:
      "A dental implant is an artificial tooth root placed inside the jawbone to support a dental crown, bridge, or denture. It is used to replace missing teeth and restore chewing function, smile appearance, and confidence."
  },
  {
    question: "Is dental implant treatment painful?",
    answer:
      "Dental implant treatment is usually done under local anaesthesia, so patients generally remain comfortable during the procedure. Mild swelling or discomfort may occur after treatment, but this usually settles with proper care and medication."
  },
  {
    question: "Who is the best candidate for dental implants?",
    answer:
      "Patients with one or more missing teeth, healthy or treatable gums, adequate bone support, and good oral hygiene are usually good candidates. A consultation is needed to confirm suitability."
  },
  {
    question: "Can dental implants replace multiple missing teeth?",
    answer:
      "Yes. Dental implants can replace a single missing tooth, multiple missing teeth, or support full mouth fixed teeth or implant-supported dentures depending on the case."
  },
  {
    question: "How long does dental implant treatment take?",
    answer:
      "Treatment time depends on bone condition, healing response, number of implants, and whether additional procedures are needed. Some cases take a few months because the implant needs time to integrate with the jawbone."
  },
  {
    question: "Are dental implants better than dentures?",
    answer:
      "Dental implants are fixed and usually more stable than removable dentures. They can improve chewing comfort, speech, and confidence, but the best option depends on oral health, bone support, budget, and treatment goals."
  },
  {
    question: "Do dental implants look natural?",
    answer:
      "Yes. The final crown placed on the dental implant is designed to match the shape, size, and shade of nearby teeth. A well-planned implant restoration can look very natural."
  },
  {
    question: "What is the cost of dental implant treatment in Viman Nagar?",
    answer:
      "The cost depends on the number of implants, implant system, bone condition, crown type, missing tooth location, and whether additional procedures such as bone grafting are needed."
  },
  {
    question: "How should I care for my dental implant?",
    answer:
      "Brush twice daily, clean around the implant properly, avoid chewing very hard objects, and visit your dentist for regular follow-ups. Good gum health is important for long-term implant success."
  },
  {
    question: "Where can I get dental implant treatment in Viman Nagar?",
    answer:
      "You can visit Dr. Varun's Dental Clinic in Viman Nagar, Pune for dental implant consultation, missing tooth replacement, implant-supported crowns, bridges, dentures, and full mouth rehabilitation planning."
  }
] as const;

const internalLinks = [
  "dental crown over implant",
  "dental bridge for missing teeth",
  "removable denture treatment",
  "full mouth dental implant planning",
  "tooth extraction before implant placement"
] as const;

const maintenance = [
  "Brush twice daily",
  "Clean around the implant carefully",
  "Avoid chewing very hard objects",
  "Visit your dentist regularly",
  "Treat gum problems early",
  "Avoid smoking or reduce tobacco use",
  "Follow the dentist's maintenance advice"
] as const;

export default function DentalImplantPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: "Dental Implant Treatment in Viman Nagar, Pune",
      url: pageUrl,
      description: metadata.description,
      image: heroImageAbsolute,
      about: {
        "@type": "MedicalProcedure",
        name: "Dental Implant Treatment",
        howPerformed:
          "A titanium implant post is placed into the jawbone, allowed to integrate with bone, and restored with an abutment and custom crown, bridge, or denture."
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
          name: "Dental Implant in Viman Nagar",
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
              alt="Dental implant treatment in Viman Nagar at Dr Varun Dental Clinic"
              fill
              sizes="100vw"
              className="object-cover object-[52%_50%]"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(72,39,10,0.9)_0%,rgba(108,60,17,0.62)_46%,rgba(255,248,239,0.08)_100%)]" />
          </div>

          <div className="relative mx-auto grid min-h-[650px] w-full max-w-[1440px] items-end gap-10 px-6 pb-12 pt-20 md:px-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:pb-16">
            <div className="w-full min-w-0 max-w-[300px] pb-8 text-white md:max-w-[820px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
                <SmilePlus className="h-4 w-4" aria-hidden="true" />
                Fixed teeth replacement
              </div>
              <h1 className="max-w-full break-words font-hero-heading text-[32px] font-extrabold leading-[1.08] text-white md:max-w-[14ch] md:text-[68px]">
                <span className="block md:inline">Dental Implant </span>
                <span className="block md:inline">Treatment in </span>
                <span className="block md:inline">Viman Nagar, </span>
                <span className="block md:inline">Pune</span>
              </h1>
              <p className="mt-6 max-w-[25ch] font-body-main text-[16px] leading-8 text-white/84 md:max-w-[680px] md:text-[19px] md:leading-9">
                Replace missing teeth with carefully planned dental implants at Dr.
                Varun&apos;s Dental Clinic in Viman Nagar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={phoneHref}
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 font-label-sm text-sm font-bold text-primary-container shadow-soft transition-colors hover:bg-section-light"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call for Implant Consultation
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
                  Single tooth, multiple teeth, and implant-supported denture planning
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
                  You may need implants for
                </p>
                <h2 className="mt-3 font-section-heading text-[28px] font-extrabold leading-[1.12] md:text-[30px]">
                  Missing teeth should not be ignored.
                </h2>
                <ul className="mt-6 space-y-3">
                  {indications.slice(0, 6).map((item) => (
                    <li key={item} className="flex min-w-0 gap-3 font-body-main text-[14px] leading-6 text-white/84">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-soft" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="min-w-0 space-y-6">
              <SectionKicker>What Is A Dental Implant?</SectionKicker>
              <h2 className="max-w-[780px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                A stable replacement designed to act like an artificial tooth root.
              </h2>
              <div className="space-y-5 font-body-main text-[16px] leading-8 text-text-dark/88 md:text-[17px]">
                <p>
                  A dental implant is a small titanium post placed into the jawbone to
                  replace the root of a missing tooth. Once stable in the bone, it can
                  support a dental crown, bridge, or denture.
                </p>
                <p>
                  Dental implants are popular because they look natural, feel stable,
                  and do not depend on support from nearby teeth in the same way as
                  traditional bridges.
                </p>
                <p>
                  If you are searching for dental implant near me, implant dentist in
                  Viman Nagar, or missing tooth replacement near me, Dr. Varun&apos;s Dental
                  Clinic offers experienced implant care in a clean and comfortable setting.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {implantParts.map((part, index) => (
                  <div key={part} className="rounded-[18px] bg-section-light p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container font-card-title text-[14px] font-extrabold text-white">
                      {index + 1}
                    </span>
                    <p className="mt-4 font-body-main text-[14px] font-semibold leading-6 text-text-dark">
                      {part}
                    </p>
                  </div>
                ))}
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
                  Implant treatment planned for function, appearance, and long-term comfort.
                </h2>
              </div>
              <p className="max-w-[370px] font-body-main text-[15px] leading-7 text-text-muted">
                Patients choose the clinic for clear explanations, clean surroundings,
                careful planning, and fixed tooth replacement options.
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
                How dental implant treatment is planned and completed.
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
                  alt="Implant dentist in Viman Nagar placing dental implant"
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
                        Is implant treatment painful?
                      </p>
                      <p className="mt-1 font-body-main text-[14px] leading-6 text-text-muted">
                        It is usually performed under local anaesthesia, so most
                        patients remain comfortable during placement.
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
                Types of implant care
              </p>
              <h2 className="mt-3 font-section-heading text-[34px] font-extrabold leading-[1.08] md:text-[46px]">
                Options for one tooth, many teeth, or loose dentures.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {implantTypes.map((item) => (
                <InfoTile
                  key={item.title}
                  icon={<SmilePlus className="h-5 w-5" aria-hidden="true" />}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
              <div>
                <SectionKicker>Implant vs Bridge vs Denture</SectionKicker>
                <h2 className="mt-3 max-w-[660px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                  Choosing the right missing tooth replacement.
                </h2>
              </div>
              <div className="grid gap-5">
                <ComparisonCard
                  title="Dental implant vs dental bridge"
                  text="A bridge usually takes support from nearby teeth, and those teeth may need shaping. A dental implant replaces the missing root and usually does not require cutting nearby healthy teeth."
                />
                <ComparisonCard
                  title="Dental implant vs denture"
                  text="Traditional dentures are removable and may feel loose. Dental implants are fixed inside the jawbone and can provide better stability, chewing strength, speech comfort, and confidence."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.94fr_1.06fr]">
            <div>
              <SectionKicker>Benefits</SectionKicker>
              <h2 className="mt-3 max-w-[640px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                Fixed teeth that help restore chewing, confidence, and facial balance.
              </h2>
              <p className="mt-5 max-w-[600px] font-body-main text-[16px] leading-8 text-text-muted">
                Dental implants can be a strong option for fixed teeth replacement in
                Viman Nagar after proper dental evaluation.
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

        <section className="px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionKicker>Cost and care</SectionKicker>
              <h2 className="mt-3 font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                What affects implant cost and long-term success?
              </h2>
              <p className="mt-5 font-body-main text-[16px] leading-8 text-text-muted">
                The cost depends on the number of implants, implant system, bone
                condition, need for bone grafting, crown type, missing tooth location,
                and case complexity.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[24px] bg-primary-container p-6 text-white shadow-soft">
                <CircleDollarSign className="h-7 w-7" aria-hidden="true" />
                <h3 className="mt-4 font-card-title text-[20px] font-bold">
                  Cost varies by case
                </h3>
                <p className="mt-3 font-body-main text-[14px] leading-7 text-white/76">
                  Single implants, multiple implants, full mouth implants, implant-supported
                  dentures, bone grafting, and zirconia crowns all require individual planning.
                </p>
              </div>
              <div className="rounded-[24px] bg-white p-6 shadow-soft">
                <h3 className="font-card-title text-[20px] font-bold text-text-dark">
                  Protect your implant
                </h3>
                <ul className="mt-4 space-y-3">
                  {maintenance.slice(0, 5).map((item) => (
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

        <section className="bg-section-light px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-10 text-center">
              <SectionKicker>Frequently Asked Questions</SectionKicker>
              <h2 className="mx-auto mt-3 max-w-[780px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                Dental implant questions patients usually ask first.
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
                Dental implant near me in Viman Nagar
              </p>
              <h2 className="mt-3 max-w-[720px] font-section-heading text-[34px] font-extrabold leading-[1.08] md:text-[46px]">
                Missing teeth can affect chewing, speech, facial support, and confidence.
              </h2>
              <p className="mt-5 max-w-[760px] font-body-main text-[16px] leading-8 text-white/80">
                Visit Dr. Varun&apos;s Dental Clinic, Viman Nagar, Pune for dental implant
                consultation, missing tooth replacement, implant-supported crowns, bridges,
                dentures, and full mouth rehabilitation planning.
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

function ComparisonCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[22px] border border-primary-container/10 bg-white p-6 shadow-soft">
      <h3 className="font-card-title text-[20px] font-bold text-text-dark">
        {title}
      </h3>
      <p className="mt-3 font-body-main text-[15px] leading-7 text-text-muted">
        {text}
      </p>
    </article>
  );
}
