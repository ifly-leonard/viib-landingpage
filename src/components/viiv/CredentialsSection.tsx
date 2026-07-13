"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Reveal } from "@/components/viiv/motion";
import {
  credentialGalleryItems,
  credentialsContent,
  degreeAdvantages,
  type CredentialGalleryItem,
} from "@/content/credentials";

const EASE = [0.16, 1, 0.3, 1] as const;

function CertificateCard({ item }: { item: CredentialGalleryItem }) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] overflow-hidden rounded-sm border border-[color:var(--vil-gold-dim)]/40 bg-[#f8f4eb] shadow-[0_28px_60px_-28px_rgba(31,49,73,0.45)]">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-3 border border-[color:var(--vil-gold)]/35"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--vil-navy) 0, var(--vil-navy) 1px, transparent 1px, transparent 10px)",
        }}
      />

      <div className="relative flex h-full flex-col px-7 py-8 text-[color:var(--vil-navy)]">
        <div className="flex items-start justify-between gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/partners/kalasalingam_university.png"
            alt=""
            className="h-9 w-auto max-w-[7rem] object-contain object-left"
          />
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">
            {item.badge}
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[color:var(--vil-gold-dim)]">
            Kalasalingam University
          </p>
          <h3 className="mt-4 font-display text-[clamp(1.1rem,2.4vw,1.45rem)] font-bold uppercase leading-[1.12] tracking-tight">
            {item.sampleTitle}
          </h3>
          <p className="mt-3 text-xs text-[color:var(--vil-navy)]/65">
            {item.sampleSubtitle}
          </p>
        </div>

        <div className="my-auto py-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--vil-navy)]/45">
            Awarded to
          </p>
          <p className="mt-2 font-display text-2xl font-semibold italic tracking-tight text-[color:var(--vil-navy)]">
            Student Name
          </p>
          <p className="mt-4 text-xs leading-relaxed text-[color:var(--vil-navy)]/55">
            In partnership with VIIV · Varman Institute of Venture Building
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-[color:var(--vil-navy)]/10 pt-5">
          <div>
            <p className="text-[9px] uppercase tracking-[0.16em] text-[color:var(--vil-navy)]/45">
              Registrar
            </p>
            <p className="mt-2 h-px w-20 bg-[color:var(--vil-navy)]/25" />
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--vil-gold)]/40 bg-[color:var(--vil-gold)]/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo_main.png"
              alt=""
              className="h-7 w-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CredentialThumb({
  item,
  onSelect,
}: {
  item: CredentialGalleryItem;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-left transition-colors outline-none hover:border-[color:var(--vil-gold-dim)]/60 focus-visible:ring-2 focus-visible:ring-[color:var(--vil-gold)] focus-visible:ring-offset-2"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">
        {item.category}
      </p>
      <p className="mt-1 text-sm font-semibold text-[color:var(--vil-navy)]">
        {item.title}
      </p>
    </button>
  );
}

export function CredentialsSection() {
  const [activeId, setActiveId] = useState<CredentialGalleryItem["id"]>(
    credentialGalleryItems[0].id,
  );
  const reduce = useReducedMotion();
  const activeItem =
    credentialGalleryItems.find((item) => item.id === activeId) ??
    credentialGalleryItems[0];
  const thumbItems = credentialGalleryItems.filter((item) => item.id !== activeId);

  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-ivory)]">
      <div className="viiv-container py-20 md:py-28">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
            <span className="h-px w-8 bg-[color:var(--vil-gold)]" />
            {credentialsContent.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-2xl text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-[color:var(--vil-navy)]">
            {credentialsContent.headline}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[color:var(--text-muted)]">
            {credentialsContent.subcopy}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo_full.png"
              alt="VIIV"
              className="h-14 w-auto object-contain md:h-16"
            />
            <span className="text-lg font-semibold text-[color:var(--vil-navy)]/30">×</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/partners/kalasalingam_university.png"
              alt="Kalasalingam University"
              className="h-11 w-auto object-contain md:h-12"
            />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16">
          <Reveal delay={0.1}>
            <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_10.5rem]">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.28, ease: EASE }}
                  >
                    <CertificateCard item={activeItem} />
                  </motion.div>
                </AnimatePresence>
                <p className="mt-5 text-center text-sm text-[color:var(--text-muted)] md:text-left">
                  {activeItem.description}
                </p>
              </div>

              <div className="flex flex-row gap-3 md:flex-col">
                {thumbItems.map((item) => (
                  <CredentialThumb
                    key={item.id}
                    item={item}
                    onSelect={() => setActiveId(item.id)}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-[color:var(--vil-navy)]">
                {credentialsContent.advantagesTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
                {credentialsContent.advantagesSubcopy}
              </p>

              <ul className="mt-8 space-y-5">
                {degreeAdvantages.map((item, index) => (
                  <li
                    key={item.title}
                    className="flex gap-4 border-t border-[color:var(--border)] pt-5 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--vil-gold)]/15 text-xs font-bold text-[color:var(--vil-gold-dim)]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-[color:var(--vil-navy)]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[color:var(--text-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
