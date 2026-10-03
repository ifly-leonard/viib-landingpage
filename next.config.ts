import type { NextConfig } from "next";

/**
 * The marketing site (and its login portal) moved under `/degree`.
 * Every old URL permanently redirects to its new home. Policy pages
 * (`/privacy-policy`, `/terms-and-conditions`) stayed at the root and are
 * intentionally absent here.
 */
const MOVED_PATHS = [
  "about",
  "admissions",
  "admissions/eligibility",
  "admissions/fees-and-scholarships",
  "admissions/how-to-apply",
  "campus-life/accommodations",
  "campus-life/book-a-tour",
  "campus-life/book-a-tour/thank-you",
  "campus-life/campus-brochure",
  "campus-life/community",
  "campus-life/demo-days",
  "campus-life/gallery",
  "campus-life/life-at-viiv",
  "campus-life/location",
  "campus-life/studios-and-labs",
  "library",
  "live-webinar-about-state-of-college-education",
  "pay-now",
  "portal",
  "portal/success",
  "program",
  "register-for-bootcamp",
] as const;

/** Routes with dynamic `[slug]` children, redirected as a wildcard. */
const MOVED_DYNAMIC_PATHS = ["library", "program"] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...MOVED_PATHS.map((path) => ({
        source: `/${path}`,
        destination: `/degree/${path}`,
        statusCode: 301,
      })),
      ...MOVED_DYNAMIC_PATHS.map((path) => ({
        source: `/${path}/:slug*`,
        destination: `/degree/${path}/:slug*`,
        statusCode: 301,
      })),
    ];
  },
  async headers() {
    // Dev only: a previously-shipped 301 for "/" is cached by browsers and
    // cannot be evicted from the server. Clearing the site cache on every page
    // response removes that stale redirect so "/" resolves to the homepage.
    if (process.env.NODE_ENV === "production") return [];
    return [
      {
        source: "/:path((?!_next).*)",
        headers: [{ key: "Clear-Site-Data", value: '"cache"' }],
      },
    ];
  },
};

export default nextConfig;
