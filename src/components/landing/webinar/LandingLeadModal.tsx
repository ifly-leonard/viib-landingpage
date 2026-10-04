"use client";

import { useEffect, useState } from "react";
import {
  CalendarCheck,
  MessageCircle,
  PartyPopper,
  PhoneCall,
  Rocket,
  ShieldCheck,
  Target,
} from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import confetti from "canvas-confetti";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { LandingLeadForm } from "./LandingLeadForm";

const copyPoints = [
  {
    icon: Target,
    title: "Careers beyond coding",
    body: "Business Development, Sales, Customer Success, Account Management and more.",
  },
  {
    icon: Rocket,
    title: "Learn by doing",
    body: "Roleplays, mock calls and drills with feedback — not just recorded videos.",
  },
  {
    icon: ShieldCheck,
    title: "Build proof of work",
    body: "A sales portfolio, assessments and CRM projects that show what you can do.",
  },
  {
    icon: CalendarCheck,
    title: "A free career webinar",
    body: "See the opportunities live and decide for yourself — no commitment.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

function fireConfetti() {
  const end = Date.now() + 2200;
  confetti({ particleCount: 160, spread: 90, origin: { y: 0.5 }, colors: ["#f7bd44", "#1f3149", "#ffffff"] });
  const frame = () => {
    confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors: ["#f7bd44", "#1f3149", "#ffffff"] });
    confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors: ["#f7bd44", "#1f3149", "#ffffff"] });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
}

/**
 * Popup for the landing CTAs. Designed like the /degree lead modal — two
 * sections side by side (navy copy + animated form) — and submits through the
 * same `createLead` flow.
 */
