/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

type GalleryMedia = {
  src: string;
  alt: string;
  type?: "image" | "video";
};

export function GalleryLightbox({
  images
}: {
  images: readonly GalleryMedia[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const goToPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    });
  }, [images.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, goToNext, goToPrevious]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[18px] bg-section-light text-left shadow-soft lg:mb-5"
            aria-label={`Open gallery ${image.type === "video" ? "video" : "image"} ${index + 1}`}
          >
            {image.type === "video" ? (
              <>
                <video
                  src={image.src}
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  muted
                  playsInline
                  preload="metadata"
                />
                <span className="absolute inset-0 bg-black/22 transition-colors duration-300 group-hover:bg-black/28" />
                <span className="absolute left-1/2 top-1/2 inline-flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white/90 bg-primary-container/88 text-white shadow-[0_16px_34px_rgba(37,20,6,0.28)] backdrop-blur-sm">
                  <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
                </span>
              </>
            ) : (
              <>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  loading={index < 4 ? "eager" : "lazy"}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-primary-container/24 via-primary-container/6 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </>
            )}
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(37,20,6,0.82)] px-4 py-6 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
          onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            const touchEndX = event.changedTouches[0]?.clientX;

            if (touchStartX === null || touchEndX === undefined) {
              setTouchStartX(null);
              return;
            }

            const deltaX = touchEndX - touchStartX;

            if (deltaX > 50) {
              goToPrevious();
            } else if (deltaX < -50) {
              goToNext();
            }

            setTouchStartX(null);
          }}
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
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-[rgba(20,12,6,0.78)] text-white shadow-[0_14px_30px_rgba(0,0,0,0.28)] transition-colors hover:bg-[rgba(20,12,6,0.92)]"
              aria-label="Previous media"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-[rgba(20,12,6,0.78)] text-white shadow-[0_14px_30px_rgba(0,0,0,0.28)] transition-colors hover:bg-[rgba(20,12,6,0.92)]"
              aria-label="Next media"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-[rgba(20,12,6,0.78)] text-white shadow-[0_14px_30px_rgba(0,0,0,0.28)] transition-colors hover:bg-[rgba(20,12,6,0.92)]"
              aria-label="Close image preview"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_30px_80px_rgba(37,20,6,0.35)]">
              <div className="flex max-h-[72dvh] w-[min(92vw,980px)] items-center justify-center overflow-hidden rounded-[18px] bg-section-light sm:max-h-[82dvh]">
                {images[activeIndex].type === "video" ? (
                  <video
                    src={images[activeIndex].src}
                    className="max-h-[72dvh] w-full object-contain sm:max-h-[82dvh]"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    src={images[activeIndex].src}
                    alt={images[activeIndex].alt}
                    className="block max-h-[72dvh] w-auto max-w-full object-contain sm:max-h-[82dvh]"
                  />
                )}
              </div>
            </div>

            <p className="mt-4 rounded-full border border-white/12 bg-[rgba(20,12,6,0.72)] px-4 py-2 text-center font-body-main text-sm text-white shadow-[0_14px_30px_rgba(0,0,0,0.24)]">
              {images[activeIndex].alt}{" "}
              <span className="text-white/75">
                ({activeIndex + 1}/{images.length})
              </span>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
