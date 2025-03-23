import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import { Moon, Sun, Edit } from "react-feather";

function PortfolioPage({ data, onEdit }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDarkMode);

    // Apply dark mode class to body
    if (prefersDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="relative">
      <Navbar />

      {/* Dark Mode Toggle and Edit Button */}
      <div className="button-controls">
        <button
          onClick={toggleDarkMode}
          className="control-button"
          aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-700" />
          )}
        </button>

        <button
          onClick={onEdit}
          className="control-button"
          aria-label="Edit Portfolio"
        >
          <Edit className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        </button>
      </div>

      <HeroSection name={data.name} shortBio={data.shortBio} />
      <AboutSection
        profilePicture={data.profilePicture}
        description={data.description}
        skills={data.skills}
        interests={data.interests}
      />
      <ProjectsSection projects={data.projects} />
      <ContactSection />
      <Footer socialMedia={data.socialMedia} />
    </div>
  );
}

export default PortfolioPage;
