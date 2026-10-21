import { Link } from 'react-router-dom';
import { projects } from '../../../data/projects';
import styles from './ContactSection.module.css';

function ContactSection() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>

                <div className={styles.mainContent}>
                    <div className={styles.heroText}>
                        <h1 className={styles.hugeHeading}>GET IN TOUCH</h1>
                        <a href="mailto:hello@bhanka.com" className={styles.emailLink}>
                            hello@bhanka.com
                        </a>
                    </div>

                    <div className={styles.projectsBlock}>
                        <h4 className={styles.projectsLabel}>Projects:</h4>

                        <div className={styles.projectsGrid}>
                            {projects.map((project) => (
                                <Link
                                    key={project.id}
                                    to={project.path}
                                    className={styles.projectLink}
                                >
                                    {project.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ContactSection;