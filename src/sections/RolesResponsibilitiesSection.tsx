import React from "react";
import { User } from "lucide-react";
import { resumeData } from "../data/resumeData";
import SectionContainer from "../components/SectionContainer";
import styles from "../styles/sections/RolesResponsibilitiesSection.module.css";

interface RolesResponsibilitiesSectionProps {
  setSectionRef: (node: HTMLElement | null, id: string) => void;
}

const RolesResponsibilitiesSection: React.FC<
  RolesResponsibilitiesSectionProps
> = ({ setSectionRef }) => {
  return (
    <SectionContainer
      id="roles"
      title="Roles & Responsibilities"
      setSectionRef={setSectionRef}
    >
      <div className={styles.rolesCard}>
        <ul className={styles.rolesList}>
          {resumeData.rolesAndResponsibilities.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default RolesResponsibilitiesSection;
