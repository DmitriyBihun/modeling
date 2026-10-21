import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import styles from './MissionSection.module.css';

function MissionSection() {
    return (
        <section className={styles.missionSection}>
            <div className={styles.container}>
                <HeaderBlock
                    left="MISSION & CORE VALUES"
                    right="CONTACT"
                />

                <div className={styles.mainContent}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.mainHeading}>
                            Design With Purpose.<br />
                            Communicate With Intention.
                        </h2>
                        <p className={styles.description}>
                            Our goal is to translate complex thoughts into a refined and visually cohesive story. By aligning structure, design, and intention, this presentation helps you articulate what matters most — and ensure it resonates.
                        </p>
                    </div>

                    <div className={styles.rightColumn}>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureColumn}>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>01/</span>
                                    <h4>Clarity</h4>
                                    <p>Removing distractions to highlight what truly matters.</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>02/</span>
                                    <h4>Simplicity</h4>
                                    <p>Elegant, timeless, minimal design rooted in essential structure.</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>03/</span>
                                    <h4>Emotion</h4>
                                    <p>Visual narratives that create connection, trust, and memory.</p>
                                </div>
                            </div>

                            <div className={styles.featureColumn}>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>04/</span>
                                    <h4>Precision</h4>
                                    <p>Thoughtful composition, balanced layouts, refined typography.</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureNumber}>05/</span>
                                    <h4>Consistency</h4>
                                    <p>A cohesive identity that stays calm, strong, and unmistakably recognizable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterBlock />
            </div>
        </section>
    );
}

export default MissionSection;