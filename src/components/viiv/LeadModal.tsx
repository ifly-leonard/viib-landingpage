"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, CheckCircle2, GraduationCap, PartyPopper, PhoneCall, Rocket, ShieldCheck, Target } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import confetti from "canvas-confetti";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLeadModal } from "@/components/viiv/LeadModalContext";

import { LeadForm } from "./LeadForm";

const copyPoints = [
  {
    icon: Target,
    title: "A real venture, not just a degree",
    body: "Build actual products, brands and ventures while you earn a recognised BBA.",
  },
  {
    icon: Rocket,
    title: "Ship every single week",
    body: "Sprints, mentor reviews and demo days — proof of work, not just grades.",
  },
  {
    icon: ShieldCheck,
    title: "A recognised BBA pathway",
    body: "A recognized online BBA pathway with a full-time builder campus in Chennai.",
  },
  {
    icon: GraduationCap,
    title: "Graduate job-ready or startup-ready",
    body: "Leave with a portfolio of proof that opens doors — placements or your own company.",
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
  const duration = 2200;
  const end = Date.now() + duration;
  confetti({
    particleCount: 160,
    spread: 90,
    origin: { y: 0.5 },
    colors: ["#f7bd44", "#1f3149", "#ffffff"],
  });
  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ["#f7bd44", "#1f3149", "#ffffff"],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ["#f7bd44", "#1f3149", "#ffffff"],
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
}

export function LeadModal() {
  const { open, closeLeadModal } = useLeadModal();
  const reduce = useReducedMotion();
  const [submittedLead, setSubmittedLead] = useState<{ name: string; phone: string } | null>(null);

  // Fire confetti when the success screen appears.
  useEffect(() => {
    if (submittedLead) fireConfetti();
  }, [submittedLead]);

  const firstName = (submittedLead?.name ?? "").split(" ")[0] || "";

  return (
    <Dialog open={open} onOpenChange={(o) => (o ? undefined : closeLeadModal())}>
      <DialogContent
        className="max-h-[min(90vh,52rem)] w-[calc(100vw-1.5rem)] max-w-4xl gap-0 overflow-hidden rounded-2xl border-[color:var(--border)] bg-[color:var(--vil-ivory)] p-0 sm:w-[min(92vw,56rem)] sm:rounded-3xl"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <AnimatePresence mode="wait">
          {submittedLead ? (
            /* ---- Success: the navy panel slides over the whole modal ---- */
            <motion.div
              key="success"
              initial={{ x: reduce ? 0 : "-100%", opacity: reduce ? 1 : 0.4 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex min-h-[32rem] flex-col items-center justify-center overflow-hidden bg-[color:var(--vil-navy)] px-6 py-12 text-center text-[color:var(--vil-ivory)] sm:px-12"
            >
              <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(247,189,68,0.25)_1px,transparent_0)] [background-size:22px_22px]" />

              <motion.span
                initial={reduce ? false : { scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
                className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--vil-gold)]/20 text-[color:var(--vil-gold)]"
              >
                <PartyPopper className="h-10 w-10" />
              </motion.span>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-7 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--vil-gold)]"
              >
                Application received
              </motion.p>

              <motion.h3
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl"
              >
                Congratulations, {firstName}!
              </motion.h3>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.62, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-[color:var(--vil-ivory)]/80"
              >
                You&apos;ve taken the first step toward joining VIIV. Your application is in —
                we&apos;ll reach you at{" "}
                <span className="font-semibold text-[color:var(--vil-gold)]">
                  {submittedLead?.phone}
                </span>
                . Here&apos;s what happens next.
              </motion.p>

              <div className="relative mt-8 grid w-full max-w-md gap-3 text-left">
                {[
                  {
                    icon: PhoneCall,
                    title: "Call within 48 hours",
                    body: `Our career counselling team will call you at ${submittedLead?.phone}.`,
                  },
                  {
                    icon: CheckCircle2,
                    title: "Admission guidance",
                    body: "They'll walk you through eligibility, documents and the next steps.",
                  },
                ].map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
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
                    </motion.div>
                  );
                })}
              </div>

              <motion.button
                type="button"
                onClick={closeLeadModal}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--vil-gold)] px-8 py-3 text-sm font-bold text-[color:var(--vil-navy)] transition hover:brightness-105"
              >
                Done
              </motion.button>
            </motion.div>
          ) : (
            /* ---- Form stage: 4/6 split ---- */
            <motion.div
              key="form"
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid max-h-[min(90vh,52rem)] md:grid-cols-[5fr_7fr]"
            >
              {/* Left: convincing copy (scrollable) */}
              <div className="relative hidden overflow-y-auto bg-[color:var(--vil-navy)] p-8 text-[color:var(--vil-ivory)] md:flex md:flex-col">
                <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(247,189,68,0.25)_1px,transparent_0)] [background-size:22px_22px]" />

                <motion.div
                  className="relative"
                  variants={container}
                  initial={reduce ? false : "hidden"}
                  animate="show"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <motion.img
                    variants={item}
                    src="/brand/logo_main_white.png"
                    alt="VIIV"
                    className="h-12 w-auto"
                  />
                  <motion.h2 variants={item} className="mt-8 font-serif text-2xl font-semibold leading-tight">
                    Earn the degree.
                    <br />
                    <span className="text-[color:var(--vil-gold)]">Build the venture.</span>
                  </motion.h2>
                  <motion.p
                    variants={item}
                    className="mt-3 max-w-xs text-xs leading-relaxed text-[color:var(--vil-ivory)]/75"
                  >
                    Start the application process — a 3-year, full-time venture college in
                    Chennai. This is your first step.
                  </motion.p>
                </motion.div>

                <motion.ul
                  className="relative mt-8 space-y-3.5"
                  variants={container}
                  initial={reduce ? false : "hidden"}
                  animate="show"
                >
                  {copyPoints.map((point) => {
                    const Icon = point.icon;
                    return (
                      <motion.li key={point.title} className="flex items-start gap-3">
                        <motion.span
                          variants={item}
                          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold)]"
                        >
                          <Icon className="h-4 w-4" />
                        </motion.span>
                        <div className="min-w-0">
                          <motion.p
                            variants={item}
                            className="text-[13px] font-semibold text-[color:var(--vil-ivory)]"
                          >
                            {point.title}
                          </motion.p>
                          <motion.p
                            variants={item}
                            className="mt-0.5 text-[11px] leading-relaxed text-[color:var(--vil-ivory)]/60"
                          >
                            {point.body}
                          </motion.p>
                        </div>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                <motion.div
                  variants={item}
                  className="relative mt-8 flex items-center gap-2 rounded-xl border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-3.5 py-2.5 text-[11px] text-[color:var(--vil-ivory)]/70 backdrop-blur-sm"
                >
                  <CalendarCheck className="h-4 w-4 shrink-0 text-[color:var(--vil-gold)]" />
                  Our career counselling team will call you within 48 hours.
                </motion.div>
              </div>

              {/* Right: form */}
              <motion.div
                className="overflow-y-auto bg-[color:var(--vil-ivory)] p-6 sm:p-7"
                initial={reduce ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <DialogHeader className="sr-only">
                  <DialogTitle>Start the application process</DialogTitle>
                  <DialogDescription>Tell us about yourself.</DialogDescription>
                </DialogHeader>
                <LeadForm onSuccess={setSubmittedLead} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
