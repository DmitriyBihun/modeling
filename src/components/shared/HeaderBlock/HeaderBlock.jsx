import styles from './HeaderBlock.module.css'

function HeaderBlock({ left, center, right }) {
    return (
        <div className={`${styles.header} ${center ? styles.withCenter : ''}`}>
            <div className={styles.left}>
                <p>{left}</p>
            </div>
            {center && <div className={styles.center}>{center}</div>}
            <div className={styles.right}>
                <p>{right}</p>
            </div>
        </div>
    );
}

export default HeaderBlock;