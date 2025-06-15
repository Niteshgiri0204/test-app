import React, { useState, useEffect, useRef, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import ErrorBoundary from "./components/ErrorBoundary";
import ProjectModal from "./components/ProjectModal";
import SidebarNav from "./components/SidebarNav";
import HeroSection from "./components/HeroSection";
import SectionContainer from "./components/SectionContainer";
import SummarySection from "./sections/SummarySection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import MyProcessSection from "./sections/MyProcessSection";
import WhyMeSection from "./sections/WhyMeSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import InterviewPrepSection from "./sections/InterviewPrepSection";
import RolesResponsibilitiesSection from "./sections/RolesResponsibilitiesSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import Footer from "./components/Footer";
import { resumeData } from "./data/resumeData";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(true);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const setSectionRef = useCallback((node: HTMLElement | null, id: string) => {
    if (node) {
      sectionRefs.current[id] = node;
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarMinimized((prev) => !prev);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-mode", theme === "light");
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let currentActive = activeSection;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
            const rect = entry.boundingClientRect;
            const viewportHeight = window.innerHeight;
            const elementCenter = rect.top + rect.height / 2;
            const elementVisibilityRatio =
              (Math.min(viewportHeight, rect.bottom) - Math.max(0, rect.top)) /
              rect.height;

            if (
              elementCenter > viewportHeight * 0.25 &&
              elementCenter < viewportHeight * 0.75 &&
              elementVisibilityRatio > 0.4
            ) {
              currentActive = entry.target.id;
            } else if (
              entry.isIntersecting &&
              entry.intersectionRatio >= 0.5 &&
              rect.top >= 0 &&
              rect.top < viewportHeight * 0.1
            ) {
              currentActive = entry.target.id;
            }
          } else {
            entry.target.classList.remove("animate-reveal");
          }
        });

        if (currentActive !== activeSection) {
          setActiveSection(currentActive);
        }
      },
      { threshold: [0.1, 0.3, 0.5, 0.7, 0.9], rootMargin: "-20% 0% -70% 0%" }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const ThemeIcon = theme === "dark" ? Sun : Moon;
  const mainContentMargin = isSidebarMinimized ? "4rem" : "14rem";

  return (
    <ErrorBoundary>
      <div className="main-container">
        <SidebarNav
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isMinimized={isSidebarMinimized}
          toggleSidebar={toggleSidebar}
        />

        <main
          className="main-content"
          style={{ marginLeft: mainContentMargin }}
        >
          <HeroSection
            scrollToSection={scrollToSection}
            setSectionRef={setSectionRef}
          />
          <SummarySection setSectionRef={setSectionRef} />
          <ExperienceSection setSectionRef={setSectionRef} />
          <ProjectsSection
            setSectionRef={setSectionRef}
            openProjectModal={openProjectModal}
          />
          <MyProcessSection setSectionRef={setSectionRef} />
          <WhyMeSection setSectionRef={setSectionRef} />
          <TestimonialsSection setSectionRef={setSectionRef} />
          <RolesResponsibilitiesSection setSectionRef={setSectionRef} />
          <EducationSection setSectionRef={setSectionRef} />
          <SkillsSection setSectionRef={setSectionRef} />
          <Footer />
        </main>

        {isModalOpen && (
          <ProjectModal project={selectedProject} onClose={closeProjectModal} />
        )}

        <button
          onClick={toggleTheme}
          className="themeToggleButtonFloating"
          aria-label={`Toggle theme to ${theme === "dark" ? "light" : "dark"}`}
        >
          <ThemeIcon size={28} />
        </button>
      </div>
    </ErrorBoundary>
  );
}

export default App;
