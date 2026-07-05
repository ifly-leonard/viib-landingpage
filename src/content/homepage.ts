import { admissionsConfig } from "@/lib/admissions.config";

export const siteMeta = {
  name: "VIIV",
  fullName: "Varman Institute of Venture Building",
  parentOrg: "Varman Innovation Labs",
  parentOrgUrl: "https://varmaninnovationlabs.com",
  tagline: "Earn the BBA. Build the venture. Graduate with proof.",
  oneLiner:
    "VIIV is a 3-year venture-building college in Chennai where students earn an online BBA from Kalasalingam University while building real businesses, brands, and products full-time on campus.",
  location: "Chennai, India",
} as const;

export const navigation = [
  { href: "#program", label: "Program" },
  { href: "#method", label: "Method" },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#admissions", label: "Admissions" },
  { href: "#faq", label: "FAQ" },
] as const;

export const heroContent = {
  eyebrow: admissionsConfig.eyebrow,
  headline: "Earn a Recognized BBA While Building Real Ventures.",
  subcopy:
    "VIIV is a 3-year venture-building college in Chennai. Students earn an online BBA from Kalasalingam University while attending VIIV's full-time offline program where they build startups, creator brands, MVPs, campaigns, and business experiments.",
  supportLine:
    "No entrance exam. Admission is based on eligibility, ambition, and a student plus parent interview.",
  ctas: [
    { label: "Apply Now", href: admissionsConfig.applyUrl, variant: "primary" as const },
    { label: "Download Program Note", href: admissionsConfig.programNoteUrl, variant: "secondary" as const },
    { label: "Talk to Admissions", href: admissionsConfig.admissionsPhoneHref, variant: "secondary" as const },
  ],
} as const;

export const proofStrip = [
  { label: "Degree", value: "Online BBA" },
  { label: "Campus", value: "Chennai, full-time offline" },
  { label: "Duration", value: "3 years" },
  { label: "Eligibility", value: "12th pass" },
  { label: "Selection", value: "Student plus parent interview" },
  {
    label: "Fee",
    value: `${admissionsConfig.feeTotal} total for 3 years, degree fee included`,
  },
] as const;

export const theGapContent = {
  eyebrow: "The problem with business education",
  headline: "A degree alone is not enough. A startup workshop alone is not enough.",
  body: "Most business degrees are built around exams, lectures, and theory. Most startup programs are short, unstructured, and do not give students a recognized degree. VIIV is built for families who want both: academic legitimacy and practical venture-building.",
  closingLine:
    "Students do not just study business. They learn to build, test, sell, pitch, lead, and execute.",
} as const;

export const methodContent = {
  eyebrow: "VIIV Method",
  headline: "Learn, build, review, graduate with proof.",
  steps: [
    {
      title: "Learn the fundamentals",
      description:
        "Business, marketing, finance, communication, product, sales, and entrepreneurial thinking.",
    },
    {
      title: "Build in public",
      description:
        "Create ventures, campaigns, MVPs, content systems, pitch decks, and revenue experiments.",
    },
    {
      title: "Review with mentors",
      description:
        "Get feedback from founders, operators, marketers, investors, and business leaders.",
    },
    {
      title: "Graduate with proof",
      description:
        "Leave with a degree, a portfolio, practical confidence, and a path into placement, venture creation, or family business.",
    },
  ],
} as const;

export const builderJourney = {
  eyebrow: "Builder journey",
  headline: "Three years from foundations to launch.",
  years: [
    {
      year: "Year 1",
      title: "Foundations",
      description: "Business basics, communication, research, team habits, and first builder experiments.",
    },
    {
      year: "Year 2",
      title: "Build and sell",
      description: "Venture sprints, campaigns, MVPs, customer conversations, and mentor reviews.",
    },
    {
      year: "Year 3",
      title: "Launch, intern, place, or scale",
      description: "Pitch readiness, portfolio polish, placements, internships, or venture acceleration.",
    },
  ],
} as const;

