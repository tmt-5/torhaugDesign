import type { Dictionary } from "@/content/dictionaries/types";

/**
 * The route segment for project detail pages. Shared across locales, same as
 * the section's own anchor id (`projects.id`) — one URL shape, `/no/prosjekter/x`
 * and `/en/prosjekter/x`, rather than a translated slug per locale.
 */
export const PROJECTS_SEGMENT = "prosjekter";

export function projectHref(locale: string, slug: string): string {
  return `/${locale}/${PROJECTS_SEGMENT}/${slug}`;
}

export function findProject(dictionary: Dictionary, slug: string) {
  return [...dictionary.projects.entries, ...dictionary.sideProjects.entries].find(
    (entry) => entry.key === slug,
  );
}
