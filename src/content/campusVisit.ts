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
  /** Exact campus address. */
  address: "SSPDL Alpha City IT Park, No 25, Rajiv Gandhi Salai, Navalur, Chennai, Tamil Nadu 600130",
  directionsLabel: "Get Directions",
  /** Public maps link for the campus. */
  directionsHref: "https://maps.app.goo.gl/Ve2uxQRjechAZJx98",
  /** Google Maps embed for the exact campus pin (SSPDL Alpha City IT Park, Navalur). */
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124477.8944918235!2d80.07088379276564!3d12.847526253965082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a50a54bde0b%3A0x565856a9ccaf6b3!2sSSPDL%20ALPHA%20CITY%20IT%20PARK!5e0!3m2!1sen!2sin!4v1785970873057!5m2!1sen!2sin",
  /** Point-to-point journey instructions from the main transport hubs. */
  routes: [
    {
      origin: "Chennai Central Railway Station",
      originAddress: "Periamet, Jutkapuram, Park Town, Chennai, Tamil Nadu 600003",
      travelTime: "51 min",
      distance: "31.8 km",
      via: "Rajiv Gandhi IT Expy — fastest route now due to traffic conditions",
      steps: [
        "Head toward Chennai–Thiruttani–Renigunta Hwy / Grand Northern Trunk Rd / Wall Tax Rd (restricted usage road) — 3 sec (8 m).",
        "Take General Hospital Rd to Fort St George Flyover Bridge / Muthuswamy Rd — 2 min (750 m).",
        "Drive along Anna Salai / Chennai–Trichy Hwy and Gandhi Mandapam Rd — 25 min (10.3 km).",
        "Follow Rajiv Gandhi IT Expy to Egattur — 40 min (20.0 km).",
        "Drive to your destination in Navalur — 4 min (750 m).",
      ],
    },
    {
      origin: "Chennai International Airport",
      originAddress: "Airport Rd, Meenambakkam, Chennai, Tamil Nadu 600027",
      travelTime: "50 min",
      distance: "26.6 km",
      via: "Rajiv Gandhi IT Expy / Rajiv Gandhi Salai",
      steps: [
        "Head toward Airport Rd — 54 sec (350 m).",
        "Continue on Chennai–Nagapattinam Hwy / Grand Southern Trunk Rd, then drive from Pallavaram–Thuraipakkam Rd, 200 Feet Radial Rd and Rajiv Gandhi IT Expy to Egattur — 50 min (26.6 km).",
        "Drive to your destination in Navalur — 4 min (750 m).",
      ],
    },
    {
      origin: "Koyambedu Bus Terminus (CMBT)",
      originAddress: "Koyambedu, Chennai, Tamil Nadu 600107",
      travelTime: "53 min",
      distance: "33.0 km",
      via: "Rajiv Gandhi IT Expy — fastest route now due to traffic conditions",
      steps: [
        "Drive from Jawaharlal Nehru Salai, Chennai–Trichy Hwy, Sardar Patel Rd and Rajiv Gandhi IT Expy to Egattur — 1 hr 9 min (32.2 km).",
        "Drive to your destination in Navalur — 4 min (750 m).",
      ],
    },
    {
      origin: "Kilambakkam Bus Terminus",
      originAddress: "Kilambakkam New Bus Stand, Kilambakkam, Tamil Nadu 600048",
      travelTime: "42 min",
      distance: "28.3 km",
      via: "Kelambakkam–Vandalur Rd and Rajiv Gandhi IT Expy — fastest route, usual traffic",
      steps: [
        "Head toward NH Service Rd, pass by Dosa Plaza (on the left) — 2 min (400 m).",
        "Follow Kelambakkam–Vandalur Rd and Rajiv Gandhi IT Expy / Rajiv Gandhi Salai to Chennai — 44 min (27.2 km).",
        "Drive to your destination in Navalur — 4 min (750 m).",
      ],
    },
  ] as const,
  navigation: {
    eyebrow: "Finding your way",
    headline: "Navigating to the Campus",
    steps: [
      "Save the campus pin on your map app before you set out.",
      "Most first-time visitors arrive by cab or auto — the campus gate is directly on the main road.",
      "Look for the VIIV signage at the entrance; our team will greet you at the gate.",
      "If you get lost, call admissions and we'll guide you in.",
    ],
  },
  booking: {
    eyebrow: "Plan your visit",
    headline: "First-time visitors must book ahead",
    body: "To make sure a team member is ready to welcome you, all first-time visits to campus require an advance booking. Students and returning visitors can walk in during campus hours.",
    ctaLabel: "Book a Campus Visit",
    ctaHref: "/campus-life/book-a-tour",
  },
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
