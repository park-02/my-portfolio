import projectImg from './OIP.jpg'
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>

      <ul className={styles.tag}>
        <li className={styles.sltag}><a href='#대표'>대표</a></li>
        <li className={styles.sltag}><a href='#전체'>전체</a></li>
        <li className={styles.sltag}><a href='#Frontend'>Frontend</a></li>
      </ul>
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.poto}>
          <img src={projectImg} rel='사진'></img>
        </div>
          
          
        <div className={styles.box2}>
          <h3>개인 포트폴리오 웹사이트</h3>
          <h3>TypeScript 기반의 반응형 포트폴리오</h3>
          <h3>"React", "TypeScript", "Vite", "Supabase"</h3>
        </div>
        <div className={styles.log}> 
          <a href='https://github.com/park-02/my-portfolio' target='_blank'>자세히 보기 -</a>
        </div>
      </div>



      <div className={styles.box}>
        <div className={styles.poto}>
          <img src={projectImg} rel='사진'></img>
        </div>
        <div className={styles.box2}>
          <h3>개인 포트폴리오 웹사이트</h3>
          <h3>TypeScript 기반의 반응형 포트폴리오</h3>
          <h3>"React", "TypeScript", "Vite", "Supabase"</h3>
        </div>
        <div className={styles.log}> 
          <a href='https://github.com/park-02/my-portfolio' target='_blank'>자세히 보기 -</a>
        </div>
      </div>



      <div className={styles.box}>
        <div className={styles.poto}>
          <img src={projectImg} rel='사진'></img>
        </div>
        <div className={styles.box2}>
          <h3>개인 포트폴리오 웹사이트</h3>
          <h3>TypeScript 기반의 반응형 포트폴리오</h3>
          <h3>"React", "TypeScript", "Vite", "Supabase"</h3>
        </div>
        <div className={styles.log}> 
          <a href='https://github.com/park-02/my-portfolio' target='_blank'>자세히 보기 -</a>
        </div>
      </div>



      <div className={styles.box}>
        <div className={styles.poto}>
          <img src={projectImg} rel='사진'></img>
        </div>
        <div className={styles.box2}>
          <h3>개인 포트폴리오 웹사이트</h3>
          <h3>TypeScript 기반의 반응형 포트폴리오</h3>
          <h3>"React", "TypeScript", "Vite", "Supabase"</h3>
        </div>
        <div className={styles.log}> 
          <a href='https://github.com/park-02/my-portfolio' target='_blank'>자세히 보기 -</a>
        </div>
      </div>
      </div>
    </section>
  );
}