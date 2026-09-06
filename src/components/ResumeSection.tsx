import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/Reveal";

type ResumeSectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

/**
 * A labelled block on the front page. The design separates sections with
 * whitespace alone — no rules, no cards — so the label and the 54px rhythm are
 * the whole structure.
 */
export function ResumeSection({ id, label, children }: ResumeSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className="mt-section">
      <Reveal>
        <h2 id={`${id}-label`} className="text-ink font-normal">
          {label}
        </h2>
      </Reveal>
      <div className="mt-row space-y-row">{children}</div>
    </section>
  );
}
