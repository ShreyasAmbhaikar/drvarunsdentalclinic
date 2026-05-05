"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  className: string;
};

export function GalleryLightbox({
  images
}: {
  images: readonly GalleryImage[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-4">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[16px] bg-section-light text-left shadow-soft ${image.className}`}
            aria-label={`Open gallery image ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.035]"
              priority={index < 4}
            />
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(37,20,6,0.82)] px-4 py-6 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
        >
          <div
            className="relative flex w-fit max-w-[min(92vw,1100px)] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/92 text-text-dark shadow-soft transition-colors hover:bg-white"
              aria-label="Close image preview"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_30px_80px_rgba(37,20,6,0.35)]">
              <div className="relative h-[min(82vh,760px)] w-[min(92vw,980px)] overflow-hidden rounded-[18px] bg-section-light">
                <Image
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>

            <p className="mt-4 text-center font-body-main text-sm text-white/92">
              {images[activeIndex].alt}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
