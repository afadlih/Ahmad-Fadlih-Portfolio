import { featuredProjects } from "@/data/portfolio";

export function FeaturedProjectsSection() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                        Featured Case Studies
                    </p>
                    <h2 className="mt-3 text-3xl font-black">Things I&apos;ve Built</h2>
                </div>

                <p className="max-w-xl text-slate-600">
                    Projects focused on AI workflow apps, automation platforms,
                    realtime dashboards, and decision-support systems.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
                {featuredProjects.map((project) => (
                    <article
                        key={project.title}
                        className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50">
                            <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        <div className="p-6">
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

                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                {project.github !== "#" ? (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex text-sm font-bold text-blue-600 hover:text-blue-700"
                                    >
                                        View Repository →
                                    </a>
                                ) : (
                                    <span className="inline-flex text-sm font-bold text-slate-400">
                                        Private case study
                                    </span>
                                )}

                                {project.demo !== "#" ? (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex text-sm font-bold text-slate-700 hover:text-blue-600"
                                    >
                                        Live Demo →
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
