import type { Metadata } from "next";
import Link from "next/link";
import "@/app/globals.css";
import { buttonClassName } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found | Ahmad Fadlih",
  description: "The requested portfolio page does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="not-found-page">
          <p>404</p>
          <h1>Page not found</h1>
          <span>The requested portfolio page does not exist.</span>
          <Link className={buttonClassName()} href="/id">
            Open portfolio
          </Link>
        </main>
      </body>
    </html>
  );
}
