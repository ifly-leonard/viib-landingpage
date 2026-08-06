"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check, PackageOpen, Target } from "lucide-react";

import type { ProgramQuest } from "@/content/program";

export function QuestExplorer({ quests }: { quests: readonly ProgramQuest[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const quest = quests[active];

  return (
    <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
      <div className="space-y-2" role="tablist" aria-label="Program quests">
        {quests.map((item, index) => (
          <button
            key={item.number}
            type="button"
            role="tab"
            aria-selected={active === index}
            onClick={() => setActive(index)}
            className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
              active === index
                ? "border-[color:var(--vil-gold)] bg-[color:var(--vil-navy)] text-white shadow-[0_18px_45px_-28px_rgba(31,49,73,0.9)]"
                : "border-[color:var(--border)] bg-white text-[color:var(--vil-navy)] hover:-translate-y-0.5 hover:border-[color:var(--vil-gold)]"
            }`}
          >
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                active === index
                  ? "bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)]"
                  : "bg-[color:var(--vil-surface-muted)] text-[color:var(--vil-gold-dim)]"
              }`}
            >
              {item.number}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-bold uppercase tracking-[0.15em] opacity-55">Quest</span>
              <span className="mt-1 block font-semibold leading-tight">{item.title}</span>
            </span>
            <ArrowRight className={`h-4 w-4 shrink-0 transition-transform ${active === index ? "translate-x-1 text-[color:var(--vil-gold)]" : "opacity-35 group-hover:translate-x-1"}`} />
          </button>
        ))}
      </div>

      <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] bg-[color:var(--vil-navy)] p-7 text-white md:p-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[color:var(--vil-gold)]/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black/20 to-transparent" />
        <AnimatePresence mode="wait">
          <motion.div
            key={quest.number}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--vil-gold)]">
              Quest {quest.number}
            </p>
            <h3 className="mt-4 max-w-xl text-3xl font-bold leading-tight md:text-5xl">{quest.title}</h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{quest.summary}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {quest.topics.map((topic) => (
                <span key={topic} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-xs text-white/80">
                  <Check className="h-3.5 w-3.5 text-[color:var(--vil-gold)]" />
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <Target className="h-5 w-5 text-[color:var(--vil-gold)]" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-white/45">Challenge</p>
                <p className="mt-2 font-semibold leading-snug">{quest.challenge}</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <PackageOpen className="h-5 w-5 text-[color:var(--vil-gold)]" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-white/45">Proof produced</p>
                <p className="mt-2 font-semibold leading-snug">{quest.output}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
