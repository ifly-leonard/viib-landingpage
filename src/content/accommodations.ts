import type { GalleryPhoto } from "@/components/viiv/campus-life/CampusMasonryGallery";

/**
 * Accommodations page content.
 *
 * Accommodation photography is sourced from nearby coliving providers.
 */
export const accommodationsIntro = {
  eyebrow: "Campus Life · Accommodations",
  title: "A home away from home.",
  description:
    "Safe, comfortable, and thoughtfully designed accommodation options for students who want to live close to campus — so the builder rhythm continues after class hours.",
} as const;

export const accommodationPartners = [
  {
    name: "Truliv",
    logo: "/partners/truliv-logo.svg",
    website: "https://truliv.in/coliving-rent-in-chennai/pgs-near-navalur/truliv-hercules",
    kicker: "Official accommodation partner",
    headline: "Stay with our partner, Truliv.",
    body: "VIIV has partnered with Truliv, a trusted coliving operator, to offer students a comfortable place to stay close to campus. Their residences come fully furnished with housekeeping, laundry, high-speed internet, 24x7 security, and community spaces designed around student life — all managed by an experienced team, so you can focus on building.",
    cta: "Explore Truliv residences",
  },
  {
    name: "ZoloStays",
    logo: "/partners/zolo-logo.svg",
    website: "https://www.zolostays.com",
    kicker: "Official accommodation partner",
    headline: "Stay with our partner, ZoloStays.",
    body: "ZoloStays brings its signature coliving experience to VIIV students — fully furnished rooms, premium common spaces, high-speed internet, housekeeping, and 24x7 support across its managed residences near campus. A proven choice for students across India, Zolo makes settling in effortless so you can focus on your build.",
    cta: "Explore ZoloStays",
  },
] as const;

export const accommodationsFaq = {
  eyebrow: "Accommodation FAQs",
  headline: "Your accommodation questions, answered.",
  items: [
    {
      question: "Is accommodation included in the VIIV programme fee?",
      answer:
        "No. Accommodation is optional and arranged at an additional cost — it is not included in the programme fee. Our admissions team can help you compare options and shortlist a residence that fits your budget before you join.",
    },
    {
      question: "Who are the accommodation partners?",
      answer:
        "VIIV is partnered with Truliv and ZoloStays, two trusted coliving operators. Both offer fully furnished residences near campus with security, housekeeping, high-speed internet, and community spaces managed by experienced teams.",
    },
    {
      question: "Can I choose between shared and private rooms?",
      answer:
        "Yes. Both partners offer shared and private room options, so you can pick based on your preference and budget. Your admissions counsellor can walk you through availability and pricing.",
    },
    {
      question: "When should I arrange my accommodation?",
      answer:
        "Once your seat is confirmed, let your admissions counsellor know you'd like accommodation support. They'll help you compare partner options and lock in a room before the term begins.",
    },
  ],
} as const;

/** Curated gallery from nearby Truliv and Zolo coliving residences. */
export const accommodationPhotos: readonly GalleryPhoto[] = [
  { src: "/accomodations/hercules-property-01.jpeg", alt: "Exterior view of the Truliv Hercules residence", label: "The residence", orientation: "wide" },
  { src: "/accomodations/hercules-double-occupancy-room.jpeg", alt: "Furnished double occupancy room with twin beds", label: "Shared rooms", orientation: "wide" },
  { src: "/accomodations/hercules-property-02.jpeg", alt: "Furnished lounge inside the residence", label: "Resident lounge", orientation: "wide" },
  { src: "/accomodations/hercules-bathroom.jpeg", alt: "Clean bathroom inside the residence", label: "Bathrooms", orientation: "tall" },
  { src: "/accomodations/hercules-common-area.jpeg", alt: "Air-conditioned common area with tables and seating", label: "Common area", orientation: "wide" },
  { src: "/accomodations/hercules-mini-theatre.jpeg", alt: "Mini theatre with tiered lounge seating", label: "Mini theatre", orientation: "wide" },
  { src: "/accomodations/hercules-reception.jpeg", alt: "Reception area at the residence", label: "Reception", orientation: "wide" },
  { src: "/accomodations/hercules-sports-area.jpeg", alt: "Indoor sports and recreation area", label: "Sports area", orientation: "wide" },
  { src: "/accomodations/hercules-parking-01.jpeg", alt: "Covered parking at the residence", label: "Parking", orientation: "wide" },
  { src: "/accomodations/hercules-parking-02.jpeg", alt: "Parking area beside the residence", label: "Parking access", orientation: "wide" },
  { src: "/accomodations/hercules-parking-03.jpeg", alt: "Spacious vehicle parking area", label: "Vehicle parking", orientation: "wide" },
  { src: "/accomodations/zolo-mayfield-01.jpg", alt: "Bright twin-sharing room at Zolo Mayfield", label: "Twin-sharing room", orientation: "wide" },
  { src: "/accomodations/zolo-mayfield-02.jpg", alt: "Indoor gym at Zolo Mayfield", label: "Fitness centre", orientation: "wide" },
  { src: "/accomodations/zolo-mayfield-03.jpg", alt: "Covered vehicle parking at Zolo Mayfield", label: "Covered parking", orientation: "wide" },
  { src: "/accomodations/zolo-mayfield-04.jpg", alt: "Shared kitchen at Zolo Mayfield", label: "Shared kitchen", orientation: "wide" },
  { src: "/accomodations/zolo-mayfield-05.jpg", alt: "Furnished triple-sharing room at Zolo Mayfield", label: "Triple-sharing room", orientation: "wide" },
  { src: "/accomodations/zolo-mayfield-09.jpg", alt: "Resident lounge with sofas at Zolo Mayfield", label: "Resident lounge", orientation: "wide" },
  { src: "/accomodations/zolo-mayfield-10.jpg", alt: "Dining and common area at Zolo Mayfield", label: "Dining area", orientation: "wide" },
  { src: "/accomodations/zolo-dreamtown-01.jpg", alt: "Furnished twin-sharing room at Zolo Dreamtown", label: "Twin-sharing room", orientation: "wide" },
  { src: "/accomodations/zolo-dreamtown-02.jpg", alt: "Spacious common lounge at Zolo Dreamtown", label: "Common lounge", orientation: "wide" },
  { src: "/accomodations/zolo-dreamtown-04.jpg", alt: "Equipped shared kitchen at Zolo Dreamtown", label: "Equipped kitchen", orientation: "wide" },
  { src: "/accomodations/zolo-dreamtown-08.jpg", alt: "Air-conditioned twin-sharing room with wardrobes at Zolo Dreamtown", label: "Air-conditioned room", orientation: "wide" },
  { src: "/accomodations/zolo-dreamtown-10.jpg", alt: "Furnished triple-sharing room at Zolo Dreamtown", label: "Triple-sharing room", orientation: "wide" },
  { src: "/accomodations/zolo-dreamtown-13.jpg", alt: "Reception desk at Zolo Dreamtown", label: "Reception", orientation: "wide" },
  { src: "/accomodations/zolo-dreamtown-15.jpg", alt: "Furnished private lounge at Zolo Dreamtown", label: "Private lounge", orientation: "wide" },
] as const;
