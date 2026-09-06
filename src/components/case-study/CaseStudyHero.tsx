import { Reveal } from "@/components/motion/Reveal";

type CaseStudyHeroProps = {
  title: string;
  meta: string;
  intro: string[];
};

/**
 * The case study's opening block: centered title, meta line and intro
 * paragraphs — the only centered text on the site, reserved for this one
 * moment per the design.
 */
export function CaseStudyHero({ title, meta, intro }: CaseStudyHeroProps) {
  return (
    <Reveal as="header" className="mt-section text-center">
      <h1 className="text-ink text-[28px] leading-9 font-normal tracking-[-0.01em]">
        {title}
      </h1>
      <p className="text-ink-muted mt-2">{meta}</p>

      <div className="mx-auto mt-8 max-w-[565px] space-y-5">
        {intro.map((paragraph) => (
          <p key={paragraph} className="text-ink-muted text-pretty">
            {paragraph}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
