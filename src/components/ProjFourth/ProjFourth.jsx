import ProjectHeroSection from "../shared/ProjectHeroSection/ProjectHeroSection";
import AudienceSection from "./AudienceSection/AudienceSection";
import ElevatingIdeasSection from "./ElevatingIdeasSection/ElevatingIdeasSection";
import MarketSnapshotSection from "./MarketSnapshotSection/MarketSnapshotSection";
import MissionSection from "./MissionSection/MissionSection";
import conceptImg from '../../assets/Proj_4/conceptImg.avif'
import ContactSection from "../shared/ContactSection/ContactSection";
import Logo from "../shared/Logo/Logo";

function ProjFourth() {
    return (
        <>
            <Logo />

            <ProjectHeroSection
                headerLeft='\ Concept Directions'
                imageSrc={conceptImg}
                title='Concept Directions'
            />

            <AudienceSection />

            <MissionSection />

            <ElevatingIdeasSection />

            <MarketSnapshotSection />

            <ContactSection />
        </>
    );
}

export default ProjFourth;