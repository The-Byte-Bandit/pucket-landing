import { GoPlus } from "react-icons/go";

export type FAQItem = { id: number; q: string; a: string };

type AccordionProps = { items: FAQItem[] };

export default function Accordion({ items }: AccordionProps) {
    return (
        <div className="mx-auto max-w-4xl">
            {items.map((it) => (
                <details key={it.id} className="group rounded-2xl border border-white/10 bg-white/[0.03] mb-3 overflow-hidden">
                    <summary className="cursor-pointer list-none flex items-center justify-between px-6 py-5 text-white font-medium">
                        <span className="text-white/90 text-md md:text-xl">{it.q}</span>
                        <span className="ml-4 inline-flex items-center justify-center transition-transform group-open:rotate-45">
                            <GoPlus className="w-6 h-6 text-[#84C718]" />
                        </span>
                    </summary>
                    <div className="px-6 pb-5">
                        <p className="text-sm md:text-md text-gray-400">{it.a}</p>
                    </div>
                </details>
            ))}
        </div>
    );
}


