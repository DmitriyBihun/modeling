import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import trendsImg from '../../../assets/Proj_1/trendsImg.avif'
import styles from './TrendsSection.module.css';

const TrendsSection = () => {
    return (
        <section className={styles.trendsSection}>
            <div className={styles.trendsContainer}>
                <HeaderBlock
                    left="CULTURAL & VISUAL TRENDS"
                    right="CONTACT"
                />

                <div className={styles.mainContent}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.mainHeading}>
                            What shapes modern aesthetics
                        </h2>

                        <div className={styles.featuresGrid}>
                            <div className={styles.featureColumn}>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>01/</span>
                                    <h4>Soft minimalism</h4>
                                    <p>neutral tones, balance, quiet confidence</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>02/</span>
                                    <h4>Editorial layouts</h4>
                                    <p>calm grids, generous spacing, refined typography</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>03/</span>
                                    <h4>Slow visuals</h4>
                                    <p>simplicity, clarity, intention</p>
                                </div>
                            </div>

                            <div className={styles.featureColumn}>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>04/</span>
                                    <h4>Emotional storytelling</h4>
                                    <p>visuals that feel tactile and intimate</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>05/</span>
                                    <h4>Human-centered identity</h4>
                                    <p>faces, gestures, warmth, real textures</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <p className={styles.topDescription}>
                            Brands resonate when they blend clarity with emotion and aesthetics with meaning.
                        </p>

                        <div className={styles.imageWrapper}>
                            <img src={trendsImg} alt="Visual trend example" />
                        </div>
                    </div>
                </div>

                <FooterBlock />
            </div>
        </section>
    );
};

export default TrendsSection;