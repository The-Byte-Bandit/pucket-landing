import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Button from "../components/button";
import { motion, useScroll, useTransform, useReducedMotion, useInView, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp, fadeInOut } from "../components/motion";
import mobileImg from "../assets/mobile_1.png";
import { useRef } from "react";

const SectionHero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: "easeOut" };

  const titleWords = "Fast and Secure Cryptocurrency Exchange".split(" ");
  const subtitleWords = "With multi-currency wallets, cards, and secure vaults, earn on your digital assets.".split(" ");

  return (
    <section ref={ref} id="hero" className="pt-10 md:pt-24 z-10 relative max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-10 xl:gap-0 items-center px-4 sm:px-8 xl:px-6">
      <AnimatePresence>
        {isInView && (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="inline-flex rounded-full py-1.5">
                <div className="rounded-full px-4 py-1.5 text-sm font-semibold bg-[#0B1116]/80 backdrop-blur-[2px] ring-1 ring-inset ring-white/10">
                  <motion.span
                    className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {"Future of crypto trading".split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        variants={fadeUp}
                        className="inline-block mr-1"
                        transition={transition}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05, color: "#84C718" }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.span>
                </div>
              </motion.div>
              <motion.h1
                className="mt-4 text-3xl xs:text-4xl sm:text-6xl text-white tracking-wide"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {titleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={fadeUp}
                    className="inline-block mr-2"
                    transition={transition}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, color: "#84C718" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                className="mt-6 text-gray-400 text-sm sm:text-lg max-w-xl"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {subtitleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={fadeInOut}
                    className="inline-block mr-1"
                    transition={transition}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex items-center space-x-4">
                <Button className="flex items-center gap-2 text-sm sm:text-xl py-2 sm:py-4">
                  <motion.span
                    variants={fadeUp}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    transition={transition}
                  >
                    Explore more
                  </motion.span>
                  <ArrowLongRightIcon className="w-6 h-6" />
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center w-full"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 12 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.12 },
                },
                exit: { opacity: 0, scale: 0.95, y: 12, transition: { duration: 0.4, ease: "easeIn" } },
              }}
            >
              <motion.img
                src={mobileImg}
                className="w-1/2"
                animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
                transition={
                  shouldReduceMotion ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SectionHero;