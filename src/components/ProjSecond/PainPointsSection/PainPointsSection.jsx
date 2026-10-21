import PainPointsImg from '../../../assets/Proj_2/PainPointsImg.avif'
import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import styles from './PainPointsSection.module.css';

const PainPointsSection = () => {
    return (
        <section className={styles.painPointsSection}>
            <div className={styles.painPointsContainer}>
                <HeaderBlock
                    left={"PAIN POINTS & OPPORTUNITIES"}
                    center={"Where design fills the gap"}
                    right={"Contact"}
                />

                <div className={styles.mainContent}>
                    <div className={styles.textGrid}>
                        <div className={styles.textColumn}>
                            <h4>Pain Points</h4>
                            <ul>
                                <li><p>Visual overload → Audiences crave clarity</p></li>
                                <li><p>Generic messaging → Lack of emotional resonance</p></li>
                                <li><p>Inconsistent identity → Weak brand perception</p></li>
                            </ul>
                        </div>

                        <div className={styles.textColumn}>
                            <h4>Opportunities</h4>
                            <ul>
                                <li><p>Minimalist structures create trust</p></li>
                                <li><p>Emotional storytelling increases retention</p></li>
                                <li><p>Unified visual systems feel premium and intentional</p></li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <img src={PainPointsImg} alt="Visual representation" />
                    </div>
                </div>

                <FooterBlock />
            </div>
        </section>
    );
};

export default PainPointsSection;