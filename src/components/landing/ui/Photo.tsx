import Image from "next/image";
import type { MediaItem } from "@/content/landing/media";
import { cn } from "@/lib/landing/cn";
import { Icon } from "./Icon";

/**
 * Renders a real photo when `media.src` is set, otherwise an art-directed
 * placeholder that keeps the final aspect ratio (no layout shift when swapped).
 */
export function Photo({
  media,
  className,
  sizes,
  priority,
  tone = "warm",
  captionTop,
}: {
  media: MediaItem;
  className?: string;
  sizes: string;
  priority?: boolean;
  tone?: "warm" | "cool" | "dark";
  /** Place the placeholder caption at the top (when something overlaps the bottom). */
  captionTop?: boolean;
}) {
  if (media.src) {
    return (
      <div className={cn("overflow-hidden", !/\b(absolute|fixed)\b/.test(className ?? "") && "relative", className)}>
        <Image src={media.src} alt={media.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }

  const toneClass = {
    warm: "bg-[linear-gradient(160deg,#fbe7bd_0%,#e9c877_45%,#b98a1f_100%)] text-ink/70",
    cool: "bg-[linear-gradient(160deg,#e7edf7_0%,#b6c7e6_50%,#5b7096_100%)] text-ink/70",
    dark: "bg-[linear-gradient(160deg,#24374f_0%,#172536_60%,#0f1a28_100%)] text-paper/60",
  }[tone];

  return (
    <div
      role="img"
      aria-label={media.alt}
      className={cn("overflow-hidden", !/\b(absolute|fixed)\b/.test(className ?? "") && "relative", toneClass, className)}
    >
      {/* Soft figure silhouette to suggest a portrait composition */}
      <svg aria-hidden viewBox="0 0 200 250" className="absolute inset-x-0 bottom-0 mx-auto h-[82%] w-auto opacity-25" preserveAspectRatio="xMidYMax meet">
        <circle cx="100" cy="78" r="38" fill="currentColor" />
        <path d="M22 250c0-52 35-92 78-92s78 40 78 92Z" fill="currentColor" />
      </svg>
      <div className={cn("absolute inset-x-3 flex", captionTop ? "top-3" : "bottom-3", " items-start gap-2 rounded-xl bg-white/70 px-3 py-2 text-[11px] leading-snug text-ink/80 backdrop-blur-sm")}>
        <Icon name="image" className="mt-px size-3.5" />
        <span>
          <span className="font-semibold">Photo placeholder · </span>
          {media.brief}
        </span>
      </div>
    </div>
  );
}
