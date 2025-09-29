import Button from "../components/button";
import bgGroup from "../assets/bg_group.png";

export default function SectionCTA() {
    return (
        <section id="cta" className="max-w-screen-xl mx-auto pt-20 px-4 md:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                <img
                    src={bgGroup}
                    alt="cta background"
                    className="absolute right-0 top-0 h-full w-full object-cover opacity-25 pointer-events-none"
                    style={{ mixBlendMode: "screen" }}
                />
                <div className="relative px-6 xs:px-8 sm:px-12 py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="max-w-2xl">
                        <h3 className="text-2xl sm:text-3xl text-white">
                            Pucket powered by framer platform
                        </h3>
                        <p className="mt-4 text-sm text-gray-400">
                            Our landing page empower framer developers to have free, safer
                            and more trustworthy experiences
                        </p>
                    </div>
                    <div className="w-full md:w-auto shrink-0">
                        <Button className="whitespace-nowrap flex items-center gap-2 px-5 py-3 text-sm">
                            <span>Download App</span>
                            <span className="text-white">→</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}


