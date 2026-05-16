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

type Reason = {
  title: string;
  text: string;
};

type Step = {
  title: string;
  text: string;
};

type InfoTileData = {
  title: string;
  text: string;
  icon: "smile" | "shield" | "clock" | "cost";
};

type FAQ = {
  question: string;
  answer: string;
};

type InternalLink = {
  label: string;
  href: string;
};

type SimpleCard = {
  title: string;
  text: string;
};

type NumberedCard = {
  text: string;
};

type ExtraSection = {
  kicker: string;
  title: string;
  text: string;
  estimateTitle: string;
  estimateText: string;
  listTitle: string;
  list: readonly string[];
  listVisibleCount?: number;
  sectionClassName?: string;
};

export type TreatmentPageData = {
  pagePath: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  structuredPageName?: string;
  breadcrumbName?: string;
  h1Lines: string[];
  heroBadge: string;
  heroIntro: string;
  heroImage: string;
  heroAlt: string;
  ogImageAlt?: string;
  heroObjectPosition?: string;
  heroGradientClassName?: string;
  heroBadgeIcon?: "smile" | "sparkles";
  ctaLabel: string;
  quickTreatment: string;
  symptomsKicker: string;
  symptomsTitle: string;
  symptoms: readonly string[];
  symptomsVisibleCount?: number;
  overviewKicker: string;
  overviewTitle: string;
  overviewParagraphs: readonly string[];
  overviewCards?: readonly NumberedCard[];
  reasonsTitle: string;
  reasonsDescription: string;
  reasons: readonly Reason[];
  stepsTitle: string;
  steps: readonly Step[];
  procedureImage: string;
  procedureImageAlt: string;
  procedureImageObjectPosition?: string;
  procedureNoteTitle: string;
  procedureNoteText: string;
  highlightKicker: string;
  highlightTitle: string;
  infoTiles: readonly InfoTileData[];
  highlightGridClassName?: string;
  comparison?: {
    kicker: string;
    title: string;
    cards: readonly SimpleCard[];
    sectionClassName?: string;
  };
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: readonly string[];
  benefitsSectionClassName?: string;
  extra?: ExtraSection;
  faqTitle: string;
  faqs: readonly FAQ[];
  faqSectionClassName?: string;
  ctaKicker: string;
  ctaTitle: string;
  ctaText: string;
  internalLinks: readonly InternalLink[];
  structuredProcedureName: string;
  structuredHowPerformed: string;
};

const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

export function createTreatmentMetadata(data: TreatmentPageData): Metadata {
  const pageUrl = `${siteConfig.url}${data.pagePath}`;
  const heroImageAbsolute = new URL(data.heroImage, siteConfig.url).toString();

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: heroImageAbsolute,
          width: 1200,
          height: 630,
          alt: data.ogImageAlt ?? data.heroAlt
        }
      ]
    }
  };
}

