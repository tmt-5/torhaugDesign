import { Reveal } from "@/components/motion/Reveal";

type CaseStudyFieldProps = {
  label: string;
  /** Plain paragraph — pass `link` for one that needs an inline link. */
  text?: string;
  link?: { before: string; linkText: string; linkHref: string; after: string };
};

/**
 * A single label|content row for prose (Utfordring, Min rolle, Læring
 * underveis). `link` supports exactly one inline link inside the paragraph —
 * this page only ever needs one, so a full rich-text format would be overkill.
 */
export function CaseStudyField({ label, text, link }: CaseStudyFieldProps) {
  return (
    <Reveal
      as="section"
      className="mt-section grid gap-y-2 sm:grid-cols-[var(--col-label)_minmax(0,1fr)] sm:gap-x-0 sm:gap-y-0"
    >
      <p className="text-ink-muted">{label}</p>

      <p className="text-ink-muted text-pretty">
        {link ? (
          <>
            {link.before}
            <a
              href={link.linkHref}
              className="text-ink decoration-ink-subtle hover:text-ink-muted underline underline-offset-4 transition-colors duration-(--duration-fast) ease-(--ease-soft)"
            >
              {link.linkText}
            </a>
            {link.after}
          </>
        ) : (
          text
        )}
      </p>
    </Reveal>
  );
}
