import { socialLinks } from "@/data/portfolio";

export function ContactCTASection() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
                <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                            Let&apos;s build something useful
                        </p>
                        <h2 className="mt-3 text-3xl font-black">
                            Have a Project in Mind?
                        </h2>
                        <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                            I&apos;m open to learning opportunities, collaborations, and
                            projects related to fullstack development, AI integration,
                            automation, and decision systems.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {socialLinks.map((link, index) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className={
                                    index === 0
                                        ? "rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-bold text-white hover:bg-blue-700"
                                        : "rounded-xl border border-white/15 px-5 py-3 text-center text-sm font-bold text-white hover:border-blue-400 hover:text-blue-300"
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}