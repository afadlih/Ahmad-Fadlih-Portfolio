"use client";

import { useEffect } from "react";
import type { Language } from "@/types/content";

export function DocumentLanguageSync({ language }: { language: Language }) {
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
}
