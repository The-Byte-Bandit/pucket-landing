import { FiHeadphones, FiUsers, FiGift } from "react-icons/fi";
import bgGraph from '../assets/bg-graph.png'

export default function SectionBySide() {
    const items = [
        {
            title: "24/7 Support",
            desc:
                "Need help? Get your requests solved quickly via support team.",
            Icon: FiHeadphones,
        },
        {
            title: "Community",
            desc:
                "Join the conversations on our worldwide communities.",
            Icon: FiUsers,
        },
        {
            title: "Academy",
            desc: "Learn blockchain and crypto for free.",
            Icon: FiGift,
        },
    ];

    return (
        <section id="support" className="max-w-screen-xl mx-auto pt-32 px-4 md:px-8">
            <p className="text-center text-md text-white">
                Always by <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">your side</span>
            </p>
            <h2 className="mt-3 text-center text-3xl sm:text-4xl text-white">
                Be the first to use our Pucket!
            </h2>
            <p className="mt-4 text-center text-gray-400 max-w-3xl mx-auto">
                Get faster, safer, more affordable cloud object storage with no central point of failure.
            </p>

            <div className="mt-10 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
                {/* green waveform */}
                <img className="absolute left-0 right-0 -bottom-6 w-full opacity-80" src={bgGraph} />

                <div className="relative grid sm:grid-cols-3 gap-8">
                    {items.map(({ title, desc, Icon }) => (
                        <div key={title} className="text-center px-4 py-6">
                            <div className="mx-auto w-12 h-12 rounded-full bg-white/[0.06] backdrop-blur-lg border border-white/10 grid place-items-center shadow">
                                <Icon className="w-6 h-6 text-[#84C718]" />
                            </div>
                            <p className="mt-4 text-white font-semibold">{title}</p>
                            <p className="mt-2 text-sm text-gray-400 max-w-xs mx-auto">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


