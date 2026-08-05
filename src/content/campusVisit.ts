import { admissionsConfig } from "@/lib/admissions.config";

/** Content for the "Come Visit Our Campus" booking page. */
export const campusVisitHero = {
  eyebrow: "Campus Visits",
  breadcrumbLabel: "Campus Visits",
  title: "Come Visit Our Campus",
  description:
    "Choosing a college is a big decision. Visit our campus, meet our team and understand how our online and on-campus learning experience works before making your choice.",
  ctaLabel: "Book Your Campus Visit",
  ctaHref: "#book-a-visit",
  supportLine: "Free visit · 45 to 60 minutes · Parents are welcome",
} as const;

export const visitExperience = {
  eyebrow: "What to expect",
  headline: "What You Can Expect",
  description:
    "Your campus visit is designed to give you a clear understanding of the college, the courses and the student experience.",
  cards: [
    {
      icon: "compass" as const,
      title: "Campus Tour",
      description:
        "Explore the classrooms, learning spaces, student areas and campus facilities.",
    },
    {
      icon: "users" as const,
      title: "Meet an Advisor",
      description:
        "Speak with an academic or admissions advisor about your goals and course options.",
    },
    {
      icon: "workflow" as const,
      title: "Understand How Learning Works",
      description:
        "Learn how online classes, on-campus sessions, assessments and student support work together.",
    },
    {
      icon: "graduation" as const,
      title: "Explore Courses",
      description:
        "Understand the available programmes, eligibility requirements and possible career pathways.",
    },
    {
      icon: "wallet" as const,
      title: "Admissions and Fees",
      description:
        "Get clear answers about admissions, fees, scholarships and payment options.",
    },
    {
      icon: "badge" as const,
      title: "Ask Your Questions",
      description:
        "Use the visit to discuss anything that will help you make a confident decision.",
    },
  ],
} as const;

export const visitInformation = {
  eyebrow: "Plan your visit",
  headline: "Plan Your Visit",
  items: [
    {
      icon: "clock" as const,
      label: "Duration",
      detail: "Approximately 45 to 60 minutes",
    },
    {
      icon: "wallet" as const,
      label: "Cost",
      detail: "The campus visit is completely free",
    },
    {
      icon: "users" as const,
      label: "Guests",
      detail: "Parents, guardians and family members are welcome",
    },
    {
      icon: "file" as const,
      label: "What to bring",
      detail: "Academic documents are optional",
    },
    {
      icon: "calendar" as const,
      label: "Booking",
      detail: "Advance booking is recommended",
    },
    {
      icon: "presentation" as const,
      label: "Faculty meeting",
      detail: "Subject to availability",
    },
  ],
} as const;

export const parentsWelcome = {
  eyebrow: "Parents",
  headline: "Parents and Guardians Are Welcome",
  copy: "We encourage parents and guardians to join the campus visit. Our team can answer questions about academics, fees, student safety, learning support, career opportunities and the overall college experience.",
} as const;

export const visitBooking = {
  eyebrow: "Choose a convenient time",
  headline: "Book Your Campus Visit",
  description:
    "Select your preferred date and time below. Once your booking is complete, you will receive a confirmation with the visit details.",
  ctaLabel: "Book Your Campus Visit",
  helperText: "Opens a calendar where you can pick a date and time.",
  helpNote:
    "Unable to find a suitable time? Contact our admissions team and we will help arrange your visit.",
  contactLabel: "Contact Admissions",
  contactHref: admissionsConfig.admissionsPhoneHref,
} as const;

export const campusLocation = {
  eyebrow: "Getting here",
  headline: "Getting to the Campus",
  campusName: "VIIV Campus",
  /** Only the address the project already contains — do not invent street details. */
  address: "Chennai, India",
  directionsLabel: "Get Directions",
  /** Public maps link for the campus. */
  directionsHref: "https://maps.app.goo.gl/Ve2uxQRjechAZJx98",
} as const;

export const campusVisitFaq = {
  eyebrow: "FAQ",
  headline: "Frequently Asked Questions",
  items: [
    {
      question: "Is the campus visit free?",
      answer:
        "Yes. There is no charge for visiting the campus or speaking with our admissions team.",
    },
    {
      question: "Can my parents come with me?",
      answer:
        "Yes. Parents, guardians and family members are welcome to attend.",
    },
    {
      question: "Can I meet a faculty member?",
      answer:
        "A faculty meeting may be arranged based on availability. Mention this while booking or contact the admissions team before your visit.",
    },
    {
      question: "Can I visit without booking?",
      answer:
        "Advance booking is recommended so that the right team member is available to meet you.",
    },
    {
      question: "What should I bring?",
      answer:
        "You do not need to bring anything for a general campus tour. You may bring academic documents if you would like to discuss admissions or eligibility.",
    },
    {
      question: "Can I reschedule my visit?",
      answer: "Yes. Use the rescheduling option provided in your booking confirmation.",
    },
    {
      question: "Can I complete my admission during the visit?",
      answer:
        "The admissions team can guide you through the process. Completion will depend on document availability and eligibility requirements.",
    },
  ],
} as const;
