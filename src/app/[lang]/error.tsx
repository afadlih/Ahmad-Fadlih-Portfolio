"use client";

import { buttonClassName } from "@/components/ui/button";

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" className="error-page" role="alert">
      <p>Something went wrong</p>
      <h1>Halaman gagal dimuat</h1>
      <span>
        Coba muat ulang bagian ini. Detail teknis tidak ditampilkan kepada
        pengunjung.
      </span>
      <button className={buttonClassName()} type="button" onClick={reset}>
        Coba lagi
      </button>
      {error.digest ? <small>Reference: {error.digest}</small> : null}
    </main>
  );
}
