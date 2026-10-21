import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import styles from './Logo.module.css';

function Logo() {
    return (
        <Link to={ROUTES.home} className={styles.logo} aria-label="Go to home page">
            L
        </Link>
    );
}

export default Logo;
