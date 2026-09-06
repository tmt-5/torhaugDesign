import { CopyButton } from "@/components/CopyButton";
import type { ContactRow } from "@/content/dictionaries/types";

type ContactListProps = {
  rows: ContactRow[];
  copyLabel: string;
  copiedLabel: string;
};

/**
 * Label / value pairs aligned to the same indent as the rest of the page.
 * Most values are live links (phone, LinkedIn); a `copyOnly` row (email)
 * renders as plain text plus a copy-to-clipboard button instead — no mailto
 * link, since that just opens a mail client most people don't use.
 */
export function ContactList({
  rows,
  copyLabel,
  copiedLabel,
}: ContactListProps) {
  return (
    <dl className="space-y-2">
      {rows.map((row) => (
        <div
          key={row.key}
          className="grid gap-y-0.5 sm:grid-cols-[var(--col-date)_minmax(0,1fr)] sm:gap-x-[calc(var(--col-gap)*2+var(--col-logo))]"
        >
          <dt className="text-ink-muted">{row.label}</dt>
          <dd className="flex items-center gap-1.5">
            {row.copyOnly ? (
              <>
                <span className="text-ink">{row.value}</span>
                <CopyButton
                  value={row.value}
                  label={copyLabel}
                  copiedLabel={copiedLabel}
                />
              </>
            ) : (
              <a
                href={row.href}
                {...(row.external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="text-ink decoration-ink-subtle underline-offset-4 transition-colors duration-(--duration-fast) ease-(--ease-soft) hover:underline"
              >
                {row.value}
              </a>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
