"use client";

import Link from "next/link";
import {
  Camera,
  Clapperboard,
  Dumbbell,
  Footprints,
  Gamepad2,
  MapPin,
  Sailboat,
  ShoppingBag,
  Sparkles,
  Store,
  Ticket,
  Umbrella,
  Waves,
  type LucideIcon,
} from "lucide-react";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { eveningSpots } from "@/content/campusLife";

// Distinct icon per venue so each orbiting chip is recognisable.
const SPOT_ICONS: Record<string, LucideIcon> = {
  "The Marina Mall": ShoppingBag,
  "Vivira Mall": Store,
  "INOX (The Marina Mall)": Clapperboard,
  "AGS Cinemas (Vivira Mall)": Ticket,
  "Dugout Trampoline Park": Gamepad2,
  "Kovalam Beach (Covelong)": Umbrella,
  "Muttukadu Boat House": Sailboat,
  "Hotfut SPR Sports": Dumbbell,
  "Balaji Badminton Academy": Footprints,
  "Badminton Tribes": Footprints,
  "Turbo Turf (OMR Food Street)": Dumbbell,
  "Turfhit / Turfhit Prime": Dumbbell,
  "OMR Health Studio Pool": Waves,
  "Competitive Edge Tennis Academy": Camera,
};

const FALLBACK_ICON = Sparkles;

// Unique spots to orbit (dedupe by name — some categories share a venue).
const ORBIT_SPOTS = eveningSpots.filter(
  (spot, i, arr) => arr.findIndex((s) => s.name === spot.name) === i,
);

function OrbitChip({ spot }: { spot: (typeof ORBIT_SPOTS)[number] }) {
  const Icon = SPOT_ICONS[spot.name] ?? FALLBACK_ICON;
  return (
    <span className="flex w-full flex-col items-center gap-1">
      <span
        title={spot.name}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--vil-gold)]/40 bg-white text-[color:var(--vil-gold-dim)] shadow-[0_8px_24px_-12px_rgba(31,49,73,0.4)] transition-transform hover:scale-110"
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="max-w-[7rem] truncate text-center text-[10px] font-semibold leading-tight text-[color:var(--vil-navy)]">
        {spot.name}
      </span>
      <span className="rounded-full bg-[color:var(--vil-gold)]/15 px-1.5 py-px text-[9px] font-bold text-[color:var(--vil-gold-dim)]">
        {spot.proximity}
      </span>
    </span>
  );
}

export function EveningSpotsOrbit() {
  const mid = Math.ceil(ORBIT_SPOTS.length / 2);
  const firstRing = ORBIT_SPOTS.slice(0, mid);
  const secondRing = ORBIT_SPOTS.slice(mid);

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[42rem] items-center justify-center">
      {/* Center: location button */}
      <Link
        href="/campus-life/location"
        className="relative z-10 flex h-36 w-36 flex-col items-center justify-center gap-1 rounded-full bg-[color:var(--vil-navy)] text-center text-[color:var(--vil-ivory)] shadow-[0_24px_60px_-20px_rgba(31,49,73,0.6)] transition hover:scale-105 sm:h-44 sm:w-44"
      >
        <MapPin className="h-7 w-7 text-[color:var(--vil-gold)]" />
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold)]">
          Location
        </span>
        <span className="px-4 text-[11px] font-medium leading-snug text-[color:var(--vil-ivory)]/70">
          Explore the area around campus
        </span>
      </Link>

      {/* Outer ring */}
      <OrbitingCircles
        radius={300}
        duration={50}
        speed={1}
        iconSize={80}
        className="max-sm:scale-70"
      >
        {firstRing.map((spot) => (
          <OrbitChip key={spot.name} spot={spot} />
        ))}
      </OrbitingCircles>

      {/* Inner ring, reverse */}
      <OrbitingCircles
        radius={200}
        duration={34}
        reverse
        iconSize={80}
        className="max-sm:scale-70"
      >
        {secondRing.map((spot) => (
          <OrbitChip key={spot.name} spot={spot} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
