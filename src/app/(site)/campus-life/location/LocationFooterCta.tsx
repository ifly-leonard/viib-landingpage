"use client";

import { useEffect } from "react";

import { useFooterCta } from "@/components/viiv/FooterCtaContext";
import { campusLocation } from "@/content/campusVisit";

/** Sets the footer CTA for the Location page to the page-specific booking CTA. */
export function LocationFooterCta() {
  const { setFooterCta } = useFooterCta();

  useEffect(() => {
    setFooterCta({
      eyebrow: campusLocation.booking.eyebrow,
      headline: campusLocation.booking.headline,
      description: campusLocation.booking.body,
      buttonLabel: campusLocation.booking.ctaLabel,
      buttonHref: campusLocation.booking.ctaHref,
    });
    return () => setFooterCta(null);
  }, [setFooterCta]);

  return null;
}
