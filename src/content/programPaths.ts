import { Briefcase, Mic, Rocket } from "lucide-react";

export type ProgramPath = {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Rocket;
  accent: string;
  experienceTitle: string;
  experience: readonly string[];
  endTitle: string;
  end: string;
  highlight: string;
};

/** Year 3 paths — students choose one and go deep. */
export const programPaths: readonly ProgramPath[] = [
  {
    id: "founder",
    title: "FOUNDER PATH",
    subtitle: "Build & Scale Your Startup",
    icon: Rocket,
    accent: "#f7bd44",
    experienceTitle: "What you'll experience",
    experience: [
      "Launch your venture to real customers",
      "Learn startup finance, unit economics and basic legal/compliance",
      "Get structured mentorship from founders and operators",
      "Get guided exposure to how fundraising conversations actually work",
    ],
    endTitle: "By the end",
    end: "A launched venture with real customers, revenue attempts, and a fundable pitch — with no promise of funding, but the readiness for the conversation.",
    highlight: "Launch. Validate. Raise. Scale.",
  },
  {
    id: "creatorpreneur",
    title: "CREATORPRENEUR PATH",
    subtitle: "Build Your Creator-Led Business",
    icon: Mic,
    accent: "#b6c7e6",
    experienceTitle: "What you'll experience",
    experience: [
      "Turn your audience into a sustainable business through products, services, partnerships and community",
      "Learn creator-business finance and monetisation strategy",
      "Get mentorship from working creators and media professionals",
    ],
    endTitle: "By the end",
    end: "A creator-led business — audience, brand identity and at least one active revenue stream.",
    highlight: "Audience to Community to Brand to Revenue to Business",
  },
  {
    id: "career",
    title: "CAREER PATH",
    subtitle: "Build Your High-Growth Career",
    icon: Briefcase,
    accent: "#f7bd44",
    experienceTitle: "What you'll experience",
    experience: [
      "Take on advanced industry projects and a capstone internship",
      "Build a professional portfolio from three years of real work",
      "Get placement preparation — resumes, interviews, case studies",
      "Access VIIV's industry and mentor network for referrals and introductions",
    ],
    endTitle: "By the end",
    end: "A placement-ready portfolio built on three years of documented real-world work, not just a final-year project.",
    highlight: "Experience. Document. Prepare. Place.",
  },
] as const;

export const demoDay = {
  eyebrow: "The finale",
  title: "DEMO DAY",
  body: "Every path leads here. The strongest ventures, creator businesses and portfolios get the stage — to pitch and present in front of founders, industry leaders, mentors and investors.",
} as const;

/** What you graduate with — a body of proof. */
export const graduateWith = {
  eyebrow: "What will you graduate with?",
  title: "Earn the Degree. Build Something Real. Become Future-Ready.",
  points: [
    "A UGC recognized undergraduate degree — an online BBA from Kalasalingam University, earned alongside the VIIV experience.",
    "Three years of documented real-world work — MVPs, campaigns, projects and pitches, not just assignments.",
    "A launched venture, a creator-led business, or a placement-ready portfolio — depending on the path you chose.",
    "Real internship and industry-project experience, completed during your degree, not after it.",
    "A public personal brand or content presence, built and grown from Year 1.",
    "A working fluency in AI tools applied across business, content and problem-solving.",
    "A Demo Day pitch experience, presented to real founders, mentors and investors.",
    "A network of mentors, founders, industry professionals and peers built over three years, not three months.",
  ],
} as const;
