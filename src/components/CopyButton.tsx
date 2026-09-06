"use client";

import { useState } from "react";

type CopyButtonProps = {
  value: string;
  label: string;
  copiedLabel: string;
};

/**
 * Icon-only copy-to-clipboard button. Swaps to a check for ~1.6s as feedback,
 * then reverts — no toast, no layout shift.
 */
export function CopyButton({ value, label, copiedLabel }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently.
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={copied ? copiedLabel : label}
      title={copied ? copiedLabel : label}
      className="text-ink-subtle hover:text-ink focus-visible:text-ink inline-flex size-6 shrink-0 items-center justify-center rounded-md transition-colors duration-(--duration-fast) ease-(--ease-soft)"
    >
      {copied ? (
        <svg
          width="15"
          height="15"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3.5 8.5L6.5 11.5L12.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="15"
          height="15"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="5.75"
            y="5.75"
            width="8"
            height="8"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <path
            d="M4.25 10.25H3.25C2.42157 10.25 1.75 9.57843 1.75 8.75V3.25C1.75 2.42157 2.42157 1.75 3.25 1.75H8.75C9.57843 1.75 10.25 2.42157 10.25 3.25V4.25"
            stroke="currentColor"
            strokeWidth="1.25"
          />
        </svg>
      )}
    </button>
  );
}
