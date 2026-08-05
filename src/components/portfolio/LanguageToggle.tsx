"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Language } from "@/types/content";

function localizedPath(pathname: string, language: Language) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === "id" || segments[0] === "en") {
    segments[0] = language;
  } else {
    segments.unshift(language);
  }

  return `/${segments.join("/")}`;
}

export function LanguageToggle({ language }: { language: Language }) {
  const pathname = usePathname();

  return (
    <nav
      className="language-toggle"
      aria-label={language === "id" ? "Pilih bahasa" : "Choose language"}
    >
      {(["id", "en"] as Language[]).map((item) => (
        <Link
          key={item}
          href={localizedPath(pathname, item)}
          aria-current={item === language ? "page" : undefined}
          hrefLang={item === "id" ? "id-ID" : "en-US"}
          scroll={false}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
