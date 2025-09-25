import Navbar from "../sections/layout/navbar";
import SectionHero from "../sections/section-hero";
import SectionTrusted from "../sections/section-trusted";
import SectionCoins from "../sections/section-coins";
import SectionFeatures from "../sections/section-features";
import SectionFAQ from "../sections/section-faq";
import Footer from "../sections/layout/footer";

function Landing() {
    return (
        <main>
            <Navbar />

            <SectionHero />

            <SectionTrusted />

            <SectionCoins />

            <SectionFeatures />

            <SectionFAQ />

            <Footer />
        </main>
    );
}

export default Landing;


