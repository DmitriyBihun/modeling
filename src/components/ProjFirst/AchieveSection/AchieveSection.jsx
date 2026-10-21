import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import styles from './AchieveSection.module.css';

const AchieveSection = () => {
    return (
        <section className={styles.achieveSection}>
            <div className={styles.achieveContainer}>
                <HeaderBlock
                    left="WHAT WE AIM TO ACHIEVE"
                    right="CONTACT"
                />

                <div className={styles.mainContent}>
                    {/* Левая колонка */}
                    <div className={styles.leftColumn}>
                        <h2 className={styles.mainHeading}>
                            Turning ideas into clear, confident communication
                        </h2>
                    </div>

                    {/* Правая колонка */}
                    <div className={styles.rightColumn}>
                        <p className={styles.topDescription}>
                            Our goal is to translate complex thoughts into a refined and visually cohesive story. By aligning structure, design, and intention, this presentation helps you articulate what matters most — and ensure it resonates.
                        </p>

                        {/* Внутренний грид для пунктов */}
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureItem}>
                                <span className={styles.featureNumber}>01/</span>
                                <h4>Structure</h4>
                                <p>Organize your message into a logical, intuitive flow.</p>
                            </div>
                            <div className={styles.featureItem}>
                                <span className={styles.featureNumber}>03/</span>
                                <h4>Impact</h4>
                                <p>Strengthen how your work is perceived through thoughtful storytelling.</p>
                            </div>
                            <div className={styles.featureItem}>
                                <span className={styles.featureNumber}>02/</span>
                                <h4>Clarity</h4>
                                <p>Make key ideas easy to understand at first glance.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterBlock />
            </div>
        </section>
    );
};

export default AchieveSection;