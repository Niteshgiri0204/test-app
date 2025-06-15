import React from "react";
import { Code } from "lucide-react";
import { resumeData } from "../data/resumeData";
import SectionContainer from "../components/SectionContainer";
import styles from "../styles/sections/SkillsSection.module.css";

interface SkillsSectionProps {
  setSectionRef: (node: HTMLElement | null, id: string) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ setSectionRef }) => {
  return (
    <SectionContainer
      id="skills"
      title="Technical Proficiency"
      setSectionRef={setSectionRef}
    >
      <div className={styles.skillsGrid}>
        {Object.entries(resumeData.technicalProficiency).map(
          ([category, skills], index) => (
            <div key={index} className={styles.skillCard}>
              <h3 className={styles.skillCategoryTitle}>
                <Code style={{ marginRight: "0.5rem" }} size={20} />
                {category}
              </h3>
              <div className={styles.skillList}>
                {skills.map((skill, i) => (
                  <div key={i} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div className={styles.skillBarContainer}>
                      <div
                        className={styles.skillBarFill}
                        style={{
                          width: `${skill.proficiency}%`,
                        }}
                        role="progressbar"
                        aria-valuenow={skill.proficiency}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <span className={styles.skillPercentage}>
                      {skill.proficiency}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
