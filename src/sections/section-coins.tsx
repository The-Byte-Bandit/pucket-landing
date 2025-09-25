import { RiBtcFill } from "react-icons/ri";
import { SiEthereum, SiLitecoin, SiPolkadot, SiSolana, SiChainlink } from "react-icons/si";

type CoinCard = {
    label: string;
    name: string;
    price: string;
    Icon: (props: { className?: string; color?: string }) => JSX.Element;
    color: string;
};

export default function SectionCoins() {
    const cards: CoinCard[] = [
        { label: "Highest volume", name: "Bitcoin", price: "93,575.5", Icon: RiBtcFill as any, color: "#F7931A" },
        { label: "Top gainer", name: "Ethereum", price: "3,337.28", Icon: SiEthereum as any, color: "#627EEA" },
        { label: "New listing", name: "Litecoin", price: "105.000", Icon: SiLitecoin as any, color: "#345D9D" },
        { label: "Most traded", name: "Polkadot", price: "6.6423", Icon: SiPolkadot as any, color: "#E6007A" },
        { label: "Biggest gainers", name: "Solana", price: "189.63", Icon: SiSolana as any, color: "#14F195" },
        { label: "Trending", name: "Chainlink", price: "19.991", Icon: SiChainlink as any, color: "#2A5ADA" },
    ];

    return (
        <section id="coins" className="max-w-screen-xl mx-auto pt-14">
            <p className="text-center text-md tracking-wider text-white/90">
                Featured <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">crypto coins</span>
            </p>
            <h2 className="mt-4 text-center text-3xl sm:text-4xl text-white">
                Top crypto coins updates
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {cards.map(({ label, name, price, Icon, color }) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 duration-300 hover:scale-105">
                        <p className="text-sm text-gray-400 mb-5">{label}</p>
                        <div className="flex flex-col justify-start items-start gap-3">
                            <Icon className="w-9 h-9" color={color} />
                            <div className="flex flex-col gap-1">
                                <p className="text-white text-md font-semibold leading-tight">{name}</p>
                                <p className="text-sm leading-tight">{price}<span className="text-gray-400"> USD</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


