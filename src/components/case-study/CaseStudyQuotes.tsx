import { Reveal } from "@/components/motion/Reveal";

/**
 * Quotes shown as one group — the internal verdict on the old apps, what users
 * said mid-test, what customers asked for afterwards. Emphasis is the darkest
 * ink plus the same hairline the rest of the page uses.
 */
export function CaseStudyQuotes({ items }: { items: string[] }) {
  return (
    <Reveal
      as="section"
      className="border-line mt-section space-y-2 border-l pl-4"
    >
      {items.map((quote) => (
        <blockquote key={quote} className="text-ink text-pretty">
          {quote}
        </blockquote>
      ))}
    </Reveal>
  );
}
