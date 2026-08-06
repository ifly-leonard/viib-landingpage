/** Content for the "Venture Building Bootcamp" registration page. */
export const bootcampContent = {
  eyebrow: "Bootcamp",
  title: "Venture Building Bootcamp",
  description:
    "A hands-on, high-intensity bootcamp where you learn by building. Over a few weekends, you'll take an idea from scratch to a working prototype — and pitch it like a founder.",
  supportLine: "Limited batches · Certificate on completion · Open to students & young professionals",
  ctaLabel: "Register for the Bootcamp",

  format: {
    eyebrow: "Format",
    title: "How the Bootcamp Works",
    items: [
      {
        label: "Duration",
        value: "4 weekends · 2 sessions each",
      },
      {
        label: "Mode",
        value: "In-person at the VIIV campus, Chennai",
      },
      {
        label: "Who it's for",
        value: "Students (12th & above) and young professionals",
      },
      {
        label: "Outcome",
        value: "A working prototype + a 3-minute pitch",
      },
    ],
  },

  curriculum: {
    eyebrow: "Curriculum",
    title: "What You'll Build",
    description:
      "Each weekend is one step of the venture-building journey. By the end, you'll have shipped something real.",
    modules: [
      {
        title: "Weekend 1 — Find a real problem",
        body: "Customer interviews, problem validation, and choosing an idea worth building.",
      },
      {
        title: "Weekend 2 — Design the solution",
        body: "Rapid prototyping, wireframes, and defining your minimum viable product.",
      },
      {
        title: "Weekend 3 — Build & launch",
        body: "Hands-on building with mentors, then launching your MVP to real users.",
      },
      {
        title: "Weekend 4 — Pitch day",
        body: "Refine your story, rehearse, and pitch your venture to founders and investors.",
      },
    ],
  },

  why: {
    eyebrow: "Why join",
    title: "What You'll Get",
    points: [
      "Mentorship from founders and operators who have built real ventures",
      "A portfolio piece — a launched MVP — not just a certificate",
      "A 3-minute pitch you can use for competitions, admissions, or internships",
      "Access to a community of builders, founders, and future collaborators",
    ],
  },

  form: {
    title: "Register for the Bootcamp",
    description: "Batches are limited. Leave your details and our team will confirm your seat.",
    ctaLabel: "Register Now",
    successTitle: "Application received!",
    successBody: "We've got your details. Our team will call you within 48 hours to confirm your seat and share the batch schedule.",
  },
} as const;
