import ProjectHeroSection from "../shared/ProjectHeroSection/ProjectHeroSection";
import BrandPersonalitySection from "./BrandPersonalitySection/BrandPersonalitySection";
import FeelSection from "./FeelSection/FeelSection";
import PositioningSection from "./PositioningSection/PositioningSection";
import insightImg from '../../assets/Proj_3/insightImg.avif'
import ContactSection from "../shared/ContactSection/ContactSection";
import Logo from "../shared/Logo/Logo";


function ProjThird() {
    return (
        <>
            <Logo />

            <ProjectHeroSection
                headerLeft='\ The Modern Voice'
                imageSrc={insightImg}
                title='Insight & Audience'
            />

            <BrandPersonalitySection />

            <PositioningSection />

            <FeelSection />

            <ContactSection />
        </>
    );
}

export default ProjThird;