import { ArrowDown } from "react-feather";

function HeroSection({ name, shortBio }) {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-500/20 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30 z-0"></div>

      {/* Animated background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-300 dark:bg-pink-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-300 dark:bg-blue-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          {/* Hero title with animation */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-in-bottom gradient-text neon-text">
            Hi, I'm {name || "Your Name"}
          </h1>

          {/* Short bio with delayed animation */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-slide-in-bottom delay-200">
            {shortBio || "Frontend Developer & UI/UX Designer"}
          </p>

          {/* Call to action buttons with delayed animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-in-bottom delay-300">
            <button
              onClick={scrollToProjects}
              className="gradient-btn px-8 py-4 text-lg group rounded-full"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 inline group-hover:animate-bounce" />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="frosted-glass px-8 py-4 text-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 rounded-full"
            >
              Contact Me
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
