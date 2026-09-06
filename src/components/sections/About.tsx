import styles from './About.module.css';
import { about } from '../../data/about';
import aboutImg from '../../../public/images/박성현.jpg'

// 항목별 타입 정의
interface InfoItem {
  id: number;
  label: string;
  value: string;
}

// 화면에 보여줄 프로필 정보 (라벨/값)
const INFO_ITEMS : InfoItem[] = [
  { id: 1, label: '이름', value: about.name },
  { id: 2, label: '생년월일', value: about.birthday },
  { id: 3, label: '거주지', value: about.local },
  { id: 4, label: '학력', value: about.school },
];

export default function About() {
  return <section id ='about' className={styles.about}>

    <h2>About me</h2>
    <div className={styles.container}>

    <img src={aboutImg} rel='박성현 프로필 사진' className={styles.poto} />

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
  </section>;
}
