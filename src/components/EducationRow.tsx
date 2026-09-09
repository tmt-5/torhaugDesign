import Image from "next/image";

import type { EducationEntry } from "@/content/dictionaries/types";

/**
 * Education rows carry no logo, so the text starts in the logo column (130px
 * in) and spans the rest of the measure — exactly as in the design.
 */
export function EducationRow({ entry }: { entry: EducationEntry }) {
  const { card } = entry;

  return (
    <article className="grid gap-y-1 sm:grid-cols-[var(--col-date)_var(--col-logo)_minmax(0,1fr)] sm:gap-x-(--col-gap) sm:gap-y-0">
      <p className="text-ink-muted sm:col-start-1 sm:row-start-1">
        {entry.period}
      </p>

      <div className="sm:col-span-2 sm:col-start-2 sm:row-start-1">
        <h3 className="text-ink font-normal">{entry.title}</h3>
        <p className="text-ink-muted text-pretty">{entry.meta}</p>

        {card ? <ThesisCard card={card} /> : null}
      </div>
    </article>
  );
}

function ThesisCard({ card }: { card: NonNullable<EducationEntry["card"]> }) {
  const inner = (
    <>
      <div className="relative h-full w-[40%] shrink-0 sm:w-[9.5625rem]">
        <Image
          src={card.thumb}
          alt={card.thumbAlt}
          fill
          sizes="138px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1 pr-4 pl-[1.3125rem]">
        <p className="text-ink line-clamp-1">{card.title}</p>
        <p className="text-ink-subtle line-clamp-1">{card.subtitle}</p>
      </div>
    </>
  );

  const shell =
    "border-line bg-surface mt-4 flex h-[5.625rem] max-w-[29.375rem] items-center overflow-hidden rounded-lg border";

  if (!card.href) {
    return <div className={shell}>{inner}</div>;
  }

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noreferrer noopener"
      className={`${shell} group transition duration-(--duration-base) ease-(--ease-soft) hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)]`}
    >
      {inner}
    </a>
  );
}
