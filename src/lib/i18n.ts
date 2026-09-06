export const locales = ["no", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "no";

export const localeNames: Record<Locale, string> = {
  no: "Norsk",
  en: "English",
};

/** Short label used in the compact language toggle. */
export const localeLabels: Record<Locale, string> = {
  no: "NO",
  en: "EN",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Swaps the locale segment of a pathname, e.g. /no/about -> /en/about */
export function withLocale(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }
  return `/${segments.join("/")}`;
}
