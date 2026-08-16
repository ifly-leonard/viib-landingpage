import { admissionsConfig } from "@/lib/admissions.config";

/** Content for the "How to Apply" admissions page. */
export const howToApplyHero = {
  eyebrow: admissionsConfig.eyebrow,
  breadcrumbLabel: "How to Apply",
  title: "Build Your Future. Start at VIIV.",
  description:
    "Admissions are now open for VIIV's 2026 cohort at the Chennai Campus. At VIIV, admission is not decided by entrance exams, ranks, or cut-offs. We look for students with curiosity, ambition, and the drive to build something of their own. Simply check your eligibility, submit your application, and attend an interaction with our admissions team.",
  ctaLabel: "2026 Admissions Open — Apply Now",
  supportLine: "2026 Founding Cohort · Chennai Campus · Recognised BBA Pathway",
  highlights: [
    "No Entrance Exam",
    "Only 30 Seats Left at the Chennai Campus",
    "Up to 50% Scholarship for Eligible Students",
  ],
} as const;

/** Degree + VIIV explanation. */
export const howToApplyDegree = {
  eyebrow: "Degree + Venture Building",
  headline: "One 3-Year Journey. Degree + Venture Building.",
  description:
    "A three-year undergraduate journey built around venture building — with a recognised BBA degree pathway alongside it.",
  pillars: [
    {
      title: "BBA Degree Pathway",
      body: "A recognised Online BBA from Kalasalingam Academy of Research and Education (KARE) — a deemed-to-be university under Section 3 of the UGC Act, 1956, accredited by NAAC with an A++ grade.",
    },
    {
      title: "VIIV Venture-Building Programme",
      body: "A full-time, on-campus UG Certificate Program in Startup Mastery & AI Venture Building — challenge-based learning where students build real products, brands and ventures from Year 1.",
    },
    {
      title: "Graduate With Proof",
      body: "A degree plus three years of documented real-world work — MVPs, campaigns, projects, pitches — and a portfolio that demonstrates what you can build, lead and create.",
    },
  ],
  studentMessage: "Build something before you graduate.",
  parentMessage: "Degree + Skills + Portfolio + Career Optionality.",
  sharedMessage: "Earn the Degree. Build the Venture. Graduate with Proof.",
} as const;

/** 3-year student journey. */
export const howToApplyJourney = {
  eyebrow: "The 3-year journey",
  headline: "Three Years That Change How You Build",
  years: [
    {
      label: "Year 1",
      title: "IGNITE",
      body: "Startup Mastery Foundations — explore, learn, experiment. Build a business foundation, your first content channel, and a clear sense of your own strengths.",
    },
    {
      label: "Year 2",
      title: "BUILD",
      body: "Venture Building & Industry Experience — build, validate, pitch. Launch an MVP or business project with real internship experience and a growing audience.",
    },
    {
      label: "Year 3",
      title: "LAUNCH",
      body: "Startup Acceleration & Funding — launch, validate, raise, scale. Choose your path and go deep, with structured mentorship and an incubation environment behind you.",
    },
  ],
  paths: [
    { title: "Founder Path", body: "Build and scale your own startup to real customers." },
    { title: "Creatorpreneur Path", body: "Turn your audience into a creator-led business." },
    { title: "High-Growth Professional Path", body: "Build a placement-ready career portfolio." },
  ],
} as const;

/** Who should apply / what we look for. */
export const howToApplyWho = {
  eyebrow: "Who should apply",
  headline: "Who Should Apply to VIIV?",
  description:
    "VIIV is for students who are curious about startups, AI, business, innovation and building — and ready to commit to a full-time campus experience in Chennai.",
  points: [
    {
      title: "Curiosity",
      body: "You ask why, explore how things work, and want to understand problems deeply.",
    },
    {
      title: "Initiative",
      body: "You start things on your own and follow through — you don't wait to be told.",
    },
    {
      title: "Communication",
      body: "You can express ideas clearly, listen well, and work with others.",
    },
    {
      title: "Ambition",
      body: "You want to build something meaningful and are willing to work for it.",
    },
    {
      title: "Commitment",
      body: "You are ready for a structured, full-time, offline builder programme in Chennai.",
    },
  ],
  note: "You don't need a startup idea or previous business experience.",
} as const;

