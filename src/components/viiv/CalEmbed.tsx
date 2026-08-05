"use client";

import { useEffect, useSyncExternalStore } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

import { tourConfig } from "@/lib/tour.config";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

type CalEmbedProps = {
  namespace?: string;
  name?: string;
  email?: string;
  notes?: string;
  onBookingSuccessful?: () => void;
};

export function CalEmbed({
  namespace = "book-a-tour",
  name,
  email,
  notes,
  onBookingSuccessful,
}: CalEmbedProps) {
  const mounted = useMounted();

  useEffect(() => {
    if (!mounted) return;
    let active = true;

    (async () => {
      const cal = await getCalApi({ namespace });
      if (!active) return;

      cal("ui", {
        theme: "light",
        colorScheme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#1f3149" },
          dark: { "cal-brand": "#1f3149" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });

      if (onBookingSuccessful) {
        const handleSuccess = () => onBookingSuccessful();
        cal("on", { action: "bookingSuccessfulV2", callback: handleSuccess });
        cal("on", { action: "bookingSuccessful", callback: handleSuccess });
      }
    })();

    return () => {
      active = false;
    };
  }, [mounted, namespace, onBookingSuccessful]);

  if (!mounted) {
    return (
      <div className="flex min-h-[640px] items-center justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
          Loading schedule…
        </p>
      </div>
    );
  }

  const config: Record<string, string> = {
    layout: "month_view",
    theme: "light",
    "ui.color-scheme": "light",
  };
  if (name?.trim()) config.name = name.trim();
  if (email?.trim()) config.email = email.trim();
  if (notes?.trim()) config.notes = notes.trim();

  return (
    <Cal
      namespace={namespace}
      calLink={tourConfig.calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={config}
    />
  );
}
