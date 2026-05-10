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

const pagePath = "/teeth-whitening-in-viman-nagar";
const pageUrl = `${siteConfig.url}${pagePath}`;
const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
const heroImage = "/images/teeth-whitening-viman-nagar.jpg";
const clinicImage = "/images/smile-after.jpg";
const heroImageAbsolute = new URL(heroImage, siteConfig.url).toString();

export const metadata: Metadata = {
  title: "Teeth Whitening in Viman Nagar | Professional Whitening Near Me",
  description:
    "Get professional teeth whitening in Viman Nagar at Dr. Varun's Dental Clinic. Visit an experienced cosmetic dentist for yellow teeth, stains, smile brightening and dental polishing.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Teeth Whitening in Viman Nagar, Pune",
    description:
      "Professional smile brightening for yellow teeth, stains, wedding whitening, and cosmetic dental confidence in Viman Nagar.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: heroImageAbsolute,
        width: 1200,
        height: 630,
        alt: "Teeth whitening in Viman Nagar at Dr Varun Dental Clinic"
      }
    ]
  }
};

const symptoms = [
  "Teeth look yellow or dull",
  "Stains from tea, coffee, smoking, or tobacco",
  "A brighter smile is needed for a wedding or event",
  "Teeth are clean but still appear discoloured",
  "You feel conscious while smiling in photos",
  "You want a non-invasive cosmetic smile improvement",
  "Your gums are healthy and there are no untreated cavities",
  "You want professional guidance instead of random whitening products"
] as const;

const whiteningSteps = [
  {
    title: "Dental Examination",
    text: "The dentist checks teeth, gums, enamel, stains, cavities, sensitivity, and visible restorations to confirm whether whitening is suitable."
  },
  {
    title: "Teeth Cleaning if Required",
    text: "If plaque, tartar, or heavy surface staining is present, professional cleaning may be recommended before whitening for a more even result."
  },
  {
    title: "Shade Assessment",
    text: "The current tooth shade is assessed so expected improvement and realistic outcomes can be explained clearly."
  },
  {
    title: "Gum Protection",
    text: "The gums and soft tissues are protected before whitening to reduce irritation and keep the procedure comfortable."
  },
  {
    title: "Whitening Gel Application",
    text: "A professional whitening material is applied to the teeth and monitored carefully for safer, more even smile brightening."
  },
  {
    title: "Final Shade Check and Aftercare",
    text: "The result is reviewed and you receive guidance on food habits, sensitivity care, brushing, and follow-up maintenance."
  }
] as const;

const benefits = [
  "Brighter and fresher smile appearance",
  "Non-invasive cosmetic improvement",
  "Can reduce visible yellowish discoloration",
  "Improves confidence in photos and events",
  "Does not change the shape of natural teeth",
  "Helps refresh a dull-looking smile",
  "Can be planned with sensitivity support",
  "Works well after proper cleaning and evaluation"
] as const;

const reasons = [
  {
    icon: BadgeCheck,
    title: "17+ Years Experience",
    text: "Dr. Varun Tomke provides cosmetic and restorative dental care with careful case selection and realistic guidance."
  },
  {
    icon: ShieldCheck,
    title: "Safe Whitening Guidance",
    text: "Whitening is advised only after checking gum health, cavities, sensitivity, and visible restorations."
  },
  {
    icon: Sparkles,
    title: "Smile-Focused Planning",
    text: "Patients are guided on whether cleaning, whitening, polishing, or another cosmetic option suits their smile best."
  },
  {
    icon: MapPin,
    title: "Near PNG Jewellers",
    text: "Visit Shop No. 3, Ideal Landmark, besides PNG Jewellers in Viman Nagar."
  }
] as const;

const faqs = [
  {
    question: "What is teeth whitening?",
    answer:
      "Teeth whitening is a cosmetic dental treatment that helps lighten the shade of natural teeth and reduce yellowish discoloration or stains. It can make your smile look brighter and fresher."
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Professional teeth whitening is generally safe when done after a dental examination and under dentist supervision. The dentist checks for cavities, gum disease, sensitivity, enamel concerns, and existing restorations before recommending treatment."
  },
  {
    question: "Is teeth whitening painful?",
    answer:
      "Teeth whitening is usually not painful. Some patients may experience temporary sensitivity during or after treatment, but this usually settles with proper care and dentist-recommended instructions."
  },
  {
    question: "Does teeth whitening remove all stains?",
    answer:
      "Teeth whitening works well for many yellow stains and natural tooth discoloration, but it may not remove all types of stains. Deep stains, fluorosis, trauma-related discoloration, crowns, veneers, and fillings may need different cosmetic treatment options."
  },
  {
    question: "What is the difference between teeth cleaning and teeth whitening?",
    answer:
      "Teeth cleaning removes plaque, tartar, and external deposits from the tooth surface. Teeth whitening improves the natural shade of teeth and makes them look brighter. Cleaning is preventive, while whitening is cosmetic."
  },
  {
    question: "How long do teeth whitening results last?",
    answer:
      "Whitening results may last for several months or longer depending on oral hygiene, tea or coffee intake, smoking, tobacco use, food habits, and routine dental cleaning. Good maintenance helps results last longer."
  },
  {
    question: "Can teeth whitening damage enamel?",
    answer:
      "Professional teeth whitening does not usually damage healthy enamel when done correctly under dentist guidance. However, overuse of whitening products or improper home whitening can cause sensitivity and gum irritation."
  },
  {
    question: "Can I get teeth whitening if I have cavities?",
    answer:
      "If you have untreated cavities, gum infection, or severe sensitivity, the dentist may first treat those problems before whitening. Whitening should be done only after confirming that your teeth and gums are suitable."
  },
  {
    question: "Will whitening work on crowns, veneers, or fillings?",
    answer:
      "No, whitening does not change the shade of dental crowns, veneers, or tooth-coloured fillings. If these are present in visible areas, the dentist will explain whether whitening may create shade mismatch."
  },
  {
    question: "Where can I get teeth whitening in Viman Nagar?",
    answer:
      "You can visit Dr. Varun's Dental Clinic in Viman Nagar, Pune for professional teeth whitening, smile brightening, yellow teeth treatment, teeth cleaning, polishing, and cosmetic dental consultation."
  }
] as const;

