export const credentialsContent = {
  eyebrow: "Certificates & credentials",
  headline: "A UGC-recognized degree, provided by Kalasalingam University.",
  subcopy:
    "The online BBA is awarded by Kalasalingam Academy of Research and Education — a deemed-to-be university under Section 3 of the UGC Act, 1956, accredited by NAAC with an A++ grade. Earn it while building ventures full-time at VIIV.",
  partnership: {
    title: "VIIV — a recognized degree pathway",
    description:
      "University legitimacy meets a full-time venture-building college in Chennai.",
  },
  advantagesTitle: "Why the degree still matters",
  advantagesSubcopy:
    "The BBA is not separate from the builder journey — it is the foundation families, employers, and future pathways expect.",
} as const;

export const degreeAdvantages = [
  {
    title: "UGC-recognized university",
    description:
      "Kalasalingam Academy of Research and Education is a deemed-to-be university under Section 3 of the UGC Act, 1956.",
  },
  {
    title: "NAAC A++ accredited",
    description:
      "The institution holds an A++ accreditation from NAAC — a top benchmark for academic quality in India.",
  },
  {
    title: "Higher studies optionality",
    description:
      "Keep MBA, professional certifications, and global programs open with a formal undergraduate degree.",
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
      "Official degree certificate awarded on successful completion of the online BBA pathway from Kalasalingam University.",
  },
  {
    id: "naac-accreditation",
    title: "NAAC accreditation",
    category: "Accreditation",
    sampleTitle: "NAAC A++ Accredited Institution",
    sampleSubtitle: "Kalasalingam Academy of Research and Education",
    badge: "Accreditation record",
    description:
      "The degree is awarded through Kalasalingam University — NAAC A++ accredited, a benchmark for academic quality in India.",
  },
  {
    id: "university-recognition",
    title: "UGC recognition",
    category: "Recognition",
    sampleTitle: "UGC Recognized University",
    sampleSubtitle: "Under Section 3 of the UGC Act, 1956",
    badge: "Recognition record",
    description:
      "Credentials from Kalasalingam University — a UGC-recognized institution that families and employers can verify.",
  },
] as const;

export type CredentialGalleryItem = (typeof credentialGalleryItems)[number];
