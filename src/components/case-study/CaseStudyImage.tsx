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
 *
 * `width`/`height` set the frame's aspect ratio, not the source image's own —
 * the image fills that frame with `object-cover`, so a source whose actual
 * ratio drifts a little (a hand-picked screenshot, say) gets cropped instead
 * of stretched. Adjust the ratio itself, or the crop, visually as needed.
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
          className="relative overflow-hidden rounded-xl"
          style={{
            aspectRatio: `${width} / ${height}`,
            ...(background ? { backgroundColor: background } : undefined),
          }}
        >
          <Image src={src} alt={alt} fill sizes="594px" className="object-cover" />
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
