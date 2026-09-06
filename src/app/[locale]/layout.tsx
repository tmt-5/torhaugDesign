import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, locales } from "@/lib/i18n";
import { canonicalFor, site } from "@/lib/site";

const sans = Inter({
  variable: "--font-sans-stack",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = await getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dictionary.meta.title,
      template: `%s — ${site.name}`,
    },
    description: dictionary.meta.description,
    alternates: {
      canonical: canonicalFor(locale),
      languages: Object.fromEntries(locales.map((l) => [l, canonicalFor(l)])),
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      url: canonicalFor(locale),
      locale: dictionary.meta.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
    },
  };
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${sans.variable} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
