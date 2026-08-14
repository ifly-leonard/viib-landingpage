"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const COMPANY_LOGOS = [
  "accel.png",
  "amazon.webp",
  "blinkit.webp",
  "blume.png",
  "cred.png",
  "deloitte.png",
  "dhl.webp",
  "dunzo.svg",
  "exotel.webp",
  "flipkart.png",
  "freshworks.png",
  "hdfc-bank.webp",
  "ibm.webp",
  "icrewsystems.webp",
  "khaitan.png",
  "meesho.png",
  "microsoft.webp",
  "ogilvy.png",
  "paytm.png",
  "phonepe.png",
  "razorpay.png",
  "salesforce.png",
  "sequoia.png",
  "swiggy.png",
  "tcs.webp",
  "unilever.webp",
  "zerodha.png",
] as const;

function CompanyLogoChip({ src }: { src: string }) {
  return (
    <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white p-2 shadow-[0_8px_24px_-12px_rgba(31,49,73,0.4)] transition-transform hover:scale-110">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/companies/${src}`}
        alt=""
        className="h-full w-full object-contain"
      />
    </span>
  );
}

/** Company logos orbiting around the VIIV mark. */
export function CompanyOrbit() {
  const mid = Math.ceil(COMPANY_LOGOS.length / 2);
  const firstRing = COMPANY_LOGOS.slice(0, mid);
  const secondRing = COMPANY_LOGOS.slice(mid);

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[40rem] items-center justify-center">
      {/* Center: VIIV logo */}
      <div className="relative z-10 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_24px_60px_-20px_rgba(31,49,73,0.6)] sm:h-36 sm:w-36">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo_main.png"
          alt="VIIV"
          className="h-full w-full object-contain p-2"
        />
      </div>

      {/* Outer ring */}
      <OrbitingCircles radius={280} duration={60} speed={1} iconSize={56} className="max-sm:scale-70">
        {firstRing.map((logo) => (
          <CompanyLogoChip key={logo} src={logo} />
        ))}
      </OrbitingCircles>

      {/* Inner ring, reverse */}
      <OrbitingCircles radius={185} duration={40} reverse iconSize={56} className="max-sm:scale-70">
        {secondRing.map((logo) => (
          <CompanyLogoChip key={logo} src={logo} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
