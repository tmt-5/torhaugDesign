import { Reveal } from "@/components/motion/Reveal";

type CaseStudySectionIntroProps = {
  id: string;
  eyebrow?: string;
  title: string;
};

/**
 * "Eksempelprosjekt / Onboardingsflyt – Trumf Pay" — opens the deep-dive into
 * one example project. Carries its own anchor id so a mention elsewhere on
 * the page (the "Trumf Pay" link in Utfordring) can jump straight here.
 */
export function CaseStudySectionIntro({
  id,
  eyebrow,
  title,
}: CaseStudySectionIntroProps) {
  return (
    <Reveal
      as="header"
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-section scroll-mt-8"
    >
      {eyebrow ? <p className="text-ink-subtle italic">{eyebrow}</p> : null}
      <h2
        id={`${id}-heading`}
        className={`text-ink text-2xl leading-8 font-normal tracking-[-0.01em] text-pretty ${eyebrow ? "mt-2" : ""}`.trim()}
      >
        {title}
      </h2>
    </Reveal>
  );
}
