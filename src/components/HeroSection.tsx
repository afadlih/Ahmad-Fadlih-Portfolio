import { floatingBadges, profile } from "@/data/portfolio";

export function HeroSection() {
    return (
        <section id="home" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                        {profile.role}
                    </div>

                    <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                        {profile.headline}
                    </h1>

                    <p className="mt-5 text-lg font-semibold text-blue-600">
                        {profile.subheadline}
                    </p>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        {profile.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm hover:border-blue-500 hover:text-blue-600"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200">
                        <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-50 via-white to-slate-100 p-6">
                            <div className="flex justify-end gap-3">
                                {floatingBadges.slice(1, 3).map((badge) => (
                                    <span
                                        key={badge}
                                        className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-blue-600 shadow-sm"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-16">
                                <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-slate-950 text-4xl font-black text-white shadow-xl">
                                    {profile.initials}
                                </div>

                                <div className="rounded-2xl bg-white p-5 shadow-lg">
                                    <h2 className="text-xl font-black">{profile.name}</h2>
                                    <p className="mt-1 text-sm font-medium text-blue-600">
                                        {profile.secondaryRole}
                                    </p>
                                    <p className="mt-3 text-sm text-slate-500">
                                        {profile.location}
                                    </p>
                                    <p className="mt-1 text-sm text-slate-500">
                                        {profile.motto}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -left-5 top-16 rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-700 shadow-xl">
                        Next.js
                    </div>
                    <div className="absolute -right-4 bottom-20 rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-700 shadow-xl">
                        FastAPI
                    </div>
                </div>
            </div>
        </section>
    );
}
