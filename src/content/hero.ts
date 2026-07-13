/** Interactive hero cover slides. Duration is per-slide auto-advance in ms. */
export const HERO_SLIDE_DURATION = 6000;

export type HeroIcon = "degree" | "campus" | "admissions" | "outcomes";

export type HeroSlide = {
  id: string;
  icon: HeroIcon;
  navLabel: string;
  eyebrow: string;
  title: string;
  subcopy: string;
  image: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export const heroSlides: readonly HeroSlide[] = [
  {
    id: "degree",
    icon: "degree",
    navLabel: "The degree",
    eyebrow: "Degree + Venture Builder",
    title: "Earn a recognized BBA while building real ventures.",
    subcopy:
      "A 3-year, full-time venture college in Chennai. Earn an online BBA from Kalasalingam University while you build startups, brands, and products on campus.",
    image: "/cover/cover_1.png",
    primary: { label: "Apply Now", href: "/admissions#apply" },
    secondary: { label: "Explore Program", href: "/program" },
  },
  {
    id: "campus",
    icon: "campus",
    navLabel: "The campus",
    eyebrow: "Full-time · Chennai",
    title: "A campus built for builders, not lecture halls.",
    subcopy:
      "Venture studios, mentor reviews, demo days, and a founder community — a full-time offline environment where you ship work every week.",
    image: "/cover/cover_2_topview_sspdl.png",
    primary: { label: "See Campus Life", href: "/campus" },
    secondary: { label: "Book a Visit", href: "/admissions#apply" },
  },
  {
    id: "admissions",
    icon: "admissions",
    navLabel: "Admissions",
    eyebrow: "No entrance exam",
    title: "Selection by ambition, not by rank.",
    subcopy:
      "Admission is based on 12th-pass eligibility and a student-plus-parent interview. We look for seriousness, curiosity, and readiness to build.",
    image: "/cover/cover_3_hackathon.png",
    primary: { label: "Start Application", href: "/admissions#apply" },
    secondary: { label: "Talk to Admissions", href: "tel:+919629628389" },
  },
  {
    id: "outcomes",
    icon: "outcomes",
    navLabel: "Outcomes",
    eyebrow: "Graduate with proof",
    title: "Leave with a degree and a portfolio of proof.",
    subcopy:
      "Ventures, MVPs, campaigns, pitch decks, and mentor feedback — evidence that opens doors to placements, internships, or your own company.",
    image: "/cover/cover_4_classroom.png",
    primary: { label: "See Outcomes", href: "/program" },
    secondary: { label: "Apply Now", href: "/admissions#apply" },
  },
] as const;
