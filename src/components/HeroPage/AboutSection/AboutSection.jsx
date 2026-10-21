import aboutImg1 from '../../../assets/heroPageImages/aboutSmall1.avif'
import aboutImg2 from '../../../assets/heroPageImages/aboutSmall2.avif'
import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import styles from './AboutSection.module.css'

function AboutSection() {
    return (
        <section className={styles.about}>
            <div className={styles.aboutContainer}>
                <HeaderBlock
                    left='About the brand'
                    right="Contact"
                />
                <div className={styles.mainContent}>
                    <div className={styles.aboutTop}>
                        <h1>ABOUT</h1>
                        <div className={styles.subTitleWrapper}>
                            <h2>Where Clarity Meets<br />Aesthetic Purpose</h2>
                        </div>
                    </div>

                    <div className={styles.aboutMain}>
                        <div className={styles.textContent}>
                            <p>This brand is built around calm visual communication, structured storytelling, and a refined sense of minimal design. Every element—from layout to typography—follows the idea of intentional simplicity: removing noise, amplifying meaning, and giving space for ideas to breathe. We are driven by visual clarity, emotional tactility, and modern editorial aesthetics.</p>
                        </div>

                        <div className={styles.imagesContent}>
                            <div className={styles.imageWrapper}>
                                <img src={aboutImg1} alt="Fashion shot" />
                            </div>
                            <div className={styles.imageWrapper}>
                                <img src={aboutImg2} alt="Architecture shot" />
                            </div>
                        </div>
                    </div>
                </div>

                <FooterBlock />

            </div>
        </section>
    );
}

export default AboutSection;