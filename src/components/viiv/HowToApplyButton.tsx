"use client";

import { ArrowUpRight } from "lucide-react";

import { useLeadModal } from "@/components/viiv/LeadModalContext";

/**
 * "Start Your Application" button that opens the global lead-capture modal.
 * Used across the How to Apply page wherever an apply CTA appears.
 */
export function HowToApplyButton({
  className = "",
  label = "Start Your Application",
}: {
  className?: string;
  label?: string;
}) {
  const { openLeadModal } = useLeadModal();

  return (
    <button type="button" onClick={openLeadModal} className={`btn-primary ${className}`}>
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </button>
  );
}
