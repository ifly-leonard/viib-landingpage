/** Announcement bar content + toggle. Flip `enabled` to hide the bar sitewide. */
export const announcement = {
  enabled: true,
  message: "Applications for the 2026 intake are open — limited seats at the Chennai campus",
  cta: {
    label: "Apply Now",
    // Always check if this route is correct.
    href: "/admissions#apply",
  },
} as const;
