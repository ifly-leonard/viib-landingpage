"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import FlipBook from "flipbook-js";
import { ArrowLeft, ArrowRight, Download, Lock } from "lucide-react";

import type { LibraryBook } from "@/content/library";
import { playFlipSound } from "@/lib/flipSound";
import { cn } from "@/lib/utils";

// flipbook-js renders two pages per spread: even index = left page,
// odd index = right page. This is the size of a single page; the book
// container is set to 2 × PAGE_W (see the `width` prop below).
const PAGE_W = 420;
const PAGE_H = 560;

// Page indices: 0 = front cover, 1 = contents, then one page per chapter.
// The gate blur happens after `gate.afterPage` chapters, configured per book
// in the JSON (`gate: { afterPage: N }`). If a book has no `gate` config, the
// lead-gate is disabled entirely.
// Gate threshold = cover(0) + contents(1) + the first `afterPage` chapters.
const gateThreshold = (afterPage: number) => 2 + afterPage;

const pageStyle: React.CSSProperties = {
  boxSizing: "border-box",
  height: "100%",
  padding: "48px 44px",
  background: "#fdfbf7",
  color: "#2c3a4d",
  fontFamily: "Georgia, 'Times New Roman', serif",
  overflow: "hidden",
};

/** Hero-style circular nav button with a gold ring outline. */
function NavButton({
  direction,
  onClick,
  className,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous page" : "Next page"}
      className={cn(
        "group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-200",
        "border-[color:var(--vil-navy)]/25 bg-white text-[color:var(--vil-navy)]",
        "hover:border-[color:var(--vil-gold)] hover:bg-[color:var(--vil-gold)] hover:text-[color:var(--vil-navy)]",
        "shadow-[0_8px_24px_-12px_rgba(31,49,73,0.35)]",
        className,
      )}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

export function BookFlipbook({
  book,
  onRequestDownload,
}: {
  book: LibraryBook;
  onRequestDownload?: (book: LibraryBook) => void;
}) {
  const totalChapters = book.chapters.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<FlipBook | null>(null);
  const [gateOpen, setGateOpen] = useState(false);

  // Lead-gate is opt-in per book via the JSON `gate` field.
  const gate = book.gate;
  const gateEnabled = Boolean(gate);
  const gateAfter = gate?.afterPage ?? 4;
  const gateCta = gate?.cta ?? "Download this";

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const instance = new FlipBook(el, {
      arrowKeys: true,
      canClose: true,
      width: `${PAGE_W * 2}px`,
      height: `${PAGE_H}px`,
      onPageTurn: (
        _el: HTMLElement,
        context: { pagesActive: NodeListOf<HTMLElement>; children: NodeListOf<HTMLElement> },
      ) => {
        playFlipSound();
        if (!gateEnabled) return;
        // pagesActive contains the indices of the pages in the current spread.
        const active = Array.from(context.pagesActive).map((node) =>
          Array.prototype.indexOf.call(el.children, node),
        );
        const maxPage = active.length ? Math.max(...active) : 0;
        if (maxPage >= gateThreshold(gateAfter)) setGateOpen(true);
      },
    });
    bookRef.current = instance;
    return () => {
      // flipbook-js has no destroy(); remove its side effects manually.
      el.classList.remove("is-ready");
      bookRef.current = null;
    };
  }, [gateEnabled, gateAfter]);

  const flip = (direction: "forward" | "back") => {
    bookRef.current?.turnPage(direction);
  };

  const locked = gateEnabled && gateOpen;

  return (
    <div className="relative flex items-center justify-center gap-6 sm:gap-10 md:gap-16">
      {/* Prev button — far left of the book */}
      <div className="shrink-0">
        <NavButton
          direction="prev"
          onClick={() => flip("back")}
          className="absolute -left-20 top-1/2 -translate-y-1/2 sm:-left-28"
        />
      </div>

      {/* Book + blur gate */}
      <div className="relative">
        {/* The book */}
        <div
          ref={containerRef}
          className={cn("c-flipbook transition-[filter] duration-500", locked && "pointer-events-none select-none blur-[10px]")}
          style={{
            position: "relative",
            width: PAGE_W * 2,
            height: PAGE_H,
            background: "#f5f3ee",
          }}
        >
        {/* Front cover — left page of the first spread */}
        <div className="c-flipbook__page" style={{ ...pageStyle, padding: 0, background: book.color, color: "#f5f3ee", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={book.coverImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="relative z-10 px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo_main_white.png" alt="VIIV" className="mx-auto h-14 w-auto" />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#f7bd44]">
              {book.label}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight">{book.title}</h2>
            <p className="mt-4 font-serif text-sm italic text-[#f5f3ee]/80">by {book.author}</p>
          </div>
        </div>

        {/* Table of contents — right page of the first spread */}
        <div className="c-flipbook__page" style={{ ...pageStyle, display: "flex", flexDirection: "column" }}>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[#bb8806]">Contents</p>
          <div className="mt-6 grid w-full grid-cols-2 gap-x-5">
            {book.chapters.map((chapter, i) => (
              <div key={chapter.slug} className="flex items-baseline justify-between gap-2 border-b border-[#1f3149]/10 py-1.5">
                <span className="text-[11px] font-semibold leading-tight text-[#1f3149]">
                  {String(i + 1).padStart(2, "0")}. {chapter.title}
                </span>
                <span className="text-[9px] uppercase tracking-[0.12em] text-[#8e9197]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Chapter pages — two pages per spread */}
        {book.chapters.map((chapter, i) => (
          <div key={chapter.slug} className="c-flipbook__page" style={{ ...pageStyle, display: "flex", flexDirection: "column" }}>
            <p className="text-xs uppercase tracking-[0.3em] text-[#bb8806]">
              Chapter {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-[#1f3149]">
              {chapter.title}
            </h3>
            <p className="mt-2 font-serif text-sm italic text-[#8e9197]">{chapter.description}</p>
            <div className="mt-6 space-y-4 overflow-y-auto text-[15px] leading-[1.85] text-[#1f3149]/90">
              {chapter.body.split("\n\n").map((paragraph, pIndex) => {
                const paragraphNumber = pIndex + 1;
                const images = chapter.images?.filter(
                  (image) => (image.afterParagraph ?? 1) === paragraphNumber,
                );

                return (
                  <Fragment key={pIndex}>
                    <p>{paragraph}</p>
                    {images?.map((image) => (
                      <figure key={`${image.src}-${paragraphNumber}`} className="my-5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-40 w-full rounded-sm object-cover"
                        />
                        {image.caption ? (
                          <figcaption className="mt-2 text-xs italic leading-relaxed text-[#8e9197]">
                            {image.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </Fragment>
                );
              })}
            </div>
            <p className="mt-auto pt-6 text-right text-[10px] uppercase tracking-[0.18em] text-[#8e9197]">
              {book.title} · {String(i + 1)} / {totalChapters}
            </p>
          </div>
        ))}

        {/* Back cover */}
        <div className="c-flipbook__page" style={{ ...pageStyle, padding: 0, background: book.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo_main_white.png" alt="VIIV" className="h-16 w-auto opacity-90" />
        </div>
        </div>

        {/* Blur gate overlay */}
        {locked ? (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 rounded-sm bg-[color:var(--vil-ivory)]/60 p-6 text-center backdrop-blur-[2px]">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--vil-navy)] text-[color:var(--vil-gold)] shadow-[0_12px_32px_-12px_rgba(31,49,73,0.5)]">
              <Lock className="h-6 w-6" />
            </span>
            <div>
              <p className="font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
                The rest is yours to keep.
              </p>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[color:var(--text-muted)]">
                You&apos;ve read the first chapters. Download the full {book.label} and take it with you.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onRequestDownload?.(book)}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--vil-gold)] px-7 py-3 text-sm font-bold text-[color:var(--vil-navy)] transition hover:brightness-105"
            >
              <Download className="h-4 w-4" />
              {gateCta}
            </button>
          </div>
        ) : null}
      </div>

      {/* Next button — far right of the book */}
      <div className="shrink-0">
        <NavButton
          direction="next"
          onClick={() => flip("forward")}
          className="absolute -right-20 top-1/2 -translate-y-1/2 sm:-right-28"
        />
      </div>
    </div>
  );
}
