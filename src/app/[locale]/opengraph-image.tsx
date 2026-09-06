import { ImageResponse } from "next/og";

import { getDictionary } from "@/lib/dictionary";
import { isLocale, locales } from "@/lib/i18n";

export const alt = "Trym Torhaug — UX designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Share card for LinkedIn, Slack and search — same palette as the page. */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(isLocale(locale) ? locale : "no");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: "#f6f6f6",
        color: "#111111",
        padding: 88,
      }}
    >
      <div style={{ fontSize: 72, letterSpacing: -1 }}>
        {dictionary.header.name}
      </div>
      <div style={{ fontSize: 36, color: "#555555", marginTop: 12 }}>
        {dictionary.header.tagline}
      </div>
    </div>,
    size,
  );
}
