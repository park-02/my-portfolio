import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>

      <div className={styles.container}>
        <div className={styles.fullbox}>
          <div className={`${styles.skillCategory} ${styles.blue}`}>Frontend</div>
          <div className={styles.tagList}>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>TypeScript</span>
          </div>
        </div>

        <div className={styles.fullbox}>
          <div className={`${styles.skillCategory} ${styles.yellow}`}>Backend</div>
          <div className={styles.tagList}>
            <span className={styles.tag}>Spring Boot</span>
            <span className={styles.tag}>JPA</span>
          </div>
        </div>

        <div className={styles.fullbox}>
          <div className={`${styles.skillCategory} ${styles.blue}`}>Tool</div>
          <div className={styles.tagList}>
            <span className={styles.tag}>Git</span>
            <span className={styles.tag}>GitHub</span>
          </div>
        </div>

        <div className={styles.fullbox}>
          <div className={`${styles.skillCategory} ${styles.yellow}`}>AI Tool</div>
          <div className={styles.tagList}>
            <span className={styles.tag}>ChatGPT</span>
            <span className={styles.tag}>Copilot</span>
          </div>
        </div>
      </div>
    </section>
  );
}