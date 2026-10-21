import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import takeawaysImg from '../../../assets/Proj_2/takeawaysImg.avif'
import styles from './TakeawaysSection.module.css';

function TakeawaysSection() {
    return (
        <section className={styles.takeawaysSection}>
            <div className={styles.takeawaysContainer}>
                <HeaderBlock
                    left="KEY TAKEAWAYS"
                    right="CONTACT"
                />

                <div className={styles.mainContent}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.mainHeading}>
                            What matters most in this presentation.
                        </h2>

                        <div className={styles.featuresGrid}>
                            <div className={styles.featureColumn}>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>01/</span>
                                    <h4>A clear narrative wins</h4>
                                    <p>Organize your message into a logical, intuitive flow.</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>02/</span>
                                    <h4>Emotion drives connection</h4>
                                    <p>Storytelling helps your audience relate, remember, and act.</p>
                                </div>
                            </div>

                            <div className={styles.featureColumn}>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>03/</span>
                                    <h4>Visual identity shapes perception</h4>
                                    <p>The right aesthetics elevate your message and support your brand.</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>04/</span>
                                    <h4>Simplicity amplifies impact</h4>
                                    <p>Focused content makes every slide more powerful.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <p className={styles.topDescription}>
                            This deck provides a flexible framework that adapts to different creative, strategic, or business needs. It emphasizes clarity, storytelling, and visual identity — ensuring your message remains both meaningful and memorable.
                        </p>

                        <div className={styles.imageWrapper}>
                            <img src={takeawaysImg} alt="Visual trend example" />
                        </div>
                    </div>
                </div>

                <FooterBlock />
            </div>
        </section>
    );
}

export default TakeawaysSection;