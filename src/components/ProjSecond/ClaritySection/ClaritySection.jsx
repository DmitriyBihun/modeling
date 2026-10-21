import FooterBlock from "@/components/shared/FooterBlock/FooterBlock";
import styles from './ClaritySection.module.css'
import AnimatedScrollText from "@/components/shared/AnimatedScrollText/AnimatedScrollText";

const phrase = 'WHEN IDEAS ARE PRESENTED WITH STRUCTURE AND VISUAL CLARITY, THEY BECOME EASIER TO UNDERSTAND, REMEMBER, AND SUPPORT. THIS DECK PROVIDES A SPACE WHERE AESTHETICS AND STRATEGY WORK TOGETHER — HELPING YOUR VISION STAND OUT IN A CROWDED WORLD.'

function ClaritySection() {
    return (
        <section className={styles.claritySection}>
            <div className={styles.clarityContainer}>
                <div className={styles.clarityTop}>
                    <span>WHY THIS MATTERS</span>
                    <div className={styles.clarityTopText}>
                        <p>Where clarity meets strategy.</p>
                    </div>
                </div>
                <div className={styles.clarityContent}>
                    <div className={styles.leftText}>
                        <p>In today's creative landscape, attention is earned through precision and meaning.</p>
                    </div>
                    <div className={styles.clarityInfo}>
                        <div className={styles.mainText}>
                            <AnimatedScrollText 
                                Tag="p"
                                text={phrase}
                            />
                        </div>
                        <div className={styles.clarityStatistics}>
                            <div>
                                <span>3x</span>
                                <p>In today's creative landscape, attention is earned through precision and meaning.</p>
                            </div>
                            <div>
                                <span>40%</span>
                                <p>In today's creative landscape, attention is earned through precision and meaning</p>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBlock />

            </div>
        </section>
    );
}

export default ClaritySection;