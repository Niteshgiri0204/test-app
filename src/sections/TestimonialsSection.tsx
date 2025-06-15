import React from "react";
import { resumeData } from "../data/resumeData";
import SectionContainer from "../components/SectionContainer";
import styles from "../styles/sections/TestimonialsSection.module.css";

interface TestimonialsSectionProps {
  setSectionRef: (node: HTMLElement | null, id: string) => void;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  setSectionRef,
}) => {
  return (
    <SectionContainer
      id="testimonials"
      title="What People Say About Me"
      setSectionRef={setSectionRef}
    >
      <div className={styles.testimonialGrid}>
        {resumeData.testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
            <p className={styles.testimonialAuthor}>— {testimonial.author}</p>
          </div>
        ))}
      </div>
      <p
        className={`${styles.testimonialMoreInfo} text-center text-sm-custom mt-8`}
      >
        (More testimonials available upon request)
      </p>
    </SectionContainer>
  );
};

export default TestimonialsSection;
