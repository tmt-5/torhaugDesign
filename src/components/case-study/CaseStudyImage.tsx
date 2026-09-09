import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";

type CaseStudyImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Line under the image, in the quietest ink. */
  caption?: string;
  /** Rounded panel background, matching the design's lavender onboarding card. */
  background?: string;
};

/**
 * A full-measure supporting image — the screenshot montage, the onboarding
 * flow composite, and the closing hero shot are all flattened exports (see
 * design/trumfPage.png), so this just renders one responsively.
 */
export function CaseStudyImage({
  src,
  alt,
  width,
  height,
  caption,
  background,
}: CaseStudyImageProps) {
  return (
    <Reveal className="mt-section">
      <figure>
        <div
          className="overflow-hidden rounded-xl"
          style={background ? { backgroundColor: background } : undefined}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="660px"
            className="h-auto w-full"
          />
        </div>

        {caption ? (
          <figcaption className="text-ink-subtle mt-2 text-pretty">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}
