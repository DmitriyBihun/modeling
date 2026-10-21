import tocSmall1 from '../../../assets/heroPageImages/tocSmall1.avif'
import tocSmall2 from '../../../assets/heroPageImages/tocSmall2.avif'
import FooterBlock from '@/components/shared/FooterBlock/FooterBlock';
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock';
import styles from './TocSection.module.css'

function TocSection() {

    const menuItems = [
        'Overview',
        'Brand Essence',
        'Insight & Audience',
        'Concept Directions',
        'Visual Language',
        'Process & Methodology',
        'Results & Value',
        'Contact',
    ];

    return (
        <section className={styles.tocSection}>
            <div className={styles.tocContainer}>
                <HeaderBlock
                    left='TABLE OF CONTENTS'
                    right='CONTACT'
                />

                <div className={styles.tocMain}>

                    <div className={styles.tocImages}>
                        <div className={styles.imageWrapper}>
                            <img src={tocSmall1} alt="Portrait" />
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src={tocSmall2} alt="Detail" />
                        </div>
                    </div>

                    <div className={styles.tocListWrapper}>
                        <ul className={styles.tocList}>
                            {menuItems.map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <FooterBlock />

            </div>
        </section>
    );
}

export default TocSection;