import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import brandBigImg from '../../../assets/Proj_3/brandBigImg.avif'
import brandSmallImg from '../../../assets/Proj_3/brandSmallImg.avif'
import styles from './BrandPersonalitySection.module.css';

const BrandPersonalitySection = () => {
    return (
        <section className={styles.brandSection}>
            <div className={styles.brandContainer}>
                <HeaderBlock
                    left='BRAND PERSONALITY'
                    right='Contact'
                />

                <div className={styles.mainContent}>
                    <div className={styles.textRow}>
                        <h2 className={styles.heading}>
                            A Calm, Confident, Modern Voice
                        </h2>
                        <p className={styles.description}>
                            This brand expresses a balance of quiet confidence and modern minimalism. It feels refined, intentional, warm — not loud, but undeniably present.
                        </p>
                    </div>

                    <div className={styles.imagesRow}>
                        <div className={styles.largeImageWrapper}>
                            <img src={brandBigImg} alt="Brand atmosphere" />
                        </div>
                        <div className={styles.smallImageWrapper}>
                            <img src={brandSmallImg} alt="Brand personality face" />
                        </div>
                    </div>
                </div>

                <FooterBlock />
            </div>
        </section>
    );
};

export default BrandPersonalitySection;