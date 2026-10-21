import conceptImg from '../../../assets/heroPageImages/conceptImg.avif';
import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import styles from './ConceptSection.module.css';
import AnimatedScrollText from '@/components/shared/AnimatedScrollText/AnimatedScrollText';

const phrase = "THIS SECTION OUTLINES KEY CREATIVE ROUTES YOUR PROJECT CAN TAKE. EACH DIRECTION BLENDS EMOTIONAL STORYTELLING WITH FUNCTIONAL CLARITY, GIVING YOU FLEXIBLE PATHWAYS THAT ADAPT TO DIFFERENT AUDIENCES, MOODS, AND BRAND OBJECTIVES.";

function ConceptSection() {

    return (
        <section className={styles.concept}>
            <div className={styles.conceptContainer}>

                <HeaderBlock
                    left='CONCEPT OVERVIEW'
                    center='A structured approach to shaping visual identity.'
                    right=''
                />

                <div className={styles.conceptContent}>
                    <AnimatedScrollText
                        Tag='p'
                        text={phrase}
                    />
                </div>

                <FooterBlock />

            </div>
            <img src={conceptImg} className={styles.conceptImage} alt="" />
        </section>
    );
}

export default ConceptSection;