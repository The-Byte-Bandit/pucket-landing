import { RiBtcFill } from "react-icons/ri";
import { SiEthereum, SiLitecoin, SiPolkadot, SiSolana, SiChainlink } from "react-icons/si";
import { motion, useReducedMotion, useInView, AnimatePresence } from "framer-motion";
import { slideInLeft, slideInRight, staggerContainer, fadeIn } from "../components/motion";
import { useRef } from "react";

interface CoinCard {
  label: string;
  name: string;
  price: string;
  Icon: React.ComponentType<{ className?: string; color?: string }>;
  color: string;
}

const SectionCoins: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: "easeOut" };

  const titleWords = "Top crypto coins updates".split(" ");
  const subtitleWords = "Featured crypto coins".split(" ");

  const cards: CoinCard[] = [
    { label: "Highest volume", name: "Bitcoin", price: "93,575.5", Icon: RiBtcFill, color: "#F7931A" },
    { label: "Top gainer", name: "Ethereum", price: "3,337.28", Icon: SiEthereum, color: "#627EEA" },
    { label: "New listing", name: "Litecoin", price: "105.000", Icon: SiLitecoin, color: "#345D9D" },
    { label: "Most traded", name: "Polkadot", price: "6.6423", Icon: SiPolkadot, color: "#E6007A" },
    { label: "Biggest gainers", name: "Solana", price: "189.63", Icon: SiSolana, color: "#14F195" },
    { label: "Trending", name: "Chainlink", price: "19.991", Icon: SiChainlink, color: "#2A5ADA" },
  ];

  return (
    <section ref={ref} id="coins" className="max-w-screen-xl mx-auto pt-0 md:pt-14 px-4 sm:px-8">
      <AnimatePresence>
        {isInView && (
          <>
            <motion.p
              className="text-center text-md tracking-wider text-white"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {subtitleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={fadeIn}
                  className="inline-block mr-1"
                  transition={transition}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05, color: "#84C718" }}
                >
                  {word === "crypto" ? (
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
              className="mt-4 text-center text-3xl sm:text-4xl text-white"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={fadeIn}
                  className="inline-block mr-2"
                  transition={transition}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05, color: "#84C718" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.div
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={staggerContainer}
            >
              {cards.map(({ label, name, price, Icon, color }, index) => (
                <motion.div
                  key={label}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] py-5 px-8 xl:px-5 duration-300 hover:scale-105 hover:shadow-lg"
                  whileHover={shouldReduceMotion ? {} : { y: -5 }}
                  transition={transition}
                >
                  <motion.p
                    className="text-sm text-gray-400 mb-5"
                    variants={fadeIn}
                    transition={transition}
                  >
                    {label.split(" ").map((word, idx) => (
                      <motion.span
                        key={idx}
                        variants={fadeIn}
                        className="inline-block mr-1"
                        transition={transition}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                  <div className="flex flex-col justify-start items-start gap-3">
                    <Icon className="w-9 h-9" color={color} />
                    <div className="flex flex-col gap-1">
                      <motion.p
                        className="text-white text-md font-semibold leading-tight"
                        variants={fadeIn}
                        transition={transition}
                      >
                        {name.split(" ").map((word, idx) => (
                          <motion.span
                            key={idx}
                            variants={fadeIn}
                            className="inline-block mr-1"
                            transition={transition}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </motion.p>
                      <motion.p
                        className="text-sm leading-tight"
                        variants={fadeIn}
                        transition={transition}
                      >
                        {price.split(" ").map((word, idx) => (
                          <motion.span
                            key={idx}
                            variants={fadeIn}
                            className="inline-block mr-1"
                            transition={transition}
                          >
                            {word}
                          </motion.span>
                        ))}
                        <span className="text-gray-400"> USD</span>
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SectionCoins;