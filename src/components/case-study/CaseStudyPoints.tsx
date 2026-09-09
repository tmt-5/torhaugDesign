import { Reveal } from "@/components/motion/Reveal";

type CaseStudyPointsProps = {
  items: { title: string; body: string }[];
};

/**
 * Named changes or takeaways — a title and one explanation each. Indented to
 * the content column so they line up under the step they belong to.
 */
export function CaseStudyPoints({ items }: CaseStudyPointsProps) {
  return (
    <Reveal as="section" className="mt-section space-y-5 sm:pl-(--col-label)">
      {items.map((item) => (
        <p key={item.title} className="text-ink-muted text-pretty">
          <span className="text-ink">{item.title} — </span>
          {item.body}
        </p>
      ))}
    </Reveal>
  );
}
