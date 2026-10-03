import type { MetadataRoute } from "next";

const BASE_URL = "https://www.viivindia.com";

const STATIC_ROUTES = [
  "/degree",
  "/degree/about",
  "/degree/admissions",
  "/degree/admissions/eligibility",
  "/degree/admissions/fees-and-scholarships",
  "/degree/admissions/how-to-apply",
  "/degree/campus-life/accommodations",
  "/degree/campus-life/book-a-tour",
  "/degree/campus-life/campus-brochure",
  "/degree/campus-life/community",
  "/degree/campus-life/gallery",
  "/degree/campus-life/life-at-viiv",
  "/degree/campus-life/location",
  "/degree/campus-life/studios-and-labs",
  "/degree/library",
  "/degree/library/student-handbook",
  "/degree/library/builder-guide",
  "/degree/library/code-of-conduct",
  "/degree/live-webinar-about-state-of-college-education",
  "/degree/pay-now",
  "/privacy-policy",
  "/degree/program",
  "/degree/program/build-yourself",
  "/degree/program/build-a-business",
  "/degree/program/build-an-enterprise",
  "/degree/register-for-bootcamp",
  "/terms-and-conditions",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/degree" ? "weekly" : "monthly",
    priority: route === "/degree" ? 1 : route === "/degree/program" || route === "/degree/admissions/how-to-apply" ? 0.9 : 0.7,
  }));
}
