import styles from './PurposeSection.module.css';
import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import purposeImg from '../../../assets/Proj_1/purposeImg.avif'

const PurposeSection = () => {
    return (
        <section className={styles.purposeSection}>
            <div className={styles.purposeContainer}>
                <HeaderBlock 
                    left="PURPOSE OF THIS PRESENTATION"
                    right="CONTACT"
                />

                <div className={styles.mainContent}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.mainHeading}>
                            This presentation is designed to help you communicate ideas with clarity, structure, and intention.
                        </h2>

                        <div className={styles.threeColumnsText}>
                            <p>Establish a unified narrative</p>
                            <p>Highlight the value behind your work</p>
                            <p>Present information in a simple, compelling format</p>
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <div className={styles.imageWrapper}>
                            <img src={purposeImg} alt="Presentation visual" />
                        </div>
                        <p className={styles.rightDescription}>
                            It provides a visual and strategic foundation for showcasing concepts, explaining processes, or presenting a creative direction — whether to clients, teams, or stakeholders.
                        </p>
                    </div>
                </div>

                <FooterBlock />
            </div>
        </section>
    );
};

export default PurposeSection;