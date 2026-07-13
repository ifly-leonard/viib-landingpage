"use client";

import { useRef, useState } from "react";

import RichPopover from "@/components/smoothui/rich-popover";
import { Reveal } from "@/components/viiv/motion";
import { cn } from "@/lib/utils";

type Source = {
  domain: string;
  source: string;
  report: string;
  published: string;
  citation: string;
  href: string;
  /** Dark tile background for logos that are white/transparent. */
  darkTile?: boolean;
};

const SOURCES: Source[] = [
  {
    domain: "weforum.org",
    source: "World Economic Forum",
    report: "Future of Jobs Report 2025",
    published: "January 2025",
    citation:
      "Employers expect 39% of key workplace skills to change by 2030.",
    href: "https://www.weforum.org/stories/2025/01/future-of-jobs-report-2025-jobs-of-the-future-and-the-skills-you-need-to-get-them/",
    darkTile: true,
  },
  {
    domain: "linkedin.com",
    source: "LinkedIn Economic Graph",
    report: "Work Change Report 2025: AI Is Coming to Work",
    published: "January 2025",
    citation:
      "LinkedIn expects 70% of the skills used in most jobs to change by 2030, with AI acting as a catalyst.",
    href: "https://news.linkedin.com/2025/work-change-report-2025",
  },
  {
    domain: "microsoft.com",
    source: "Microsoft and LinkedIn",
    report: "2024 Work Trend Index: AI at Work Is Here",
    published: "May 2024",
    citation:
      "75% of knowledge workers use AI at work, and 46% began using it within the previous six months.",
    href: "https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part",
  },
  {
    domain: "stanford.edu",
    source: "Stanford Institute for Human-Centered AI",
    report: "AI Index Report 2025",
    published: "April 2025",
    citation:
      "78% of organizations reported using AI in 2024, up from 55% in 2023.",
    href: "https://hai.stanford.edu/ai-index/2025-ai-index-report",
  },
  {
    domain: "ilo.org",
    source: "International Labour Organization",
    report:
      "Generative AI and Jobs: A Refined Global Index of Occupational Exposure",
    published: "May 2025",
    citation:
      "One in four workers globally are in occupations with some degree of generative AI exposure.",
    href: "https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure",
  },
  {
    domain: "unesco.org",
    source: "UNESCO",
    report:
      "Survey on Institutional Guidance for Generative AI in Education",
    published: "June 2023",
    citation:
      "Fewer than 10% of surveyed schools and universities had formal policies or guidance for generative AI.",
    href: "https://www.unesco.org/en/articles/unesco-survey-less-10-schools-and-universities-have-formal-guidance-ai",
  },
  {
    domain: "ec.europa.eu",
    source: "European Commission Joint Research Centre",
    report: "EntreComp: The Entrepreneurship Competence Framework",
    published: "2016",
    citation:
      "Entrepreneurial competence is structured around Ideas and Opportunities, Resources, and Into Action.",
    href: "https://joint-research-centre.ec.europa.eu/entrecomp-entrepreneurship-competence-framework_en",
  },
];

function favicon(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

function HoverCite({ source }: { source: Source }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const hide = () => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <span onMouseEnter={show} onMouseLeave={hide} className="inline-flex">
      <RichPopover
        open={open}
        onOpenChange={setOpen}
        onContentMouseEnter={show}
        onContentMouseLeave={hide}
        side="top"
        align="center"
        title={source.report}
        href={source.href}
        description={source.citation}
        meta={source.published}
        actionLabel="Read the report"
        actionHref={source.href}
        icon={
          // eslint-disable-next-line @next/next/no-img-element
          <img src={favicon(source.domain)} alt="" className="h-4 w-4 rounded-[3px]" />
        }
        trigger={
          <button
            type="button"
            aria-label={`Source: ${source.source}`}
            onFocus={show}
            onBlur={hide}
            className={cn(
              "inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--vil-gold)]/60 hover:shadow-md",
              source.darkTile
                ? "border-[color:var(--vil-navy)] bg-[color:var(--vil-navy)]"
                : "border-[color:var(--border)] bg-[color:var(--vil-surface)]",
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={favicon(source.domain)}
              alt={source.source}
              className="h-6 w-6 rounded-[4px]"
            />
          </button>
        }
      />
    </span>
  );
}

export function StatusQuoSection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-ivory)]">
      <div className="viiv-container py-24 md:py-32">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
            <span className="h-px w-8 bg-[color:var(--vil-gold)]" />
            What&apos;s wrong with the status quo
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-4xl text-balance text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-tight text-[color:var(--vil-navy)]">
            Most college courses are not enough for{" "}
            <span className="underline decoration-[color:var(--vil-gold)] decoration-4 underline-offset-[6px]">
              today
            </span>
            , let alone <span className="text-[color:var(--vil-gold)]">tomorrow.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-soft)]">
              According to
            </span>
            {SOURCES.map((source) => (
              <HoverCite key={source.domain} source={source} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
