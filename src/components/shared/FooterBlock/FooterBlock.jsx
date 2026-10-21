import styles from './FooterBlock.module.css'

function FooterBlock() {
    return (
        <div className={styles.sectionFooter}>
            <span>NEW YORK CITY</span>
            <span className={styles.brandName}>NAME OF THE BRAND</span>
            <span>JANUARY &apos;26</span>
        </div>
    )
}

export default FooterBlock;
