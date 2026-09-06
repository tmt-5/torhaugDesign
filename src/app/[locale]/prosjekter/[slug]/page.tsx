import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyBlocks } from "@/components/case-study/CaseStudyBlocks";
import { ProjectHeader } from "@/components/case-study/ProjectHeader";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, locales } from "@/lib/i18n";
import { findProject } from "@/lib/projects";
import { canonicalFor } from "@/lib/site";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const dictionary = await getDictionary(locale);
    for (const entry of [
      ...dictionary.projects.entries,
      ...dictionary.sideProjects.entries,
    ]) {
      params.push({ locale, slug: entry.key });
    }
  }

  return params;
}

export const dynamicParams = false;

type PageParams = { locale: string; slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = await getDictionary(locale);
  const project = findProject(dictionary, slug);
  if (!project) return {};

  return {
    title: {
      absolute: `${dictionary.meta.title} · ${project.caseStudy?.title ?? project.title}`,
    },
    description: project.caseStudy?.intro[0] ?? project.body,
    alternates: { canonical: canonicalFor(locale, `/prosjekter/${slug}`) },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const project = findProject(dictionary, slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const isSideProject = dictionary.sideProjects.entries.some(
    (entry) => entry.key === slug,
  );
  const sectionId = isSideProject ? dictionary.sideProjects.id : dictionary.projects.id;

  return (
    <main className="py-page">
      <Container as="article">
        <ProjectHeader
          locale={locale}
          backHref={`/${locale}#${sectionId}`}
          backLabel={dictionary.projectPage.back}
          languageLabel={dictionary.a11y.languageLabel}
          period={project.period}
          title={project.title}
          logo={project.logo}
          description={caseStudy ? caseStudy.intro : [project.body]}
        />

        {caseStudy ? (
          <CaseStudyBlocks blocks={caseStudy.blocks} />
        ) : (
          <p className="border-line text-ink-subtle mt-section border-t pt-8 text-pretty">
            {dictionary.projectPage.comingSoon}
          </p>
        )}
      </Container>
    </main>
  );
}