export function LandingLeadModal({ source, onClose }: { source: string; onClose: () => void }) {
  const reduce = useReducedMotion();
  const [submittedLead, setSubmittedLead] = useState<{ name: string; phone: string } | null>(null);

  useEffect(() => {
    if (submittedLead) fireConfetti();
  }, [submittedLead]);

  const firstName = (submittedLead?.name ?? "").split(" ")[0] || "";

  return (
    <Dialog open onOpenChange={(o) => (o ? undefined : onClose())}>
      <DialogContent
        className="max-h-[min(90vh,52rem)] w-[calc(100vw-1.5rem)] max-w-4xl gap-0 overflow-hidden rounded-2xl border-[color:var(--border)] bg-[color:var(--vil-ivory)] p-0 sm:w-[min(92vw,56rem)] sm:rounded-3xl"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <AnimatePresence mode="wait">
          {submittedLead ? (
            /* ---- Success: the navy panel slides over the whole modal ---- */
            <m.div
              key="success"
              initial={{ x: reduce ? 0 : "-100%", opacity: reduce ? 1 : 0.4 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex min-h-[32rem] flex-col items-center justify-center overflow-hidden bg-[color:var(--vil-navy)] px-6 py-12 text-center text-[color:var(--vil-ivory)] sm:px-12"
            >
              <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(247,189,68,0.25)_1px,transparent_0)] [background-size:22px_22px]" />

              <m.span
                initial={reduce ? false : { scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
                className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--vil-gold)]/20 text-[color:var(--vil-gold)]"
              >
                <PartyPopper className="h-10 w-10" />
              </m.span>

              <m.p
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-7 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--vil-gold)]"
              >
                You&apos;re registered!
              </m.p>

              <m.h3
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl"
              >
                See you soon, {firstName}!
              </m.h3>

              <m.p
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.62, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-[color:var(--vil-ivory)]/80"
              >
                Your registration is confirmed. Our Career Guidance Mentor will connect with you
                shortly to guide you through the next steps.
              </m.p>

              <div className="relative mt-8 grid w-full max-w-md gap-3 text-left">
                {[
                  {
                    icon: PhoneCall,
                    title: "Expect a Call",
                    body: "Our Career Guidance Mentor will call you to understand your career goals and current job search and guide you on the next steps.",
                  },
                  {
                    icon: MessageCircle,
                    title: "Stay Connected on WhatsApp",
                    body: "We'll also connect with you via WhatsApp with important updates and further information.",
                  },
                ].map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <m.div
                      key={step.title}
                      initial={reduce ? false : { opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.75 + i * 0.15, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3 rounded-xl border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 p-4 backdrop-blur-sm"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold)]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[color:var(--vil-ivory)]">{step.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-[color:var(--vil-ivory)]/65">
                          {step.body}
                        </p>
                      </div>
                    </m.div>
                  );
                })}
              </div>

              <m.p
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-7 text-sm font-medium text-[color:var(--vil-gold)]"
              >
                Stay tuned — our team will be calling you soon!
              </m.p>

              <m.button
                type="button"
                onClick={onClose}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--vil-gold)] px-8 py-3 text-sm font-bold text-[color:var(--vil-navy)] transition hover:brightness-105"
              >
                Done
              </m.button>
            </m.div>
          ) : (
            /* ---- Form stage: 5/7 split ---- */
            <m.div
              key="form"
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid max-h-[min(90vh,52rem)] md:grid-cols-[5fr_7fr]"
            >
              {/* Left: convincing copy (scrollable) */}
              <div className="relative hidden overflow-y-auto bg-[color:var(--vil-navy)] p-8 text-[color:var(--vil-ivory)] md:flex md:flex-col">
                <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(247,189,68,0.25)_1px,transparent_0)] [background-size:22px_22px]" />

                <m.div className="relative" variants={container} initial={reduce ? false : "hidden"} animate="show">
                  <m.img variants={item} src="/brand/logo_main_white.png" alt="VIIV" className="h-12 w-auto" />
                  <m.h2 variants={item} className="mt-8 font-serif text-2xl font-semibold leading-tight">
                    Your career options are
                    <br />
                    <span className="text-[color:var(--vil-gold)]">bigger than you think.</span>
                  </m.h2>
                  <m.p variants={item} className="mt-3 max-w-xs text-xs leading-relaxed text-[color:var(--vil-ivory)]/75">
                    Join the free career webinar — a practical look at the business careers
                    growing fastest in tech, and how to build the skills for them.
                  </m.p>
                </m.div>

                <m.ul
                  className="relative mt-8 space-y-3.5"
                  variants={container}
                  initial={reduce ? false : "hidden"}
                  animate="show"
                >
                  {copyPoints.map((point) => {
                    const Icon = point.icon;
                    return (
                      <m.li key={point.title} className="flex items-start gap-3">
                        <m.span
                          variants={item}
                          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold)]"
                        >
                          <Icon className="h-4 w-4" />
                        </m.span>
                        <div className="min-w-0">
                          <m.p variants={item} className="text-[13px] font-semibold text-[color:var(--vil-ivory)]">
                            {point.title}
                          </m.p>
                          <m.p variants={item} className="mt-0.5 text-[11px] leading-relaxed text-[color:var(--vil-ivory)]/60">
                            {point.body}
                          </m.p>
                        </div>
                      </m.li>
                    );
                  })}
                </m.ul>

                <m.div
                  variants={item}
                  className="relative mt-8 flex items-center gap-2 rounded-xl border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-3.5 py-2.5 text-[11px] text-[color:var(--vil-ivory)]/70 backdrop-blur-sm"
                >
                  <CalendarCheck className="h-4 w-4 shrink-0 text-[color:var(--vil-gold)]" />
                  Next session date and joining link are shared after you register.
                </m.div>
              </div>

              {/* Right: form */}
              <m.div
                className="overflow-y-auto bg-[color:var(--vil-ivory)] p-6 sm:p-7"
                initial={reduce ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <DialogHeader className="sr-only">
                  <DialogTitle>Reserve your free seat</DialogTitle>
                  <DialogDescription>Tell us about yourself.</DialogDescription>
                </DialogHeader>
                <LandingLeadForm source={source} onSuccess={setSubmittedLead} />
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
