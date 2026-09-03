import { profile } from '../../data/profile';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <p>{profile.role}</p>
      <h1>{profile.headline}</h1>
      <p>안녕하세요, <strong>{profile.name}</strong>입니다.</p>

      <div className={styles.links}>
        <a href="#projects" className={styles.project}>프로젝트 보러가기</a>
        <a href={profile.githubUrl} target="_blank" rel="git" className={styles.git}>
          GitHub
        </a>
      </div>
    </section>
  );
}