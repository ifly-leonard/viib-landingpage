/** Campus tour booking settings — update here, not in UI components. */
export const tourConfig = {
  /** Cal.com booking link, e.g. "yourhandle/campus-tour". */
  calLink: "leonardselvaraja/a-quick-meeting",
  calUrl: "https://cal.com/leonardselvaraja/a-quick-meeting",
  eyebrow: "Campus Life · Book a tour",
  title: "Book a tour",
  description:
    "Visit the VIIV campus in Chennai, meet the team, and see the studios where builders ship.",
  thankYou: {
    eyebrow: "You're booked",
    title: "See you on campus.",
    body: "A confirmation email is on its way. We can't wait to show you around VIIV.",
  },
} as const;
