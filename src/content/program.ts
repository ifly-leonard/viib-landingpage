export type ProgramQuest = {
  number: string;
  title: string;
  summary: string;
  topics: readonly string[];
  challenge: string;
  output: string;
};

export type ProgramPageData = {
  slug: string;
  eyebrow: string;
  year: string;
  title: string;
  headline: string;
  intro: string;
  goal: string;
  accent: string;
  images: readonly string[];
  stats: readonly { value: string; label: string }[];
  quests: readonly ProgramQuest[];
  capstone: {
    label: string;
    title: string;
    description: string;
    evidence: readonly string[];
  };
};

export const programYears: readonly ProgramPageData[] = [
  {
    slug: "build-yourself",
    eyebrow: "Year 1 · Build Yourself",
    year: "01",
    title: "Build Yourself",
    headline: "Become capable of finding and solving problems that matter.",
    intro:
      "Before building a company, students build the judgement, communication, discipline, and practical confidence needed to operate like a founder.",
    goal: "Move from curiosity to a validated opportunity worth pursuing.",
    accent: "#f7bd44",
    images: ["/photos/early-campus/lecture_lab.png", "/photos/early-campus/hackathon.png", "/photos/early-campus/cafeteria_hackathon.png"],
    stats: [
      { value: "50", label: "Business problems discovered" },
      { value: "100", label: "Customer conversations" },
      { value: "₹10K", label: "First revenue challenge" },
      { value: "5", label: "Proof portfolios" },
    ],
    quests: [
      {
        number: "01",
        title: "Founder Mindset & First Principles",
        summary: "Learn to observe clearly, question assumptions, and make better decisions.",
        topics: ["Founder thinking", "First principles", "Systems thinking", "Opportunity recognition", "Personal operating systems"],
        challenge: "Find 50 real-world business problems.",
        output: "Problem Opportunity Book",
      },
      {
        number: "02",
        title: "Customer Discovery",
        summary: "Replace guesses with evidence from the people who experience the problem.",
        topics: ["Customer interviews", "Jobs to Be Done", "Design thinking", "Observation", "Market research", "Validation"],
        challenge: "Interview 100 potential customers.",
        output: "Customer Research Report",
      },
      {
        number: "03",
        title: "Sales & Communication",
        summary: "Learn to earn attention, communicate value, and ask for the sale.",
        topics: ["Prospecting", "Storytelling", "Cold outreach", "Negotiation", "Public speaking", "CRM"],
        challenge: "Generate ₹10,000 in revenue.",
        output: "Sales Portfolio",
      },
      {
        number: "04",
        title: "AI-Native Professional",
        summary: "Use AI to research, create, automate, and operate more effectively.",
        topics: ["Prompt engineering", "AI agents", "Automation", "No-code", "AI workflows", "Prototyping"],
        challenge: "Automate one real business process.",
        output: "AI Portfolio",
      },
      {
        number: "05",
        title: "Personal Brand",
        summary: "Build a credible professional presence by publishing useful work.",
        topics: ["LinkedIn", "Portfolio", "Website", "Networking", "Video presence", "Thought leadership"],
        challenge: "Publish 50 pieces of content.",
        output: "Personal Brand Portfolio",
      },
    ],
    capstone: {
      label: "Year 1 Capstone",
      title: "Founder Discovery Challenge",
      description:
        "Students bring their research, customer evidence, selling experience, and personal interests together to select one business opportunity they want to pursue.",
      evidence: ["Validated problem", "Defined customer", "Opportunity thesis", "Founder-fit reflection"],
    },
  },
  {
    slug: "build-a-business",
    eyebrow: "Year 2 · Build a Business",
    year: "02",
    title: "Build a Business",
    headline: "Turn a validated opportunity into a venture the market can respond to.",
    intro:
      "Students move from discovery to execution—designing the model, building the product, launching the brand, acquiring customers, and learning to operate.",
    goal: "Launch a real startup and produce evidence of demand through customers or revenue.",
    accent: "#b6c7e6",
    images: ["/photos/early-campus/lecture_ai_day.png", "/photos/early-campus/aarti_maam_interacting.png", "/photos/early-campus/kumarraja_sir_interacting.png"],
    stats: [
      { value: "1", label: "Working MVP" },
      { value: "1", label: "Market-facing brand" },
      { value: "Real", label: "Paying customers" },
      { value: "5", label: "Venture assets" },
    ],
    quests: [
      {
        number: "06",
        title: "Business Model Design",
        summary: "Define how the venture creates, delivers, and captures value.",
        topics: ["Business models", "Lean startup", "Pricing", "Revenue", "Unit economics", "Go-to-market"],
        challenge: "Design and stress-test the startup model.",
        output: "Business Blueprint",
      },
      {
        number: "07",
        title: "Product & MVP",
        summary: "Build the smallest useful product that can test the riskiest assumptions.",
        topics: ["MVP design", "Product management", "UX", "No-code", "Prototyping", "User testing"],
        challenge: "Build and test a working MVP.",
        output: "Working Prototype",
      },
      {
        number: "08",
        title: "Brand & Marketing",
        summary: "Give the venture a clear position, identity, voice, and route to attention.",
        topics: ["Branding", "Positioning", "Content", "SEO", "Social media", "Community", "Growth"],
        challenge: "Launch the venture brand.",
        output: "Brand Kit",
      },
      {
        number: "09",
        title: "Revenue Engine",
        summary: "Create a repeatable path from awareness to conversion and retention.",
        topics: ["Funnels", "Paid acquisition", "Organic growth", "Sales", "Partnerships", "CRM"],
        challenge: "Acquire paying customers.",
        output: "Revenue Dashboard",
      },
      {
        number: "10",
        title: "Operations",
        summary: "Build the processes that make delivery reliable and decisions visible.",
        topics: ["SOPs", "Finance", "Accounting", "Legal", "People operations", "Project management"],
        challenge: "Operate the startup through a live cycle.",
        output: "Operating Manual",
      },
    ],
    capstone: {
      label: "Year 2 Capstone",
      title: "Startup Launch",
      description:
        "Every team launches. The venture must leave the classroom, reach real customers, and demonstrate demand through revenue or credible traction.",
      evidence: ["Live product or service", "Customer feedback", "Revenue or traction", "Operating review"],
    },
  },
  {
    slug: "build-an-enterprise",
    eyebrow: "Year 3 · Build an Enterprise",
    year: "03",
    title: "Build an Enterprise",
    headline: "Transform a working venture into a company that can grow beyond its founder.",
    intro:
      "Every student chooses a venture path. From that point, assignments, mentor sessions, projects, and reviews revolve around one vision and one company.",
    goal: "Build a systematic, investment-ready venture with a team, operating rhythm, and long-term direction.",
    accent: "#f7bd44",
    images: ["/photos/early-campus/branding_session_lecture_lab.png", "/photos/early-campus/lecture_lab.png", "/photos/early-campus/cafeteria_hackathon.png"],
    stats: [
      { value: "1", label: "Focused venture path" },
      { value: "3", label: "Founder studios" },
      { value: "10+", label: "Venture deliverables" },
      { value: "1", label: "Investment-ready package" },
    ],
    quests: [
      {
        number: "11",
        title: "Venture Scale Studio",
        summary: "Build the team, systems, and operating rhythm required to scale.",
        topics: ["Scaling operations", "Hiring", "SOPs", "Leadership", "OKRs", "Culture", "AI automation", "Dashboards"],
        challenge: "Make the venture operate systematically, not only through founder effort.",
        output: "Scale System: org chart, SOP library, dashboard, and growth roadmap",
      },
      {
        number: "12",
        title: "Venture Funding Studio",
        summary: "Develop the financial, legal, and narrative foundations of an investable startup.",
        topics: ["Financial projections", "Runway", "Cap tables", "Compliance", "Fundraising", "Data rooms", "Term sheets"],
        challenge: "Meet investors or incubators and deliver a Demo Day pitch.",
        output: "Investment-Ready Venture Package",
      },
      {
        number: "13",
        title: "Founder Legacy Studio",
        summary: "Grow from venture operator into an ethical, resilient founder-leader.",
        topics: ["Vision", "Founder psychology", "Ethics", "Resilience", "Board communication", "Long-term thinking", "Giving back"],
        challenge: "Lead, mentor, teach, and articulate a ten-year founder vision.",
        output: "Founder Playbook and Leadership Portfolio",
      },
    ],
    capstone: {
      label: "Final Transformation",
      title: "From Builder to Founder",
      description:
        "Students bring company-building, investment readiness, and founder leadership together in one venture that they can explain, defend, and continue beyond graduation.",
      evidence: ["Team and systems", "Financial model", "Investor data room", "Founder roadmap"],
    },
  },
];

export const ventureStudios = [
  "AI & SaaS",
  "Healthcare",
  "Education",
  "D2C & Consumer Brands",
  "Media & Creator Economy",
  "FinTech",
  "Climate & Sustainability",
  "DeepTech",
  "Manufacturing",
  "Social Enterprise",
  "Family Business Innovation",
] as const;

export const graduationPortfolio = [
  "Venture website",
  "Working product or service",
  "Customer validation",
  "Revenue or traction evidence",
  "Financial model",
  "Pitch deck",
  "Founder story",
  "Investor data room",
  "Leadership portfolio",
  "Demo Day presentation",
] as const;

export const programPageSlugs = [
  ...programYears.map((year) => year.slug),
  "graduation-and-demo-day",
] as const;

export function getProgramYear(slug: string) {
  return programYears.find((year) => year.slug === slug);
}
