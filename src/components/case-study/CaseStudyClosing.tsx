import { Reveal } from "@/components/motion/Reveal";

type CaseStudyClosingProps = {
  heading: string;
  items: string[];
};

/**
 * "Eksempler på andre tiltak jeg har jobbet med" — a short closing list of
 * other initiatives, deliberately plain (no labels, no images) since these
 * aren't full case studies.
 */
export function CaseStudyClosing({ heading, items }: CaseStudyClosingProps) {
  return (
    <Reveal as="section" className="mt-section">
      <h2 className="text-ink text-lg font-normal">{heading}</h2>
      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <p key={item} className="text-ink-muted text-pretty">
            {item}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
