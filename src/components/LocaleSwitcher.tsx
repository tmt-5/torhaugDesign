"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeLabels, localeNames, locales, withLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type LocaleSwitcherProps = {
  current: Locale;
  label: string;
  className?: string;
};

/**
 * Deliberately quiet: the design has no navigation, so the language toggle sits
 * in the top corner and only gains contrast on hover or focus.
 */
export function LocaleSwitcher({
  current,
  label,
  className = "",
}: LocaleSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={label}
      className={`flex shrink-0 items-center gap-1 pt-1 ${className}`.trim()}
    >
      {locales.map((locale) => {
        const isActive = locale === current;

        return (
          <Link
            key={locale}
            href={withLocale(pathname, locale)}
            hrefLang={locale}
            aria-current={isActive ? "true" : undefined}
            title={localeNames[locale]}
            className={[
              "rounded-full px-2 py-0.5 text-[13px] leading-6 tracking-[0.04em]",
              "transition-colors duration-(--duration-fast) ease-(--ease-soft)",
              isActive ? "text-ink" : "text-ink-subtle hover:text-ink-muted",
            ].join(" ")}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </nav>
  );
}
