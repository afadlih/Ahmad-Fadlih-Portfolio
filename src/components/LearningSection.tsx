import { learningItems } from "@/data/portfolio";

export function LearningSection() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                        Learning & Sharing
                    </p>
                    <h2 className="mt-3 text-3xl font-black">What I&apos;m Learning</h2>
                </div>

                <p className="text-sm font-medium text-slate-500">
                    Building, shipping, and refining.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
                {learningItems.map((item) => (
                    <article
                        key={item.title}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-lg font-black text-slate-800">
                            {item.tag.slice(0, 2)}
                        </div>

                        <h3 className="text-xl font-black">{item.title}</h3>
                        <p className="mt-4 leading-7 text-slate-600">{item.description}</p>

                        <span className="mt-5 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                            {item.tag}
                        </span>
                    </article>
                ))}
            </div>
        </section>
    );
}