import { RiBtcFill } from "react-icons/ri";
import { SiSolana, SiEthereum, SiLitecoin, SiPolkadot, SiChainlink } from "react-icons/si";

import "swiper/css";

const coins = [
    { Icon: RiBtcFill, fill: "#F7931A", text: "Bitcoin" },
    { Icon: SiEthereum, fill: "#627EEA", text: "Ethereum" },
    { Icon: SiLitecoin, fill: "#345D9D", text: "Litecoin" },
    { Icon: SiPolkadot, fill: "#E6007A", text: "Polkadot" },
    { Icon: SiSolana, fill: "#14F195", text: "Solana" },
    { Icon: SiChainlink, fill: "#2A5ADA", text: "Chainlink" },
];

export default function SectionTrusted() {
    return (
        <section className="max-w-screen-xl mx-auto pt-14">
            <p className="text-center text-md tracking-wider text-white/90">
                Trusted by top <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">crypto platforms</span>
            </p>
            <div className="mt-6 overflow-hidden">
                <div className="flex animate-[scroll_30s_linear_infinite] hover:animate-pause">
                    {[...coins, ...coins, ...coins].map(({ Icon, fill, text }, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-3 py-4 px-6 opacity-80 hover:opacity-100 transition-opacity flex-shrink-0">
                            <Icon className="w-10 h-10" color={fill} aria-label={text} />
                            <span className="text-sm font-semibold text-gray-300">{text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


