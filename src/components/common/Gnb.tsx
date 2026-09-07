import { useState, useEffect } from "react";
import styles from "./Gnb.module.css";

export default function Gnb() {
  const [theme, setTheme] = useState<string>("default");

  // 테마 변경 시 최상위 <html> 태그의 data-theme 속성 업데이트
  useEffect(() => {
    if (theme === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

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
              {/* value와 onChange를 연결 */}
              <select
                value={theme}
                onChange={handleThemeChange}
                className={styles.themeSelect}
              >
                <option value="default">기본</option>
                <option value="red">빨간색</option>
                <option value="orange">주황색</option>
                <option value="yellow">노란색</option>
                <option value="green">초록색</option>
              </select>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
