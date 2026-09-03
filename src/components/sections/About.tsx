import styles from './About.module.css';
import { about } from '../../data/about';


export default function About() {
  return <section id ='about' className={styles.about}>

    <h2>About me</h2>
    <div className={styles.container}></div>
    <div className={styles.avatar}>사진</div>
    <div className={styles.box}>
    <p><strong>이름: </strong>{about.name}</p>
    </div>
    <div className={styles.box}>
    <p><strong>생년월일: </strong>{about.birthday}</p>

    </div>

    <div className={styles.box}>
    <p><strong>거주지: </strong>{about.local}</p>

    </div>

    <div className={styles.box}>
    <p><strong>학력: </strong>{about.school}</p>

    </div>
  </section>;
}
