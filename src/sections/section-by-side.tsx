import { FiHeadphones, FiUsers, FiGift } from "react-icons/fi";
import bgGraph from "../assets/bg-graph.png";
import { motion, useReducedMotion, useInView, AnimatePresence } from "framer-motion";
import { slideInLeft, slideInRight, staggerContainer, fadeIn } from "../components/motion";
import { useRef } from "react";

interface Item {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const SectionBySide: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: "easeOut" };

  const subtitleWords = "Always by your side".split(" ");
  const titleWords = "Be the first to use our Pucket!".split(" ");
  const descriptionWords = "Get faster, safer, more affordable cloud object storage with no central point of failure.".split(" ");

  const items: Item[] = [
    {
      title: "24/7 Support",
      desc: "Need help? Get your requests solved quickly via support team.",
      Icon: FiHeadphones,
    },
    {
      title: "Community",
      desc: "Join the conversations on our worldwide communities.",
      Icon: FiUsers,
    },
    {
      title: "Academy",
      desc: "Learn blockchain and crypto for free.",
      Icon: FiGift,
    },
  ];

  return (
    <section ref={ref} id="support" className="max-w-screen-xl mx-auto pt-20 md:pt-32 px-4 md:px-8">
      <AnimatePresence>
        {isInView && (
          <>
            <motion.p
              className="text-center text-md text-white"
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
                  {word === "side" ? (
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
              className="mt-3 text-center text-3xl sm:text-4xl text-white"
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
            <motion.p
              className="mt-4 text-center text-gray-400 max-w-3xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {descriptionWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={fadeIn}
                  className="inline-block mr-1"
                  transition={transition}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <motion.div
              className="mt-10 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeIn}
            >
              <img
                className="absolute left-0 right-0 -bottom-6 w-full opacity-80"
                src={bgGraph}
                alt="background graph"
              />
              <motion.div
                className="relative grid sm:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={staggerContainer}
              >
                {items.map(({ title, desc, Icon }, index) => (
                  <motion.div
                    key={title}
                    variants={index % 2 === 0 ? slideInLeft : slideInRight}
                    className="text-center px-4 py-6"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    transition={transition}
                  >
                    <div className="mx-auto w-12 h-12 rounded-full bg-white/[0.06] backdrop-blur-lg border border-white/10 grid place-items-center shadow">
                      <Icon className="w-6 h-6 text-[#84C718]" />
                    </div>
                    <motion.p
                      className="mt-4 text-white font-semibold"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {title.split(" ").map((word, idx) => (
                        <motion.span
                          key={idx}
                          variants={fadeIn}
                          className="inline-block mr-1"
                          transition={transition}
                          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                    <motion.p
                      className="mt-2 text-sm text-gray-400 max-w-xs mx-auto"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {desc.split(" ").map((word, idx) => (
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
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SectionBySide;