export const programPillars = {
  eyebrow: "Program pillars",
  headline: "A full-time builder curriculum inside a degree pathway.",
  pillars: [
    {
      title: "Business Foundations",
      description:
        "Understand how companies make money, acquire customers, price products, manage teams, and make decisions.",
    },
    {
      title: "Venture Studio",
      description:
        "Build real business experiments from idea to customer feedback, pitch, launch, and iteration.",
    },
    {
      title: "Creator and Brand Building",
      description:
        "Learn content, storytelling, distribution, personal branding, and campaign thinking for modern businesses.",
    },
    {
      title: "Operator Skills",
      description:
        "Practice sales, communication, research, negotiation, project management, and execution discipline.",
    },
    {
      title: "Mentor Reviews",
      description:
        "Present work to people who have built, led, marketed, invested, hired, or scaled in the real world.",
    },
    {
      title: "Career and Founder Pathways",
      description:
        "Prepare for jobs, startups, family business, freelancing, or further specialization with a body of work behind you.",
    },
  ],
} as const;

export const admissionsContent = {
  eyebrow: "Admissions",
  headline: "No entrance exam. No rank pressure.",
  body: "VIIV does not select students by test scores alone. We look for seriousness, curiosity, communication, family alignment, and readiness for a full-time builder environment.",
  criteria: [
    "12th pass eligibility",
    "Interest in business, entrepreneurship, marketing, product, or venture creation",
    "Student plus parent interview",
    "Readiness for a structured, full-time offline program",
    "Fit with VIIV's builder culture",
  ],
  quote:
    "You do not need an entrance rank to prove your potential. You need the right environment to build it.",
} as const;

export const outcomesContent = {
  eyebrow: "Outcomes",
  headline: "Graduate with more than marks. Graduate with evidence.",
  items: [
    "A recognized online BBA from Kalasalingam University",
    "A venture and project portfolio",
    "Pitch decks, campaigns, MVPs, research, and business experiments",
    "Mentor feedback and review history",
    "Confidence for placements, internships, entrepreneurship, family business, or independent work",
  ],
} as const;

export const faqItems = [
  {
    question: "Is this a degree program?",
    answer:
      "Yes. Students earn an online BBA from Kalasalingam University while attending VIIV's full-time offline venture-building program in Chennai.",
  },
  {
    question: "Is VIIV online or offline?",
    answer:
      "The BBA is online. The VIIV venture-building experience is full-time and offline in Chennai.",
  },
  {
    question: "Is there an entrance exam?",
    answer:
      "No. Admission is based on 12th pass eligibility, student plus parent interview, ambition, and fit.",
  },
  {
    question: "What will students build?",
    answer:
      "Ventures, MVPs, campaigns, pitch decks, content systems, research projects, sales experiments, and portfolio assets.",
  },
  {
    question: "What is the fee?",
    answer: `${admissionsConfig.feeTotal} ${admissionsConfig.feeNote}. Scholarships up to ${admissionsConfig.scholarshipMax} may be available.`,
  },
] as const;

export const finalCtaContent = {
  headline: "Ready to earn the degree and build the venture?",
  subcopy:
    "Join a full-time Chennai campus where academic legitimacy meets real venture-building.",
  ctas: [
    { label: "Apply Now", href: admissionsConfig.applyUrl, variant: "primary" as const },
    { label: "Talk to Admissions", href: admissionsConfig.admissionsPhoneHref, variant: "secondary" as const },
  ],
} as const;

export const footerContent = {
  org: siteMeta.fullName,
  parent: siteMeta.parentOrg,
  parentUrl: siteMeta.parentOrgUrl,
  address: "Chennai, India",
  phone: admissionsConfig.admissionsPhone,
  phoneHref: admissionsConfig.admissionsPhoneHref,
} as const;
