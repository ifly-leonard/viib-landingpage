"use client";

import type { GalleryItem } from "@/content/campus";

import { BentoCell } from "@/components/viiv/BentoCell";
import { ImagePlaceholder } from "@/components/viiv/ImagePlaceholder";
import { cn } from "@/lib/utils";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="viiv-bento-grid viiv-bento-grid--4">
      {items.map((item) => (
        <BentoCell
          key={item.id}
          tone="light"
          hover
          parallax={item.size === "xl" || item.size === "lg"}
          className={cn(
            "overflow-hidden p-0",
            item.size === "wide" && "md:col-span-2",
            item.size === "tall" && "md:row-span-2",
            item.size === "xl" && "md:col-span-2 md:row-span-2",
            item.size === "lg" && "md:row-span-2",
          )}
        >
          <ImagePlaceholder title={item.title} size={item.size} variant="light" className="h-full min-h-full flex-1 rounded-none border-0" />
          <div className="border-t border-[color:var(--border)] px-4 py-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--vil-gold-dim)]">
              {item.category}
            </p>
          </div>
        </BentoCell>
      ))}
    </div>
  );
}
