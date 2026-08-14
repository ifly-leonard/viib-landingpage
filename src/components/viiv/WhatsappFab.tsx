"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Phone, X } from "lucide-react";

import { PhoneLink } from "@/components/viiv/PhoneLink";
import { admissionsConfig } from "@/lib/admissions.config";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const QUICK_REPLIES = [
  {
    label: "Program & curriculum",
    message: "Hi VIIV! I'd like to know more about the program and curriculum.",
  },
  {
    label: "Admissions & eligibility",
    message: "Hi VIIV! I'd like to know about admissions and eligibility.",
  },
  {
    label: "Fees & scholarships",
    message: "Hi VIIV! I'd like to know about fees and scholarships.",
  },
  {
    label: "Book a campus visit",
    message: "Hi VIIV! I'd like to book a campus visit.",
  },
] as const;

/** Floating WhatsApp chat button + chat dialog. */
export function WhatsappFab() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const digits = admissionsConfig.admissionsPhone.replace(/\D/g, "");
  const waLink = (text: string) =>
    `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-label="Chat with VIIV"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 z-[60] flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-[0_28px_70px_-20px_rgba(31,49,73,0.45)] sm:bottom-28 sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-[color:var(--vil-navy)] px-5 py-4 text-[color:var(--vil-ivory)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25d366] text-white">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold">VIIV Admissions</p>
                <p className="text-[11px] text-[color:var(--vil-ivory)]/70">
                  Typically replies in a few minutes
                </p>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--vil-ivory)]/70 transition hover:bg-white/10 hover:text-[color:var(--vil-ivory)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex max-h-[22rem] flex-col gap-4 overflow-y-auto bg-[color:var(--vil-surface)] p-4">
              {/* Bot bubble */}
              <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-[color:var(--vil-ivory)] px-4 py-3 text-sm leading-relaxed text-[color:var(--text-main)] shadow-sm">
                Hi! 👋 Welcome to VIIV — the venture college in Chennai. How can we help you today?
              </div>

              {/* Quick replies */}
              <div className="flex flex-col items-start gap-2">
                {QUICK_REPLIES.map((reply) => (
                  <a
                    key={reply.label}
                    href={waLink(reply.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-xs font-semibold text-[color:var(--vil-navy)] transition hover:border-[color:var(--vil-gold)]/60 hover:bg-[color:var(--vil-gold)]/8"
                  >
                    {reply.label}
                    <ArrowUpRight className="h-3 w-3 text-[color:var(--vil-gold-dim)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>

              {/* Phone fallback */}
              <PhoneLink className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-xs font-semibold text-[color:var(--vil-navy)] transition hover:border-[color:var(--vil-gold)]/60">
                <Phone className="h-3.5 w-3.5 text-[color:var(--vil-gold-dim)]" />
                Call {admissionsConfig.admissionsPhone}
              </PhoneLink>
            </div>

            {/* Input */}
            <form
              className="flex items-center gap-2 border-t border-[color:var(--border)] bg-white p-3"
              onSubmit={(e) => {
                e.preventDefault();
                const text = message.trim() || "Hi VIIV! I'd like to know more about the program.";
                window.open(waLink(text), "_blank", "noopener,noreferrer");
                setMessage("");
              }}
            >
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message…"
                aria-label="Type a message"
                className="h-10 flex-1 rounded-full border border-[color:var(--border)] bg-[color:var(--vil-surface)] px-4 text-sm text-[color:var(--vil-navy)] outline-none placeholder:text-[color:var(--text-soft)] focus:border-[color:var(--vil-gold)]"
              />
              <button
                type="submit"
                aria-label="Send message on WhatsApp"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white transition hover:bg-[#20ba5a]"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* FAB */}
      <button
        type="button"
        aria-label={open ? "Close chat" : "Chat with VIIV on WhatsApp"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "whatsapp-fab-float fixed bottom-5 right-5 z-[60] flex h-16 w-16 items-center justify-center rounded-full text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:scale-105 sm:bottom-6 sm:right-6",
          open ? "bg-[color:var(--vil-navy)]" : "bg-[#25d366] hover:bg-[#20ba5a]",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <WhatsAppIcon className="h-8 w-8" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}
