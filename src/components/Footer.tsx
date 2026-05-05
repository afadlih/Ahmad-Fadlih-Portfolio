import { profile } from "@/data/portfolio";

export function Footer() {
    return (
        <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 {profile.name}. All rights reserved.</p>
            <p>Built with Next.js, Docker, and GitHub Actions.</p>
        </footer>
    );
}