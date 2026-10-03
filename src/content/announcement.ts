/** Announcement bar content + toggle. Flip `enabled` to hide the bar sitewide. */
export const announcement = {
  enabled: true,
  message: "2027 Admissions Open — Limited Seats at the Chennai Campus | Scholarships Up to 50% Available",
  cta: {
    label: "Apply Now",
    // Always check if this route is correct.
    href: "/degree/admissions/how-to-apply",
  },
} as const;
