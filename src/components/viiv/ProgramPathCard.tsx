import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ImagePlaceholder } from "@/components/viiv/ImagePlaceholder";
import { cn } from "@/lib/utils";

const toneClasses = {
  gold: "border-[color:var(--vil-gold)]/40 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--vil-gold)_10%,white)_0%,white_100%)]",
  blue: "border-[color:var(--vil-blue)]/50 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--vil-blue)_22%,white)_0%,white_100%)]",
  navy: "border-[color:var(--vil-navy)]/20 bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]",
} as const;

export function ProgramPathCard({
  title,
  duration,
  headline,
  description,
  tag,
  tone,
  href = "/program",
}: {
  title: string;
  duration: string;
  headline: string;
  description: string;
  tag: string;
  tone: keyof typeof toneClasses;
  href?: string;
}) {
  const dark = tone === "navy";

  return (
    <article className={cn("viiv-big-card group overflow-hidden", toneClasses[tone])}>
      <ImagePlaceholder title={title} size="md" variant="light" className="rounded-none border-0 border-b border-[color:var(--border)]" />
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-current/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]">
            {tag}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] opacity-70">{duration}</span>
        </div>
        <h3 className="mt-5 font-display text-3xl font-extrabold leading-none tracking-tight md:text-4xl">
          {headline}
        </h3>
        <p className={cn("mt-4 flex-1 text-sm leading-relaxed md:text-base", dark ? "text-[color:var(--vil-ivory)]/78" : "text-[color:var(--text-muted)]")}>
          {description}
        </p>
        <Link
          href={href}
          className={cn(
            "mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] transition group-hover:gap-3",
            dark ? "text-[color:var(--vil-gold)]" : "text-[color:var(--vil-navy)]",
          )}
        >
          Explore pathway
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
