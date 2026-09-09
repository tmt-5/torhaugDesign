import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import type { Entry } from "@/content/dictionaries/types";

type EntryRowProps = {
  entry: Entry;
  /** When set, the whole row becomes a card linking to the project's own page. */
  href?: string;
};

/**
 * One row of the CV grid: period | logo + title + body (+ arrow when linked).
 *
 * Above 640px this is the two-column grid from the design (114px date column,
 * then the rest indented 16px past it). Below it, the period sits on its own
 * line above the logo/text block.
 *
 * When `href` is set (project rows), the logo/text block becomes a hoverable
 * card: background and border tint to the project's brand colour
 * (`entry.color`), and a trailing arrow picks up the same colour.
 */
export function EntryRow({ entry, href }: EntryRowProps) {
  const content = (
    <div className="flex items-start gap-(--col-gap)">
      {entry.logo ? (
        <span className="relative mt-1 block size-8 shrink-0 overflow-hidden rounded-md">
          <Image
            src={entry.logo.src}
            alt={entry.logo.alt}
            width={32}
            height={32}
            className="size-8 object-contain"
          />
        </span>
      ) : null}

      <div className="min-w-0 flex-1">
        <h3 className="text-ink font-normal">{entry.title}</h3>
        <p className="text-ink-muted text-pretty">{entry.body}</p>
      </div>

      {href ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ink-subtle mt-1 size-4 shrink-0 self-center transition-colors duration-(--duration-fast) ease-(--ease-soft) group-hover:text-(--accent)"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      ) : null}
    </div>
  );

  return (
    <article className="grid gap-y-1 sm:grid-cols-[var(--col-date)_minmax(0,1fr)] sm:gap-x-(--col-gap) sm:gap-y-0">
      <p className="text-ink-muted sm:col-start-1">{entry.period}</p>

      {href ? (
        <Link
          href={href}
          style={{ "--accent": entry.color ?? "var(--color-ink-subtle)" } as CSSProperties}
          className="group -mx-4 -my-3 block rounded-lg border border-transparent px-4 py-3 transition-colors duration-(--duration-fast) ease-(--ease-soft) hover:border-[#EFEFEF] hover:bg-[color-mix(in_srgb,var(--accent)_3%,transparent)] sm:col-start-2"
        >
          {content}
        </Link>
      ) : (
        <div className="sm:col-start-2">{content}</div>
      )}
    </article>
  );
}
