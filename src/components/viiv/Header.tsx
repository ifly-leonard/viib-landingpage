"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";

import { AnnouncementBar } from "@/components/viiv/AnnouncementBar";
import { CtaButton } from "@/components/viiv/CtaButton";
import { MobileNav } from "@/components/viiv/MobileNav";
import { NavMenu } from "@/components/viiv/NavMenu";
import { siteMeta } from "@/content/homepage";
import { admissionsConfig } from "@/lib/admissions.config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <AnnouncementBar />
        <header
          className={cn(
            "relative transition-all duration-300",
            scrolled
              ? "bg-[color:var(--vil-ivory)]/85 backdrop-blur-xl"
              : "backdrop-blur-2xl",
          )}
        >
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--vil-gold)] to-transparent"
            initial={false}
            animate={{ opacity: scrolled ? 1 : 0, scaleX: scrolled ? 1 : 0.3 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "center" }}
          />
          <div className="viiv-container flex h-16 items-center justify-between gap-4 md:h-[4.75rem]">
          <Link href="/" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={scrolled ? "/brand/logo_main.png" : "/brand/logo_main_white.png"}
              alt={siteMeta.name}
              className="h-16 w-auto shrink-0 transition-opacity md:h-16"
            />            
          </Link>

          <NavMenu light={!scrolled} />

          <div className="hidden items-center gap-1 lg:flex">
            <a
              href={admissionsConfig.admissionsPhoneHref}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
                scrolled
                  ? "text-[color:var(--text-muted)] hover:text-[color:var(--vil-navy)]"
                  : "text-[color:var(--vil-ivory)]/80 hover:text-[color:var(--vil-ivory)]",
              )}
            >
              <Phone className="h-4 w-4" />
              {admissionsConfig.admissionsPhone}
            </a>
            <CtaButton href="/admissions#apply" variant="navy" className="px-5 py-2">
              Apply Now
            </CtaButton>
          </div>

          <button
            type="button"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl border transition-colors lg:hidden",
              scrolled
                ? "border-[color:var(--border)] text-[color:var(--vil-navy)]"
                : "border-[color:var(--vil-ivory)]/30 text-[color:var(--vil-ivory)]",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          </div>
        </header>
      </div>

      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-[color:var(--vil-navy)]/50 backdrop-blur-sm lg:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col overflow-y-auto border-l border-[color:var(--border)] bg-[color:var(--vil-ivory)] p-6 transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo_main.png"
            alt={siteMeta.name}
            className="h-22 w-auto"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] text-[color:var(--vil-navy)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <MobileNav onNavigate={() => setOpen(false)} />
        <div className="mt-6 flex flex-col gap-3 border-t border-[color:var(--border)] pt-5">
          <CtaButton
            href="/admissions#apply"
            variant="navy"
            className="w-full px-5 py-3"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </CtaButton>
          <a
            href={admissionsConfig.admissionsPhoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] px-5 py-3.5 text-sm font-medium text-[color:var(--vil-navy)]"
          >
            <Phone className="h-4 w-4" />
            {admissionsConfig.admissionsPhone}
          </a>
        </div>
      </div>
    </>
  );
}
