import { useState } from "react";
import styles from "./Projects.module.css";
import ProjectModal from "../project-modal/ProjectModal";
import { PROJECT_LIST } from "../../data/projects";
import type { ProjectItem } from "../../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  const openModal = (project: ProjectItem) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>

      <div className={styles.container}>
        {PROJECT_LIST.map((project) => (
          <div
            key={project.id}
            className={styles.box}
            onClick={() => openModal(project)}
          >
            <div className={styles.poto}>
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
