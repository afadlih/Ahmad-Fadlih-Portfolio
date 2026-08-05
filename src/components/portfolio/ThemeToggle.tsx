"use client";

import { useMemo, useState } from "react";
import type { Language } from "@/types/content";
import { buttonClassName } from "@/components/ui/button";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "afadlih-theme";

function resolveInitialTheme(): ThemeMode {
  if (typeof document !== "undefined") {
    const documentTheme = document.documentElement.dataset.theme;
    if (documentTheme === "light" || documentTheme === "dark") {
      return documentTheme;
    }
  }

  if (typeof window !== "undefined") {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }

  return "light";
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeToggle({ language }: { language: Language }) {
  const [theme, setTheme] = useState<ThemeMode>(resolveInitialTheme);
  const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";

  const labels = useMemo(
    () =>
      language === "id"
        ? {
            current: theme === "dark" ? "Mode gelap aktif" : "Mode terang aktif",
            action: nextTheme === "dark" ? "Pakai mode gelap" : "Pakai mode terang",
            short: nextTheme === "dark" ? "Gelap" : "Terang",
          }
        : {
            current: theme === "dark" ? "Dark mode is active" : "Light mode is active",
            action: nextTheme === "dark" ? "Use dark mode" : "Use light mode",
            short: nextTheme === "dark" ? "Dark" : "Light",
          },
    [language, nextTheme, theme],
  );

  function handleClick() {
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      className={buttonClassName({
        variant: "outline",
        size: "sm",
        className: "theme-toggle",
      })}
      aria-label={labels.action}
      aria-pressed={theme === "dark"}
      title={`${labels.current}. ${labels.action}.`}
      onClick={handleClick}
      suppressHydrationWarning
    >
      <span className="theme-toggle__icon" aria-hidden="true" suppressHydrationWarning>
        {theme === "dark" ? "☾" : "☀"}
      </span>
      <span className="theme-toggle__label" suppressHydrationWarning>
        {labels.short}
      </span>
    </button>
  );
}