export const howToApplyLookBeyond = {
  eyebrow: "We look beyond marks",
  headline: "We Look Beyond Marks.",
  description:
    "There is no entrance exam, no cut-off score and no rank pressure at VIIV. We select on curiosity, initiative, communication, ambition and commitment — assessed through a structured conversation.",
  criteria: ["Curiosity", "Initiative", "Communication", "Ambition", "Commitment"],
  note: "You don't need a startup idea or previous business experience.",
} as const;

/** The six-step admissions process. */
export const howToApplySteps = {
  eyebrow: "The process",
  headline: "A Simple 6-Step Admissions Process",
  description:
    "From your first application to a confirmed seat — the entire journey, step by step.",
  steps: [
    {
      title: "Apply to VIIV",
      duration: "5 minutes",
      body: "Share your name, phone number, and email. That's all you need to begin — there is no application fee.",
      detail:
        "After you submit, our VIIV admissions team receives your application and calls you within 48 hours.",
    },
    {
      title: "Speak With Our Admissions Team",
      duration: "Within 48 hours",
      body: "Our team reaches out to understand your goals, answer your questions, and explain the programme, the campus, and what full-time venture building looks like day to day.",
      detail:
        "This call is your chance to ask anything — fees, scholarships, accommodation, placements, or what your parents may want to know.",
    },
    {
      title: "Eligibility & Documents",
      duration: "Guided step",
      body: "We confirm you meet the Class 12 eligibility requirement and walk you through the small set of documents you'll need. We keep it simple and help you at every step.",
      detail:
        "The team also helps you understand the fee structure and any scholarships you may qualify for.",
    },
    {
      title: "Attend the Student & Parent Interview",
      duration: "Scheduled",
      body: "A relaxed conversation with our Admissions & Program Team to understand your interests, goals, ambitions, and whether VIIV's builder environment is the right fit for you.",
      detail:
        "A parent or legal guardian must attend the interview with the student. Parent participation is mandatory as part of the VIIV admissions process.",
    },
    {
      title: "Receive Your Admission Decision",
      duration: "Decision",
      body: "Following the interview, you receive your admission decision — along with any scholarship discussion and next steps.",
      detail:
        "We take care to make the decision process clear and timely, and answer any follow-up questions your family has.",
    },
    {
      title: "Confirm Your Admission",
      duration: "Guided step",
      body: "Confirm your seat, complete the simple formalities, and begin onboarding. Your journey at VIIV starts from here.",
      detail:
        "Our team stays with you through onboarding, so you know exactly what happens next, right up to your first day.",
    },
  ],
} as const;

export const howToApplyInterview = {
  eyebrow: "Student + parent interview",
  headline: "A Structured Conversation, With Your Family",
  description:
    "The interview is a structured conversation with the VIIV Admissions Team involving the student and parent/guardian.",
  points: [
    {
      title: "Parent / Guardian Participation",
      body: "We ask parents or guardians to join the interview because this is a family decision. Your family should understand the journey, the commitment, and the outcomes — and have their questions answered directly.",
    },
    {
      title: "No Exam, No Pressure",
      body: "There are no trick questions and no test. We simply want to understand your interests, your goals, and whether VIIV's builder culture is the right fit.",
    },
    {
      title: "What We Assess",
      body: "Curiosity, initiative, communication, ambition and commitment — not marks, rank or prior business experience.",
    },
  ],
} as const;

