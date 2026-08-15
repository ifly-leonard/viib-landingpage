"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { PortalCardCarousel } from "@/components/viiv/PortalCardCarousel";
import { PortalWebinarForm } from "@/components/viiv/PortalWebinarForm";

/**
 * Full-screen webinar gate page for /portal. The form on the right is a
 * gate — on submit it redirects to the webinar success page. Carousel on
 * the left.
 */
export default function PortalPage() {
  return (
    <main className="grid min-h-dvh lg:grid-cols-2">
      {/* Left: brand panel with carousel */}
      <div className="relative hidden overflow-hidden bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)] lg:flex lg:flex-col lg:justify-center lg:p-12 lg:pr-16">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(247,189,68,0.22)_1px,transparent_0)] [background-size:26px_26px]" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[color:var(--vil-gold)]/10 blur-[100px]" />

        <div className="relative px-4 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--vil-gold)]">
            Live Webinar · The State of College Education
          </p>
          <h1 className="mt-5 max-w-lg text-balance text-[clamp(2rem,3.4vw,3rem)] font-bold leading-[1.08] tracking-tight">
            Degrees are no longer enough.{" "}
            <span className="text-[color:var(--vil-gold)]">See what&apos;s changing.</span>
          </h1>

          <div className="mt-10">
            <PortalCardCarousel />
          </div>

          <a
            href="/live-webinar-about-state-of-college-education"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--vil-ivory)]/70 transition hover:text-[color:var(--vil-gold)]"
          >
            Learn more about the webinar
            <ExternalLink className="h-4 w-4" />
          </a>

          <p className="mt-10 text-xs text-[color:var(--vil-ivory)]/50">
            © {new Date().getFullYear()} VIIV — Varman Institute of Innovation and Venture Building
          </p>
        </div>
      </div>

      {/* Right: webinar gate form */}
      <div className="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-[color:var(--vil-ivory)] px-6 py-16 sm:px-12 lg:px-16">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(31,49,73,0.08)_1px,transparent_0)] [background-size:26px_26px]" />

        <div className="relative mx-auto w-full max-w-lg">
          {/* Mobile brand */}
          <div className="mb-10 flex items-center justify-center lg:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo_main.png" alt="VIIV" className="h-12 w-auto" />
          </div>

          {/* Form directly inside the div — no card wrapper */}
          <PortalWebinarForm />

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px flex-1 bg-[color:var(--border)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-soft)]">Free to attend</span>
            <span className="h-px flex-1 bg-[color:var(--border)]" />
          </div>

          <p className="mt-6 text-center text-xs leading-relaxed text-[color:var(--text-soft)]">
            Need help? Call{" "}
            <Link href="tel:+918925991788" className="font-semibold text-[color:var(--vil-navy)] underline underline-offset-2">
              +91 89259 91788
            </Link>{" "}
            or{" "}
            <Link href="/" className="font-semibold text-[color:var(--vil-navy)] underline underline-offset-2">
              back to viivindia.com
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
