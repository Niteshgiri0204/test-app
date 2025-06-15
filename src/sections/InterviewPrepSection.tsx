import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { resumeData } from "../data/resumeData";
import SectionContainer from "../components/SectionContainer";
import styles from "../styles/sections/InterviewPrepSection.module.css";

interface InterviewPrepSectionProps {
  setSectionRef: (node: HTMLElement | null, id: string) => void;
}

const InterviewPrepSection: React.FC<InterviewPrepSectionProps> = ({
  setSectionRef,
}) => {
  const [interviewRoleInput, setInterviewRoleInput] = useState("");
  const [generatedQuestions, setGeneratedQuestions] = useState("");
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false);
  const [questionError, setQuestionError] = useState<string | null>(null);

  const generateInterviewQuestions = async () => {
    setIsGeneratingQuestions(true);
    setGeneratedQuestions("");
    setQuestionError(null);

    const resumeContent = `
      Professional Summary: ${resumeData.professionalSummary}
      Work Experience: ${resumeData.workExperience
        .map(
          (job) =>
            `${job.title} at ${job.company} (${
              job.duration
            }): ${job.description.join(" ")}`
        )
        .join("\n")}
      Technical Proficiency: ${Object.entries(resumeData.technicalProficiency)
        .map(
          ([cat, skills]) => `${cat}: ${skills.map((s) => s.name).join(", ")}`
        )
        .join("\n")}
    `;

    const prompt = `Based on the following resume details, generate 5-7 technical interview questions that an interviewer might ask me for a ${
      interviewRoleInput || "Software Developer"
    } role. Focus on my experience and technical proficiency. Make sure the questions are distinct, challenging, and relevant to the provided resume. Format the questions as a numbered list.
    \n\nResume Details:\n${resumeContent}`;

    try {
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // REPLACE WITH YOUR ACTUAL GEMINI API KEY
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        const text = result.candidates[0].content.parts[0].text;
        setGeneratedQuestions(text);
      } else {
        setQuestionError("Failed to generate questions. Please try again.");
        console.error("Gemini API response structure unexpected:", result);
      }
    } catch (error) {
      setQuestionError(
        "An error occurred while connecting to the AI. Please check your network or try again later."
      );
      console.error("Error calling Gemini API:", error);
    } finally {
      setIsGeneratingQuestions(false);
    }
  };

  return (
    <SectionContainer
      id="interview-prep"
      title="Interview Prep ✨ (Powered by Gemini AI)"
      setSectionRef={setSectionRef}
    >
      <div className={styles.interviewPrepCard}>
        <p className={`${styles.interviewPrepParagraph} mb-4`}>
          Enter a specific role (e.g., "Senior React Developer", "Node.js
          Backend Engineer", "Full-Stack Developer with SQL") to get tailored
          interview questions based on your resume.
        </p>
        <input
          type="text"
          placeholder="e.g., 'React Developer', 'DevOps Engineer'"
          value={interviewRoleInput}
          onChange={(e) => setInterviewRoleInput(e.target.value)}
          className={styles.interviewPrepInput}
        />
        <button
          onClick={generateInterviewQuestions}
          disabled={isGeneratingQuestions}
          className={styles.interviewPrepButton}
        >
          {isGeneratingQuestions ? (
            <>
              <svg
                className={styles.loadingSpinner}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className={styles.spinnerCircle}
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className={styles.spinnerPath}
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              Generate Questions ✨
              <Sparkles size={20} style={{ marginLeft: "0.5rem" }} />
            </>
          )}
        </button>

        {questionError && (
          <div className={styles.errorMessage}>
            <p>Error: {questionError}</p>
          </div>
        )}

        {generatedQuestions && (
          <div className={styles.generatedQuestionsContainer}>
            <h3 className={styles.generatedQuestionsTitle}>
              Generated Interview Questions:
            </h3>
            <div className={styles.generatedQuestionsContent}>
              <pre>{generatedQuestions}</pre>
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default InterviewPrepSection;
