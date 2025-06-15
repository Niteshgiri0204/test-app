import React, { useState } from "react";
import {
  Briefcase,
  BookOpen,
  Code,
  Lightbulb,
  User,
  Globe,
  Home,
  Sparkles,
  Menu,
  ChevronLeft,
} from "lucide-react";
import styles from "../styles/components/SidebarNav.module.css";

interface NavItem {
  id: string;
  title: string;
  icon: React.ElementType;
}

interface SidebarNavProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
  isMinimized: boolean;
  toggleSidebar: () => void;
}

const navItems: NavItem[] = [
  { id: "home", title: "Home", icon: Home },
  { id: "summary", title: "Summary", icon: Lightbulb },
  { id: "experience", title: "Experience", icon: Briefcase },
  { id: "projects", title: "Projects", icon: Globe },
  { id: "my-process", title: "My Process", icon: Code },
  { id: "why-me", title: "Why Me?", icon: User },
  { id: "testimonials", title: "Testimonials", icon: Lightbulb },
  { id: "roles", title: "Responsibilities", icon: User },
  { id: "education", title: "Education", icon: BookOpen },
  { id: "skills", title: "Skills", icon: Code },
  // { id: "interview-prep", title: "Interview Prep", icon: Sparkles },
];

const SidebarNav: React.FC<SidebarNavProps> = ({
  activeSection,
  scrollToSection,
  isMinimized,
  toggleSidebar,
}) => {
  const ToggleIcon = isMinimized ? Menu : ChevronLeft;

  return (
    <nav
      className={`${styles.sidebarNav} ${
        isMinimized ? styles.minimized : styles.maximized
      }`}
    >
      <div className={styles.sidebarHeader}>
        <div className={styles.logoContainer}>
          {/* <span className={styles.logoIcon}>
            <Code size={30} />
          </span> */}
          {!isMinimized && (
            <span className={styles.logoLabel}>My Portfolio</span>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className={styles.toggleButton}
          aria-label={isMinimized ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ToggleIcon size={24} />
        </button>
      </div>

      <div className={styles.navItemsContainer}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${styles.sidebarNavItem} ${
                activeSection === item.id ? styles.active : ""
              }`}
              aria-label={`Maps to ${item.title} section`}
            >
              <Icon size={24} className={styles.icon} />
              <span className={styles.sidebarNavItemLabel}>
                {item.title === "Responsibilities" ? "Roles" : item.title}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default SidebarNav;
