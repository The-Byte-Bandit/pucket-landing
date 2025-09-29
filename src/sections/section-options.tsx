import { IoIosLink } from "react-icons/io";
import { RxLightningBolt } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../components/motion";

import mobilePortfolio from "../assets/mobile-portfolio.png"

export default function SectionOptions() {
    const left = [
        {
            title: "Planning",
            desc: "Map the crypto projects scope with framer template",
            Icon: IoIosLink,
        },
        {
            title: "Prototype",
            desc: "Build crypto website test for your product",
            Icon: RxLightningBolt,
        },
    ];

    const right = [
        {
            title: "Refinement",
            desc: "Refine & improve your crypto landing page",
            Icon: IoSettingsOutline,
        },
        {
            title: "Scale and support",
            desc: "Deploy product live and ensure expert support",
            Icon: FiTrendingUp,
        },
    ];

    return (
        <section id="options" className="max-w-screen-xl mx-auto pt-24 md:pt-32 px-4 md:px-8">
            <p className="text-center text-md text-white">
                We deliver <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">best solution</span>
            </p>
            <h2 className="mt-4 text-center text-2xl sm:text-3xl md:text-4xl text-white">
                One application with multiple options to give
                <br className="hidden sm:block" /> you freedom of buying & selling
            </h2>

            <motion.div
                className="mt-8 md:mt-12 flex flex-col lg:flex-row gap-8 md:gap-10 items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {/* Left bullets */}
                <ul className="order-2 lg:order-1 space-y-6 md:space-y-10 xl:space-y-[200px] w-full lg:w-auto max-w-md mx-auto lg:mx-0">
                    {left.map(({ title, desc, Icon }) => (
                        <motion.li key={title} variants={fadeUp} className="flex items-start gap-3 md:gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 bg-white/[0.03] grid place-items-center flex-shrink-0">
                                <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#84C718]" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm md:text-base">{title}</p>
                                <p className="text-xs md:text-xs text-gray-400 max-w-[200px] md:max-w-[240px] mt-1">{desc}</p>
                            </div>
                        </motion.li>
                    ))}
                    {right.map(({ title, desc, Icon }) => (
                        <motion.li key={title} variants={fadeUp} className="flex xl:hidden items-start gap-3 md:gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 bg-white/[0.03] grid place-items-center flex-shrink-0">
                                <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#84C718]" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm md:text-base">{title}</p>
                                <p className="text-xs md:text-xs text-gray-400 max-w-[200px] md:max-w-[240px] mt-1">{desc}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>

                {/* Phone with concentric rings */}
                <motion.div
                    className="order-1 lg:order-2 relative mx-auto flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.95, y: 12 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.img
                        src={mobilePortfolio}
                        className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] object-contain"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>

                {/* Right bullets */}
                <ul className="hidden xl:block order-3 space-y-6 md:space-y-10 xl:space-y-[200px] w-full lg:w-auto">
                    {right.map(({ title, desc, Icon }) => (
                        <motion.li key={title} variants={fadeUp} className="flex items-start gap-3 md:gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 bg-white/[0.03] grid place-items-center flex-shrink-0">
                                <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#84C718]" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm md:text-base">{title}</p>
                                <p className="text-xs md:text-xs text-gray-400 max-w-[200px] md:max-w-[240px] mt-1">{desc}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}


