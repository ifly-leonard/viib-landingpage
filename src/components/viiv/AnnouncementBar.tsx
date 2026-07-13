"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { TextAnimate } from "@/components/ui/text-animate";
import { announcement } from "@/content/announcement";

const TEXT_DURATION = 1.8;

export function AnnouncementBar() {
  if (!announcement.enabled) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-10 items-center justify-center gap-3 overflow-hidden bg-[color:var(--vil-gold)] px-4 text-[color:var(--vil-navy)]"
    >
      <TextAnimate
        as="span"
        by="character"
        duration={TEXT_DURATION}
        startOnView={false}
        className="truncate whitespace-nowrap text-xs font-semibold sm:text-sm"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
          exit: { opacity: 0 },
        }}
      >
        {announcement.message}
      </TextAnimate>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: TEXT_DURATION + 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="shrink-0"
      >
        <Link
          href={announcement.cta.href}
          className="inline-flex items-center rounded-full bg-[color:var(--vil-navy)] px-3.5 py-1 text-xs font-bold text-[color:var(--vil-ivory)] transition hover:bg-[color:var(--vil-navy)]/90"
        >
          {announcement.cta.label}
        </Link>
      </motion.div>
    </motion.div>
  );
}
