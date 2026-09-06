import { Reveal } from "@/components/motion/Reveal";
import type { InlineLink } from "@/content/dictionaries/types";

type CaseStudyListProps = {
  label: string;
  /** Optional lead-in line before the bullets, e.g. "A new onboarding of:" */
  intro?: string;
  items: (string | InlineLink)[];
  /** "dot" for a plain step list (Prosess), "dash" for a feature list (Løsning). */
  marker?: "dot" | "dash";
};

/**
 * A label|content row whose content is a bullet list (Prosess, Løsning,
 * Resultat). An item can carry one inline link (e.g. "Overordnet prosess"
 * linking out to a service design blueprint).
 */
export function CaseStudyList({
  label,
  intro,
  items,
  marker = "dot",
}: CaseStudyListProps) {
  return (
    <Reveal
      as="section"
      className="mt-section grid gap-y-2 sm:grid-cols-[var(--col-label)_minmax(0,1fr)] sm:gap-x-0 sm:gap-y-0"
    >
      <p className="text-ink-muted">{label}</p>

      <div>
        {intro ? (
          <p className="text-ink-muted mb-2 text-pretty">{intro}</p>
        ) : null}
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={typeof item === "string" ? item : item.linkText + index}
              className="text-ink-muted flex gap-2 text-pretty"
            >
              <span aria-hidden="true">{marker === "dash" ? "–" : "•"}</span>
              <span>
                {typeof item === "string" ? (
                  item
                ) : (
                  <>
                    {item.before}
                    <a
                      href={item.linkHref}
                      className="text-ink decoration-ink-subtle hover:text-ink-muted underline underline-offset-4 transition-colors duration-(--duration-fast) ease-(--ease-soft)"
                    >
                      {item.linkText}
                    </a>
                    {item.after}
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
