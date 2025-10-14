import { GoPlus } from "react-icons/go";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "../motion";
export type FAQItem = { id: number; q: string; a: string };

type AccordionProps = { items: FAQItem[] };

export default function Accordion({ items }: AccordionProps) {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: "easeOut" };

  return (
    <motion.div
      className="mx-auto max-w-4xl"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={staggerContainer}
    >
      <AnimatePresence>
        {items.map((it, index) => (
          <motion.details
            key={it.id}
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] mb-3 overflow-hidden"
            transition={transition}
          >
            <summary
              className="cursor-pointer list-none flex items-center justify-between px-6 py-5 text-white font-medium"
            >
              <motion.span
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-white/90 text-md md:text-xl"
              >
                {it.q.split(" ").map((word, idx) => (
                  <motion.span
                    key={idx}
                    variants={fadeUp}
                    className="inline-block mr-1"
                    transition={transition}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, color: "#84C718" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                animate={{ rotate: document.querySelector(`details[open]#faq-${it.id}`) ? 45 : 0 }}
                transition={transition}
                className="ml-4 inline-flex items-center justify-center"
                id={`faq-${it.id}`}
              >
                <GoPlus className="w-6 h-6 text-[#84C718]" />
              </motion.span>
            </summary>
            <AnimatePresence>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={transition}
                className="overflow-hidden"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="px-6 pb-5"
                >
                  <p className="text-sm md:text-md text-gray-400">
                    {it.a.split(" ").map((word, idx) => (
                      <motion.span
                        key={idx}
                        variants={fadeUp}
                        className="inline-block mr-1"
                        transition={transition}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.details>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}