import React from "react";
import { Lightbulb } from "lucide-react";
import { resumeData } from "../data/resumeData";
import SectionContainer from "../components/SectionContainer";
import styles from "../styles/sections/SummarySection.module.css";

interface SummarySectionProps {
  setSectionRef: (node: HTMLElement | null, id: string) => void;
}

const SummarySection: React.FC<SummarySectionProps> = ({ setSectionRef }) => {
  return (
    <SectionContainer
      id="summary"
      title="Professional Summary"
      setSectionRef={setSectionRef}
    >
      <div className={styles.summaryCard}>
        <p className={styles.summaryParagraph}>
          <Lightbulb
            style={{ marginRight: "0.5rem", display: "inline-block" }}
            size={20}
          />
          {resumeData.professionalSummary}
        </p>
      </div>
    </SectionContainer>
  );
};

export default SummarySection;
