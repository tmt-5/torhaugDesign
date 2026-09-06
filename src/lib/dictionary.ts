import "server-only";

import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/dictionaries/types";

const loaders: Record<Locale, () => Promise<{ dictionary: Dictionary }>> = {
  no: () => import("@/content/dictionaries/no"),
  en: () => import("@/content/dictionaries/en"),
};

/** Loads the content bundle for a locale. Server components only. */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const { dictionary } = await loaders[locale]();
  return dictionary;
}
