"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

import { recaptchaConfig } from "@/lib/recaptcha.config";

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      getResponse: (widgetId: string) => string;
      reset: (widgetId: string) => void;
      execute: (widgetId: string) => Promise<string>;
    };
    onRecaptchaLoad?: () => void;
  }
}

/**
 * Renders a Google reCAPTCHA v2 checkbox widget.
 * Exposes the current token via `onChange` (null = not verified yet).
 * When no site key is configured, renders nothing and the form skips it.
 */
export function RecaptchaWidget({
  onChange,
}: {
  onChange: (token: string | null) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [ready, setReady] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!recaptchaConfig.enabled || !containerRef.current) return;

    const render = () => {
      if (!containerRef.current || !window.grecaptcha) return;
      const widgetId = window.grecaptcha.render(containerRef.current, {
        sitekey: recaptchaConfig.siteKey,
        theme: "light",
        size: "normal",
        callback: (token: string) => onChange(token),
        "expired-callback": () => onChange(null),
      });
      widgetIdRef.current = widgetId;
      setReady(true);
    };

    if (window.grecaptcha) {
      render();
    } else {
      window.onRecaptchaLoad = render;
    }

    return () => {
      window.onRecaptchaLoad = undefined;
    };
  }, [id, onChange]);

  if (!recaptchaConfig.enabled) return null;

  return (
    <div className="flex justify-center">
      <div ref={containerRef} data-testid="recaptcha-widget" />
      {!ready ? (
        <p className="text-xs text-[color:var(--text-soft)]">Loading security check…</p>
      ) : null}
    </div>
  );
}
