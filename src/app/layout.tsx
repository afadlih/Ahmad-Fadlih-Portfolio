import type { ReactNode } from "react";
import Script from "next/script";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
