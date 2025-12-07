import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "./project.json";
import { Globe, Github, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectThumbnail from "./ProjectThumbnail";
import { generateProjectId } from "../../utils/projectUtils";

const Project = ({ darkMode }) => {
  // Show only first 4 featured projects
  const featuredProjects = projects.slice(0, 4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = featuredProjects.length - 1;

  const scroll = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === "left"
        ? Math.max(prevIndex - 1, 0)
        : Math.min(prevIndex + 1, maxIndex)
    );
  };

  useEffect(() => {
    // Auto-center on first project
    setCurrentIndex(0);
  }, []);

  return (
    <section
      id="projects"
      className={`min-h-fit flex flex-col justify-center items-center px-6 py-16 md:px-24 md:py-6 transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-zinc-900"
      }`}
    >
      {/* Header with View All Button */}
      <div className="w-full max-w-6xl mb-8">
        <div className="flex justify-between items-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            My Projects
          </motion.h2>
          
          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/projects"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                darkMode
                  ? "bg-white text-black hover:bg-zinc-100"
                  : "bg-black text-white hover:bg-zinc-800"
              }`}
            >
              View All Projects
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-base md:text-lg max-w-2xl ${
            darkMode ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          A selection of apps, websites, and tools I've built or contributed to
          recently.
        </motion.p>
      </div>

      {/* Carousel Display */}
      <div
        className="relative w-full h-[500px] md:h-[450px] flex overflow-x-hidden items-center justify-center perspective-1000"
        style={{ perspective: "1000px" }}
      >
        {featuredProjects.map((project, idx) => {
          const isActive = currentIndex === idx;
          const isLeft = idx < currentIndex;
          const isRight = idx > currentIndex;

          let transformStyle = "";
          if (isLeft) {
            transformStyle = "translateX(-100%) scale(0.9) rotateY(20deg)";
          } else if (isRight) {
            transformStyle = "translateX(100%) scale(0.9) rotateY(-20deg)";
          }

          return (
            <motion.div
              key={idx}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0.4,
                filter: isActive ? "blur(0px)" : "blur(4px)",
                transform: isActive ? "scale(1) rotateY(0deg)" : transformStyle,
                zIndex: isActive ? 10 : 0,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute w-[340px] p-0 rounded-2xl shadow-xl border overflow-hidden transition-all duration-500 ${
                darkMode
                  ? "bg-zinc-800 border-zinc-700 text-white"
                  : "bg-white border-gray-300 text-zinc-900 shadow-2xl"
              } ${!isActive ? "pointer-events-none hidden md:block" : "block"}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Thumbnail */}
              <Link to={`/projects/${generateProjectId(project)}`} className="block">
                <div className="h-[200px] overflow-hidden">
                  <ProjectThumbnail project={project} size="medium" darkMode={darkMode} />
                </div>
              </Link>
              
              <div className="p-6">
              <div className="flex  justify-between items-start mb-3">
                <Link to={`/projects/${generateProjectId(project)}`}>
                  <h3 className="text-lg font-semibold hover:underline">{project.title}</h3>
                </Link>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    project.status === "Active"
                      ? "bg-green-600 text-white"
                      : "bg-yellow-500 text-white"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p
                className={`text-sm mb-4 ${
                  darkMode ? "text-zinc-300" : "text-zinc-700"
                }`}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2 py-1 rounded-md ${
                      darkMode
                        ? "bg-zinc-600 text-white"
                        : "bg-zinc-200 text-zinc-800"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {project.website && (  <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium hover:opacity-80 transition ${
                    darkMode ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  <Globe size={16} /> Website
                </a>)}
              
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium hover:opacity-80 transition ${
                    darkMode ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  <Github size={16} /> Source
                </a>
              </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* Scroll Buttons */}
      <div className="flex justify-between items-center mb-6 md:mb-3 gap-4">
        <button
          onClick={() => scroll("left")}
          disabled={currentIndex === 0}
          className={`p-2 rounded-full border transition-all disabled:opacity-40 ${
            darkMode
              ? "border-zinc-600 hover:bg-zinc-700"
              : "border-zinc-300 hover:bg-gray-200"
          }`}
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={currentIndex === maxIndex}
          className={`p-2 rounded-full border transition-all disabled:opacity-40 ${
            darkMode
              ? "border-zinc-600 hover:bg-zinc-700"
              : "border-zinc-300 hover:bg-gray-200"
          }`}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 md:mt-3 gap-2">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index
                ? darkMode
                  ? "bg-white"
                  : "bg-black"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
