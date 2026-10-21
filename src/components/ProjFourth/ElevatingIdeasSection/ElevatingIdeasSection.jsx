import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import elevatingImg from '../../../assets/Proj_4/ElevatingImg.avif'; 
import styles from './ElevatingIdeasSection.module.css';

function ElevatingIdeasSection() {
    return (
        <section className={styles.elevatingSection}>
            <div className={styles.container}>
                <HeaderBlock
                    left="ELEVATING IDEAS"
                    right="CONTACT"
                />

                <div className={styles.mainContent}>
                    <div className={styles.leftColumn}>
                        <div className={styles.imageWrapper}>
                            <img src={elevatingImg} alt="Visual clarity concept" />
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <h2 className={styles.rightHeading}>
                            Through Visual Clarity &<br />
                            Emotional Precision
                        </h2>

                        <div className={styles.textList}>
                            <div className={styles.textItem}>
                                <span className={styles.itemNumber}>01/</span>
                                <p>
                                    In an oversaturated creative landscape, the most powerful ideas are the ones expressed with clarity. This brand elevates concepts by refining them — distilling complexity into calm, intentional visuals that resonate.
                                </p>
                            </div>

                            <div className={styles.textItem}>
                                <span className={styles.itemNumber}>02/</span>
                                <p>
                                    The approach blends aesthetic minimalism with functional storytelling, making every message feel structured, confident, and deeply human.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterBlock />
            </div>
        </section>
    );
}

export default ElevatingIdeasSection;