import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

/**
 * The single content column: 660px of content plus gutters, centred. Every row
 * on the page aligns to it.
 */
export function Container({
  as: Tag = "div",
  children,
  className = "",
}: ContainerProps) {
  return (
    <Tag
      className={`px-gutter mx-auto w-full max-w-[calc(var(--measure)+2*var(--gutter))] ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
