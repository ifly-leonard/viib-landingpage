import { admissionsConfig } from "@/lib/admissions.config";

export const siteMeta = {
  name: "VIIV",
  fullName: "Varman Institute of Innovation and Venture Building",
  parentOrg: "Varman Innovation Labs",
  parentOrgUrl: "https://varmaninnovationlabs.com",
  tagline: "Earn the BBA. Build the venture. Graduate with proof.",
  oneLiner:
    "VIIV is a 3-year venture-building college in Chennai where students earn an online BBA while building real businesses, brands, and products full-time on campus.",
  location: "SSPDL Alpha City, Alpha block, 3rd Floor,Navalur, Chennai, India",
} as const;

export const navigation = [
  { href: "/program", label: "Program" },
  { href: "/campus-life/life-at-viiv", label: "Campus Life" },
  { href: "/admissions/how-to-apply", label: "Admissions" },
  { href: "/about", label: "About" },
] as const;

export const heroWords = ["earn.", "build.", "prove."] as const;

export const outcomeStats = [
  { value: "3", label: "Years", detail: "Full-time venture-building college" },
  { value: "BBA", label: "Degree", detail: "Recognized online BBA included" },
  { value: "₹8L", label: "All-in", detail: "Degree fee included for 3 years" },
  { value: "0", label: "Entrance exams", detail: "Selection by fit and interview" },
] as const;

export const programPaths = [
  {
    title: "Degree + Venture Builder",
    duration: "3 years · Full-time Chennai",
    headline: "Become a builder with a recognized BBA",
    description:
      "Earn the degree while running venture sprints, campaigns, MVPs, and revenue experiments on campus every week.",
    tag: "Core pathway",
    tone: "gold" as const,
  },
  {
    title: "Creator + Founder Track",
    duration: "Embedded across program",
    headline: "Build brands while building businesses",
    description:
      "Content systems, storytelling, distribution, and creator-led venture experiments for students who think in audience and product.",
    tag: "Creator lane",
    tone: "blue" as const,
  },
  {
    title: "Operator + Placement Track",
    duration: "Year 2 onward",
    headline: "Graduate job-ready or startup-ready",
    description:
      "Sales, communication, research, project management, and portfolio proof for placements, internships, or family business.",
    tag: "Career lane",
    tone: "navy" as const,
  },
] as const;

export const marqueePhrases = [
  "VENTURE STUDIO",
  "PITCH REVIEWS",
  "BBA INCLUDED",
  "CHENNAI CAMPUS",
  "BUILD IN PUBLIC",
  "MENTOR FEEDBACK",
  "REAL MVPS",
  "NO ENTRANCE EXAM",
] as const;

