import { motion, useReducedMotion, useInView, AnimatePresence } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "../components/motion";
import Accordion, { FAQItem } from "../components/accordion";
import { useRef } from "react";

// const SectionFAQ: React.FC = () => {
//   const ref = useRef<HTMLElement>(null);
//   const isInView = useInView(ref, { amount: 0.2 });
//   const shouldReduceMotion = useReducedMotion();
//   const transition = shouldReduceMotion
//     ? { duration: 0 }
//     : { duration: 0.3, ease: "easeOut" };

//   const subtitleWords = "Popular questions".split(" ");
//   const titleWords = "Learn more about Pucket".split(" ");
//   const descriptionWords = "We accept 100+ cryptocurrencies around the world".split(" ");

//   const items: FAQItem[] = [
//     { id: 1, q: "What is Pucket?", a: "A fast, secure crypto exchange with wallets, cards and vault." },
//     { id: 2, q: "Is Pucket available worldwide?", a: "We support most countries with ongoing regional expansion." },
//     { id: 3, q: "Is my information secure?", a: "We use encryption at rest and in transit with strict access controls." },
//     { id: 4, q: "Are there any deposit or withdrawal fees?", a: "Fees are transparent and displayed before confirmation." },
//     { id: 5, q: "Advanced trading tools?", a: "Yes, charting, alerts, and automated strategies are supported." },
//   ];

//   return (
//     <section ref={ref} id="faq" className="max-w-screen-xl mx-auto pt-20 md:pt-32 px-4 md:px-8">
//       <AnimatePresence>
//         {isInView && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={staggerContainer}
//           >
//             <motion.p
//               className="text-center text-md text-white"
//               variants={staggerContainer}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               {subtitleWords.map((word, index) => (
//                 <motion.span
//                   key={index}
//                   variants={fadeIn}
//                   className="inline-block mr-1"
//                   transition={transition}
//                   whileHover={shouldReduceMotion ? {} : { scale: 1.05, color: "#84C718" }}
//                 >
//                   {word === "questions" ? (
//                     <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">
//                       {word}
//                     </span>
//                   ) : (
//                     word
//                   )}
//                 </motion.span>
//               ))}
//             </motion.p>
//             <motion.h3
//               variants={staggerContainer}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="mt-3 text-center text-3xl sm:text-4xl text-white"
//             >
//               {titleWords.map((word, index) => (
//                 <motion.span
//                   key={index}
//                   variants={fadeUp}
//                   className="inline-block mr-2"
//                   transition={transition}
//                   whileHover={shouldReduceMotion ? {} : { scale: 1.05, color: "#84C718" }}
//                 >
//                   {word}
//                 </motion.span>
//               ))}
//             </motion.h3>
//             <motion.p
//               variants={staggerContainer}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="mt-3 text-center text-gray-400"
//             >
//               {descriptionWords.map((word, index) => (
//                 <motion.span
//                   key={index}
//                   variants={fadeIn}
//                   className="inline-block mr-1"
//                   transition={transition}
//                 >
//                   {word}
//                 </motion.span>
//               ))}
//             </motion.p>
//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="mt-10"
//             >
//               <Accordion items={items} />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default SectionFAQ;



const SectionFAQ: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.33, 0, 0.67, 1] };

  const subtitleWords = "Popular questions".split(" ");
  const titleWords = "Learn more about Pucket".split(" ");
  const descriptionWords = "We accept 100+ cryptocurrencies around the world".split(" ");

  const items: FAQItem[] = [
    { id: 1, q: "What is Pucket?", a: "A fast, secure crypto exchange with wallets, cards and vault." },
    { id: 2, q: "Is Pucket available worldwide?", a: "We support most countries with ongoing regional expansion." },
    { id: 3, q: "Is my information secure?", a: "We use encryption at rest and in transit with strict access controls." },
    { id: 4, q: "Are there any deposit or withdrawal fees?", a: "Fees are transparent and displayed before confirmation." },
    { id: 5, q: "Advanced trading tools?", a: "Yes, charting, alerts, and automated strategies are supported." },
  ];

  return (
    <section ref={ref} id="faq" className="max-w-screen-xl mx-auto pt-20 md:pt-32 px-4 md:px-8">
      <AnimatePresence>
        {isInView && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={staggerContainer}
          >
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
                  {word === "questions" ? (
                    <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.p>
            <motion.h3
              className="mt-3 text-center text-3xl sm:text-4xl text-white"
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
            </motion.h3>
            <motion.p
              className="mt-3 text-center text-gray-400"
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
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-10"
            >
              <Accordion items={items} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SectionFAQ;