/** For parents section. */
export const howToApplyParents = {
  eyebrow: "For parents",
  headline: "For Parents: A Different Path, With a Structured Foundation",
  description:
    "VIIV offers your child a recognised degree and a real venture-building experience — so they graduate with credentials, skills, a portfolio and clear career optionality.",
  points: [
    {
      title: "Recognised Degree Pathway",
      body: "A UGC-recognised Online BBA from Kalasalingam Academy of Research and Education (KARE) — NAAC A++ accredited.",
    },
    {
      title: "Full-Time Chennai Campus",
      body: "A structured, supervised, full-time offline environment at Navalur, OMR — with a real campus rhythm, not an online-only programme.",
    },
    {
      title: "Industry Mentorship",
      body: "100+ mentors from IITs, IIMs, leading startups, and global technology companies like Microsoft, Amazon and IBM.",
    },
    {
      title: "Career + Venture Pathways",
      body: "Founder, Creatorpreneur or High-Growth Career paths — with transferable skills in sales, marketing, AI, product, leadership and execution.",
    },
    {
      title: "Placement & Career Support",
      body: "A dedicated Head of Placements, interview preparation, industry exposure, and lifetime placement support that continues beyond graduation.",
    },
  ],
  message: "Degree + Skills + Portfolio + Career Optionality.",
} as const;

/** Outcomes / non-entrepreneur fallback. */
export const howToApplyOutcomes = {
  eyebrow: "What if my child doesn't want to be an entrepreneur?",
  headline: "What If My Child Doesn't Want to Become an Entrepreneur?",
  description:
    "Entrepreneurship is one path, not the only path. In Year 3, every student chooses the path that fits them — and the skills they build transfer across all of them.",
  paths: [
    {
      title: "Founder Path",
      body: "Launch and scale a startup to real customers, with structured mentorship and fundraising exposure.",
    },
    {
      title: "Creatorpreneur Path",
      body: "Build a creator-led business — audience, brand identity and an active revenue stream.",
    },
    {
      title: "Career Path",
      body: "A placement-ready portfolio built on three years of documented real-world work, backed by interview preparation and industry referrals.",
    },
  ],
  skills: ["Sales", "Marketing", "AI", "Product Thinking", "Leadership", "Execution"],
} as const;

/** Fees section. */
export const howToApplyFees = {
  eyebrow: "Fees & scholarships",
  headline: "A Transparent Fee Structure",
  description:
    "The ₹8L all-in figure covers the full VIIV programme fee for 3 years — including the Online BBA degree fee. Here's exactly what is included.",
  items: [
    { label: "VIIV Programme Fee", body: "Covers the full 3-year venture-building programme — tuition, learning resources, studio access, and on-campus activities." },
    { label: "Online BBA Fee", body: "The degree fee is included in the overall programme fee — there is no separate degree fee to pay." },
    { label: "Registration / Admission Fee", body: "₹50,000 one-time, payable at the time of seat confirmation." },
    { label: "Tuition per Year", body: "₹2,50,000 per year, payable annually — 3 instalments over the programme." },
    { label: "Accommodation", body: "Optional, in partnered hostels and residences near campus. Separate from the programme fee; shared and private options available." },
    { label: "Payment Schedule", body: "One admission fee at confirmation, then tuition paid annually — a transparent 3-year schedule with no hidden charges." },
  ],
  scholarshipNote:
    "Scholarships of up to 50% are available, decided case by case at the interview. There is no fixed formula or merit score — just ask, and we'll talk it through openly with you and your family.",
} as const;

/** Trust cards / meet VIIV. */
export const howToApplyTrust = {
  eyebrow: "Meet VIIV",
  headline: "See Who's Behind VIIV",
  items: [
    { title: "Meet the Founder", href: "/about", body: "Arunmozhivarman Ramachandran — IIM Kozhikode alumnus, 12+ years in startups." },
    { title: "Head of Placements", href: "/program", body: "Khushbu Ranjan — 8+ years of corporate hiring and talent acquisition." },
    { title: "Mentor Network", href: "/campus-life/community", body: "100+ mentors from Microsoft, Amazon, IBM, HDFC Bank, Unilever and more." },
    { title: "University / Degree Partnership", href: "/", body: "Kalasalingam Academy of Research and Education (KARE) — UGC-recognised, NAAC A++." },
    { title: "Campus", href: "/campus-life/location", body: "A full-time builder campus at Navalur, Chennai — visit us anytime." },
    { title: "Sports, Dance & Wellness", href: "/campus-life/life-at-viiv", body: "Riane Sports Centre and Ecstatic Studio of Dance partnerships." },
  ],
} as const;

