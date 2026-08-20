import { admissionsConfig } from "@/lib/admissions.config";

export const mainNavigation = [
  { href: "/program", label: "UG certification in Startup Mastery and AI Venture Building" },
  { href: "/campus-life/life-at-viiv", label: "Campus Life" },
  { href: "/admissions/how-to-apply", label: "Admissions" },
  { href: "/about", label: "About" },
] as const;

export const ctaLinks = {
  apply: admissionsConfig.applyUrl,
  phone: admissionsConfig.admissionsPhoneHref,
  whatsapp: admissionsConfig.whatsappHref,
  programNote: admissionsConfig.programNoteUrl,
} as const;

export type NavIcon =
  | "graduation"
  | "sparkles"
  | "briefcase"
  | "workflow"
  | "building"
  | "flask"
  | "presentation"
  | "images"
  | "users"
  | "pin"
  | "file"
  | "compass"
  | "clipboard"
  | "badge"
  | "wallet";

export type MegaLink = {
  title: string;
  description: string;
  href: string;
  icon: NavIcon;
  badge?: string;
  /** Preview image shown in the feature-variant panel on hover. */
  image?: string;
};

export type FeatureMenu = {
  variant: "feature";
  links: readonly MegaLink[];
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    href: string;
    cta: string;
  };
};

export type GridMenu = {
  variant: "grid";
  links: readonly MegaLink[];
  side: {
    heading: string;
    items: readonly { title: string; description: string; href: string; icon: NavIcon; badge?: string }[];
  };
  footer?: { label: string; href: string };
};

export type ListMenu = {
  variant: "list";
  links: readonly MegaLink[];
  cta: { title: string; description: string; href: string; label: string };
};

export type NavMenuData = FeatureMenu | GridMenu | ListMenu;

export type NavItem = {
  label: string;
  href: string;
  menu?: NavMenuData;
};

const COVER = "/cover/cover_1.png";

export const navItems: readonly NavItem[] = [
  {
    label: "UG Certification Program",
    href: "/program",
    // menu: {
    //   variant: "feature",
    //   links: [
    //     {
    //       title: "Year 1 — Build Yourself",
    //       description:
    //         "Develop founder thinking, customer understanding, sales, AI skills, and a professional presence.",
    //       href: "/program/build-yourself",
    //       icon: "compass",
    //       image: "/cover/cover_1.png",
    //     },
    //     {
    //       title: "Year 2 — Build a Business",
    //       description:
    //         "Build an MVP, launch the brand, acquire customers, and generate revenue.",
    //       href: "/program/build-a-business",
    //       icon: "flask",
    //       image: "/cover/cover_3_hackathon.png",
    //     },
    //     {
    //       title: "Year 3 — Build an Enterprise",
    //       description:
    //         "Build a team, create operating systems, and become investment-ready.",
    //       href: "/program/build-an-enterprise",
    //       icon: "building",
    //       image: "/cover/cover_2_topview_sspdl.png",
    //     },
    //     {
    //       title: "Graduation & Demo Day",
    //       description:
    //         "Graduate with evidence and present a real venture to a live audience.",
    //       href: "/program/graduation-and-demo-day",
    //       icon: "presentation",
    //       image: "/cover/cover_4_classroom.png",
    //     },
    //   ],
    //   featured: {
    //     eyebrow: "The VIIV program",
    //     title: "Three years. One transformation.",
    //     description: "Build yourself. Build a business. Build an enterprise.",
    //     image: COVER,
    //     href: "/program",
    //     cta: "Explore the full program",
    //   },
    // },
  },
  {
    label: "Campus Life",
    href: "/campus-life/life-at-viiv",
    menu: {
      variant: "grid",
      links: [
        {
          title: "Life at VIIV",
          description: "A full-time builder campus.",
          href: "/campus-life/life-at-viiv",
          icon: "building",
        },
        {
          title: "Accommodations",
          description: "Comfortable stays near campus.",
          href: "/campus-life/accommodations",
          icon: "building",
        },
        // {
        //   title: "Demo Days",
        //   description: "Ship, pitch, get feedback.",
        //   href: "/campus-life/demo-days",
        //   icon: "presentation",
        // },
        {
          title: "The VIIV Mentor Network",
          description: "Founders, mentors, peers.",
          href: "/campus-life/community",
          icon: "users",
        },
        {
          title: "Location",
          description: "In the heart of Chennai.",
          href: "/campus-life/location",
          icon: "pin",
        },
      ],
      side: {
        heading: "Resources",
        // Temporarily hidden — restore items to show the Resources panel again.
        items: [],
      },
    },
  },
  {
    label: "Admissions",
    href: "/admissions/how-to-apply",
    menu: {
      variant: "list",
      links: [
        {
          title: "How to apply",
          description: "No entrance exam — apply in minutes.",
          href: "/admissions/how-to-apply",
          icon: "clipboard",
        },
        {
          title: "Eligibility",
          description: "12th pass and ready to build.",
          href: "/admissions/eligibility",
          icon: "badge",
        },
        {
          title: "Fees & scholarships",
          description: "₹8L all-in, scholarships available.",
          href: "/admissions/fees-and-scholarships",
          icon: "wallet",
          badge: "New",
        },
        {
          title: "Book a visit",
          description: "Tour the Chennai campus.",
          href: "/campus-life/book-a-tour",
          icon: "pin",
        },
      ],
      cta: {
        title: "The 2026 intake is open",
        description: "Limited seats · rolling interviews",
        href: "/admissions/how-to-apply",
        label: "Apply now",
      },
    },
  },
  { label: "About", href: "/about" },
] as const;
