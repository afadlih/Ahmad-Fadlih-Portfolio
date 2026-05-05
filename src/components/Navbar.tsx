import { navItems } from "@/data/portfolio";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <a href="#home" className="text-2xl font-black tracking-tight">
                    AF<span className="text-blue-600">.</span>
                </a>

                <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} className="hover:text-blue-600">
                            {item.label}
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:border-blue-500 hover:text-blue-600"
                >
                    Let&apos;s Talk
                </a>
            </div>
        </nav>
    );
}
