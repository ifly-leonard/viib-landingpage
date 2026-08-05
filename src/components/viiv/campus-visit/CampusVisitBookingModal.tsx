"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalEmbed } from "@/components/viiv/CalEmbed";

export function CampusVisitBookingModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[calc(100dvh-2rem)] max-w-3xl flex-col gap-0 overflow-hidden p-0 sm:rounded-2xl">
        <DialogHeader className="shrink-0 px-6 pb-4 pt-6 text-center">
          <DialogTitle className="font-display text-2xl font-bold text-[color:var(--vil-navy)]">
            Book Your Campus Visit
          </DialogTitle>
          <DialogDescription className="mx-auto max-w-xl text-sm text-[color:var(--text-muted)]">
            Select your preferred date and time. Once your booking is complete, you will receive a
            confirmation with the visit details.
          </DialogDescription>
        </DialogHeader>
        <div className="h-[min(640px,calc(100dvh-11rem))] w-full border-t border-[color:var(--border)]">
          <CalEmbed namespace="book-a-tour" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
