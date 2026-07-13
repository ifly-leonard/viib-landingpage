export const credentialsContent = {
  eyebrow: "Certificates & credentials",
  headline: "A recognized degree backed by institutional credibility.",
  subcopy:
    "Earn an online BBA from Kalasalingam University while building ventures full-time at VIIV.",
  partnership: {
    title: "VIIV × Kalasalingam University",
    description:
      "University legitimacy meets a full-time venture-building college in Chennai.",
  },
  advantagesTitle: "Why the degree still matters",
  advantagesSubcopy:
    "The BBA is not separate from the builder journey — it is the foundation families, employers, and future pathways expect.",
} as const;

export const degreeAdvantages = [
  {
    title: "Employer-ready credential",
    description:
      "A recognized BBA signals academic completion to recruiters, banks, and corporate HR teams.",
  },
  {
    title: "Higher studies optionality",
    description:
      "Keep MBA, professional certifications, and global programs open with a formal undergraduate degree.",
  },
  {
    title: "Family confidence",
    description:
      "Parents get the assurance of a UGC-recognized university — students still build ventures every week.",
  },
  {
    title: "Proof alongside portfolio",
    description:
      "Graduate with both a degree certificate and venture evidence — not one or the other.",
  },
] as const;

export const credentialGalleryItems = [
  {
    id: "degree-certificate",
    title: "BBA degree certificate",
    category: "Degree",
    sampleTitle: "Bachelor of Business Administration",
    sampleSubtitle: "Online Programme · Kalasalingam University",
    badge: "Sample certificate",
    description:
      "Official degree certificate awarded on successful completion of the online BBA pathway.",
  },
  {
    id: "naac-accreditation",
    title: "NAAC accreditation",
    category: "Accreditation",
    sampleTitle: "NAAC Accredited Institution",
    sampleSubtitle: "Grade A · Kalasalingam University",
    badge: "Accreditation record",
    description:
      "Kalasalingam University is NAAC A accredited — a benchmark for academic quality in India.",
  },
  {
    id: "university-recognition",
    title: "UGC recognition",
    category: "Recognition",
    sampleTitle: "UGC Recognized University",
    sampleSubtitle: "Under Section 3 of the UGC Act, 1956",
    badge: "Recognition record",
    description:
      "Credentials from a UGC-recognized institution that families and employers can verify.",
  },
] as const;

export type CredentialGalleryItem = (typeof credentialGalleryItems)[number];
