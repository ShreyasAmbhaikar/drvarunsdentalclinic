import type { Metadata } from "next";
import { GalleryLightboxClient } from "@/components/gallery/gallery-lightbox-client";
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
        url: "/images/gallery/pic1.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} gallery`
      }
    ]
  }
};

const galleryImages = [
  {
    src: "/images/gallery/pic1.jpg",
    alt: "Gallery image 1 from Dr. Varun's Dental Clinic"
  },
  {
    src: "/images/gallery/pic6.jpg",
    alt: "Gallery image 6 from Dr. Varun's Dental Clinic"
  },
  {
    src: "/images/gallery/pic5.webp",
    alt: "Gallery image 5 from Dr. Varun's Dental Clinic"
  },
  {
    src: "/images/gallery/pic2.jpg",
    alt: "Gallery image 2 from Dr. Varun's Dental Clinic"
  },
  {
    src: "/images/gallery/pic7.jpg",
    alt: "Gallery image 7 from Dr. Varun's Dental Clinic"
  },
  {
    src: "/images/gallery/pic9.jpg",
    alt: "Gallery image 9 from Dr. Varun's Dental Clinic"
  },
  {
    src: "/images/gallery/videoplayback.mp4",
    alt: "Clinic walkthrough video from Dr. Varun's Dental Clinic",
    type: "video" as const
  }
] as const;

export default function GalleryPage() {
  return (
    <main className="bg-surface-container-lowest px-6 pb-20 pt-[136px] md:px-14 md:pb-24">
      <section className="mx-auto max-w-[1180px]">
        <div className="mb-10 text-center">
          <p className="font-label-sm text-[13px] font-semibold uppercase tracking-[0.18em] text-primary-container">
            Our Clinic Moments
          </p>
          <h1 className="font-hero-heading text-[38px] font-extrabold leading-[1.08] text-text-dark sm:text-[50px] md:text-[58px]">
            Gallery
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] font-body-main text-[15px] leading-7 text-text-muted">
            A warm look at our clinic spaces, dental care moments, and
            confident patient smiles.
          </p>
        </div>

        <GalleryLightboxClient images={galleryImages} />
      </section>
    </main>
  );
}
