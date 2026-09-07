import styles from "./About.module.css";
import { INFO_ITEMS } from "../../data/about";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About me</h2>
      <div className={styles.container}>
        <img
          src="/images/박성현.jpg"
          alt="박성현 프로필 사진"
          className={styles.poto}
        />

        <div className={styles.info}>
          {/* INFO_ITEMS 배열을 순회하며 각 항목을 박스 UI로 생성 */}
          {INFO_ITEMS.map((item) => (
            // React 리스트 렌더링 최적화를 위해 고유한 label을 key로 할당
            <div key={item.id} className={styles.box}>
              <p>
                <strong>{item.label}: </strong>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
