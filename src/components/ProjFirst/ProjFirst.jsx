import ProjectHeroSection from '../shared/ProjectHeroSection/ProjectHeroSection';
import ContactSection from '../shared/ContactSection/ContactSection';
import AchieveSection from './AchieveSection/AchieveSection';
import PurposeSection from './PurposeSection/PurposeSection';
import TrendsSection from './TrendsSection/TrendsSection';
import Logo from '../shared/Logo/Logo';
import overviewImg from '../../assets/Proj_1/overviewImg.avif'

function ProjFirst() {
    return (
        <>
            <Logo />

            <ProjectHeroSection
                headerLeft='\ Structural Clarity'
                imageSrc={overviewImg}
                title='Overview'
            />

            <PurposeSection />

            <AchieveSection />

            <TrendsSection />

            <ContactSection />
        </>
    );
}

export default ProjFirst;
