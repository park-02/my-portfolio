import styles from "./Gnb.module.css";

export default function Gnb() {
  return (
    <header className={styles.gnb}>
      <h1 className={styles.logo}>
        <a href="#hero">박성현의 포트폴리오</a>
      </h1>

      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
          <li>
            <a href="#archive">Archive</a>
          </li>

          <li>
            <div className={styles.box}>
              <select>
                <option>기본</option>
                <option>빨간색</option>
                <option>주황색</option>
                <option>노란색</option>
                <option>초록색</option>
              </select>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
