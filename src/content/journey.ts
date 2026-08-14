import { Flame, Rocket, Wrench } from "lucide-react";

export type JourneyYear = {
  year: string;
  label: string;
  title: string;
  theme: string;
  tagline: string;
  phase: string;
  body: string;
  outcomes: readonly string[];
  icon: typeof Flame;
  accent: string;
};

/** The 3-year journey at a glance — used by the scroll-driven journey map. */
export const journeyYears: readonly JourneyYear[] = [
  {
    year: "YEAR 1",
    label: "Ignite",
    title: "IGNITE",
    theme: "Startup Mastery Foundations",
    tagline: "Explore. Learn. Experiment.",
    phase: "Foundations",
    body: "You don't know what you're good at until you've tried building something.",
    outcomes: [
      "A business foundation",
      "Your first content channel",
      "A clear sense of your own strengths",
    ],
    icon: Flame,
    accent: "#f7bd44",
  },
  {
    year: "YEAR 2",
    label: "Build",
    title: "BUILD",
    theme: "Venture Building & Industry Experience",
    tagline: "Experience. Build. Validate. Pitch.",
    phase: "Venture building",
    body: "Ideas mean nothing until real people respond to them.",
    outcomes: [
      "An MVP or business project",
      "Real internship experience",
      "A growing audience or portfolio",
    ],
    icon: Wrench,
    accent: "#b6c7e6",
  },
  {
    year: "YEAR 3",
    label: "Launch",
    title: "LAUNCH",
    theme: "Startup Acceleration & Funding",
    tagline: "Launch. Validate. Raise. Scale.",
    phase: "Acceleration",
    body: "Choose the path that fits you—and go all in on it.",
    outcomes: [
      "A launched venture",
      "A monetising creator brand",
      "Or a placement-ready career portfolio—backed by mentorship and a Demo Day pitch",
    ],
    icon: Rocket,
    accent: "#f7bd44",
  },
] as const;
