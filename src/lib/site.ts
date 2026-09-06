import type { Locale } from "@/lib/i18n";

/**
 * Single source of truth for identity, canonical URL and outbound links.
 * Update the placeholders below once the domain is live.
 */
export const site = {
  name: "Trym Torhaug",
  /** Canonical production origin — no trailing slash. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://torhaug.design",
  email: "torhaugtrym@gmail.com",
  location: { no: "Oslo, Norge", en: "Oslo, Norway" },
} as const;

export type SocialLink = {
  /** Stable key, also used for analytics and testing. */
  key: string;
  label: string;
  href: string;
};

/** Outbound links shown in the footer / contact block. */
export const socialLinks: SocialLink[] = [
  { key: "email", label: "E-post", href: `mailto:${site.email}` },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/" },
  { key: "github", label: "GitHub", href: "https://github.com/" },
];

export function siteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

export function canonicalFor(locale: Locale, path = ""): string {
  return siteUrl(`/${locale}${path}`);
}
