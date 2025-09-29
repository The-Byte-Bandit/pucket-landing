import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion";

export type FAQItem = { id: number; q: string; a: string };

type AccordionProps = { items: FAQItem[] };

export default function Accordion({ items }: AccordionProps) {
    return (
        <motion.div className="mx-auto max-w-4xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
            {items.map((it) => (
                <motion.details key={it.id} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.03] mb-3 overflow-hidden">
                    <summary className="cursor-pointer list-none flex items-center justify-between px-6 py-5 text-white font-medium">
                        <span className="text-white/90 text-md md:text-xl">{it.q}</span>
                        <span className="ml-4 inline-flex items-center justify-center transition-transform group-open:rotate-45">
                            <GoPlus className="w-6 h-6 text-[#84C718]" />
                        </span>
                    </summary>
                    <motion.div variants={fadeUp} className="px-6 pb-5">
                        <p className="text-sm md:text-md text-gray-400">{it.a}</p>
                    </motion.div>
                </motion.details>
            ))}
        </motion.div>
    );
}


