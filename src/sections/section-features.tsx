import { FiArrowUp } from "react-icons/fi";
import { RxLightningBolt } from "react-icons/rx";
import { RiBtcFill } from "react-icons/ri";
import { SiEthereum, SiLitecoin, SiPolkadot } from "react-icons/si";
import { IoIosLink } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import bgGroup from "../assets/bg_group.png";

export default function SectionFeatures() {
    const bullets = [
        { icon: IoIosLink, text: "Designed for crypto trading platforms" },
        { icon: RxLightningBolt, text: "Kickstart your crypto website today" },
        { icon: IoSettingsOutline, text: "Launch your blockchain platform today" },
    ];

    const portfolio = [
        { Icon: RiBtcFill, color: "#F7931A", name: "Bitcoin" },
        { Icon: SiEthereum, color: "#627EEA", name: "Ethereum" },
        { Icon: SiLitecoin, color: "#345D9D", name: "Litecoin" },
        { Icon: SiPolkadot, color: "#E6007A", name: "Polkadot" },
    ];

    return (
        <section id="features" className="max-w-screen-xl mx-auto pt-20 grid lg:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-3">
                <p className="text-md text-white/60">
                    Why choose <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">Pucket</span>
                </p>
                <h3 className="mt-3 text-3xl sm:text-4xl text-white">
                    Features of the crypto framer mobile application
                </h3>
                <div className="mt-10 flex flex-col gap-5">
                    {bullets.map(({ icon: Icon, text }) => (
                        <div key={text} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] grid place-items-center">
                                <Icon className="w-5 h-5 text-[#84C718]" />
                            </div>
                            <p className="text-white/90">{text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex item-center justify-center w-full">
                <img src={bgGroup} alt="portfolio background" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ mixBlendMode: 'screen' }} />
                <div className="relative max-w-sm w-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 overflow-hidden backdrop-blur-xl">
                    <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{
                        background:
                            "radial-gradient(60% 60% at 20% 20%, rgba(132,199,24,0.6), transparent 60%), radial-gradient(50% 50% at 80% 80%, rgba(9,121,26,0.5), transparent 60%)"
                    }} />
                    <div className="relative">
                        <p>Your portfolio is up
                            <span className="ml-2 bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-xl text-transparent font-semibold">2.31%</span>
                        </p>
                        <div className="mt-5 space-y-4">
                            {portfolio.map(({ Icon, color, name }) => (
                                <div key={name} className="flex items-center justify-between px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <Icon className="w-10 h-10" color={color} />
                                        <div className="flex flex-col gap-1">
                                            <p className="text-white font-semibold text-md">{name}</p>
                                            <p className="text-sm text-gray-400">BTC/USD</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent text-xl font-semibold">1.05%</span>
                                        <FiArrowUp className="w-4 h-4 text-[#84C718]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { k: "6M+", v: "Active users" },
                        { k: "24/7", v: "Users support" },
                        { k: "160+", v: "Countries" },
                        { k: "$22B+", v: "Trade volume" },
                    ].map((m) => (
                        <div key={m.k} className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-10 text-center duration-300 hover:scale-105">
                            <p className="text-3xl bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">{m.k}</p>
                            <p className="mt-2 text-sm text-gray-400">{m.v}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


