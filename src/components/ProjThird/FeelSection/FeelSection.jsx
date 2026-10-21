import FooterBlock from "@/components/shared/FooterBlock/FooterBlock";
import HeaderBlock from "@/components/shared/HeaderBlock/HeaderBlock";
import styles from './FeelSection.module.css'

function FeelSection() {
    return (
        <section className={styles.feelSection}>
            <div className={styles.feelContainer}>
                <HeaderBlock
                    left='WHAT PEOPLE FEEL'
                    center='Motivation'
                    right='CONTACT'
                />
                <div className={styles.conceptContent}>
                    <p>
                        THIS IDEA TRANSFORMS YOUR AUDIENCE INTO CO-CREATORS — INVITING THEM TO EXPRESS, SHARE, AND CONNECT THROUGH VISUAL IDENTITY AND STORYTELLING.
                    </p>
                </div>
                <FooterBlock />

            </div>
        </section>
    );
}

export default FeelSection;