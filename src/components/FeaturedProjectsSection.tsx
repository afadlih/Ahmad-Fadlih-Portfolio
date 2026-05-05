import { featuredProjects } from "@/data/portfolio";

export function FeaturedProjectsSection() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                        Featured Projects
                    </p>
                    <h2 className="mt-3 text-3xl font-black">Things I&apos;ve Built</h2>
                </div>

                <p className="max-w-xl text-slate-600">
                    Projects focused on AI application layer, automation, IoT dashboard,
                    and decision support workflows.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
                {featuredProjects.map((project) => (
                    <article
                        key={project.title}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="mb-6 h-36 rounded-2xl bg-gradient-to-br from-slate-100 to-blue-50" />
                        <h3 className="text-xl font-black">{project.title}</h3>
                        <p className="mt-4 leading-7 text-slate-600">
                            {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        {project.github !== "#" ? (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 inline-flex text-sm font-bold text-blue-600 hover:text-blue-700"
                            >
                                View Repository →
                            </a>
                        ) : (
                            <span className="mt-6 inline-flex text-sm font-bold text-slate-400">
                                Repository coming soon
                            </span>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}