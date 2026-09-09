import { Reveal } from "@/components/motion/Reveal";

type CaseStudyFactsProps = {
  items: { label: string; value: string }[];
};

/**
 * The short facts about a project. Same label|content measure as the prose
 * rows, but at the front page's tighter row rhythm since each is one line.
 */
export function CaseStudyFacts({ items }: CaseStudyFactsProps) {
  return (
    <Reveal as="section" className="mt-section space-y-row">
      {items.map((item) => (
        <div
          key={item.label}
          className="grid gap-y-1 sm:grid-cols-[var(--col-label)_minmax(0,1fr)] sm:gap-y-0"
        >
          <p className="text-ink-muted">{item.label}</p>
          <p className="text-ink-muted text-pretty">{item.value}</p>
        </div>
      ))}
    </Reveal>
  );
}
