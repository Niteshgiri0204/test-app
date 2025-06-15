import React from "react";
import { Github, Globe } from "lucide-react";
import { resumeData } from "../data/resumeData";
import SectionContainer from "../components/SectionContainer";
import styles from "../styles/sections/ProjectsSection.module.css";

interface ProjectsSectionProps {
  setSectionRef: (node: HTMLElement | null, id: string) => void;
  openProjectModal: (project: any) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  setSectionRef,
  openProjectModal,
}) => {
  return (
    <SectionContainer
      id="projects"
      title="My Projects"
      setSectionRef={setSectionRef}
    >
      <div className={styles.projectGrid}>
        {resumeData.projects.map((project, index) => (
          <button
            key={index}
            onClick={() => openProjectModal(project)}
            className={styles.projectCardButton}
          >
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className={styles.projectImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/600x400/333333/E0E0E0?text=Image+Load+Failed";
                }}
              />
            )}
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={`${styles.projectDescription} ${styles.lineClamp3}`}>
              {project.description}
            </p>
            <div className={styles.projectTechList}>
              {project.technologies.map((tech, i) => (
                <span key={i} className={styles.projectTechTag}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.projectLinksContainer}>
              {project.githubLink && (
                <span
                  className={`${styles.projectLinkItem} ${styles.projectLinkGithub}`}
                >
                  <Github size={16} style={{ marginRight: "0.25rem" }} /> GitHub
                </span>
              )}
              {project.liveDemoLink && (
                <span
                  className={`${styles.projectLinkItem} ${styles.projectLinkLiveDemo}`}
                >
                  <Globe size={16} style={{ marginRight: "0.25rem" }} /> Live
                  Demo
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
