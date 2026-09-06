import Image from "next/image";

import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary } from "@/content/dictionaries/types";
import type { Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const { header, a11y } = dictionary;

  return (
    <Reveal as="header" className="flex flex-wrap items-start gap-x-4 gap-y-3">
      <LocaleSwitcher
        current={locale}
        label={a11y.languageLabel}
        className="order-first w-full justify-end sm:order-last sm:w-auto"
      />

      <Image
        src="/images/avatar.webp"
        alt={a11y.avatarAlt}
        width={92}
        height={92}
        priority
        className="size-[92px] shrink-0 rounded-full object-cover"
      />

      <div className="flex min-h-[92px] min-w-0 flex-1 flex-col justify-center">
        <p className="text-ink text-[20px] leading-7">{header.name}</p>
        <p className="text-ink-muted">{header.tagline}</p>
      </div>
    </Reveal>
  );
}
