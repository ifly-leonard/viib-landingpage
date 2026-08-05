"use client";

import { CalendarCheck, GraduationCap, Rocket, ShieldCheck, Target } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

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
    body: "Kalasalingam University degree pathway with a full-time builder campus in Chennai.",
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

export function LeadModal() {
  const { open, closeLeadModal } = useLeadModal();
  const reduce = useReducedMotion();

  return (
    <Dialog open={open} onOpenChange={(o) => (o ? undefined : closeLeadModal())}>
      <DialogContent className="max-h-[min(90vh,52rem)] w-[calc(100vw-1.5rem)] max-w-4xl gap-0 overflow-hidden rounded-2xl border-[color:var(--border)] bg-[color:var(--vil-ivory)] p-0 sm:w-[min(92vw,56rem)] sm:rounded-3xl">
        <div className="grid max-h-[min(90vh,52rem)] md:grid-cols-[5fr_7fr]">
          {/* Left: convincing copy */}
          <div className="relative hidden overflow-hidden bg-[color:var(--vil-navy)] p-8 text-[color:var(--vil-ivory)] md:flex md:flex-col md:justify-between">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(247,189,68,0.25)_1px,transparent_0)] [background-size:22px_22px]" />

            <motion.div
              className="relative"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/logo_main_white.png" alt="VIIV" className="h-12 w-auto" />
              <h2 className="mt-8 font-serif text-2xl font-semibold leading-tight">
                Earn the degree.
                <br />
                <span className="text-[color:var(--vil-gold)]">Build the venture.</span>
              </h2>
              <p className="mt-3 max-w-xs text-xs leading-relaxed text-[color:var(--vil-ivory)]/75">
                A 3-year, full-time venture college in Chennai. This is your first step — a
                conversation with our team.
              </p>
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
                  <motion.li key={point.title} variants={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-[color:var(--vil-ivory)]">
                        {point.title}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-[color:var(--vil-ivory)]/60">
                        {point.body}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              className="relative mt-8 flex items-center gap-2 rounded-xl border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-3.5 py-2.5 text-[11px] text-[color:var(--vil-ivory)]/70 backdrop-blur-sm"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
              <DialogTitle>Talk to VIIV</DialogTitle>
              <DialogDescription>Start the conversation with our team.</DialogDescription>
            </DialogHeader>
            <LeadForm onDone={closeLeadModal} />
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
