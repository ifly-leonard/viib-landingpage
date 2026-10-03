import { faqs } from "@/content/landing/faqs";
import { founder } from "@/content/landing/founder";
import { program } from "@/content/landing/program";
import { site } from "@/content/landing/site";
import { webinar } from "@/content/landing/webinar";

/** JSON-LD for Organization, WebSite, Course, FAQPage (+ Event once a date is set). */
export function StructuredData() {
  const org = {
    "@type": "EducationalOrganization",
    "@id": `${site.url}/#organization`,
    name: site.fullBrand,
    alternateName: site.brand,
    legalName: site.legalName,
    url: site.url,
    founder: { "@type": "Person", name: founder.name },
  };

  const graph: Record<string, unknown>[] = [
    org,
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.fullBrand, publisher: { "@id": org["@id"] } },
    {
      "@type": "Course",
      name: `VIIV ${program.name}`,
      description: program.description,
      provider: { "@id": org["@id"] },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  if (webinar.schedule) {
    graph.push({
      "@type": "Event",
      name: `${webinar.title}: ${webinar.subtitle}`,
      startDate: webinar.schedule.startISO,
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      isAccessibleForFree: true,
      organizer: { "@id": org["@id"] },
      location: { "@type": "VirtualLocation", url: `${site.url}/#webinar` },
    });
  }

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
