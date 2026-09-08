import styles from "./Career.module.css";

interface CareerItem {
  id: number;
  title: string;
  period: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
}

const CAREER_LIST: CareerItem[] = [
  {
    id: 1,
    title: "현대오토에버 모빌리티 부트캠프",
    period: "2026.06 - 진행 중 (6개월)",
    logoSrc: "/images/HD.jpg",
    logoAlt: "현대오토에버 로고",
    description: "현대 오토에버 모빌리티 웹/앱 개발 과정",
  },
  {
    id: 2,
    title: "(NETAND) 미래내일 일경험 프로젝트 · 대상",
    period: "2025.05 - 2025.07 · 팀 4인 (2개월)",
    logoSrc: "/images/netand.jpg",
    logoAlt: "미래내일 일경험 로고",
    description:
      "고객사, 사내 임직원, 관리자 간의 지식 공유와 문의 응답을 효율적으로 처리하기 위한 지식 관리 페이지 개발",
  },
];

export default function Career() {
  return (
    <section id="career" className={styles.career}>
      <h2>Career</h2>

      <div className={styles.careerList}>
        {CAREER_LIST.map((item) => (
          <div key={item.id} className={styles.careerCard}>
            <img
              src={item.logoSrc}
              alt={item.logoAlt}
              className={styles.logo}
            />
            <div>
              <h3>{item.title}</h3>
              <p className={styles.period}> {item.period}</p>

              <div className={styles.detailBox}>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
