import { Reveal } from "@/components/motion/Reveal";

type CaseStudyProseProps = {
  heading?: string;
  paragraphs?: string[];
};

/**
 * A section heading and the prose under it. Both are optional so a section can
 * pick up again after an image or a quote without repeating its heading.
 */
export function CaseStudyProse({ heading, paragraphs }: CaseStudyProseProps) {
  return (
    <Reveal as="section" className="mt-section">
      {heading ? (
        <h2 className="text-ink text-lg font-normal">{heading}</h2>
      ) : null}

      {paragraphs?.length ? (
        <div className={heading ? "mt-6 space-y-5" : "space-y-5"}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-ink-muted text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
    </Reveal>
  );
}
