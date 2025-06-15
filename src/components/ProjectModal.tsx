import React from "react";
import { Github, Globe } from "lucide-react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "../styles/components/ProjectModal.module.css";

interface Project {
  title: string;
  imageUrl?: string;
  problem: string;
  solution: string;
  yourRole: string;
  impact: string;
  learnings: string;
  technologies: string[];
  githubLink?: string | null;
  liveDemoLink?: string | null;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Modal
      show={true}
      onHide={onClose}
      centered
      size="lg"
      dialogClassName={styles.projectModalDialog}
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        className={styles.modalHeader}
      >
        <Modal.Title className={styles.modalTitle}>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            className={styles.modalImage}
            onError={(e) => {
              (e.target as HTMLImageElement).onerror = null;
              (e.target as HTMLImageElement).src =
                "https://placehold.co/600x400/333333/E0E0E0?text=Image+Load+Failed";
            }}
          />
        )}

        <div className={styles.modalTextSection}>
          <div>
            <h3 className={styles.modalSectionTitle}>Problem:</h3>
            <p>{project.problem}</p>
          </div>
          <div>
            <h3 className={styles.modalSectionTitle}>Solution:</h3>
            <p>{project.solution}</p>
          </div>
          <div>
            <h3 className={styles.modalSectionTitle}>Your Role:</h3>
            <p>{project.yourRole}</p>
          </div>
          <div>
            <h3 className={styles.modalSectionTitle}>Impact & Results:</h3>
            <p>{project.impact}</p>
          </div>
          <div>
            <h3 className={styles.modalSectionTitle}>Learnings & Takeaways:</h3>
            <p>{project.learnings}</p>
          </div>
        </div>

        <div className={styles.modalTechList}>
          <h3 className={styles.modalSectionTitle}>Technologies Used:</h3>
          {project.technologies.map((tech, i) => (
            <span key={i} className={styles.modalTechTag}>
              {tech}
            </span>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        {project.githubLink && (
          <Button
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.modalGithubButton}
            variant="secondary"
          >
            <Github size={20} style={{ marginRight: "0.5rem" }} /> GitHub
          </Button>
        )}
        {project.liveDemoLink && (
          <Button
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.modalLiveDemoButton}
            variant="primary"
          >
            <Globe size={20} style={{ marginRight: "0.5rem" }} /> Live Demo
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
