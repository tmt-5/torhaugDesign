import Image from "next/image";
import Link from "next/link";

import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Reveal } from "@/components/motion/Reveal";
import type { Logo } from "@/content/dictionaries/types";
import type { Locale } from "@/lib/i18n";

type ProjectHeaderProps = {
  locale: Locale;
  backHref: string;
  backLabel: string;
  languageLabel: string;
  period: string;
  title: string;
  logo?: Logo;
  /** Live site for the project — rendered as a small external-link icon next to the title. */
  externalHref?: string;
  /** Accessible label for the external-link icon (`projectPage.visitSite`). */
  visitSiteLabel: string;
  /** Intro paragraphs — a case study's `intro`, or the front-page card's `body`. */
  description: string[];
};

/**
 * Every project page — case study or placeholder — opens with the same
 * header: back nav + language switch on one line, then logo, period and
 * title, then the intro paragraph(s).
 */
export function ProjectHeader({
  locale,
  backHref,
  backLabel,
  languageLabel,
  period,
  title,
  logo,
  externalHref,
  visitSiteLabel,
  description,
}: ProjectHeaderProps) {
  return (
    <header>
      <Reveal className="flex items-center justify-between">
        <Link
          href={backHref}
          aria-label={backLabel}
          className="bg-line text-ink-muted hover:bg-ink hover:text-surface inline-flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-(--duration-fast) ease-(--ease-soft)"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 rotate-180"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>

        <LocaleSwitcher current={locale} label={languageLabel} />
      </Reveal>

      <Reveal className="mt-10 flex items-center gap-4">
        {logo ? (
          <span className="border-line bg-surface relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border p-3">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={40}
              height={40}
              className="size-full object-contain"
            />
          </span>
        ) : null}

        <div>
          <p className="text-ink-muted">{period}</p>
          <h1 className="text-ink flex items-center gap-2 text-[1.375rem] leading-8 font-normal">
            {title}
            {externalHref ? (
              <a
                href={externalHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={visitSiteLabel}
                className="text-ink-subtle hover:text-ink-muted inline-flex shrink-0 transition-colors duration-(--duration-fast) ease-(--ease-soft)"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            ) : null}
          </h1>
        </div>
      </Reveal>

      <Reveal className="mt-6 max-w-[35.3125rem] space-y-5">
        {description.map((paragraph) => (
          <p key={paragraph} className="text-ink-muted text-pretty">
            {paragraph}
          </p>
        ))}
      </Reveal>
    </header>
  );
}
