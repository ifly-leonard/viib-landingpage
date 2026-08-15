"use client";

import { useEffect, useMemo, useState } from "react";

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function nextWebinarTime(now: Date): Date {
  const next = new Date(now);
  // Webinars run every day except Monday, 5–6 PM IST.
  const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;
  const ist = new Date(now.getTime() + IST_OFFSET_MS);
  const day = ist.getUTCDay(); // 1 = Monday
  const hour = ist.getUTCHours();
  const minutes = ist.getUTCMinutes();

  let target = new Date(now);
  target.setHours(17, 0, 0, 0); // 5 PM local
  target = new Date(target.getTime() - IST_OFFSET_MS);

  const isMonday = day === 1;
  const past5pm = hour > 17 || (hour === 17 && minutes >= 0);

  // If today is Monday, or the 5 PM slot already passed, move to the next day.
  if (isMonday || past5pm) {
    target.setDate(target.getDate() + 1);
    // Keep advancing if the next day is Monday.
    let check = new Date(target.getTime() + IST_OFFSET_MS);
    while (check.getUTCDay() === 1) {
      target.setDate(target.getDate() + 1);
      check = new Date(target.getTime() + IST_OFFSET_MS);
    }
  }

  return target;
}

function diffParts(target: Date, now: Date): CountdownParts {
  const diff = Math.max(0, target.getTime() - now.getTime());
  const seconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

/**
 * Live countdown to the next VIIV webinar (every day except Monday, 5–6 PM IST).
 * Returns null until mounted to avoid hydration mismatch.
 */
export function useWebinarCountdown(): { parts: CountdownParts | null; target: Date | null } {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = useMemo(() => (now ? nextWebinarTime(now) : null), [now]);
  const parts = useMemo(() => (now && target ? diffParts(target, now) : null), [now, target]);

  return { parts, target };
}

export { pad };
