import { services } from "@/data/portfolio";

export function ServicesSection() {
    return (
        <section id="services" className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                        What I Do
                    </p>
                    <h2 className="mt-3 text-3xl font-black">What I Build</h2>
                </div>

                <p className="text-sm font-medium text-slate-500">
                    Focused on useful systems, not just demos.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
                {services.map((service) => (
                    <article
                        key={service.title}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-blue-600">
                            ✦
                        </div>

                        <h3 className="text-xl font-black">{service.title}</h3>
                        <p className="mt-4 leading-7 text-slate-600">
                            {service.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}