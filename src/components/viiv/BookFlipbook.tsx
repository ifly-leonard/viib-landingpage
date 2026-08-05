"use client";

import { ReactFlipBook } from "@vuvandinh203/react-flipbook";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";

import type { LibraryBook } from "@/content/library";
import { playFlipSound } from "@/lib/flipSound";
import { cn } from "@/lib/utils";

const PAGE_W = 420;
const PAGE_H = 560;

const pageStyle: CSSProperties = {
  width: PAGE_W,
  height: PAGE_H,
  boxSizing: "border-box",
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

export function BookFlipbook({ book }: { book: LibraryBook }) {
  const totalChapters = book.chapters.length;

  return (
    <div className="relative flex items-center justify-center gap-6 sm:gap-10 md:gap-16">
      {/* Prev button — far left of the book */}
      <div className="shrink-0">
        <ReactFlipBook
          width={PAGE_W}
          height={PAGE_H}
          showCover
          showNavigationButtons
          showPageNumbers
          enableKeyboardNav
          flippingTime={800}
          drawShadow={false}
          maxShadowOpacity={0.25}
          onFlip={playFlipSound}
          renderNavigationButton={(direction, onClick) =>
            direction === "prev" ? (
              <NavButton
                direction="prev"
                onClick={onClick}
                className="absolute -left-20 top-1/2 -translate-y-1/2 sm:-left-28"
              />
            ) : (
              <NavButton
                direction="next"
                onClick={onClick}
                className="absolute -right-20 top-1/2 -translate-y-1/2 sm:-right-28"
              />
            )
          }
        >
          {/* Front cover */}
          <div
            className="relative"
            style={{
              ...pageStyle,
              padding: 0,
              background: book.color,
              color: "#f5f3ee",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={book.coverImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
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

          {/* Table of contents */}
          <div style={{ ...pageStyle, display: "flex", flexDirection: "column" }}>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-[#bb8806]">
              Contents
            </p>
            <div className="mx-auto mt-8 w-full max-w-[16rem]">
              {book.chapters.map((chapter, i) => (
                <div
                  key={chapter.slug}
                  className="flex items-baseline justify-between gap-3 border-b border-[#1f3149]/10 py-3"
                >
                  <span className="text-sm font-semibold text-[#1f3149]">
                    {String(i + 1).padStart(2, "0")}. {chapter.title}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#8e9197]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter pages */}
          {book.chapters.map((chapter, i) => (
            <div
              key={chapter.slug}
              style={{ ...pageStyle, display: "flex", flexDirection: "column" }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#bb8806]">
                Chapter {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-[#1f3149]">
                {chapter.title}
              </h3>
              <p className="mt-2 font-serif text-sm italic text-[#8e9197]">{chapter.description}</p>
              <div className="mt-6 space-y-4 overflow-y-auto text-[15px] leading-[1.85] text-[#1f3149]/90">
                {chapter.body.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-auto pt-6 text-right text-[10px] uppercase tracking-[0.18em] text-[#8e9197]">
                {book.title} · {String(i + 1)} / {totalChapters}
              </p>
            </div>
          ))}

          {/* Back cover */}
          <div
            style={{
              ...pageStyle,
              padding: 0,
              background: book.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo_main_white.png" alt="VIIV" className="h-16 w-auto opacity-90" />
          </div>
        </ReactFlipBook>
      </div>
    </div>
  );
}
