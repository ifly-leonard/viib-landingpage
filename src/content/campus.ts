export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  size: "sm" | "md" | "lg" | "xl" | "wide" | "tall";
};

export const campusHero = {
  eyebrow: "Life at VIIV",
  headline: "Campus is where the builder energy lives.",
  subcopy:
    "Pitch reviews, mentor sessions, venture sprints, field visits, creator labs, and the everyday rhythm of a full-time venture college in Chennai.",
} as const;

export const campusCategories = [
  "All",
  "Venture Studio",
  "Mentor Reviews",
  "Field Visits",
  "Creator Lab",
  "Pitch Days",
  "Campus Culture",
] as const;

export const campusGallery: GalleryItem[] = [
  { id: "1", title: "Morning standup at the builder floor", category: "Campus Culture", size: "lg" },
  { id: "2", title: "First venture sprint kickoff", category: "Venture Studio", size: "wide" },
  { id: "3", title: "Mentor review with a growth operator", category: "Mentor Reviews", size: "md" },
  { id: "4", title: "Pitch deck wall before demo day", category: "Pitch Days", size: "tall" },
  { id: "5", title: "Customer interview practice", category: "Venture Studio", size: "sm" },
  { id: "6", title: "Creator lab content shoot", category: "Creator Lab", size: "md" },
  { id: "7", title: "Field visit to a Chennai brand studio", category: "Field Visits", size: "xl" },
  { id: "8", title: "Sales roleplay with peer feedback", category: "Venture Studio", size: "md" },
  { id: "9", title: "Parent orientation evening", category: "Campus Culture", size: "wide" },
  { id: "10", title: "Investor-style review panel", category: "Mentor Reviews", size: "lg" },
  { id: "11", title: "Campaign launch war room", category: "Creator Lab", size: "tall" },
  { id: "12", title: "Whiteboard strategy session", category: "Venture Studio", size: "sm" },
  { id: "13", title: "Founder fireside on campus", category: "Mentor Reviews", size: "wide" },
  { id: "14", title: "MVP testing with real users", category: "Venture Studio", size: "md" },
  { id: "15", title: "Brand storytelling workshop", category: "Creator Lab", size: "lg" },
  { id: "16", title: "Factory visit for supply chain learning", category: "Field Visits", size: "wide" },
  { id: "17", title: "Late-night portfolio polish", category: "Campus Culture", size: "sm" },
  { id: "18", title: "Demo day stage setup", category: "Pitch Days", size: "xl" },
  { id: "19", title: "Team retrospective after a launch", category: "Venture Studio", size: "md" },
  { id: "20", title: "Campus townhall with cohort leads", category: "Campus Culture", size: "tall" },
  { id: "21", title: "Revenue experiment review", category: "Venture Studio", size: "wide" },
  { id: "22", title: "Personal brand photo day", category: "Creator Lab", size: "md" },
  { id: "23", title: "Alumni operator office hours", category: "Mentor Reviews", size: "lg" },
  { id: "24", title: "Startup ecosystem field trip", category: "Field Visits", size: "md" },
];
