(function () {
  try {
    var storageKey = "afadlih-theme";
    var storedTheme = window.localStorage.getItem(storageKey);
    var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    var theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : systemTheme;
    var locale = window.location.pathname.split("/").filter(Boolean)[0];

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    if (locale === "id" || locale === "en") {
      document.documentElement.lang = locale;
    }
  } catch {
    document.documentElement.dataset.theme = "light";
    document.documentElement.style.colorScheme = "light";
  }
})();
