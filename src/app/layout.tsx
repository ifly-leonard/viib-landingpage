import type { Metadata } from "next";
import Script from "next/script";

import { AnalyticsScripts } from "@/components/viiv/AnalyticsScripts";
import { siteMeta } from "@/content/homepage";
import { latestOgImagePath, ogConfig } from "@/lib/og.config";
import { recaptchaConfig } from "@/lib/recaptcha.config";

import "../styles.css";
import "flipbook-js/style.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const ogImagePath = latestOgImagePath();

export const metadata: Metadata = {
  metadataBase: new URL("https://www.viivindia.com"),
  title: "VIIV | Varman Institute of Innovation and Venture Building",
  description: siteMeta.oneLiner,
  icons: {
    icon: [
      { url: "/favicon-96x96.png?v=20260806", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg?v=20260806", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico?v=20260806",
    apple: [{ url: "/apple-touch-icon.png?v=20260806", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest?v=20260806",
  appleWebApp: {
    title: "VIIV",
  },
  openGraph: {
    title: "VIIV — Earn the BBA. Build the venture. Graduate with proof.",
    description: siteMeta.oneLiner,
    type: "website",
    images: [{ url: ogImagePath, width: ogConfig.width, height: ogConfig.height, alt: ogConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImagePath],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {GA_ID ? (
          <Script
            id="ga4"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
        ) : null}
        {META_PIXEL_ID ? (
          <Script
            id="meta-pixel"
            src="https://connect.facebook.net/en_US/fbevents.js"
            strategy="afterInteractive"
          />
        ) : null}
        {recaptchaConfig.enabled ? (
          <Script
            id="recaptcha"
            src="https://www.google.com/recaptcha/api.js"
            strategy="afterInteractive"
          />
        ) : null}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
