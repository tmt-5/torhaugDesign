import { Reveal } from "@/components/motion/Reveal";

type CaseStudyStepProps = {
  phase: string;
  heading: string;
  paragraphs: string[];
  /** Findings from the step, listed under its prose. */
  items?: string[];
};

/**
 * One step of a process — the phase in the label column, heading and prose in
 * the content column. Deliberately the same shape as a front-page row, so a
 * long process still reads as the same document.
 */
export function CaseStudyStep({
  phase,
  heading,
  paragraphs,
  items,
}: CaseStudyStepProps) {
  return (
    <Reveal
      as="section"
      className="mt-section grid gap-y-1 sm:grid-cols-[var(--col-label)_minmax(0,1fr)] sm:gap-y-0"
    >
      <p className="text-ink-muted">{phase}</p>

      <div>
        <h3 className="text-ink font-normal text-pretty">{heading}</h3>

        <div className="space-y-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-ink-muted text-pretty">
              {paragraph}
            </p>
          ))}
        </div>

        {items ? (
          <ul className="mt-2 space-y-2">
            {items.map((item) => (
              <li key={item} className="text-ink-muted flex gap-2 text-pretty">
                <span aria-hidden="true">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Reveal>
  );
}
