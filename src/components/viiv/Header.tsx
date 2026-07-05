"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";

import { admissionsConfig } from "@/lib/admissions.config";
import { navigation, siteMeta } from "@/content/homepage";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[color:var(--border)] bg-[color:var(--vil-ivory)]/92 backdrop-blur-xl shadow-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="viiv-container flex h-16 items-center gap-4 md:h-[4.5rem]">
          <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-[color:var(--vil-navy)]">
            {siteMeta.name}
          </Link>

          <nav className="ml-auto hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="viiv-nav-link text-sm font-medium text-[color:var(--text-muted)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={admissionsConfig.admissionsPhoneHref} className="btn-secondary !px-5 !py-2.5 !text-sm">
              <Phone className="h-4 w-4" />
              Call
            </a>
            <a href={admissionsConfig.applyUrl} className="btn-primary !px-5 !py-2.5 !text-sm">
              Apply Now
            </a>
          </div>

          <button
            type="button"
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--border)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-[color:var(--vil-navy)]/40 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} />
      ) : null}

      <div
        className={`fixed inset-y-0 right-0 z-50 w-[min(100%,20rem)] border-l border-[color:var(--border)] bg-[color:var(--vil-ivory)] p-6 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="mt-16 flex flex-col gap-2">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-serif text-lg font-medium text-[color:var(--vil-navy)] hover:bg-[color:var(--vil-surface-muted)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <a href={admissionsConfig.applyUrl} className="btn-primary w-full" onClick={() => setOpen(false)}>
            Apply Now
          </a>
          <a href={admissionsConfig.admissionsPhoneHref} className="btn-secondary w-full">
            <Phone className="h-4 w-4" />
            Talk to Admissions
          </a>
        </div>
      </div>

      <a
        href={admissionsConfig.applyUrl}
        className="fixed bottom-5 right-5 z-40 btn-primary shadow-xl lg:hidden"
      >
        Apply Now
      </a>
    </>
  );
}
