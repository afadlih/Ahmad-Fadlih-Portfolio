import { experienceItems } from "@/data/portfolio";

export function ExperienceSection() {
    if (experienceItems.length === 0) {
        return null;
    }

    return (
        <section id="experience" className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                        Experience & Credentials
                    </p>
                    <h2 className="mt-3 text-3xl font-black">Beyond the Code</h2>
                </div>

                <p className="max-w-xl text-slate-600">
                    Selected organization roles, certifications, events, and activities
                    that shaped how I work, build, and collaborate.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {experienceItems.map((item) => (
                    <article
                        key={`${item.type}-${item.title}`}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                                {item.type}
                            </span>
                            <span className="text-sm font-semibold text-slate-500">
                                {item.period}
                            </span>
                        </div>

                        <h3 className="mt-5 text-xl font-black text-slate-950">
                            {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-bold text-blue-600">
                            {item.organization}
                        </p>

                        <p className="mt-4 leading-7 text-slate-600">
                            {item.description}
                        </p>

                        {item.highlights.length > 0 ? (
                            <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                                {item.highlights.map((highlight) => (
                                    <li key={highlight} className="flex gap-2">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        {item.link ? (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-5 inline-flex text-sm font-bold text-blue-600 hover:text-blue-700"
                            >
                                View credential →
                            </a>
                        ) : null}
                    </article>
                ))}
            </div>
        </section>
    );
}
