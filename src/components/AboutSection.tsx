import { profile } from "@/data/portfolio";

export function AboutSection() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-6 py-10">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                            About Me
                        </p>
                        <h2 className="mt-3 text-2xl font-black">Product-minded fullstack builder</h2>
                        <p className="mt-4 leading-8 text-slate-600">{profile.about}</p>
                    </div>

                    <div className="grid gap-3 text-sm sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="font-bold text-slate-950">Name</p>
                            <p className="mt-1 text-slate-600">{profile.name}</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="font-bold text-slate-950">Focus</p>
                            <p className="mt-1 text-slate-600">AI workflow apps, automation, and dashboards</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="font-bold text-slate-950">Location</p>
                            <p className="mt-1 text-slate-600">{profile.location}</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="font-bold text-slate-950">Goal</p>
                            <p className="mt-1 text-slate-600">{profile.goal}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
