"use client";

import { BentoCell } from "@/components/viiv/BentoCell";
import { BentoGrid } from "@/components/viiv/BentoGrid";
import { ImagePlaceholder } from "@/components/viiv/ImagePlaceholder";
import { outcomeStats } from "@/content/homepage";

export function OutcomesBento() {
  const [featured, ...rest] = outcomeStats;

  return (
    <BentoGrid cols={4}>
      <BentoCell span="2x2" tone="light" parallax className="justify-between">
        <div>
          <p className="font-display text-[clamp(3rem,8vw,5rem)] font-semibold leading-none tracking-tight text-[color:var(--vil-navy)]">
            {featured.value}
          </p>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">
            {featured.label}
          </p>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-[color:var(--text-muted)]">{featured.detail}</p>
      </BentoCell>

      <BentoCell span="2x1" tone="light" className="overflow-hidden p-0" hover={false}>
        <ImagePlaceholder title="Student outcomes" size="md" variant="light" className="h-full min-h-[180px] rounded-none border-0" />
      </BentoCell>

      {rest.map((stat) => (
        <BentoCell key={stat.label} tone="light" hover>
          <p className="font-display text-4xl font-semibold tracking-tight text-[color:var(--vil-navy)]">{stat.value}</p>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">{stat.label}</p>
          <p className="mt-2 text-sm text-[color:var(--text-muted)]">{stat.detail}</p>
        </BentoCell>
      ))}
    </BentoGrid>
  );
}
