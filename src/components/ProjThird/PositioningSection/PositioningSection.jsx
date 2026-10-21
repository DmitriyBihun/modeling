import styles from './PositioningSection.module.css';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import positioningImg1 from '../../../assets/Proj_3/Positioning1.avif'
import positioningImg2 from '../../../assets/Proj_3/Positioning2.avif'
import positioningImg3 from '../../../assets/Proj_3/Positioning3.avif'
import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import AnimatedScrollText from '@/components/shared/AnimatedScrollText/AnimatedScrollText';

const textContent = "WE HELP MODERN BRANDS COMMUNICATE THEIR IDEAS WITH CLARITY, ELEGANCE, AND INTENTION — THROUGH STRUCTURED DESIGN, MINIMAL AESTHETICS, AND EMOTIONALLY DRIVEN STORYTELLING.";

const PositioningSection = () => {
    return (
        <section className={styles.positioningSection}>
            <div className={styles.positioningContainer}>

                <HeaderBlock
                    left='POSITIONING STATEMENT'
                    right='Contact'
                />

                <div className={styles.mainContentWrapper}>
                    <div className={styles.mainContentInner}>

                        <div className={styles.topBlock}>
                            <div className={styles.topPrimary}>
                                <img src={positioningImg1} alt="Brand visual" className={styles.imageMain} />
                                <p className={styles.topText}>
                                    We position the brand at the intersection of modern design, visual clarity, and emotional storytelling. Not just a visual identity — it's a framework for meaningful communication.
                                </p>
                            </div>
                            <img src={positioningImg2} alt="Detail" className={styles.imageSmall} />
                        </div>

                        <AnimatedScrollText
                            text={textContent}
                            Tag='h2'
                            className={styles.largeStatement}
                        />

                        <div className={styles.bottomBlock}>
                            <div className={styles.bottomContent}>
                                <img src={positioningImg3} alt="Target audience" className={styles.imageMedium} />
                                <div className={styles.bottomTextWrapper}>
                                    <h4>Target Audience</h4>
                                    <p>Brands, creatives, and professionals seeking a refined, modern, editorial-inspired visual language.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <FooterBlock />
            </div>
        </section>
    );
};

export default PositioningSection;