export const heroContent = {
  eyebrow: admissionsConfig.eyebrow,
  headline: "Earn a Recognized BBA While Building Real Ventures.",
  subcopy:
    "VIIV is a 3-year venture-building college in Chennai. Students earn an online BBA while attending VIIV's full-time offline program where they build startups, creator brands, MVPs, campaigns, and business experiments.",
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
    "A recognized online BBA",
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
      "Yes. Students pursue a valid UGC-recognised Online BBA degree through Kalasalingam Academy of Research and Education (KARE) alongside VIIV's full-time, on-campus UG Certificate Program in Startup Mastery & AI Venture Building in Chennai. This pathway enables students to earn a recognised BBA degree while gaining hands-on experience in building startups, products, brands, and real-world ventures at VIIV.",
  },
  {
    question: "Who is the degree from, and is it valid?",
    answer:
      "The BBA is awarded by Kalasalingam Academy of Research and Education (KARE) — a deemed-to-be university under Section 3 of the UGC Act, 1956, accredited by NAAC with an A++ grade. It is a recognised undergraduate degree that families and employers can verify, and it keeps higher-studies options open — from MBAs and professional certifications to global programs.",
  },
  {
    question: "What does a typical week look like at VIIV?",
    answer:
      "VIIV runs on a Learn → Build → Review → Reflect cycle. Students move between structured learning, focused studio time, field research, customer conversations, mentor reviews, and live presentations. The BBA coursework is online, while the venture-building experience is full-time and on campus in Chennai — so every week ends with real work shipped, not just lectures attended.",
  },
  {
    question: "What is the fee, and are scholarships available?",
    answer:
      `The total programme fee is ${admissionsConfig.feeTotal} — all-in for 3 years, degree fee included, with no hidden charges. It breaks down as a ₹50,000 one-time admission fee plus ₹2,50,000 tuition per year. Scholarships of up to 50% are available, decided case by case at the admissions interview — there is no fixed formula or merit score, so just ask and we'll talk it through openly with you and your family.`,
  },
  {
    question: "Is the UGC-recognised Online BBA included in the VIIV program fee?",
    answer:
      "Yes. The Online BBA degree fee is included in the overall VIIV program fee — there is no separate degree fee to pay. Unlike programs where the degree is charged separately, VIIV offers a transparent, integrated fee structure for the complete learning journey.",
  },
  {
    question: "Who can apply, and is there an entrance exam?",
    answer:
      "No entrance exam, no cut-offs, no rank pressure. If you have passed or are appearing for Class 12 in any stream — Science, Commerce, or Arts — you can apply. Recent school leavers (passed out this year or last year) are exactly who VIIV is built for. Recognised equivalent qualifications like IB, IGCSE, CBSE, State Boards, and NIOS are all accepted.",
  },
  {
    question: "How does the application process work?",
    answer:
      "It's simple and free — there is no application fee. Fill a 5-minute form with your name, phone, and email; the VIIV admissions team calls you within 48 hours; you share documents and check eligibility; you attend a relaxed student-plus-parent interview; and on selection, your seat is blocked. Most applicants move from form to a confirmed seat within a few weeks.",
  },
  {
    question: "Where is the campus, and can we visit before applying?",
    answer:
      "VIIV is at SSPDL Alpha City IT Park, No 25, Rajiv Gandhi Salai, Navalur, Chennai — about 26 km from the airport, 32 km from Chennai Central, and well connected by road. Campus visits are free and take about 45–60 minutes; parents and family members are welcome. First-time visitors should book ahead via cal.com/viivindia/campus-tour.",
  },
  {
    question: "Is accommodation available near campus?",
    answer:
      "Yes. VIIV works with partnered hostels and residences near campus offering clean, secure, fully-furnished rooms — with study desks, high-speed internet, 24x7 security, CCTV coverage, a dedicated warden, and managed housekeeping, laundry, and mess facilities. Students can choose shared or private options depending on preference and budget.",
  },
  {
    question: "What does VIIV do for careers and placements?",
    answer:
      "Career support starts from Year 1, not after graduation. Students build a professional portfolio and proof of work from the early stages, gain exposure to internships, startup environments, industry mentors, and hiring professionals, and get interview preparation. A dedicated Head of Placements (8+ years in corporate hiring) guides students toward high-growth startups, Founder's Office roles, sales, growth, product, operations, AI-led roles, creator careers, or entrepreneurship — and the mentor and industry network stays available beyond graduation.",
  },
  {
    question: "What does a student graduate with?",
    answer:
      "More than a degree — a body of proof. Students graduate with a UGC-recognised online BBA from Kalasalingam University, three years of documented real-world work (MVPs, campaigns, projects, pitches), a launched venture or placement-ready portfolio depending on the Year 3 path they choose, real internship and industry-project experience, a public personal brand built from Year 1, working fluency in AI tools, a Demo Day pitch presented to founders and investors, and a network of mentors and peers built over three years.",
  },
  {
    question: "What does \"Lifetime Placement Support\" at VIIV mean?",
    answer:
      "VIIV's career support doesn't end when you graduate. Students receive ongoing access to career guidance, interview preparation, job opportunities, industry connections and the VIIV professional network throughout their careers. Whether you're looking for your first job, planning a career switch, or exploring new opportunities years after graduation, VIIV will continue to support your career journey. Lifetime placement support means continued career and placement assistance; it does not guarantee employment or a specific salary.",
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
