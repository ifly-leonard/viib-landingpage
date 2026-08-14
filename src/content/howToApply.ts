import { admissionsConfig } from "@/lib/admissions.config";

/** Content for the "How to Apply" admissions page. */
export const howToApplyHero = {
  eyebrow: admissionsConfig.eyebrow,
  breadcrumbLabel: "How to Apply",
  title: "Apply in minutes. No entrance exam.",
  description:
    "VIIV does not select by test scores or rank. The process is built around a conversation — tell us about yourself, check your eligibility, and meet us for an interview. If selected, your seat is confirmed.",
  ctaLabel: "Start Your Application",
  supportLine: "Free application · No application fee · Parents welcome to join the process",
} as const;

/** The four-step admissions process, extrapolated from the apply-now flow. */
export const howToApplySteps = {
  eyebrow: "The process",
  headline: "How the Admissions Process Works",
  description:
    "From your first form to a confirmed seat — the entire journey, step by step.",
  steps: [
    {
      title: "Fill the form",
      duration: "5 minutes",
      body: "Share your name, phone number, and email. That's all you need to begin — there is no application fee and no entrance exam to prepare for.",
      detail:
        "After you submit, our VIIV admissions team receives your application and calls you within 48 hours.",
    },
    {
      title: "Talk to the VIIV admissions team",
      duration: "Within 48 hours",
      body: "Our team reaches out to understand your goals, answer your questions, and explain the programme, the campus, and what full-time venture building actually looks like day to day.",
      detail:
        "This call is your chance to ask anything — fees, scholarships, accommodation, placements, or what your parents may want to know.",
    },
    {
      title: "Check eligibility & share documents",
      duration: "Guided step",
      body: "We confirm you meet the basic requirement — 12th pass — and walk you through the small set of documents you'll need. We keep it simple and help you at every step.",
      detail:
        "The team also helps you understand the fee structure and any scholarships you may qualify for.",
    },
    {
      title: "Attend the interview",
      duration: "Student + parent",
      body: "A relaxed conversation with our admissions team — you and your parents together. We talk about your interests, your goals, and whether VIIV's builder environment is the right fit for you.",
      detail:
        "There is no exam and no trick questions. We're looking for seriousness, curiosity, and alignment with your family.",
    },
    {
      title: "Get selected & block your seat",
      duration: "Decision",
      body: "If selected, you'll receive your offer. Blocking your seat is a simple, guided step — and your journey at VIIV begins.",
      detail:
        "Our team stays with you through onboarding, so you know exactly what happens next, right up to your first day.",
    },
  ],
} as const;

export const howToApplyTimeline = {
  eyebrow: "What happens next",
  headline: "From Application to First Day",
  description:
    "Here's what you can expect after you submit your form. The whole journey usually takes a few weeks, and our team guides you at every step.",
  timeline: [
    {
      label: "Day 0",
      title: "Application received",
      body: "Your form lands with our VIIV admissions team the moment you submit.",
    },
    {
      label: "Within 48 hours",
      title: "Guidance call",
      body: "We call you to understand your goals, answer questions, and explain what comes next.",
    },
    {
      label: "Next step",
      title: "Eligibility & documents",
      body: "We confirm 12th pass eligibility and guide you through the documents you'll need.",
    },
    {
      label: "Scheduled",
      title: "Student + parent interview",
      body: "A relaxed conversation with you and your parents — no exam, no pressure.",
    },
    {
      label: "On selection",
      title: "Seat blocked",
      body: "Receive your offer and block your seat with our team's help. Onboarding begins.",
    },
  ],
} as const;

export const howToApplyEligibility = {
  eyebrow: "Eligibility",
  headline: "Do You Qualify?",
  description:
    "VIIV keeps eligibility simple — no entrance exam, no cut-offs, no rank pressure.",
  points: [
    {
      title: "12th pass",
      body: "Completed or appearing for Class 12 in any stream. A recognised board is all we ask.",
    },
    {
      title: "Interest in building",
      body: "Curiosity about business, entrepreneurship, marketing, product, or venture creation.",
    },
    {
      title: "Family alignment",
      body: "A student + parent interview to make sure everyone is aligned on the journey.",
    },
    {
      title: "Full-time readiness",
      body: "Commitment to a structured, full-time offline builder programme in Chennai.",
    },
  ],
  note: "Not sure if you qualify? Fill the form and our team will confirm your eligibility on your call.",
} as const;

export const howToApplyFaq = {
  eyebrow: "FAQ",
  headline: "Questions About Applying",
  items: [
    {
      question: "Is there an application fee?",
      answer:
        "No. Submitting your application is completely free, and there is no entrance exam to pay for or prepare for.",
    },
    {
      question: "How long does the process take?",
      answer:
        "Most applicants move from form to a confirmed seat within a few weeks. After you submit, our team calls within 48 hours and guides you through every step.",
    },
    {
      question: "Do I need my parents for the interview?",
      answer:
        "Yes. The interview is a student + parent conversation, so your parents or guardians join you. This helps everyone — including your family — make a confident decision.",
    },
    {
      question: "Is there an entrance exam?",
      answer:
        "No. Admission is based on 12th pass eligibility, ambition, communication, and fit with VIIV's builder culture.",
    },
    {
      question: "What if I'm not sure about my eligibility?",
      answer:
        "Fill the form anyway — our VIIV admissions team will confirm your eligibility on your call within 48 hours.",
    },
    {
      question: "What happens after I'm selected?",
      answer:
        "You receive your offer and block your seat with our team's help. From there, onboarding begins — so you know exactly what happens next, right up to your first day.",
    },
  ],
} as const;

export const howToApplyCta = {
  eyebrow: "Ready to begin?",
  headline: "Start Your Application Today",
  body: "Fill the form and our VIIV admissions team will call you within 48 hours. No fee, no exam — just a conversation to see if VIIV is the right fit for you.",
  buttonLabel: "Start Your Application",
  supportLine: "Prefer to talk first? Call us at " + admissionsConfig.admissionsPhone + ".",
  phoneHref: admissionsConfig.admissionsPhoneHref,
} as const;
