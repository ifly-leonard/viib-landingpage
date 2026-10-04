/**
 * Photography registry.
 *
 * Add real, licensed photos to /public/images and set `src` below.
 * When `src` is null the site renders an art-directed placeholder that
 * describes the required shot, so layout is final before photography exists.
 */

export type MediaItem = {
  src: string | null;
  alt: string;
  /** Art-direction brief for the photographer / stock search. */
  brief: string;
};

export const media = {
  hero: {
    src: "/images/hero.jpg",
    alt: "A young professional standing confidently with his arms crossed",
    brief: "Young Indian graduate (22–24), confident, natural light, modern workspace",
  },
  learnByDoing: [
    {
      src: "/images/varman_talking_sales_top.jpeg",
      alt: "Arunmozhivarman Ramachandran leading a sales session",
      brief: "Sales session led by the founder",
    },
    {
      src: "/images/landing_sales_left.jpeg",
      alt: "Participants practising a sales roleplay",
      brief: "Sales roleplay between two young Indian professionals",
    },
    {
      src: "/images/landing_sales_right.jpeg",
      alt: "A learner practising a pitch",
      brief: "Mock call with headset, CRM on laptop",
    },
  ],
} satisfies Record<string, MediaItem | MediaItem[]>;

