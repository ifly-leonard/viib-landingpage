import type { GalleryPhoto } from "@/components/viiv/campus-life/CampusMasonryGallery";

/**
 * Accommodations page content.
 *
 * NOTE: Photos are placeholder stand-ins until real accommodation photos are
 * available — swap the src values with the final images when ready.
 */
export const accommodationsIntro = {
  eyebrow: "Campus Life · Accommodations",
  title: "A home away from home.",
  description:
    "Safe, comfortable, and thoughtfully designed accommodation options for students who want to live close to campus — so the builder rhythm continues after class hours.",
} as const;

export const accommodationsCopy = [
  {
    kicker: "Living, close to learning",
    heading: "Rooms built around your day",
    body: "We offer clean, secure, fully-furnished rooms in partnered hostels and residences near the VIIV campus. Each room is designed for both rest and focused work, with study desks, high-speed internet, and a calm environment that respects the intensity of the program. Students choose from shared and private options depending on their preference and budget.",
  },
  {
    kicker: "Safety & care",
    heading: "Safe, supervised, supported",
    body: "All partner residences have 24x7 security, CCTV coverage, and a dedicated warden. Housekeeping, laundry, and mess facilities are managed by the residence team, and our student-support staff stays in touch with every resident — so families can be confident their child is in a caring, supervised environment.",
  },
  {
    kicker: "Community after hours",
    heading: "Where builders unwind",
    body: "Common areas, game rooms, and late-evening hangout spaces mean the community doesn't stop at the campus gate. Many of the strongest venture teams at VIIV started as conversations in a hostel common room — your accommodation becomes part of your learning environment.",
  },
] as const;

/** Placeholder gallery — replace src with real accommodation photos. */
export const accommodationPhotos: readonly GalleryPhoto[] = [
  { src: "/photos/early-campus/lecture_ai_day.png", alt: "A shared study and living space", label: "Common room", orientation: "wide" },
  { src: "/photos/early-campus/lecture_lab.png", alt: "A comfortable private room", label: "Private rooms", orientation: "tall" },
  { src: "/photos/early-campus/kumarraja_sir_interacting.png", alt: "Students relaxing together after class", label: "Down time", orientation: "square" },
  { src: "/photos/early-campus/lecture_ai_day.png", alt: "A furnished shared room", label: "Shared rooms", orientation: "wide" },
  { src: "/photos/early-campus/hackathon.png", alt: "A study corner with desk and lamp", label: "Study corners", orientation: "tall" },
  { src: "/photos/early-campus/hackathon.png", alt: "The residence community in the evening", label: "Evenings at the residence", orientation: "tall" },
  { src: "/photos/early-campus/cafeteria_hackathon.png", alt: "A dining and mess area", label: "Mess & dining", orientation: "wide" },
  { src: "/photos/early-campus/cafeteria_hackathon.png", alt: "A recreation area in the residence", label: "Recreation", orientation: "wide" },
] as const;