export function TreatmentPage({ data }: { data: TreatmentPageData }) {
  const pageUrl = `${siteConfig.url}${data.pagePath}`;
  const heroImageAbsolute = new URL(data.heroImage, siteConfig.url).toString();
  const BadgeIcon = data.heroBadgeIcon === "sparkles" ? Sparkles : SmilePlus;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: data.structuredPageName ?? data.ogTitle,
      url: pageUrl,
      description: data.metaDescription,
      image: heroImageAbsolute,
      about: {
        "@type": "MedicalProcedure",
        name: data.structuredProcedureName,
        howPerformed: data.structuredHowPerformed
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
          name: data.breadcrumbName ?? data.ogTitle,
          item: pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
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
              src={data.heroImage}
              alt={data.heroAlt}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: data.heroObjectPosition ?? "50% 50%" }}
              priority
            />
            <div className={data.heroGradientClassName ?? "absolute inset-0 bg-[linear-gradient(90deg,rgba(72,39,10,0.9)_0%,rgba(108,60,17,0.62)_46%,rgba(255,248,239,0.07)_100%)]"} />
          </div>

          <div className="relative mx-auto grid min-h-[650px] w-full max-w-[1440px] items-end gap-10 px-6 pb-12 pt-20 md:px-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:pb-16">
            <div className="w-full min-w-0 max-w-[320px] pb-8 text-white md:max-w-[850px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
                <BadgeIcon className="h-4 w-4" aria-hidden="true" />
                {data.heroBadge}
              </div>
              <h1 className="max-w-full break-words font-hero-heading text-[32px] font-extrabold leading-[1.08] text-white md:max-w-[15ch] md:text-[68px]">
                {data.h1Lines.map((line) => (
                  <span key={line} className="block md:inline">
                    {line}{" "}
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-[27ch] font-body-main text-[16px] leading-8 text-white/84 md:max-w-[700px] md:text-[19px] md:leading-9">
                {data.heroIntro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={phoneHref}
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 font-label-sm text-sm font-bold text-primary-container shadow-soft transition-colors hover:bg-section-light"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {data.ctaLabel}
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

            <div className="w-full min-w-0 max-w-[320px] overflow-hidden rounded-[28px] border border-white/18 bg-white/94 p-5 shadow-[0_24px_70px_rgba(37,20,6,0.22)] backdrop-blur-md md:max-w-none">
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
                  {data.quickTreatment}
                </HeroDetail>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
            <aside className="min-w-0 lg:sticky lg:top-24">
              <div className="w-full min-w-0 max-w-[320px] rounded-[28px] bg-primary-container p-7 text-white shadow-[0_20px_52px_rgba(108,60,17,0.18)] md:max-w-none">
                <p className="font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] text-white/68">
                  {data.symptomsKicker}
                </p>
                <h2 className="mt-3 font-section-heading text-[28px] font-extrabold leading-[1.12] md:text-[30px]">
                  {data.symptomsTitle}
                </h2>
                <ul className="mt-6 space-y-3">
                  {data.symptoms.slice(0, data.symptomsVisibleCount ?? 7).map((symptom) => (
                    <li key={symptom} className="flex min-w-0 gap-3 font-body-main text-[14px] leading-6 text-white/84">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-soft" aria-hidden="true" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="min-w-0 space-y-6">
              <SectionKicker>{data.overviewKicker}</SectionKicker>
              <h2 className="max-w-[780px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                {data.overviewTitle}
              </h2>
              <div className="space-y-5 font-body-main text-[16px] leading-8 text-text-dark/88 md:text-[17px]">
                {data.overviewParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {data.overviewCards ? (
                <div className="grid gap-3 sm:grid-cols-3">
                  {data.overviewCards.map((card, index) => (
                    <div key={card.text} className="rounded-[18px] bg-section-light p-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container font-card-title text-[14px] font-extrabold text-white">
                        {index + 1}
                      </span>
                      <p className="mt-4 font-body-main text-[14px] font-semibold leading-6 text-text-dark">
                        {card.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionKicker>Why Choose Us</SectionKicker>
                <h2 className="mt-3 max-w-[720px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                  {data.reasonsTitle}
                </h2>
              </div>
              <p className="max-w-[370px] font-body-main text-[15px] leading-7 text-text-muted">
                {data.reasonsDescription}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {data.reasons.map((reason, index) => {
                const Icon = [BadgeCheck, ShieldCheck, Sparkles, MapPin][index] ?? BadgeCheck;

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
                {data.stepsTitle}
              </h2>
              <div className="mt-8 space-y-4">
                {data.steps.map((step, index) => (
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
                  src={data.procedureImage}
                  alt={data.procedureImageAlt}
                  width={900}
                  height={1120}
                  className="h-[420px] w-full rounded-[24px] object-cover md:h-[560px]"
                  style={{ objectPosition: data.procedureImageObjectPosition ?? "50% 50%" }}
                />
                <div className="absolute bottom-8 left-8 right-8 rounded-[22px] bg-white/92 p-5 shadow-soft backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-container text-white">
                      <WandSparkles className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-card-title text-[17px] font-bold text-text-dark">
                        {data.procedureNoteTitle}
                      </p>
                      <p className="mt-1 font-body-main text-[14px] leading-6 text-text-muted">
                        {data.procedureNoteText}
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
                {data.highlightKicker}
              </p>
              <h2 className="mt-3 font-section-heading text-[34px] font-extrabold leading-[1.08] md:text-[46px]">
                {data.highlightTitle}
              </h2>
            </div>

            <div className={data.highlightGridClassName ?? "grid gap-5 md:grid-cols-3"}>
              {data.infoTiles.map((tile) => (
                <InfoTile key={tile.title} data={tile} />
              ))}
            </div>
          </div>
        </section>

        {data.comparison ? (
          <section className={data.comparison.sectionClassName ?? "px-6 py-16 md:px-14 md:py-20"}>
            <div className="mx-auto max-w-[1180px]">
              <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                <div>
                  <SectionKicker>{data.comparison.kicker}</SectionKicker>
                  <h2 className="mt-3 max-w-[660px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                    {data.comparison.title}
                  </h2>
                </div>
                <div className="grid gap-5">
                  {data.comparison.cards.map((card) => (
                    <ComparisonCard key={card.title} title={card.title} text={card.text} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className={data.benefitsSectionClassName ?? "px-6 py-16 md:px-14 md:py-20"}>
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.94fr_1.06fr]">
            <div>
              <SectionKicker>Benefits</SectionKicker>
              <h2 className="mt-3 max-w-[640px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                {data.benefitsTitle}
              </h2>
              <p className="mt-5 max-w-[600px] font-body-main text-[16px] leading-8 text-text-muted">
                {data.benefitsDescription}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.benefits.map((benefit) => (
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

        {data.extra ? (
          <section className={data.extra.sectionClassName ?? "bg-section-light px-6 py-16 md:px-14 md:py-20"}>
            <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <SectionKicker>{data.extra.kicker}</SectionKicker>
                <h2 className="mt-3 font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                  {data.extra.title}
                </h2>
                <p className="mt-5 font-body-main text-[16px] leading-8 text-text-muted">
                  {data.extra.text}
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[24px] bg-primary-container p-6 text-white shadow-soft">
                  <CircleDollarSign className="h-7 w-7" aria-hidden="true" />
                  <h3 className="mt-4 font-card-title text-[20px] font-bold">
                    {data.extra.estimateTitle}
                  </h3>
                  <p className="mt-3 font-body-main text-[14px] leading-7 text-white/76">
                    {data.extra.estimateText}
                  </p>
                </div>
                <div className="rounded-[24px] bg-white p-6 shadow-soft">
                  <h3 className="font-card-title text-[20px] font-bold text-text-dark">
                    {data.extra.listTitle}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {data.extra.list.slice(0, data.extra.listVisibleCount ?? 7).map((item) => (
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
        ) : null}

        <section className={data.faqSectionClassName ?? "px-6 py-16 md:px-14 md:py-20"}>
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-10 text-center">
              <SectionKicker>Frequently Asked Questions</SectionKicker>
              <h2 className="mx-auto mt-3 max-w-[780px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-text-dark md:text-[46px]">
                {data.faqTitle}
              </h2>
            </div>

            <div className="mx-auto max-w-[920px] space-y-4">
              {data.faqs.map((faq) => (
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
                {data.ctaKicker}
              </p>
              <h2 className="mt-3 max-w-[720px] font-section-heading text-[34px] font-extrabold leading-[1.08] md:text-[46px]">
                {data.ctaTitle}
              </h2>
              <p className="mt-5 max-w-[760px] font-body-main text-[16px] leading-8 text-white/80">
                {data.ctaText}
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
                  {data.internalLinks.map((link) => (
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

function InfoTile({ data }: { data: InfoTileData }) {
  const icons = {
    smile: SmilePlus,
    shield: ShieldCheck,
    clock: Clock4,
    cost: CircleDollarSign
  };
  const Icon = icons[data.icon];

  return (
    <article className="rounded-[20px] border border-white/14 bg-white/10 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-container">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-card-title text-[18px] font-bold leading-6 text-white">
        {data.title}
      </h3>
      <p className="mt-3 font-body-main text-[14px] leading-7 text-white/76">
        {data.text}
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
