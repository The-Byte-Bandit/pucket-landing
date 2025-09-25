import Accordion, { FAQItem } from "../components/accordion";

export default function SectionFAQ() {
    const items: FAQItem[] = [
        { id: 1, q: "What is Pucket?", a: "A fast, secure crypto exchange with wallets, cards and vault." },
        { id: 2, q: "Is Pucket available worldwide?", a: "We support most countries with ongoing regional expansion." },
        { id: 3, q: "Is my information secure?", a: "We use encryption at rest and in transit with strict access controls." },
        { id: 4, q: "Are there any deposit or withdrawal fees?", a: "Fees are transparent and displayed before confirmation." },
        { id: 5, q: "Advanced trading tools?", a: "Yes, charting, alerts, and automated strategies are supported." },
    ];
    return (
        <section id="help" className="max-w-screen-xl mx-auto pt-20">
            <h3 className="text-center text-2xl font-bold text-white">Learn more about Pucket</h3>
            <div className="mt-8">
                <Accordion items={items} />
            </div>
        </section>
    );
}


