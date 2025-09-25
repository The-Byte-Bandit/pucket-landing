import { IoIosLink } from "react-icons/io";
import { RxLightningBolt } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { FiTrendingUp } from "react-icons/fi";

import mobilePortfolio from "../assets/mobile-portfolio.png"

export default function SectionOptions() {
    const left = [
        {
            title: "Planning",
            desc: "Map the crypto projects scope with framer template",
            Icon: IoIosLink,
        },
        {
            title: "Prototype",
            desc: "Build crypto website test for your product",
            Icon: RxLightningBolt,
        },
    ];

    const right = [
        {
            title: "Refinement",
            desc: "Refine & improve your crypto landing page",
            Icon: IoSettingsOutline,
        },
        {
            title: "Scale and support",
            desc: "Deploy product live and ensure expert support",
            Icon: FiTrendingUp,
        },
    ];

    return (
        <section id="options" className="max-w-screen-xl mx-auto pt-24">
            <p className="text-center text-sm text-white">
                We deliver <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">best solution</span>
            </p>
            <h2 className="mt-3 text-center text-3xl sm:text-5xl font-semibold text-white">
                One application with multiple options to give
                <br className="hidden sm:block" /> you freedom of buying & selling
            </h2>

            <div className="mt-12 flex flex-wrap gap-8 items-center">
                {/* Left bullets */}
                <ul className="order-2 lg:order-1 space-y-10">
                    {left.map(({ title, desc, Icon }) => (
                        <li key={title} className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] grid place-items-center">
                                <Icon className="w-5 h-5 text-[#84C718]" />
                            </div>
                            <div>
                                <p className="text-white font-semibold">{title}</p>
                                <p className="text-xs text-gray-400 max-w-[240px] mt-1">{desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Phone with concentric rings */}
                <div className="order-1 lg:order-2 relative mx-auto">
                    <img src={mobilePortfolio} className="w-[600px] h-[600px]" />
                    {/* <div
                        className="pointer-events-none absolute inset-[-80px] rounded-full opacity-40"
                        style={{
                            background:
                                "radial-gradient(circle at center, rgba(255,255,255,0.06) 0 140px, transparent 141px), radial-gradient(circle at center, rgba(255,255,255,0.05) 0 210px, transparent 211px), radial-gradient(circle at center, rgba(255,255,255,0.04) 0 280px, transparent 281px)",
                            mask: "radial-gradient(circle at center, black 0, black 100%)",
                        }}
                    />
                    <div className="relative mx-auto w-[300px] h-[620px] rounded-[38px] bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 shadow-2xl p-5">
                        <div className="w-full h-full rounded-[30px] bg-black/60 border border-white/10 relative overflow-hidden">
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 h-1 w-28 rounded-full bg-white/10" />
                            <div className="absolute inset-x-4 top-16 h-16 rounded-xl bg-white/5 border border-white/10" />
                            <div className="absolute inset-x-4 top-40 h-12 rounded-xl bg-white/5 border border-white/10" />
                            <div className="absolute inset-x-4 top-56 h-24 rounded-xl bg-white/5 border border-white/10" />
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 h-10 w-28 rounded-full bg-white/5 border border-white/10" />
                        </div>
                    </div>
                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-black/40 border border-white/10 grid place-items-center shadow-xl">
                        <div className="w-20 h-20 rounded-full bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)]" />
                    </div> */}
                </div>

                {/* Right bullets */}
                <ul className="order-3 space-y-10">
                    {right.map(({ title, desc, Icon }) => (
                        <li key={title} className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] grid place-items-center">
                                <Icon className="w-5 h-5 text-[#84C718]" />
                            </div>
                            <div>
                                <p className="text-white font-semibold">{title}</p>
                                <p className="text-xs text-gray-400 max-w-[240px] mt-1">{desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}


