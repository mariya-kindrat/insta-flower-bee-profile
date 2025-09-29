"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import BackButton from "./BackButton";

type Props = {
  title: string;
  description?: string;
  images: string[];
  backHref?: string;
  backLabel?: string;
};

export default function GalleryDetail({ title, description, images, backHref, backLabel = "Back" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);


  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <main className="px-6 md:px-10 lg:px-20 py-10">
      {backHref && <BackButton href={backHref} label={backLabel} className="mb-6" />}
      <h1 className="font-serif text-3xl mb-4">{title}</h1>
      {description && <p className="text-neutral-700 mb-6">{description}</p>}

      {/* Asymmetrical grid: large first tile on the left spanning two rows on lg screens */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[16rem]">
        {images.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => openAt(i)}
            className={`group relative rounded-2xl overflow-hidden bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 
              aspect-[4/5] lg:aspect-auto lg:col-span-1 ${i === 0 ? "lg:row-span-2" : "lg:row-span-1"}`}
            aria-label={`Open image ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${title} ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              priority={i === 0}
              draggable={false}
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="relative w-[min(95vw,1100px)] h-[min(85vh,80rem)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`${title} large ${index + 1}`}
              fill
              className="object-contain"
              priority
            />

            {/* Close button */}
            <button
              type="button"
              onClick={close}
              className="absolute top-2 right-2 rounded-full bg-black/60 text-white px-3 py-1 text-sm hover:bg-black/80"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white w-10 h-10 flex items-center justify-center hover:bg-black/80"
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white w-10 h-10 flex items-center justify-center hover:bg-black/80"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 rounded-full px-3 py-1">
              {index + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}