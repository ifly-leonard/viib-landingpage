"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Download } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLeadMagnet } from "@/components/viiv/LeadMagnetContext";

import { SimpleLeadForm } from "./SimpleLeadForm";

export function LeadMagnetModal() {
  const { open, book, closeLeadMagnet } = useLeadMagnet();
  const [submitted, setSubmitted] = useState<{ name: string; email: string } | null>(null);

  const title = book ? `Download the ${book.label}` : "Download";
  const description =
    book && book.title === "Student Handbook"
      ? "Enter your details and we'll send you the full handbook as a PDF."
      : `Enter your details and we'll send you "${book?.title ?? "this book"}" as a PDF.`;

  return (
    <Dialog open={open} onOpenChange={(o) => (o ? undefined : (setSubmitted(null), closeLeadMagnet()))}>
      <DialogContent
        className="max-h-[min(90vh,40rem)] w-[calc(100vw-1.5rem)] max-w-md gap-0 overflow-hidden rounded-2xl border-[color:var(--border)] bg-[color:var(--vil-ivory)] p-0 sm:rounded-3xl"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center px-6 py-12 text-center sm:px-10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
                You&apos;re all set{submitted.name ? `, ${submitted.name.split(" ")[0]}` : ""}!
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[color:var(--text-muted)]">
                We&apos;ve emailed the download link to{" "}
                <span className="font-semibold text-[color:var(--vil-navy)]">{submitted.email}</span>.
                Enjoy the book.
              </p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--vil-gold)] px-7 py-3 text-sm font-bold text-[color:var(--vil-navy)] transition hover:brightness-105"
              >
                <Download className="h-4 w-4" />
                Download the PDF
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8"
            >
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
                  {title}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <SimpleLeadForm onSuccess={setSubmitted} ctaLabel="Get the download link" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
