import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "min-h-[180px]",
  md: "min-h-[240px]",
  lg: "min-h-[320px]",
  xl: "min-h-[420px]",
  wide: "min-h-[240px] md:col-span-2",
  tall: "min-h-[360px] md:row-span-2",
} as const;

export function ImagePlaceholder({
  title,
  size = "md",
  className,
  label = "Image coming soon",
  variant = "dark",
}: {
  title?: string;
  size?: keyof typeof sizeClasses;
  className?: string;
  label?: string;
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";

  return (
    <div className={cn("viiv-image-placeholder group", sizeClasses[size], isDark ? "viiv-image-placeholder--dark" : "viiv-image-placeholder--light", className)}>
      <div className="viiv-image-placeholder__inner">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--vil-gold)]/30 bg-[color:var(--vil-gold)]/10 text-[color:var(--vil-gold-dim)]">
          <ImageIcon className="h-5 w-5" />
        </div>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--vil-gold-dim)]">
          {label}
        </p>
        {title ? (
          <p className={cn("mt-3 max-w-[16rem] text-center font-display text-lg font-bold leading-snug", isDark ? "text-[color:var(--vil-ivory)]" : "text-[color:var(--vil-navy)]")}>
            {title}
          </p>
        ) : null}
      </div>
    </div>
  );
}
