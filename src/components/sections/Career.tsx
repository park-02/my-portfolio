import careersImg from './OIP.jpg';
import styles from './Career.module.css';

export default function Career() {
  return (
    <section id="career" className={styles.career}>
      <h2>Career</h2>

      <div className={styles.careerCard}>

        <img src={careersImg} alt="로고" className={styles.logo} />

        <div className={styles.content}>
          <h3>미래내일 일경험 프로젝트 · 대상</h3>
          <p className={styles.period}>2025.05 - 2025.07 · 팀 4인 (2개월)</p>

          <div className={styles.detailBox}>
            <p>
              고객사, 사내 임직원, 관리자 간의 지식 공유와 문의 응답을 효율적으로 처리하기 위한 지식 관리 페이지 개발.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}