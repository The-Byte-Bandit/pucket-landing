import { RiBtcFill } from "react-icons/ri";
import { SiEthereum } from "react-icons/si";
import { FiShield, FiSmartphone, FiFolder } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

export default function SectionPortfolio() {
    const bullets = [
        { Icon: FiFolder, text: "Manage your portfolio" },
        { Icon: FiShield, text: "Vault protection" },
        { Icon: FiSmartphone, text: "Mobile apps" },
    ];

    return (
        <section id="portfolio" className="max-w-screen-2xl mx-auto pt-24 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left floating cards */}
            <div className="relative mx-auto w-full max-w-2xl">
                <div className="absolute -inset-10 rounded-full opacity-40 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle at 25% 35%, rgba(132,199,24,0.18), transparent 60%), radial-gradient(circle at 60% 60%, rgba(9,121,26,0.18), transparent 60%)"
                    }}
                />
                <div className="relative flex flex-wrap justify-center gap-10">
                    <div className="flex flex-col gap-4 items-end mt-20">
                        <div className="flex flex-col justify-center items-center py-10 w-56 rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-5 text-white shadow-2xl duration-300 hover:scale-105 active:scale-95">
                            <div className="absolute -top-8 w-16 h-16 rounded-full bg-black/60 border border-white/10 grid place-items-center">
                                <SiEthereum className="w-12 h-12 text-white" />
                            </div>
                            <p className="font-semibold text-2xl">Ethereum</p>
                            <p className="mt-2 text-sm text-gray-400"><span className="text-white">ETH</span> USD</p>
                            <p className="mt-4 text-2xl font-bold tracking-widest">******</p>
                            <p className="mt-2 bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent text-sm">5.23% (***)</p>
                            <div className="absolute -bottom-5 mt-4 ml-auto w-10 h-10 rounded-full bg-white text-black grid place-items-center">
                                <FaArrowRightLong />
                            </div>                        </div>
                        {/* <div className="w-20 h-20 rounded-2xl bg-white/[0.06] border border-white/10 grid place-items-center shadow-xl">
                            <div className="w-8 h-8 rounded-full bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)]" />
                        </div> */}
                    </div>
                    <div className="relative flex flex-col gap-4 items-start">
                        {/* <div className="w-20 h-20 rounded-2xl bg-white/[0.06] border border-white/10 grid place-items-center shadow-xl">
                            <div className="w-8 h-8 rounded-full bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)]" />
                        </div> */}
                        <div className="flex flex-col justify-center items-center py-10 w-56 rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-5 text-white shadow-2xl duration-300 hover:scale-105 active:scale-95">
                            <div className="absolute -top-8 w-16 h-16 rounded-full bg-black/60 border border-white/10 grid place-items-center">
                                <RiBtcFill className="w-12 h-12 text-white" />
                            </div>
                            <p className="font-semibold text-2xl">Bitcoin</p>
                            <p className="mt-2 text-sm text-gray-400"><span className="text-white">BTC</span> USD</p>
                            <p className="mt-4 text-2xl font-bold tracking-widest">******</p>
                            <p className="mt-2 bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent text-sm">7.28% (***)</p>
                            <div className="absolute -bottom-5 mt-4 ml-auto w-10 h-10 rounded-full bg-white text-black grid place-items-center">
                                <FaArrowRightLong />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right copy */}
            <div>
                <p className="text-md text-white">Crypto landing page <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">template</span></p>
                <h2 className="mt-3 text-3xl sm:text-5xl text-white">Create your cryptocurrency
                    portfolio today</h2>
                <p className="mt-4 text-gray-400 max-w-xl">Coinbase has a variety of features that make it the best place to start trading.</p>
                <ul className="mt-8 space-y-6">
                    {bullets.map(({ Icon, text }) => (
                        <li key={text} className="flex items-center gap-3">
                            <span className="inline-grid place-items-center w-9 h-9 rounded-full bg-white/[0.05] border border-white/10">
                                <Icon className="w-5 h-5 text-[#84C718]" />
                            </span>
                            <span className="text-white/90">{text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}


