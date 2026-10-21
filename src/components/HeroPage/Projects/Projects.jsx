import { Link } from 'react-router-dom';
import { projects } from '../../../data/projects';
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div className={styles.projectsSection}>
      <div className={styles.container}>

        <nav>
          <ul className={styles.projectList}>
            {projects.map((project) => (
              <li key={project.id} className={styles.projectItem}>
                <Link to={project.path} className={styles.link}>
                  <span className={styles.number}>{project.id} /</span>
                  <h4 className={styles.title}>{project.title}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default Projects;