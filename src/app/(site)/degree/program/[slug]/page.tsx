import { notFound } from "next/navigation";

import { GraduationPage } from "@/components/viiv/program/GraduationPage";
import { ProgramDetailPage } from "@/components/viiv/program/ProgramDetailPage";
import { getProgramYear, programPageSlugs } from "@/content/program";

export function generateStaticParams() {
  return programPageSlugs.map((slug) => ({ slug }));
}

export default async function ProgramDestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "graduation-and-demo-day") return <GraduationPage />;

  const data = getProgramYear(slug);
  if (!data) notFound();

  return <ProgramDetailPage data={data} />;
}
