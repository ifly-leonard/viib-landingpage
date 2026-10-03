import { Suspense } from "react";
import type { Metadata } from "next";

import { PortalSuccessClient } from "./PortalSuccessClient";

export const metadata: Metadata = {
  title: "You're Registered | VIIV Webinar",
  robots: { index: false, follow: false },
};

export default function PortalSuccessPage() {
  return (
    <Suspense fallback={<PortalSuccessFallback />}>
      <PortalSuccessClient />
    </Suspense>
  );
}

function PortalSuccessFallback() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-[color:var(--vil-navy)] px-6 text-[color:var(--vil-ivory)]">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--vil-gold)]">
          Loading your webinar details…
        </p>
      </div>
    </main>
  );
}
