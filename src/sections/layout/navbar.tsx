import { Bars3Icon } from "@heroicons/react/24/outline";
import logoUrl from "../../assets/logo.png";

export default function Navbar() {
    return (
        <nav className="max-w-screen-xl mx-auto pt-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <img src={logoUrl} alt="Pucket logo" className="h-12 w-12 rounded" />
                <span className="tracking-tight text-white text-2xl font-bold">Puck<span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">et</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-lg text-gray-300">
                <a href="#trusted" className="hover:text-white">Trusted by</a>
                <a href="#coins" className="hover:text-white">Coins</a>
                <a href="#features" className="hover:text-white">Features</a>
                <a href="#portfolio" className="hover:text-white">Portfolio</a>
                <a href="#support" className="hover:text-white">Support</a>
                <a href="#faq" className="hover:text-white">FAQ</a>
            </div>
            <button className="md:hidden inline-flex p-2 rounded-lg border border-white/10">
                <Bars3Icon className="w-6 h-6" />
            </button>
        </nav>
    );
}


