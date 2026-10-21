import ClaritySection from "./ClaritySection/ClaritySection";
import PainPointsSection from "./PainPointsSection/PainPointsSection";
import TakeawaysSection from "./TakeawaysSection/TakeawaysSection";
import brandImg from '../../assets/Proj_2/brandImg.avif'
import ProjectHeroSection from "../shared/ProjectHeroSection/ProjectHeroSection";
import ContactSection from "../shared/ContactSection/ContactSection";
import Logo from "../shared/Logo/Logo";

function ProjSecond() {
    return (
        <>
            <Logo />

            <ProjectHeroSection
                headerLeft='\ Brand Essence'
                imageSrc={brandImg}
                title='Brand Essence'
            />

            <TakeawaysSection />

            <ClaritySection />

            <PainPointsSection />

            <ContactSection />
        </>
    );
}

export default ProjSecond;