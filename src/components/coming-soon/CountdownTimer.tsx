"use client";

import { useEffect, useState } from "react";

import { LAUNCH_DATE } from "@/lib/site.constants";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {UNITS.map((unit) => (
          <div
            key={unit.key}
            className="date-stamp flex flex-col items-center px-6 py-8 text-center"
            aria-hidden
          >
            <span className="font-display text-5xl font-extrabold tracking-tighter text-[color:var(--vil-navy)] md:text-6xl">
              —
            </span>
            <span className="mt-2 editorial-label">{unit.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5"
      role="timer"
      aria-live="polite"
      aria-label="Countdown to launch on August 15, 2026"
    >
      {UNITS.map((unit) => (
        <div key={unit.key} className="date-stamp flex flex-col items-center px-6 py-8 text-center">
          <div className="date-stamp__corner" />
          <span className="font-display text-5xl font-extrabold tabular-nums tracking-tighter text-[color:var(--vil-navy)] md:text-6xl">
            {String(timeLeft[unit.key]).padStart(2, "0")}
          </span>
          <span className="mt-2 editorial-label">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
