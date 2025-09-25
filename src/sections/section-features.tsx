export default function SectionFeatures() {
    const features = [
        { title: "Complete crypto ecosystem", desc: "Cards, wallets, and instant exchange" },
        { title: "Low fees & high security", desc: "Vault protection with multi-sig" },
        { title: "Instant liquidity", desc: "Fast on/off ramp with global coverage" },
        { title: "Mobile first", desc: "Slick experience with biometric login" },
    ];
    const metrics = [
        { k: "6M+", v: "Active users" },
        { k: "24/7", v: "Support" },
        { k: "160+", v: "Countries" },
        { k: "$22B+", v: "Trade volume" },
    ];
    return (
        <section id="features" className="max-w-screen-xl mx-auto pt-20 grid lg:grid-cols-2 gap-10 items-start">
            <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Features of the crypto framer mobile application</h3>
                <ul className="mt-6 space-y-4">
                    {features.map((f) => (
                        <li key={f.title} className="p-4 rounded-2xl border border-white/10 bg-white/[0.03]">
                            <p className="text-white font-semibold">{f.title}</p>
                            <p className="text-sm text-gray-400 mt-1">{f.desc}</p>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 grid grid-cols-4 gap-4">
                    {metrics.map((m) => (
                        <div key={m.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                            <p className="text-white font-bold text-lg">{m.k}</p>
                            <p className="text-xs text-gray-400">{m.v}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                        <p className="text-sm text-gray-300">Portfolio</p>
                        <p className="text-2xl font-bold text-white mt-2">$12,765</p>
                        <div className="mt-4 h-24 w-full bg-gradient-to-t from-emerald-500/20 to-transparent rounded" />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                        <p className="text-sm text-gray-300">Today</p>
                        <p className="text-emerald-400 text-sm font-semibold">+2.35%</p>
                        <div className="mt-4 h-24 w-full bg-gradient-to-t from-lime-400/20 to-transparent rounded" />
                    </div>
                    <div className="col-span-2 rounded-2xl border border-white/10 bg-black/40 p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-300">USDT/BTC</p>
                            <span className="text-emerald-400 text-sm">72%</span>
                        </div>
                        <div className="mt-3 h-28 w-full bg-[radial-gradient(circle_at_20%_0,rgba(16,185,129,0.25),transparent_60%),radial-gradient(circle_at_80%_100%,rgba(163,230,53,0.2),transparent_50%)] rounded" />
                    </div>
                </div>
            </div>
        </section>
    );
}


