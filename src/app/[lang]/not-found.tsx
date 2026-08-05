import Link from "next/link";
import { localePath } from "@/i18n/config";
import { buttonClassName } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <p>404</p>
      <h1>Halaman tidak ditemukan</h1>
      <span>Page not found. Kembali ke halaman utama untuk melanjutkan.</span>
      <Link className={buttonClassName()} href={localePath("id")}>
        Kembali ke portfolio
      </Link>
    </main>
  );
}
