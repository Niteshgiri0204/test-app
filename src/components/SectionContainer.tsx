import React from "react";
import styles from "../styles/components/SectionContainer.module.css";

interface SectionContainerProps {
  children: React.ReactNode;
  id: string;
  title: string;
  setSectionRef: (node: HTMLElement | null, id: string) => void;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  title,
  setSectionRef,
}) => {
  return (
    <section
      id={id}
      ref={(node) => setSectionRef(node, id)}
      className={`${styles.sectionContainer} animate-reveal`}
    >
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};

export default SectionContainer;
