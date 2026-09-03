import ThemeSwitcher from './ThemeSwitcher';
import styles from './Gnb.module.css';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About me', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Career', href: '#career' },
  { name: 'Archive', href: '#archive' },
];

export default function Gnb() {
  return (
    <header className={styles.gnb}>
      <h1 className={styles.logo}>
        <a href='#hero'>박성현의 포트폴리오</a>
      </h1>

      <nav>
        <ul className={styles.navList}>
          {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.name}</a>
              </li> 
            ))}
        </ul>
      </nav>
      
      <ThemeSwitcher />
    </header>
  );
}