const internalLinks = [
  {
    href: "/teeth-cleaning-in-viman-nagar",
    label: "professional teeth cleaning before whitening"
  },
  {
    href: "/our-services",
    label: "smile designing for cosmetic smile improvement"
  },
  {
    href: "/our-services",
    label: "complete smile makeover treatment"
  },
  {
    href: "/our-services",
    label: "dental checkup before teeth whitening"
  },
  {
    href: "/our-services",
    label: "tooth-coloured dental fillings for visible teeth"
  }
] as const;

const maintenanceTips = [
  "Brush twice daily",
  "Rinse after tea, coffee, or coloured drinks",
  "Avoid smoking and tobacco",
  "Schedule regular dental cleaning",
  "Follow dentist-recommended oral care",
  "Ask about touch-up guidance when needed"
] as const;

export default function TeethWhiteningPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: "Teeth Whitening in Viman Nagar, Pune",
      url: pageUrl,
      description: metadata.description,
      image: heroImageAbsolute,
      about: {
        "@type": "MedicalProcedure",
        name: "Professional Teeth Whitening",
        howPerformed:
          "After dental examination and gum protection, professional whitening material is applied to natural teeth and monitored carefully, followed by shade review and aftercare guidance."
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
          name: "Teeth Whitening in Viman Nagar",
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
              alt="Professional teeth whitening near me in Viman Nagar Pune"
              fill
              sizes="100vw"
              className="object-cover object-[62%_48%]"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(72,39,10,0.9)_0%,rgba(108,60,17,0.56)_43%,rgba(255,248,239,0.04)_100%)]" />
          </div>

          <div className="relative mx-auto grid min-h-[650px] w-full max-w-[1440px] items-end gap-10 px-6 pb-12 pt-20 md:px-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:pb-16">
            <div className="w-full min-w-0 max-w-[300px] pb-8 text-white md:max-w-[820px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Cosmetic smile brightening
              </div>
              <h1 className="max-w-full break-words font-hero-heading text-[32px] font-extrabold leading-[1.08] text-white md:max-w-[14ch] md:text-[68px]">
                <span className="block md:inline">Teeth Whitening </span>
                <span className="block md:inline">in Viman Nagar, </span>
                <span className="block md:inline">Pune</span>
              </h1>
              <p className="mt-6 max-w-[25ch] font-body-main text-[16px] leading-8 text-white/84 md:max-w-[680px] md:text-[19px] md:leading-9">
                Professional whitening to help brighten yellow or dull-looking teeth
                after proper dental evaluation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={phoneHref}
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 font-label-sm text-sm font-bold text-primary-container shadow-soft transition-colors hover:bg-section-light"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call for Whitening Consultation
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
                  Smile whitening, polishing guidance, and cosmetic dental evaluation
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
                  You may consider whitening if
                </p>
                <h2 className="mt-3 font-section-heading text-[28px] font-extrabold leading-[1.12] md:text-[30px]">
                  A brighter smile starts with the right check.
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
              <SectionKicker>What Is Teeth Whitening?</SectionKicker>
              <h2 className="max-w-[780px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                Whitening improves tooth shade, not just surface cleanliness.
              </h2>
              <div className="space-y-5 font-body-main text-[16px] leading-8 text-text-dark/88 md:text-[17px]">
                <p>
                  Teeth whitening is a cosmetic dental treatment used to lighten the
                  shade of natural teeth and reduce visible stains or discoloration. It
                  helps improve the brightness of a smile when brushing or routine
                  cleaning alone is not enough.
                </p>
                <p>
                  Professional teeth whitening is different from regular teeth cleaning.
                  Cleaning removes plaque, tartar, and external deposits, while whitening
                  works on the natural tooth shade after checking whether your teeth and
                  gums are suitable.
                </p>
                <p>
                  The goal is simple: make the smile look brighter, fresher, and more
                  confident with a treatment plan that fits your oral condition.
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
                  Whitening works best when it begins with the right diagnosis.
                </h2>
              </div>
              <p className="max-w-[370px] font-body-main text-[15px] leading-7 text-text-muted">
                Patients receive gum and enamel assessment, shade discussion, safety
                screening, and guidance on realistic cosmetic results before treatment.
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
                How whitening is planned at the clinic.
              </h2>
              <div className="mt-8 space-y-4">
                {whiteningSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="grid gap-4 rounded-[20px] border border-primary-container/10 bg-white p-5 shadow-soft sm:grid-cols-[58px_1fr]"
                  >
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
                  alt="Yellow teeth treatment and smile whitening at Dr Varun's Dental Clinic"
                  width={1400}
                  height={840}
                  className="h-[420px] w-full rounded-[24px] object-cover object-center md:h-[560px]"
                />
                <div className="absolute bottom-8 left-8 right-8 rounded-[22px] bg-white/92 p-5 shadow-soft backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-container text-white">
                      <WandSparkles className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-card-title text-[17px] font-bold text-text-dark">
                        Cleaning and whitening are different
                      </p>
                      <p className="mt-1 font-body-main text-[14px] leading-6 text-text-muted">
                        If yellowing is mainly from tartar or external deposits, cleaning
                        may be advised first. Whitening is used when the natural tooth
                        shade still looks dull after evaluation.
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
                Safety, sensitivity and timing
              </p>
              <h2 className="mt-3 font-section-heading text-[34px] font-extrabold leading-[1.08] md:text-[46px]">
                Whitening should be planned around your enamel, gums, and goals.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <InfoTile
                icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
                title="Safe after examination"
                text="Whitening is usually recommended only after checking for cavities, gum disease, enamel wear, and visible restorations."
              />
              <InfoTile
                icon={<SmilePlus className="h-5 w-5" aria-hidden="true" />}
                title="Temporary sensitivity"
                text="Some patients feel short-term sensitivity, especially if teeth are already sensitive, but this is often manageable with dentist-guided care."
              />
              <InfoTile
                icon={<Clock4 className="h-5 w-5" aria-hidden="true" />}
                title="Event smile planning"
                text="For weddings, interviews, or photoshoots, earlier consultation gives time for cleaning, whitening, and sensitivity planning."
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.94fr_1.06fr]">
            <div>
              <SectionKicker>Benefits</SectionKicker>
              <h2 className="mt-3 max-w-[640px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                A brighter smile can change how the whole face reads.
              </h2>
              <p className="mt-5 max-w-[600px] font-body-main text-[16px] leading-8 text-text-muted">
                Professional whitening can be a straightforward cosmetic upgrade when
                teeth are otherwise healthy and a patient wants a fresher-looking smile.
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
              <SectionKicker>Cost and maintenance</SectionKicker>
              <h2 className="mt-3 font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                Whitening cost depends on stains, shade, and sensitivity planning.
              </h2>
              <p className="mt-5 font-body-main text-[16px] leading-8 text-text-muted">
                Cost can vary based on stain severity, current tooth shade, whether
                cleaning is needed first, the whitening material used, and whether more
                than one cycle is required for the case.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[24px] bg-primary-container p-6 text-white shadow-soft">
                <CircleDollarSign className="h-7 w-7" aria-hidden="true" />
                <h3 className="mt-4 font-card-title text-[20px] font-bold">
                  Estimate after shade and stain review
                </h3>
                <p className="mt-3 font-body-main text-[14px] leading-7 text-white/76">
                  The dentist checks tooth shade, stain depth, cleaning requirement,
                  sensitivity risk, and cosmetic goals before confirming the suitable
                  whitening plan and expected cost.
                </p>
              </div>
              <div className="rounded-[24px] bg-white p-6 shadow-soft">
                <h3 className="font-card-title text-[20px] font-bold text-text-dark">
                  To help whitening results last longer
                </h3>
                <ul className="mt-4 space-y-3">
                  {maintenanceTips.map((item) => (
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
                Teeth whitening questions patients usually ask first.
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
                Teeth whitening near me in Viman Nagar
              </p>
              <h2 className="mt-3 max-w-[720px] font-section-heading text-[34px] font-extrabold leading-[1.08] md:text-[46px]">
                Yellow, dull, or stained teeth often improve with the right whitening plan.
              </h2>
              <p className="mt-5 max-w-[760px] font-body-main text-[16px] leading-8 text-white/80">
                Visit Dr. Varun&apos;s Dental Clinic for professional teeth whitening,
                smile brightening, yellow teeth treatment, polishing guidance, and
                cosmetic dental consultation in Viman Nagar.
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
                      key={link.label}
                      href={link.href}
                      className="rounded-full bg-white px-4 py-2 font-body-main text-[13px] font-semibold leading-6 text-text-dark shadow-soft transition-colors hover:text-primary-container"
                    >
                      {link.label}
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
