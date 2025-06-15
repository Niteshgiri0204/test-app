import React from "react";
import { BookOpen } from "lucide-react";
import { resumeData } from "../data/resumeData";
import SectionContainer from "../components/SectionContainer";
import styles from "../styles/sections/EducationSection.module.css";

interface EducationSectionProps {
  setSectionRef: (node: HTMLElement | null, id: string) => void;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  setSectionRef,
}) => {
  return (
    <SectionContainer
      id="education"
      title="Education"
      setSectionRef={setSectionRef}
    >
      <div className={styles.educationCard}>
        {resumeData.education.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <h3 className={styles.educationDegree}>
              <BookOpen style={{ marginRight: "0.5rem" }} size={24} />
              {edu.degree}
            </h3>
            <p className={styles.educationDetails}>
              {edu.institution}, {edu.year}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default EducationSection;
