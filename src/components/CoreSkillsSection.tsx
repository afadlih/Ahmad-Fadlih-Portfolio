import { coreSkills } from "@/data/portfolio";

export function CoreSkillsSection() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                Core Skills
            </p>
            <h2 className="mt-3 text-3xl font-black">Tech Stack I Use</h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                {coreSkills.map((skill) => (
                    <div
                        key={skill}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-bold text-slate-700 shadow-sm"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}