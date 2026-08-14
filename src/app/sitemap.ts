import type { MetadataRoute } from "next";

const BASE_URL = "https://www.viivindia.com";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/admissions",
  "/admissions/eligibility",
  "/admissions/fees-and-scholarships",
  "/admissions/how-to-apply",
  "/campus-life/accommodations",
  "/campus-life/book-a-tour",
  "/campus-life/campus-brochure",
  "/campus-life/community",
  "/campus-life/gallery",
  "/campus-life/life-at-viiv",
  "/campus-life/location",
  "/campus-life/studios-and-labs",
  "/library",
  "/library/student-handbook",
  "/library/builder-guide",
  "/library/code-of-conduct",
  "/live-webinar-about-state-of-college-education",
  "/pay-now",
  "/privacy-policy",
  "/program",
  "/program/build-yourself",
  "/program/build-a-business",
  "/program/build-an-enterprise",
  "/register-for-bootcamp",
  "/terms-and-conditions",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/program" || route === "/admissions/how-to-apply" ? 0.9 : 0.7,
  }));
}
