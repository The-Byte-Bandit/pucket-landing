import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp, scaleIn } from "../../components/motion"; // Adjust path to your motion.ts
import logoUrl from "../../assets/logo.png";

const navLinks = [
  { href: "#trusted", label: "Trusted by" },
  { href: "#features", label: "Features" },
  { href: "#options", label: "Options" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#support", label: "Support" },
  { href: "#faq", label: "FAQ" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();
  const navRef = useRef<HTMLElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Scroll-based background animation
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.4]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 10]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: "easeOut" };

  const baseNavClasses =
    "fixed top-0 left-0 right-0 z-50 w-full transition-[background-color,backdrop-filter,transform,box-shadow,border-color] duration-300 ease-in-out";
  const navWrapperClasses = isScrolled
    ? `${baseNavClasses} shadow-[0_2px_10px_rgba(0,0,0,0.2)]`
    : `${baseNavClasses} bg-transparent`;

  const containerPadding = isScrolled ? "py-3" : "py-6";

  return (
    <motion.nav
      ref={navRef}
      className={navWrapperClasses}
      style={{
        backgroundColor: isScrolled ? `rgba(0, 0, 0, ${backgroundOpacity.get()})` : "transparent",
        backdropFilter: `blur(${backdropBlur.get()}px)`,
      }}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={transition}
    >
      <div className={`max-w-screen-xl mx-auto ${containerPadding} flex items-center justify-between px-6 lg:px-8 xl:px-6`}>
        <motion.a
          href="#hero"
          aria-label="Go to top"
          className="flex items-center space-x-2"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            const target = document.getElementById("hero");
            if (!target) return;
            const navHeight = navRef.current?.offsetHeight ?? 80;
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: "smooth" });
          }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 2 }}
          transition={transition}
        >
          <motion.img
            src={logoUrl}
            alt="Pucket logo"
            className={`h-10 w-10 lg:h-12 lg:w-12 rounded transition-transform duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
            variants={scaleIn}
          />
          <motion.span
            className="hidden lg:block tracking-tight text-white text-2xl font-bold"
            variants={staggerContainer}
          >
            {"Pucket".split("").map((char, index) => (
              <motion.span key={index} variants={fadeUp} className="inline-block">
                {char === "e" || char === "t" ? (
                  <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">
                    {char}
                  </span>
                ) : (
                  char
                )}
              </motion.span>
            ))}
          </motion.span>
        </motion.a>
        <motion.div
          className="hidden text-md md:flex items-center space-x-6 lg:space-x-8 lg:text-lg text-gray-300"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          transition={transition}
        >
          {navLinks.map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              className="hover:text-white"
              variants={fadeUp}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 2 }}
              transition={transition}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>
        <motion.button
          className="md:hidden inline-flex p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          transition={transition}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        ref={mobileMenuRef}
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 border-t border-white/10 transition-all duration-200 ease-out`}
        initial={isMobileMenuOpen ? "visible" : "hidden"}
        animate={isMobileMenuOpen ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, translateY: -10, visibility: "hidden" },
          visible: { opacity: 1, translateY: 0, visibility: "visible" },
        }}
        transition={transition}
      >
        <motion.div
          className="px-8 py-6 space-y-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isMobileMenuOpen ? "visible" : "hidden"}
          transition={transition}
        >
          {navLinks.map(({ href, label }, index) => (
            <motion.a
              key={href}
              href={href}
              className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
              variants={index % 2 === 0 ? fadeUp : fadeIn}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 2 }}
              transition={transition}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;