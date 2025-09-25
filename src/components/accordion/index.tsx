export type FAQItem = { id: number; q: string; a: string };

type AccordionProps = { items: FAQItem[] };

export default function Accordion({ items }: AccordionProps) {
    return (
        <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
            {items.map((it) => (
                <details key={it.id} className="group p-5 open:bg-white/[0.02]">
                    <summary className="cursor-pointer list-none flex items-center justify-between text-white font-medium">
                        {it.q}
                        <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-xs text-gray-300 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <p className="mt-3 text-sm text-gray-400">{it.a}</p>
                </details>
            ))}
        </div>
    );
}


