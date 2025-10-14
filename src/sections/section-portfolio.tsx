import { RiBtcFill } from "react-icons/ri";
import { SiEthereum, SiPolkadot, SiBinance } from "react-icons/si";
import { FiPieChart, FiSmartphone } from "react-icons/fi";
import { FaShieldHalved, FaArrowRightLong } from "react-icons/fa6";
import { motion, useReducedMotion, useInView, AnimatePresence } from "framer-motion";
import { slideInLeft, slideInRight, staggerContainer, fadeUp } from "../components/motion";
import { useRef } from "react";

interface Bullet {
  Icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const SectionPortfolio: React.FC = () => {
  const ref = useRef<HTMLElement>(null); // Fixed typo: 'ref portfolio' to 'ref'
  const isInView = useInView(ref, { amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: "easeOut" };

  const titleWords = "Create your cryptocurrency portfolio today".split(" ");
  const subtitleWords = "Crypto landing page template".split(" ");
  const descriptionWords = "Coinbase has a variety of features that make it the best place to start trading.".split(" ");

  // Fixed gradientAnimation declaration
  const gradientAnimation = shouldReduceMotion
    ? {}
    : {
        background: [
          "radial-gradient(circle at 25% 35%, rgba(132,199,24,0.18), transparent 60%), radial-gradient(circle at 60% 60%, rgba(9,121,26,0.18), transparent 60%)",
          "radial-gradient(circle at 30% 40%, rgba(132,199,24,0.24), transparent 60%), radial-gradient(circle at 55% 55%, rgba(9,121,26,0.24), transparent 60%)",
          "radial-gradient(circle at 25% 35%, rgba(132,199,24,0.18), transparent 60%), radial-gradient(circle at 60% 60%, rgba(9,121,26,0.18), transparent 60%)",
        ],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

  const bullets: Bullet[] = [
    { Icon: FiPieChart, text: "Manage your portfolio" },
    { Icon: FaShieldHalved, text: "Vault protection" },
    { Icon: FiSmartphone, text: "Mobile apps" },
  ];

  return (
    <section ref={ref} id="portfolio" className="max-w-screen-2xl mx-auto pt-20 md:pt-40 flex flex-col-reverse lg:flex-row md:gap-10 items-center px-4 md:px-8">
      <AnimatePresence>
        {isInView && (
          <>
            <motion.div
              className="relative flex mx-auto w-full max-w-2xl mt-10 lg:mt-0"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={staggerContainer}
            >
              <motion.div
                className="absolute -inset-10 rounded-full opacity-40 pointer-events-none"
                animate={gradientAnimation}
              />
              <div className="relative flex flex-wrap justify-center gap-4 xl:gap-10">
                <div className="flex flex-col gap-8 items-end mt-16">
                  <motion.div
                    variants={slideInLeft}
                    className="flex flex-col justify-center items-center py-10 w-56 rounded-xl border-2 border-white/10 bg-white/[0.05] backdrop-blur-xl p-5 text-white shadow-2xl duration-300"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    transition={transition}
                  >
                    <div className="absolute -top-8 w-14 h-14 rounded-full bg-black/60 border border-white/10 grid place-items-center">
                      <SiEthereum className="w-8 h-8 text-white" fill="#627EEA" />
                    </div>
                    <motion.p
                      className="font-semibold text-2xl"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {"Ethereum".split(" ").map((word, idx) => (
                        <motion.span
                          key={idx}
                          variants={fadeUp}
                          className="inline-block mr-1"
                          transition={transition}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                    <motion.p
                      className="mt-2 text-sm text-gray-400"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {"ETH USD".split(" ").map((word, idx) => (
                        <motion.span
                          key={idx}
                          variants={fadeUp}
                          className="inline-block mr-1"
                          transition={transition}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                    <motion.p
                      className="mt-4 text-2xl font-bold tracking-widest"
                      variants={fadeUp}
                      transition={transition}
                    >
                      ******
                    </motion.p>
                    <motion.p
                      className="mt-2 bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent text-sm"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {"5.23% (***)".split(" ").map((word, idx) => (
                        <motion.span
                          key={idx}
                          variants={fadeUp}
                          className="inline-block mr-1"
                          transition={transition}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                    <div className="absolute -bottom-5 mt-4 ml-auto w-10 h-10 rounded-full bg-white text-black grid place-items-center">
                      <FaArrowRightLong />
                    </div>
                  </motion.div>
                  <motion.div
                    variants={slideInRight}
                    className="flex items-center justify-center w-32 h-24 rounded-xl border-2 border-white/10 bg-[#E6007A]/20 backdrop-blur-xl p-5 text-white shadow-2xl duration-300"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    transition={transition}
                  >
                    <SiPolkadot className="w-12 h-12 text-[#E6007A]" />
                  </motion.div>
                </div>
                <div className="relative flex flex-col gap-10 items-start">
                  <motion.div
                    variants={slideInLeft}
                    className="flex items-center justify-center w-32 h-24 rounded-xl border-2 border-[#e9c22e]/10 bg-[#e9c22e]/[0.05] backdrop-blur-xl p-5 text-white shadow-2xl duration-300"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    transition={transition}
                  >
                    <SiBinance className="w-12 h-12 text-[#e9c22e]" />
                  </motion.div>
                  <motion.div
                    variants={slideInRight}
                    className="flex flex-col justify-center items-center py-10 w-56 rounded-xl border-2 border-white/10 bg-white/[0.05] backdrop-blur-xl p-5 text-white shadow-2xl duration-300"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    transition={transition}
                  >
                    <div className="absolute -top-8 w-14 h-14 rounded-full bg-black/60 border border-white/10 grid place-items-center">
                      <RiBtcFill className="w-10 h-10 text-[#F49B33]" />
                    </div>
                    <motion.p
                      className="font-semibold text-2xl"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {"Bitcoin".split(" ").map((word, idx) => (
                        <motion.span
                          key={idx}
                          variants={fadeUp}
                          className="inline-block mr-1"
                          transition={transition}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                    <motion.p
                      className="mt-2 text-sm text-gray-400"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {"BTC USD".split(" ").map((word, idx) => (
                        <motion.span
                          key={idx}
                          variants={fadeUp}
                          className="inline-block mr-1"
                          transition={transition}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                    <motion.p
                      className="mt-4 text-2xl font-bold tracking-widest"
                      variants={fadeUp}
                      transition={transition}
                    >
                      ******
                    </motion.p>
                    <motion.p
                      className="mt-2 bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent text-sm"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {"7.28% (***)".split(" ").map((word, idx) => (
                        <motion.span
                          key={idx}
                          variants={fadeUp}
                          className="inline-block mr-1"
                          transition={transition}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                    <div className="absolute -bottom-5 mt-4 ml-auto w-10 h-10 rounded-full bg-white text-black grid place-items-center">
                      <FaArrowRightLong />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={staggerContainer}
            >
              <motion.p
                className="text-md text-white"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {subtitleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={fadeUp}
                    className="inline-block mr-1"
                    transition={transition}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, color: "#84C718" }}
                  >
                    {word === "template" ? (
                      <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </motion.p>
              <motion.h2
                className="mt-3 text-3xl sm:text-4xl text-white"
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
              </motion.h2>
              <motion.p
                className="mt-4 text-gray-400 max-w-xl"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {descriptionWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={fadeUp}
                    className="inline-block mr-1"
                    transition={transition}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
              <ul className="mt-8 space-y-6">
                {bullets.map(({ Icon, text }, index) => (
                  <motion.li
                    key={text}
                    variants={index % 2 === 0 ? slideInLeft : slideInRight}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex items-center gap-3"
                    transition={transition}
                  >
                    <span className="inline-grid place-items-center w-9 h-9 rounded-full bg-white/[0.05] border border-white/10">
                      <Icon className="w-5 h-5 text-[#84C718]" />
                    </span>
                    <motion.span
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {text.split(" ").map((word, idx) => (
                        <motion.span
                          key={idx}
                          variants={fadeUp}
                          className="inline-block mr-1"
                          transition={transition}
                          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SectionPortfolio;