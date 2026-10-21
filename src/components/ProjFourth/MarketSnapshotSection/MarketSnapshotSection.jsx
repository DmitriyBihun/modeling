import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import styles from './MarketSnapshotSection.module.css';
import AnimatedScrollText from '@/components/shared/AnimatedScrollText/AnimatedScrollText';

const phrase = 'A CREATIVE INDUSTRY SHAPED BY CLARITY, AUTHENTICITY, AND EMOTIONAL RELEVANCE. THE MODERN VISUAL MARKET REWARDS SIMPLICITY, INTENTIONALITY, AND DESIGN THAT FEELS HUMAN.'

function MarketSnapshotSection() {
    return (
        <section className={styles.marketSection}>
            <div className={styles.container}>
                <HeaderBlock
                    left="MARKET SNAPSHOT"
                    right="CONTACT"
                />

                <div className={styles.mainContent}>
                    <AnimatedScrollText 
                        Tag='h2'
                        text={phrase}
                        className={styles.mainStatement}
                    />

                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>72%</span>
                            <p>of people feel more connected to brands with a clear visual identity</p>
                        </div>

                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>3x</span>
                            <p>higher engagement when visuals include human emotion or tactile detail</p>
                        </div>

                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>54%</span>
                            <p>prefer brands that communicate through minimal, refined aesthetics</p>
                        </div>
                    </div>
                </div>

                <FooterBlock />
            </div>
        </section>
    );
}

export default MarketSnapshotSection;