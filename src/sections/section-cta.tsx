import Button from "../components/button";
import bgGroup from "../assets/bg_group.png";
import { motion, useScroll, useTransform, useReducedMotion, useInView, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer, fadeUp } from "../components/motion";
import { useRef } from "react";

const SectionCTA: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -30]);
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: "easeOut" };

  const titleWords = "Pucket powered by framer platform".split(" ");
  const descriptionWords = "Our landing page empower framer developers to have free, safer and more trustworthy experiences".split(" ");

  return (
    <section ref={ref} id="cta" className="max-w-screen-xl mx-auto pt-0 md:pt-10 px-4 md:px-8">
      <AnimatePresence>
        {isInView && (
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
          >
            <motion.img
              src={bgGroup}
              alt="cta background"
              className="absolute right-0 top-0 h-full w-full object-cover opacity-25 pointer-events-none"
              style={{ y, mixBlendMode: "screen" }}
            />
            <div className="relative px-6 xs:px-8 sm:px-12 py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl">
                <motion.h3
                  className="text-2xl sm:text-3xl text-white"
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
                </motion.h3>
                <motion.p
                  className="mt-4 text-sm text-gray-400"
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
              </div>
              <motion.div
                className="w-full md:w-auto shrink-0"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transition}
              >
                <Button className="whitespace-nowrap flex items-center gap-2 px-5 py-3 text-sm">
                  <motion.span
                    variants={fadeUp}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    transition={transition}
                  >
                    Download App
                  </motion.span>
                  <span className="text-white">→</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SectionCTA;