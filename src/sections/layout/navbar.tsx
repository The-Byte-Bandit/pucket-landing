import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import logoUrl from "../../assets/logo.png";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        // Initialize on mount
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navRef = useRef<HTMLElement | null>(null);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);
    const baseNavClasses = "fixed top-0 left-0 right-0 z-50 w-full transition-[background-color,backdrop-filter,transform,box-shadow,border-color] duration-300 ease-in-out";
    const navWrapperClasses = isScrolled
        ? `${baseNavClasses} backdrop-blur-md bg-black/40 shadow-[0_2px_10px_rgba(0,0,0,0.2)]`
        : `${baseNavClasses} bg-transparent backdrop-blur-0`;
    const containerPadding = isScrolled ? "py-3" : "py-6";

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsMobileMenuOpen(false);
        };

        if (isMobileMenuOpen) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobileMenuOpen]);

    return (
        <nav ref={navRef} className={navWrapperClasses}>
            <div className={`max-w-screen-xl mx-auto ${containerPadding} flex items-center justify-between px-6 lg:px-8 xl:px-0`}>
                <a
                    href="#hero"
                    aria-label="Go to top"
                    className="flex items-center space-x-2"
                    onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById("hero");
                        if (!target) return;
                        const navHeight = navRef.current?.offsetHeight ?? 80;
                        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
                        window.scrollTo({ top, behavior: "smooth" });
                    }}
                >
                    <img src={logoUrl} alt="Pucket logo" className={`h-10 w-10 lg:h-12 lg:w-12 rounded transition-transform duration-300 ${isScrolled ? "scale-90" : "scale-100"}`} />
                    <span className="hidden lg:block tracking-tight text-white text-2xl font-bold">Puck<span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">et</span></span>
                </a>
                <div className="hidden text-md md:flex items-center space-x-6 lg:space-x-8 lg:text-lg text-gray-300">
                    <a href="#trusted" className="hover:text-white">Trusted by</a>
                    <a href="#features" className="hover:text-white">Features</a>
                    <a href="#options" className="hover:text-white">Options</a>
                    <a href="#portfolio" className="hover:text-white">Portfolio</a>
                    <a href="#support" className="hover:text-white">Support</a>
                    <a href="#faq" className="hover:text-white">FAQ</a>
                </div>
                <button
                    className="md:hidden inline-flex p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? (
                        <XMarkIcon className="w-6 h-6 text-white" />
                    ) : (
                        <Bars3Icon className="w-6 h-6 text-white" />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                ref={mobileMenuRef}
                className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 transition-all duration-200 ease-out ${isMobileMenuOpen
                    ? 'opacity-100 visible transform translate-y-0'
                    : 'opacity-0 invisible transform -translate-y-2'
                    }`}
            >
                <div className="px-8 py-6 space-y-4">
                    <a
                        href="#trusted"
                        className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Trusted by
                    </a>
                    <a
                        href="#features"
                        className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Features
                    </a>
                    <a
                        href="#options"
                        className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Options
                    </a>
                    <a
                        href="#portfolio"
                        className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#support"
                        className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Support
                    </a>
                    <a
                        href="#faq"
                        className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        FAQ
                    </a>
                </div>
            </div>
        </nav>
    );
}


