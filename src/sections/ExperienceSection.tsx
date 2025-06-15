import React from "react";
import { Briefcase } from "lucide-react";
import { resumeData } from "../data/resumeData";
import SectionContainer from "../components/SectionContainer";
import styles from "../styles/sections/ExperienceSection.module.css";

interface ExperienceSectionProps {
  setSectionRef: (node: HTMLElement | null, id: string) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  setSectionRef,
}) => {
  return (
    <SectionContainer
      id="experience"
      title="Work Experience"
      setSectionRef={setSectionRef}
    >
      <div className={styles.experienceList}>
        {resumeData.workExperience.map((job, index) => (
          <div key={index} className={styles.experienceCard}>
            <h3 className={styles.experienceTitle}>
              <Briefcase style={{ marginRight: "0.5rem" }} size={24} />
              {job.title} at {job.company}
            </h3>
            <p className={styles.experienceDuration}>{job.duration}</p>
            <ul className={styles.experienceDescriptionList}>
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
