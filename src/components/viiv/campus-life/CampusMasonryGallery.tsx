"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ZoomIn } from "lucide-react";

import { campusPhotos } from "@/content/campusLife";

export type GalleryPhoto = {
  src: string;
  alt: string;
  label: string;
  orientation: "tall" | "wide" | "square";
};

export function CampusMasonryGallery({ photos = campusPhotos }: { photos?: readonly GalleryPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <motion.button
            key={photo.src}
            type="button"
            onClick={() => setOpen(index)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: (index % 3) * 0.05 }}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-[color:var(--vil-surface-muted)] text-left"
          >
            <div className={`relative w-full ${photo.orientation === "tall" ? "aspect-[3/4]" : photo.orientation === "wide" ? "aspect-[4/3]" : "aspect-square"}`}>
              <Image src={photo.src} alt={photo.alt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-4 left-4 font-semibold text-white">{photo.label}</span>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[color:var(--vil-navy)] opacity-0 transition group-hover:opacity-100"><ZoomIn className="h-4 w-4" /></span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null ? (
          <motion.div className="fixed inset-0 z-[120] flex items-center justify-center bg-[color:var(--vil-navy)]/92 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <button type="button" aria-label="Close image" onClick={() => setOpen(null)} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[color:var(--vil-navy)]"><X className="h-5 w-5" /></button>
            <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} className="relative h-[82vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
              <Image src={photos[open].src} alt={photos[open].alt} fill priority className="object-contain" sizes="100vw" />
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm">{photos[open].label}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
