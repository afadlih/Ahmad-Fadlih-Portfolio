import { devopsItems } from "@/data/portfolio";

export function DevOpsSection() {
    return (
        <section id="devops" className="mx-auto max-w-6xl px-6 py-14">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                    Container Assignment
                </p>

                <h2 className="mt-3 text-3xl font-black">Docker & CI/CD Workflow</h2>

                <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                    This project is containerized using Docker multi-stage build and
                    integrated with GitHub Actions. Pull requests run quality checks,
                    while successful pushes to main build and publish a Docker image to
                    Docker Hub.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-4">
                    {devopsItems.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-3xl border border-white/10 bg-white/5 p-5"
                        >
                            <h3 className="font-black">{item.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-300">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}