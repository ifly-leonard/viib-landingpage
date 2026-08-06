/** Content for the "Pay Now" page — payment details for fees & bookings. */
export const payNowContent = {
  eyebrow: "Payments",
  title: "Pay Now",
  description:
    "Complete your payment for fees, seat booking, or the bootcamp using any of the options below. Once your payment is processed, our team will confirm it within 24 hours.",
  supportLine: "Need help? Contact our accounts team — we'll guide you through payment.",

  note: "All payments are subject to verification. Please keep your transaction reference handy — you'll need it for the payment confirmation form.",

  methods: [
    {
      title: "UPI",
      icon: "smartphone",
      description:
        "Transfer directly to our UPI ID from any UPI app — GPay, PhonePe, Paytm, or your bank's app.",
      fields: [
        { label: "UPI ID", value: "viiv@examplebank" },
        { label: "Account name", value: "VIIV Education Pvt Ltd" },
      ],
      steps: [
        "Open your UPI app and choose 'Pay'.",
        "Enter the UPI ID above (or scan the QR code).",
        "Enter the exact amount and add your name as the note.",
        "Save the UPI reference number for the confirmation form.",
      ],
    },
    {
      title: "Bank Transfer (IFSC / NEFT / RTGS)",
      icon: "bank",
      description:
        "Transfer directly to our bank account using NEFT, RTGS, or IMPS from any bank.",
      fields: [
        { label: "Account name", value: "VIIV Education Pvt Ltd" },
        { label: "Account number", value: "123456789012" },
        { label: "IFSC code", value: "EXAMPLE0001234" },
        { label: "Bank", value: "Example Bank, Chennai" },
        { label: "Account type", value: "Current Account" },
      ],
      steps: [
        "Add the account details above as a new payee in your bank app.",
        "Transfer the exact amount using NEFT, RTGS, or IMPS.",
        "Add your name and purpose (e.g. 'Fee' or 'Bootcamp') in the remarks.",
        "Keep the transaction reference — you'll need it for confirmation.",
      ],
    },
    {
      title: "Demand Draft (DD)",
      icon: "file",
      description:
        "Drawn in favour of the account name below, payable at Chennai.",
      fields: [
        { label: "Payable to", value: "VIIV Education Pvt Ltd" },
        { label: "Payable at", value: "Chennai" },
      ],
      steps: [
        "Get a Demand Draft from any bank in the account name above.",
        "Write your name and purpose on the back of the DD.",
        "Send the DD by courier to the campus address.",
        "Share the DD number and courier tracking ID with our team.",
      ],
    },
    {
      title: "Cheque",
      icon: "check",
      description:
        "Post-dated or current cheques are accepted for fee payments.",
      fields: [
        { label: "Payable to", value: "VIIV Education Pvt Ltd" },
        { label: "Payable at", value: "Chennai" },
      ],
      steps: [
        "Write a cheque in the account name above.",
        "Write your name and purpose on the back of the cheque.",
        "Deliver or courier the cheque to the campus address.",
        "Keep the cheque number — our team will confirm when it's cleared.",
      ],
    },
  ] as const,
} as const;
