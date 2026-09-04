import styles from './Archive.module.css';

export default function Archive() {
  return (
    <section id='archive' className={styles.archive}>
      <h2>Archive</h2>

      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.box2}>
            <h3>깃허브 주소</h3>
            <a href='https://github.com/park-02' target='_blank' className={styles.hover}>
              github.com/park-02
            </a>
          </div>

          <div className={styles.box2}>
            <h3>전화번호</h3>
            <p>010-5090-5074</p>
          </div>

          <div className={styles.box2}>
            <h3>이메일</h3>
            <p>vlvk8195@naver.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}