import { useState, useMemo } from "react";
import styles from "./Projects.module.css";
import ProjectModal from "../project-modal/ProjectModal";
import { PROJECT_LIST } from "../../data/projects";
import type { ProjectItem } from "../../data/projects";

// "ALL"을 맨 앞에 두고, 각 프로젝트의 tags를 모아 중복을 제거한 태그 목록 생성
const TAG_LIST = [
  "ALL",
  ...Array.from(new Set(PROJECT_LIST.flatMap((p) => p.tags))),
];

export default function Projects() {
  // 선택된 프로젝트 상태 관리: ProjectItem 또는 null(유니온 타입)을 가지며 초기값은 null(닫힌 상태)
  // selectedTag 상태의 초기값은 항상 ALL
  // 클릭한 프로젝트 객체를 상태에 저장하여 모달을 여는 함수

  // selectedProject를 useState선언
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const [selectedTag, setSelectedTag] = useState<string>("ALL");

  const filteredProjects = useMemo(() => {
    if (selectedTag === "ALL") return PROJECT_LIST;
    return PROJECT_LIST.filter((p) => p.tags.includes(selectedTag));
  }, [selectedTag]);

  const openModal = (project: ProjectItem) => setSelectedProject(project);

  // 프로젝트 상태를 null로 초기화하여 모달을 닫는 함수
  const closeModal = () => setSelectedProject(null);

  // 선택한 태그에 맞춰 프로젝트 목록 필터링 (selectedTag 변경 시에만 재연산)
  // "ALL"이 선택되어 있으면 전체 프로젝트 목록 반환
  // 특정 태그가 선택되어 있으면 해당 태그를 가진 프로젝트만 필터링하여 반환

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      {/* 위에 태그 리스트 */}
      <div className={styles.filterWrapper}>
        {TAG_LIST.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`${styles.filterBtn} ${selectedTag === tag ? styles.activeFilter : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className={styles.container}>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={styles.box}
            // project박스 클릭해서 setSelectedProject로 상태변경
            onClick={() => openModal(project)}
          >
            <div className={styles.photo}>
              <img src={project.imageSrc} alt={project.title} />
            </div>
            <div className={styles.box2}>
              <h3>{project.title}</h3>
              <p className={styles.period}>{project.period}</p>
              <p className={styles.subtitle}>{project.subtitle}</p>
              <div className={styles.tagWrapper}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.techTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.log}>자세히 보기 →</div>
          </div>
        ))}
      </div>

      {/* 선택된 프로젝트가 있을 때만 모달 렌더링 */}

      {/* project -> projectmodal로 ustState(selectedProject)로 넘겨준다. */}
      <ProjectModal isOpen={Boolean(selectedProject)} onClose={closeModal}>
        {selectedProject && (
          <div className={styles.modalBody}>
            <h2>{selectedProject.title}</h2>
            <p className={styles.modalPeriod}>{selectedProject.period}</p>

            <div className={styles.modalTags}>
              {selectedProject.tags.map((tag) => (
                <span key={tag} className={styles.modalTechTag}>
                  {tag}
                </span>
              ))}
            </div>

            <p className={styles.modalDesc}>{selectedProject.description}</p>

            <div className={styles.modalActions}>
              <a
                href={selectedProject.modalGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.gitBtn}
              >
                GitHub 저장소 방문
              </a>
            </div>
          </div>
        )}
      </ProjectModal>
    </section>
  );
}
