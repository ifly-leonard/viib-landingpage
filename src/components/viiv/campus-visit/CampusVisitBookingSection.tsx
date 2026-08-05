"use client";

import { useState } from "react";
import { Calendar, Phone } from "lucide-react";

import { SectionShell } from "@/components/viiv/SectionShell";
import { visitBooking } from "@/content/campusVisit";

import { CampusVisitBookingModal } from "./CampusVisitBookingModal";

export function CampusVisitBookingSection() {
  const [open, setOpen] = useState(false);

  return (
    <SectionShell tone="light" id="book-a-visit">
      <div className="mx-auto max-w-4xl text-center">
        <p className="viiv-kicker">{visitBooking.eyebrow}</p>
        <h2 className="viiv-section-title mt-4">{visitBooking.headline}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[color:var(--text-muted)]">
          {visitBooking.description}
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-xl">
        <div className="rounded-2xl border border-[color:var(--vil-navy)]/10 bg-white p-8 text-center shadow-[0_24px_60px_-36px_rgba(31,49,73,0.35)]">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
            <Calendar className="h-5 w-5" />
          </div>
          <button type="button" onClick={() => setOpen(true)} className="btn-primary mt-6">
            {visitBooking.ctaLabel}
          </button>
          <p className="mt-4 text-sm text-[color:var(--text-muted)]">{visitBooking.helperText}</p>
        </div>
      </div>

      <p className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-2 text-center text-sm text-[color:var(--text-muted)] sm:flex-row sm:justify-center sm:gap-1.5">
        <span>{visitBooking.helpNote}</span>
        <a
          href={visitBooking.contactHref}
          className="inline-flex items-center gap-1.5 font-semibold text-[color:var(--vil-navy)] underline-offset-2 transition-colors hover:text-[color:var(--vil-gold-dim)] hover:underline"
        >
          <Phone className="h-3.5 w-3.5" />
          {visitBooking.contactLabel}
        </a>
      </p>

      <CampusVisitBookingModal open={open} onOpenChange={setOpen} />
    </SectionShell>
  );
}
