"use client";

import "@/app/globals.css";
import { buttonClassName } from "@/components/ui/button";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="error-page" role="alert">
          <p>Application error</p>
          <h1>The portfolio could not be loaded</h1>
          <span>Please retry. No private diagnostic data is shown here.</span>
          <button className={buttonClassName()} type="button" onClick={reset}>
            Retry
          </button>
        </main>
      </body>
    </html>
  );
}
