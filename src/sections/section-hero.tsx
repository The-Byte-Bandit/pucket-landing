import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Button from "../components/button";

export default function SectionHero() {
    return (
        <header className="pt-10 z-10 relative max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
                <div className="inline-flex rounded-full py-1.5">
                    <div className="rounded-full px-4 py-1.5 text-sm font-semibold bg-[#0B1116]/80 backdrop-blur-[2px] ring-1 ring-inset ring-white/10">
                        <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">Future of crypto trading</span>
                    </div>
                </div>
                <h1 className="mt-4 text-4xl sm:text-6xl text-white tracking-wide">
                    Fast and Secure Cryptocurrency Exchange
                </h1>
                <p className="mt-6 text-gray-400 text-lg max-w-xl">
                    With multi-currency wallets, cards, and secure vaults, earn on your digital assets.
                </p>
                <div className="mt-8 flex items-center space-x-4">
                    <Button className="flex items-center gap-2">
                        <span>Explore more</span>
                        <ArrowLongRightIcon className="w-6 h-6" />
                    </Button>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-emerald-500/20 blur-2xl" />
                <div className="mx-auto w-[260px] h-[520px] rounded-[36px] bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 shadow-2xl p-4">
                    <div className="w-full h-full rounded-[28px] bg-black/60 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full bg-white/10" />
                        <div className="absolute inset-x-4 bottom-6 h-28 rounded-xl bg-white/5 border border-white/10" />
                    </div>
                </div>
            </div>
        </header>
    );
}


