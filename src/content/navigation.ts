import { admissionsConfig } from "@/lib/admissions.config";

export const mainNavigation = [
  { href: "/program", label: "Program" },
  { href: "/campus", label: "Campus Life" },
  { href: "/admissions", label: "Admissions" },
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
  footer: { label: string; href: string };
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
    label: "Program",
    href: "/program",
    menu: {
      variant: "feature",
      links: [
        {
          title: "Degree + Venture Builder",
          description: "Earn a recognized BBA while building real ventures.",
          href: "/program",
          icon: "graduation",
          image: "/cover/cover_1.png",
        },
        {
          title: "Creator + Founder Track",
          description: "Build brands while building businesses.",
          href: "/program",
          icon: "sparkles",
          badge: "New",
          image: "/cover/cover_3_hackathon.png",
        },
        {
          title: "Operator + Placement",
          description: "Graduate job-ready or startup-ready.",
          href: "/program",
          icon: "briefcase",
          image: "/cover/cover_2_topview_sspdl.png",
        },
        {
          title: "The VIIV Method",
          description: "Learn, build, review, graduate with proof.",
          href: "/program",
          icon: "workflow",
          image: "/cover/cover_4_classroom.png",
        },
      ],
      featured: {
        eyebrow: "The program",
        title: "One degree. Three builder lanes.",
        description: "A 3-year, full-time venture college in Chennai.",
        image: COVER,
        href: "/program",
        cta: "Explore the program",
      },
    },
  },
  {
    label: "Campus Life",
    href: "/campus",
    menu: {
      variant: "grid",
      links: [
        {
          title: "Life at VIIV",
          description: "A full-time builder campus.",
          href: "/campus",
          icon: "building",
        },
        {
          title: "Studios & Labs",
          description: "Where MVPs get built.",
          href: "/campus",
          icon: "flask",
        },
        {
          title: "Demo Days",
          description: "Ship, pitch, get feedback.",
          href: "/campus",
          icon: "presentation",
        },
        {
          title: "Gallery",
          description: "Builder moments, documented.",
          href: "/campus",
          icon: "images",
          badge: "New",
        },
        {
          title: "Community",
          description: "Founders, mentors, peers.",
          href: "/campus",
          icon: "users",
        },
        {
          title: "Location",
          description: "In the heart of Chennai.",
          href: "/campus",
          icon: "pin",
        },
      ],
      side: {
        heading: "Resources",
        items: [
          {
            title: "Campus brochure",
            description: "Download the PDF",
            href: "/campus",
            icon: "file",
          },
          {
            title: "Book a tour",
            description: "Visit in person",
            href: "/admissions#apply",
            icon: "compass",
          },
        ],
      },
      footer: { label: "Not sure where to start? Talk to us", href: admissionsConfig.admissionsPhoneHref },
    },
  },
  {
    label: "Admissions",
    href: "/admissions",
    menu: {
      variant: "list",
      links: [
        {
          title: "How to apply",
          description: "No entrance exam — apply in minutes.",
          href: "/admissions#apply",
          icon: "clipboard",
        },
        {
          title: "Eligibility",
          description: "12th pass and ready to build.",
          href: "/admissions",
          icon: "badge",
        },
        {
          title: "Fees & scholarships",
          description: "₹8L all-in, scholarships available.",
          href: "/admissions",
          icon: "wallet",
          badge: "New",
        },
        {
          title: "Book a visit",
          description: "Tour the Chennai campus.",
          href: "/admissions#apply",
          icon: "pin",
        },
      ],
      cta: {
        title: "The 2026 intake is open",
        description: "Limited seats · rolling interviews",
        href: "/admissions#apply",
        label: "Apply now",
      },
    },
  },
  { label: "About", href: "/about" },
] as const;
