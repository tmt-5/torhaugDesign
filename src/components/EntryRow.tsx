import Image from "next/image";
import Link from "next/link";

import type { Entry } from "@/content/dictionaries/types";

type EntryRowProps = {
  entry: Entry;
  /** When set, the title links through to the project's own page. */
  href?: string;
};

/**
 * One row of the CV grid: period | logo | title + body.
 *
 * Above 640px this is the three-column grid from the design (114 + 32 + rest,
 * 16px gutters, so the text column starts 178px in). Below it, the period and
 * logo collapse onto one line above the text.
 */
export function EntryRow({ entry, href }: EntryRowProps) {
  return (
    <article className="grid gap-y-1 sm:grid-cols-[var(--col-date)_var(--col-logo)_minmax(0,1fr)] sm:gap-x-(--col-gap) sm:gap-y-0">
      <div className="flex items-center gap-3 sm:contents">
        {entry.logo ? (
          <span className="relative block size-8 shrink-0 overflow-hidden rounded-[6px] sm:col-start-2 sm:row-start-1 sm:mt-1">
            <Image
              src={entry.logo.src}
              alt={entry.logo.alt}
              width={32}
              height={32}
              className="size-8 object-contain"
            />
          </span>
        ) : null}
        <p className="text-ink-muted sm:col-start-1 sm:row-start-1">
          {entry.period}
        </p>
      </div>

      <div className="sm:col-start-3 sm:row-start-1">
        {href ? (
          <h3 className="text-ink font-normal">
            <Link
              href={href}
              className="decoration-ink-subtle underline-offset-4 transition-colors duration-(--duration-fast) ease-(--ease-soft) hover:underline"
            >
              {entry.title}
            </Link>
          </h3>
        ) : (
          <h3 className="text-ink font-normal">{entry.title}</h3>
        )}
        <p className="text-ink-muted text-pretty">{entry.body}</p>
      </div>
    </article>
  );
}
