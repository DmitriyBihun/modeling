import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import audienceFaceImg from '../../../assets/Proj_4/AudienceBigImg.avif'; 
import audienceSuitImg from '../../../assets/Proj_4/AudienceSmallImg.avif'; 
import styles from './AudienceSection.module.css';

function AudienceSection() {
    return (
        <section className={styles.audienceSection}>
            <div className={styles.container}>
                <HeaderBlock
                    left="AUDIENCE OVERVIEW"
                    right="CONTACT"
                />

                <div className={styles.mainContent}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.mainHeading}>
                            A visually fluent,<br />
                            emotionally-driven<br />
                            audience.
                        </h2>

                        <div className={styles.imagesWrapper}>
                            <div className={styles.imageLarge}>
                                <img src={audienceFaceImg} alt="Audience close up" />
                            </div>
                            <div className={styles.imageSmall}>
                                <img src={audienceSuitImg} alt="Audience style" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <div className={styles.infoBlock}>
                            <h4>Today's audience values</h4>
                            <p>
                                clarity over noise<br />
                                emotional depth over decoration<br />
                                storytelling over simple visuals
                            </p>
                        </div>

                        <div className={styles.infoBlock}>
                            <h4>Age Range</h4>
                            <p>22—45</p>
                        </div>

                        <div className={styles.infoBlock}>
                            <h4>Interests</h4>
                            <p>fashion, creative culture,<br />personal growth, visual<br />storytelling</p>
                        </div>
                    </div>
                </div>

                <FooterBlock />
            </div>
        </section>
    );
}

export default AudienceSection;