/** FAQ — expanded to ~15 questions. */
export const howToApplyFaq = {
  eyebrow: "FAQ",
  headline: "Your Questions, Answered",
  items: [
    {
      question: "Who is eligible to apply?",
      answer:
        "Students who have completed or are appearing for Class 12 in any stream — Science, Commerce, or Arts/Humanities — can apply. Recognised equivalent qualifications such as IB, IGCSE, CBSE, State Boards and NIOS are accepted.",
    },
    {
      question: "Is there an entrance exam?",
      answer:
        "No. There is no entrance exam, no cut-off score and no rank pressure. VIIV looks beyond marks — selection is based on curiosity, initiative, communication, ambition and commitment.",
    },
    {
      question: "Is there a Class 12 cut-off?",
      answer:
        "No cut-off. VIIV does not select by percentage or rank. We care about who you are and what you want to build, not just your marks.",
    },
    {
      question: "Which streams are accepted?",
      answer:
        "Science, Commerce and Arts/Humanities are all accepted, as permitted by university rules — any Class 12 stream qualifies.",
    },
    {
      question: "Which institution awards the degree?",
      answer:
        "The Online BBA is awarded by Kalasalingam Academy of Research and Education (KARE) — a deemed-to-be university under Section 3 of the UGC Act, 1956.",
    },
    {
      question: "Is the degree recognised?",
      answer:
        "Yes. KARE is a UGC-recognised deemed-to-be university, accredited by NAAC with an A++ grade — a degree families and employers can verify.",
    },
    {
      question: "Is VIIV full-time?",
      answer:
        "Yes. The BBA coursework is online, but the VIIV venture-building experience is full-time and offline at the Chennai campus — a structured, supervised environment.",
    },
    {
      question: "Do my parents need to attend the interview?",
      answer:
        "Yes. The interview is a structured conversation involving the student and parent/guardian. Your family's questions matter — this is a family decision.",
    },
    {
      question: "Do I need a startup idea to apply?",
      answer:
        "No. You don't need a startup idea or previous business experience. VIIV is designed to help you discover and build — that's the point of the programme.",
    },
    {
      question: "What if I don't want to become an entrepreneur?",
      answer:
        "That's fine. In Year 3 you choose Founder, Creatorpreneur or Career path. The transferable skills — sales, marketing, AI, product thinking, leadership and execution — prepare you for high-growth companies and industry roles too.",
    },
    {
      question: "Is there application fee?",
      answer:
        "No. Submitting your application is completely free, and there is no entrance exam to pay for or prepare for.",
    },
    {
      question: "What placement support does VIIV offer?",
      answer:
        "Career support starts from Year 1 — portfolio building, internships, interview preparation and industry exposure — guided by a dedicated Head of Placements.",
    },
    {
      question: "What does lifetime placement support mean?",
      answer:
        "VIIV's career support continues beyond graduation — ongoing guidance, interview preparation, job opportunities and industry connections. It means continued assistance; it does not guarantee employment or a specific salary.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Yes. Scholarships of up to 50% are available, decided case by case at the interview — based on your profile, circumstances and potential, not a fixed formula.",
    },
    {
      question: "Can we visit the campus before applying?",
      answer:
        "Absolutely. Campus visits are free and take about 45–60 minutes; parents and family are welcome. First-time visitors should book ahead via cal.com/viivindia/campus-tour.",
    },
  ],
} as const;

export const howToApplyCta = {
  eyebrow: "Ready to begin?",
  headline: "Join VIIV's 2026 Founding Cohort",
  body: "2026 Founding Cohort · Chennai Campus · Recognised BBA Pathway · Industry Mentor Network · Full-Time Venture-Building Experience. Apply now — our VIIV admissions team will call you within 48 hours.",
  buttonLabel: "Apply to VIIV",
  supportLine: "Talk to the Admissions Team: " + admissionsConfig.admissionsPhone + ".",
  phoneHref: admissionsConfig.admissionsPhoneHref,
} as const;
