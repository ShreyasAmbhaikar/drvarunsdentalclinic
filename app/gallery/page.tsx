import type { Metadata } from "next";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Image Gallery",
  description:
    "Explore clinic moments, dental care, and confident smiles at Dr Varun Dental Clinic.",
  alternates: {
    canonical: `${siteConfig.url}/gallery`
  },
  openGraph: {
    title: `Image Gallery | ${siteConfig.shortName}`,
    description:
      "Explore clinic moments, dental care, and confident smiles at Dr Varun Dental Clinic.",
    url: `${siteConfig.url}/gallery`,
    images: [
      {
        url: siteConfig.images.heroCheckup,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} gallery`
      }
    ]
  }
};

const galleryImages = [
  {
    src: siteConfig.images.heroCheckup,
    alt: "Dentist performing a comfortable dental checkup",
    className: "aspect-[4/5]"
  },
  {
    src: siteConfig.images.smileAfter,
    alt: "Bright smile after dental treatment",
    className: "aspect-[4/3]"
  },
  {
    src: siteConfig.images.doctorRalph,
    alt: "Dr Varun Sharma in the dental clinic",
    className: "aspect-[3/4]"
  },
  {
    src: siteConfig.images.childPatient,
    alt: "Child patient during a dental visit",
    className: "aspect-[5/4]"
  },
  {
    src: siteConfig.images.confidentSmile,
    alt: "Confident patient smile",
    className: "aspect-[4/3]"
  },
  {
    src: siteConfig.images.faqTreatment,
    alt: "Dental treatment room with patient care",
    className: "aspect-[3/4]"
  },
  {
    src: siteConfig.images.smilingPatient,
    alt: "Patient smiling after a dental appointment",
    className: "aspect-[4/5]"
  },
  {
    src: siteConfig.images.doctorShelley,
    alt: "Dental surgeon ready for consultation",
    className: "aspect-[5/4]"
  },
  {
    src: siteConfig.images.smileBefore,
    alt: "Smile before cosmetic dental treatment",
    className: "aspect-[4/3]"
  },
  {
    src: siteConfig.images.ctaPillTwo,
    alt: "Close-up detail of professional dental care",
    className: "aspect-[16/10]"
  },
  {
    src: siteConfig.images.childPatient,
    alt: "Young patient at the dental clinic",
    className: "aspect-[3/4]"
  },
  {
    src: siteConfig.images.confidentSmile,
    alt: "Happy patient smile",
    className: "aspect-[4/5]"
  }
] as const;

export default function GalleryPage() {
  return (
    <main className="bg-surface-container-lowest px-6 pb-20 pt-[136px] md:px-14 md:pb-24">
      <section className="mx-auto max-w-[1180px]">
        <div className="mb-10 text-center">
          <h1 className="font-hero-heading text-[38px] font-extrabold leading-[1.08] text-text-dark sm:text-[50px] md:text-[58px]">
            Gallery
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] font-body-main text-[15px] leading-7 text-text-muted">
            A warm look at our clinic spaces, dental care moments, and
            confident patient smiles.
          </p>
        </div>

        <GalleryLightbox images={galleryImages} />
      </section>
    </main>
  );
}
