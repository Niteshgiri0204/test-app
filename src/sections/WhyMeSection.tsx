import React from "react";
import { resumeData } from "../data/resumeData";
import SectionContainer from "../components/SectionContainer";
import styles from "../styles/sections/WhyMeSection.module.css";

interface WhyMeSectionProps {
  setSectionRef: (node: HTMLElement | null, id: string) => void;
}

const WhyMeSection: React.FC<WhyMeSectionProps> = ({ setSectionRef }) => {
  return (
    <SectionContainer
      id="why-me"
      title={resumeData.whyMe.title}
      setSectionRef={setSectionRef}
    >
      <div className={styles.whyMeCard}>
        <ul className={styles.whyMeList}>
          {resumeData.whyMe.points.map((point, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default WhyMeSection;
