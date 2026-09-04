import { useState } from 'react';
import projectImg from './OIP.jpg';
import styles from './Projects.module.css';
import ProjectModal from '../project-modal/ProjectModal';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>

      <ul className={styles.tag}>
        <li className={styles.sltag}><a href="#대표">대표</a></li>
        <li className={styles.sltag}><a href="#전체">전체</a></li>
        <li className={styles.sltag}><a href="#Frontend">Frontend</a></li>
      </ul>

      <div className={styles.container}>
        {/* 카드 영역 클릭 시 모달 열기 */}
        <div className={styles.box} onClick={openModal} style={{ cursor: 'pointer' }}>
          <div className={styles.poto}>
            <img src={projectImg} alt="프로젝트 이미지" />
          </div>
          
          <div className={styles.box2}>
            <h3>넷엔드 지식관리 웹페이지</h3>
            <h3>React 기반의 반응형 포트폴리오</h3>
            <h3>"React", "Flask"</h3>
          </div>
          <div className={styles.log}> 
            <a 
              href="https://github.com/park-02/my-portfolio" 
              target="_blank" 
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()} // 링크 클릭 시 모달 열림 방지
            >
              깃허브 보기 -
            </a>
          </div>
        </div>
      </div>

      {/* 모달 컴포넌트 렌더링 */}
      <ProjectModal isOpen={isModalOpen} onClose={closeModal}>
        <h1>프로젝트</h1>
        <p>2025.05 ~ 2025.07</p>
        <p>프로젝트 상세 내용: 넷엔드 지식관리 페이지</p>
        <div className={styles.Mcontainer}>
          <div className={styles.Language}>
            <p>React</p>
          </div>
            <div className={styles.Language}>
            <p>Flask</p>
          </div>

          <div>
            <p>프로젝트 설명: 넷엔드 지식관리 페이지 고객사 관리자 게스트 문의 및 회사내 지식관리</p>
            <div className={styles.git}>
              <a href='https://github.com/park-02/Cook_KMS_FrontEnd' rel='git' target='_blank'>Git</a>
            </div>
          </div>
        </div>

      </ProjectModal>
    </section>
  );
}