import React from "react";
import { resumeData } from "../data/resumeData";
import SectionContainer from "../components/SectionContainer";
import styles from "../styles/sections/MyProcessSection.module.css";

interface MyProcessSectionProps {
  setSectionRef: (node: HTMLElement | null, id: string) => void;
}

const MyProcessSection: React.FC<MyProcessSectionProps> = ({
  setSectionRef,
}) => {
  return (
    <SectionContainer
      id="my-process"
      title={resumeData.myProcess.title}
      setSectionRef={setSectionRef}
    >
      <div className={styles.myProcessCard}>
        <p className={`${styles.myProcessParagraph} mb-6`}>
          {resumeData.myProcess.description}
        </p>
        <ol className={styles.myProcessList}>
          {resumeData.myProcess.steps.map((step, index) => (
            <li key={index}>
              <strong>{step.name}:</strong> {step.detail}
            </li>
          ))}
        </ol>
      </div>
    </SectionContainer>
  );
};

export default MyProcessSection;
