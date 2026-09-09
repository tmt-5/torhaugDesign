import { Reveal } from "@/components/motion/Reveal";

type CaseStudyStatsProps = {
  items: { value: string; label: string }[];
};

/**
 * The key numbers. The figure takes the label column and the darkest ink —
 * on this page emphasis is colour, not size.
 */
export function CaseStudyStats({ items }: CaseStudyStatsProps) {
  return (
    <Reveal as="section" className="mt-section space-y-row">
      {items.map((item) => (
        <div
          key={item.value}
          className="grid gap-y-1 sm:grid-cols-[var(--col-label)_minmax(0,1fr)] sm:gap-y-0"
        >
          <p className="text-ink">{item.value}</p>
          <p className="text-ink-muted text-pretty">{item.label}</p>
        </div>
      ))}
    </Reveal>
  );
}
