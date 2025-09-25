import { Bars3Icon } from "@heroicons/react/24/outline";
import Button from "../../components/button";
import logoUrl from "../../assets/logo.png";

export default function Navbar() {
    return (
        <nav className="max-w-screen-xl mx-auto pt-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <img src={logoUrl} alt="Pucket logo" className="h-8 w-8 rounded" />
                <span className="font-extrabold tracking-tight">Pucket</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
                <a href="#features" className="hover:text-white">Features</a>
                <a href="#solutions" className="hover:text-white">Solutions</a>
                <a href="#pricing" className="hover:text-white">Pricing</a>
                <a href="#help" className="hover:text-white">Help</a>
            </div>
            <div className="hidden md:flex items-center space-x-3">
                <Button>Login</Button>
                <Button>Sign up</Button>
            </div>
            <button className="md:hidden inline-flex p-2 rounded-lg border border-white/10">
                <Bars3Icon className="w-6 h-6" />
            </button>
        </nav>
    );
}


