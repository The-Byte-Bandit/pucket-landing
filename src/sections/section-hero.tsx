import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Button from "../components/button";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../components/motion";

import mobileImg from "../assets/mobile_1.png"

export default function SectionHero() {
    return (
        <header id="hero" className="pt-10 md:pt-24 z-10 relative max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-10 xl:gap-0 items-center px-4 sm:px-8 xl:px-0">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeUp} className="inline-flex rounded-full py-1.5">
                    <div className="rounded-full px-4 py-1.5 text-sm font-semibold bg-[#0B1116]/80 backdrop-blur-[2px] ring-1 ring-inset ring-white/10">
                        <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">Future of crypto trading</span>
                    </div>
                </motion.div>
                <motion.h1 variants={fadeUp} className="mt-4 text-3xl xs:text-4xl sm:text-6xl text-white tracking-wide">
                    Fast and Secure Cryptocurrency Exchange
                </motion.h1>
                <motion.p variants={fadeUp} className="mt-6 text-gray-400 text-sm sm:text-lg max-w-xl">
                    With multi-currency wallets, cards, and secure vaults, earn on your digital assets.
                </motion.p>
                <motion.div variants={fadeUp} className="mt-8 flex items-center space-x-4">
                    <Button className="flex items-center gap-2 text-sm sm:text-xl py-2 sm:py-4">
                        <span>Explore more</span>
                        <ArrowLongRightIcon className="w-6 h-6" />
                    </Button>
                </motion.div>
            </motion.div>
            <motion.div
                className="flex items-center justify-center w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 12 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.12 } },
                }}
            >
                <motion.img
                    src={mobileImg}
                    className="w-1/2"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </header>
    );
}


