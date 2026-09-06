import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyBlocks } from "@/components/case-study/CaseStudyBlocks";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { Reveal } from "@/components/motion/Reveal";
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
    title: project.caseStudy?.title ?? project.title,
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
        <Reveal>
          <Link
            href={`/${locale}#${sectionId}`}
            className="text-ink-muted hover:text-ink inline-flex items-center gap-1.5 transition-colors duration-(--duration-fast) ease-(--ease-soft)"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7.5 2.5L3 6L7.5 9.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {dictionary.projectPage.back}
          </Link>
        </Reveal>

        {caseStudy ? (
          <>
            <CaseStudyHero
              title={caseStudy.title}
              meta={caseStudy.meta}
              intro={caseStudy.intro}
            />

            <CaseStudyBlocks blocks={caseStudy.blocks} />
          </>
        ) : (
          <>
            <Reveal delay={0.05} className="mt-10 flex items-start gap-3">
              {project.logo ? (
                <span className="relative block size-10 shrink-0 overflow-hidden rounded-[6px]">
                  <Image
                    src={project.logo.src}
                    alt={project.logo.alt}
                    width={40}
                    height={40}
                    className="size-10 object-contain"
                  />
                </span>
              ) : null}

              <div>
                <p className="text-ink-muted">{project.period}</p>
                <h1 className="text-ink text-[22px] leading-8 font-normal">
                  {project.title}
                </h1>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-section">
              <p className="text-ink-muted max-w-[565px] text-pretty">
                {project.body}
              </p>

              <p className="border-line text-ink-subtle mt-8 border-t pt-8 text-pretty">
                {dictionary.projectPage.comingSoon}
              </p>
            </Reveal>
          </>
        )}
      </Container>
    </main>
  );
}
