import Navbar from "../sections/layout/navbar";
import SectionHero from "../sections/section-hero";
import SectionTrusted from "../sections/section-trusted";
import SectionCoins from "../sections/section-coins";
import SectionFeatures from "../sections/section-features";
import SectionOptions from "../sections/section-options";
import SectionCTA from "../sections/section-cta";
import SectionPortfolio from "../sections/section-portfolio";
import SectionBySide from "../sections/section-by-side";
import SectionFAQ from "../sections/section-faq";
import Footer from "../sections/layout/footer";

function Landing() {
    return (
        <main id="top">
            <Navbar />

            <SectionHero />

            <SectionTrusted />

            <SectionCoins />

            <SectionFeatures />

            <SectionOptions />

            <SectionCTA />

            <SectionPortfolio />

            <SectionBySide />

            <SectionFAQ />

            <Footer />
        </main>
    );
}

export default Landing;


