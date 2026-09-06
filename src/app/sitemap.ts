import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";
import { canonicalFor } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: canonicalFor(locale),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, canonicalFor(l)])),
    },
  }));
}
