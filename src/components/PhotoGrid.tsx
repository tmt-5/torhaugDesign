import Image from "next/image";
import type { CSSProperties } from "react";

import type { Photo } from "@/content/dictionaries/types";

/**
 * A tall/narrow photo mosaic: some cells run the full height of the grid, the
 * rest stack in pairs. `columns` gives the fr-widths left to right (must add
 * up visually the same way the source photos array reads column by column).
 * Below 640px the mosaic would shrink the narrow cells to thumbnails, so it
 * flattens to an even two-column grid instead.
 */
export function PhotoGrid({
  photos,
  label,
  columns = [179, 83, 179, 83, 83],
}: {
  photos: Photo[];
  label: string;
  columns?: number[];
}) {
  return (
    <ul
      aria-label={label}
      style={
        {
          "--mosaic-cols": columns.map((fr) => `${fr}fr`).join(" "),
        } as CSSProperties
      }
      className="grid grid-flow-row grid-cols-2 gap-3.5 sm:aspect-[660/176] sm:grid-flow-col sm:grid-cols-[var(--mosaic-cols)] sm:grid-rows-2"
    >
      {photos.map((photo) => (
        <li
          key={photo.src}
          className={`relative aspect-[4/3] overflow-hidden rounded-lg sm:aspect-auto ${
            photo.tall ? "sm:row-span-2" : ""
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 50vw, 162px"
            className="object-cover transition-transform duration-(--duration-base) ease-(--ease-soft) hover:scale-[1.04]"
          />
        </li>
      ))}
    </ul>
  );
}
