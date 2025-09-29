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
        <section id="faq" className="max-w-screen-xl mx-auto pt-32 px-4 md:px-8">
            <p className="text-center text-md text-white">Popular <span className="bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] bg-clip-text text-transparent">questions</span></p>
            <h3 className="mt-3 text-center text-3xl sm:text-4xl text-white">Learn more about Pucket</h3>
            <p className="mt-3 text-center text-gray-400">We accept 100+ cryptocurrencies around the world</p>
            <div className="mt-10">
                <Accordion items={items} />
            </div>
        </section>
    );
}


