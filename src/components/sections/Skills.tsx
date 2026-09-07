import styles from "./Skills.module.css";
import { SKILL_LIST } from "../../data/skills";

// 태그별 뱃지 컬러 (배경 / 텍스트)
const TAG_THEME: Record<string, { bg: string; color: string }> = {
  HTML: { bg: "#f1edff", color: "#de350b" },
  CSS: { bg: "#e6f0ff", color: "#0052cc" },
  JavaScript: { bg: "#f1edff", color: "#976e00" },
  React: { bg: "#e6f0ff", color: "#008da6" },
  TypeScript: { bg: "#f1edff", color: "#005fb8" },
  "Spring Boot": { bg: "#f1edff", color: "#2e7d32" },
  JPA: { bg: "#e6f0ff", color: "#bf5300" },
  Git: { bg: "#e6f0ff", color: "#c0392b" },
  GitHub: { bg: "#f1edff", color: "#24292e" },
  ChatGPT: { bg: "#f1edff", color: "#007a5a" },
  Gemini: { bg: "#e6f0ff", color: "#2b56b3" },
};

// 미지정 태그
const DEFAULT_THEME = { bg: "#f1f5f9", color: "#334155" };

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>

      <div className={styles.container}>
        {SKILL_LIST.map((skill) => (
          <div key={skill.id} className={styles.fullbox}>
            {/* 카테고리 뱃지 (blue / yellow 테마 클래스 매핑) */}
            <div className={`${styles.skillCategory} ${styles[skill.badge]}`}>
              {skill.category}
            </div>

            <div className={styles.tagList}>
              {skill.tags.map((tag) => {
                const theme = TAG_THEME[tag] || DEFAULT_THEME;

                return (
                  <span
                    key={tag}
                    className={styles.tag}
                    style={{
                      backgroundColor: theme.bg,
                      color: theme.color,
                      borderColor: theme.bg,
                    }}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
