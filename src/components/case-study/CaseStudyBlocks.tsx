import { CaseStudyClosing } from "@/components/case-study/CaseStudyClosing";
import { CaseStudyFacts } from "@/components/case-study/CaseStudyFacts";
import { CaseStudyField } from "@/components/case-study/CaseStudyField";
import { CaseStudyImage } from "@/components/case-study/CaseStudyImage";
import { CaseStudyList } from "@/components/case-study/CaseStudyList";
import { CaseStudyPoints } from "@/components/case-study/CaseStudyPoints";
import { CaseStudyProse } from "@/components/case-study/CaseStudyProse";
import { CaseStudyQuotes } from "@/components/case-study/CaseStudyQuotes";
import { CaseStudyRole } from "@/components/case-study/CaseStudyRole";
import { CaseStudySectionIntro } from "@/components/case-study/CaseStudySectionIntro";
import { CaseStudyStats } from "@/components/case-study/CaseStudyStats";
import { CaseStudyStep } from "@/components/case-study/CaseStudyStep";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Reveal } from "@/components/motion/Reveal";
import type { CaseStudyBlock } from "@/content/dictionaries/types";

/**
 * Renders a case study's body from its ordered `blocks` array. Each project's
 * design can put these in whatever order it actually has — see
 * design/trumfPage.png vs design/askoPage.png — so the switch below is the
 * only place that needs to know every block shape.
 */
export function CaseStudyBlocks({ blocks }: { blocks: CaseStudyBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "image":
            return (
              <CaseStudyImage
                key={index}
                src={block.src}
                alt={block.alt}
                width={block.width}
                height={block.height}
                caption={block.caption}
              />
            );
          case "sectionIntro":
            return (
              <CaseStudySectionIntro
                key={block.id}
                id={block.id}
                eyebrow={block.eyebrow}
                title={block.title}
              />
            );
          case "prose":
            return (
              <CaseStudyProse
                key={index}
                heading={block.heading}
                paragraphs={block.paragraphs}
              />
            );
          case "quotes":
            return <CaseStudyQuotes key={index} items={block.items} />;
          case "facts":
            return <CaseStudyFacts key={index} items={block.items} />;
          case "step":
            return (
              <CaseStudyStep
                key={index}
                phase={block.phase}
                heading={block.heading}
                paragraphs={block.paragraphs}
                items={block.items}
              />
            );
          case "points":
            return <CaseStudyPoints key={index} items={block.items} />;
          case "stats":
            return <CaseStudyStats key={index} items={block.items} />;
          case "field":
            return (
              <CaseStudyField
                key={index}
                label={block.label}
                text={block.text}
                link={block.link}
              />
            );
          case "role":
            return (
              <CaseStudyRole
                key={index}
                label={block.label}
                intro={block.intro}
                teams={block.teams}
              />
            );
          case "list":
            return (
              <CaseStudyList
                key={index}
                label={block.label}
                intro={block.intro}
                items={block.items}
                marker={block.marker}
              />
            );
          case "photos":
            return (
              <Reveal key={index} className="mt-section">
                <PhotoGrid
                  photos={block.photos}
                  label={block.label}
                  columns={block.columns}
                />
              </Reveal>
            );
          case "closing":
            return (
              <CaseStudyClosing
                key={index}
                heading={block.heading}
                items={block.items}
              />
            );
        }
      })}
    </>
  );
}
