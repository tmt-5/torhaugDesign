import { notFound } from "next/navigation";

import { ContactList } from "@/components/ContactList";
import { EducationRow } from "@/components/EducationRow";
import { EntryRow } from "@/components/EntryRow";
import { PhotoGrid } from "@/components/PhotoGrid";
import { ResumeSection } from "@/components/ResumeSection";
import { SiteHeader } from "@/components/SiteHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { projectHref } from "@/lib/projects";
import { canonicalFor, site } from "@/lib/site";

export default async function FrontPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const { experience, education, projects, sideProjects, contact } = dictionary;

  /** Rows share one reveal rhythm; the delay only staggers within a section. */
  const stagger = (index: number) => index * 0.05;

  return (
    <>
      <a
        href="#content"
        className="text-ink bg-surface focus-visible:ring-ink sr-only rounded-full px-4 py-2 focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-10"
      >
        {dictionary.a11y.skipToContent}
      </a>

      <main id="content" className="py-page">
        <Container>
          <SiteHeader locale={locale} dictionary={dictionary} />

          <ResumeSection id={experience.id} label={experience.label}>
            {experience.entries.map((entry, index) => (
              <Reveal key={entry.key} delay={stagger(index)}>
                <EntryRow entry={entry} />
              </Reveal>
            ))}
          </ResumeSection>

          <ResumeSection id={education.id} label={education.label}>
            {education.entries.map((entry, index) => (
              <Reveal key={entry.key} delay={stagger(index)}>
                <EducationRow entry={entry} />
              </Reveal>
            ))}
          </ResumeSection>

          <ResumeSection id={projects.id} label={projects.label}>
            {projects.entries.map((entry, index) => (
              <Reveal key={entry.key} delay={stagger(index)}>
                <EntryRow entry={entry} href={projectHref(locale, entry.key)} />
              </Reveal>
            ))}
          </ResumeSection>

          <ResumeSection id={sideProjects.id} label={sideProjects.label}>
            {sideProjects.entries.map((entry, index) => (
              <Reveal key={entry.key} delay={stagger(index)}>
                <EntryRow entry={entry} href={projectHref(locale, entry.key)} />
              </Reveal>
            ))}
          </ResumeSection>

          <ResumeSection id={contact.id} label={contact.label}>
            <Reveal>
              <ContactList
                rows={contact.rows}
                copyLabel={dictionary.a11y.copyEmail}
                copiedLabel={dictionary.a11y.emailCopied}
              />
            </Reveal>
          </ResumeSection>

          <Reveal className="mt-section">
            <p className="text-ink-muted max-w-[565px]">{dictionary.bio}</p>
          </Reveal>

          <Reveal className="mt-section">
            <PhotoGrid
              photos={dictionary.photos}
              label={dictionary.a11y.photosLabel}
            />
          </Reveal>
        </Container>
      </main>

      <script
        type="application/ld+json"
        // Structured data helps a recruiter's search land on the right person.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: site.name,
            jobTitle: dictionary.header.tagline,
            email: `mailto:${site.email}`,
            url: canonicalFor(locale),
            address: {
              "@type": "PostalAddress",
              addressLocality: site.location[locale],
            },
            sameAs: contact.rows
              .filter((row) => row.external)
              .map((row) => row.href),
          }),
        }}
      />
    </>
  );
}
