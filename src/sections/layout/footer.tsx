import logoUrl from "../../assets/logo.png";
import googlePlay from "../../assets/google-play.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="pb-16 max-w-screen-xl mx-auto text-gray-400">
            <div className="grid md:grid-cols-2 gap-8 border-t border-white/10 pt-12">
                {/* Brand + description */}
                <div>
                    <div className="flex items-center space-x-3">
                        <img src={logoUrl} alt="Pucket logo" className="h-12 w-12 rounded" />
                        <span className="tracking-tight text-white text-2xl font-bold">Puck<span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">et</span></span>
                    </div>
                    <p className="mt-4 text-md pr-6">Transform your crypto business with Pucket
                        Framer; a template for startups and blockchain services.</p>

                    <div className="mt-5 flex items-center gap-3">
                        <div className="w-9 h-9 grid place-items-center rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md duration-300 hover:scale-105 active:scale-95">
                            <FaFacebookF className="w-6 h-6" fill="white" />
                        </div>
                        <div className="w-9 h-9 grid place-items-center rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md duration-300 hover:scale-105 active:scale-95">
                            <FaInstagram className="w-6 h-6" fill="white" />
                        </div>
                        <div className="w-9 h-9 grid place-items-center rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md duration-300 hover:scale-105 active:scale-95">
                            <FaTwitter className="w-6 h-6" fill="white" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    {/* Links */}
                    <div>
                        <p className="text-white text-xl font-semibold mb-3">Links</p>
                        <ul className="space-y-2 text-md">
                            <li><a href="#trusted" className="hover:text-white">Trusted by</a></li>
                            <li><a href="#coins" className="hover:text-white">Coins</a></li>
                            <li><a href="#features" className="hover:text-white">Features</a></li>
                            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
                            <li><a href="#faq" className="hover:text-white">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Other pages */}
                    <div>
                        <p className="text-white text-xl font-semibold mb-3">Other Pages</p>
                        <ul className="space-y-2 text-md">
                            <li><a className="hover:text-white">Terms</a></li>
                            <li><a className="hover:text-white">Disclosures</a></li>
                            <li><a className="hover:text-white">Latest News</a></li>
                        </ul>
                    </div>

                    {/* Download */}
                    <div>
                        <p className="text-white text-xl font-semibold mb-3">Download app</p>
                        <div className="space-y-3">
                            <div className="h-12 w-44 rounded-xl border border-white/10 bg-white/[0.06] text-white/80 text-md flex items-center justify-center gap-2 duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                                <img src={googlePlay} alt="Google Play" className="h-6 w-6" />
                                <span>Google Play</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-10 h-px w-full bg-white/10" />
            <p className="mt-6 text-center text-sm">Copyright ©{new Date().getFullYear()} Pucket. All rights reserved</p>
        </footer>
    );
}


