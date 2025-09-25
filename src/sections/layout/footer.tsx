import logoUrl from "../../assets/logo.png";

export default function Footer() {
    return (
        <footer className="pb-16 max-w-screen-xl mx-auto text-gray-400">
            <div className="grid md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
                <div>
                    <div className="flex items-center space-x-2">
                        <img src={logoUrl} alt="Pucket logo" className="h-7 w-7 rounded" />
                        <span className="font-extrabold tracking-tight text-white">Pucket</span>
                    </div>
                    <p className="mt-4 text-sm">Trusted crypto exchange platform with secure wallet, cards and vault.</p>
                </div>
                <div>
                    <p className="text-white font-semibold mb-3">Links</p>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#features" className="hover:text-white">Features</a></li>
                        <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                        <li><a href="#help" className="hover:text-white">Help</a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-white font-semibold mb-3">Legal</p>
                    <ul className="space-y-2 text-sm">
                        <li><a className="hover:text-white">Privacy</a></li>
                        <li><a className="hover:text-white">Terms</a></li>
                        <li><a className="hover:text-white">Cookies</a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-white font-semibold mb-3">Download app</p>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="h-10 rounded-lg border border-white/10 bg-white/[0.06]" />
                        <div className="h-10 rounded-lg border border-white/10 bg-white/[0.06]" />
                    </div>
                </div>
            </div>
            <p className="mt-8 text-center text-xs">© {new Date().getFullYear()} Pucket. All rights reserved.</p>
        </footer>
    );
}


