import ThemeSwitcher from './ThemeSwitcher';
import styles from './Gnb.module.css';

export default function Gnb() {
  return (
    <header className={styles.gnb}>
      <h1 className={styles.logo}>
        <a href='#hero'>박성현의 포트폴리오</a>
      </h1>

      <nav>
        <ul className={styles.navList}>
          <li><a href='#hero'>Home</a></li> 
          <li><a href='#about'>About</a></li> 
          <li><a href='#skills'>Skills</a></li> 
          <li><a href='#projects'>Projects</a></li> 
          <li><a href='#career'>Career</a></li> 
          <li><a href='#archive'>Archive</a></li> 
        </ul>
      </nav>
      
      <ThemeSwitcher />
    </header>
  );
}
