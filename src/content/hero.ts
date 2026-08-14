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
    title: "Build Your Startup While You Earn a UGC-Recognised Degree",
    subcopy:
      "A 3-year, full-time venture college in Chennai. Earn an online BBA while you build startups, brands, and products on campus.",
    image: "/cover/cover_1.png",
    primary: { label: "Apply Now", href: "/admissions/how-to-apply" },
    secondary: { label: "Explore Program", href: "/program" },
  },
  {
    id: "campus",
    icon: "campus",
    navLabel: "The campus",
    eyebrow: "Full-time · Chennai",
    title: "A Campus Built for Builders, Not Just Classrooms",
    subcopy:
      "VIIV is a full-time, offline learning environment designed around building, experimenting, and creating. From Venture Studios and Build Sprints to mentor reviews, Demo Days, and a thriving founder community — you'll turn ideas into real outcomes, week after week.",
    image: "/cover/cover_2_topview_sspdl.png",
    primary: { label: "See Campus Life", href: "/campus" },
    secondary: { label: "Book a Visit", href: "/campus-life/book-a-tour" },
  },
  {
    id: "admissions",
    icon: "admissions",
    navLabel: "Admissions",
    eyebrow: "No entrance exam",
    title: "Your Ambition Matters More Than Your Rank",
    subcopy:
      "Admission is open to 12th-pass students through a student-parent interaction. We look for curiosity, initiative, seriousness, and willingness to build.",
    image: "/cover/cover_3_hackathon.png",
    primary: { label: "Start Application", href: "/admissions/how-to-apply" },
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
    secondary: { label: "Apply Now", href: "/admissions/how-to-apply" },
  },
] as const;
