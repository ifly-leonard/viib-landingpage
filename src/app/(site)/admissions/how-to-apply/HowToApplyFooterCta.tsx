"use client";

import { useEffect } from "react";

import { useFooterCta } from "@/components/viiv/FooterCtaContext";
import { howToApplyCta } from "@/content/howToApply";

/** Sets the footer CTA for the How to Apply page to open the application modal. */
export function HowToApplyFooterCta() {
  const { setFooterCta } = useFooterCta();

  useEffect(() => {
    setFooterCta({
      eyebrow: howToApplyCta.eyebrow,
      headline: howToApplyCta.headline,
      description: howToApplyCta.body,
      buttonLabel: howToApplyCta.buttonLabel,
      buttonHref: "/admissions/how-to-apply",
    });
    return () => setFooterCta(null);
  }, [setFooterCta]);

  return null;
}
