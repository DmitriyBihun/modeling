import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <p className={styles.code}>404</p>
                <h1 className={styles.title}>Page not found</h1>
                <p className={styles.description}>
                    The page you are looking for does not exist or has moved.
                </p>
                <Link to={ROUTES.home} className={styles.link}>
                    Back to home
                </Link>
            </div>
        </main>
    )
}

export default NotFoundPage
