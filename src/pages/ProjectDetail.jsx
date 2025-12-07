import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Github, ExternalLink } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import ProjectThumbnail from "../components/Project/ProjectThumbnail";
import projects from "../components/Project/project.json";
import { findProjectById, getThumbnailType } from "../utils/projectUtils";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const project = findProjectById(id, projects);

  if (!project) {
    return (
      <main
        className={`min-h-screen pt-24 pb-16 px-6 md:px-24 transition-colors duration-500 ${
          darkMode ? "bg-black text-white" : "bg-white text-zinc-900"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className={`text-lg mb-8 ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              darkMode
                ? "bg-white text-black hover:bg-zinc-200"
                : "bg-black text-white hover:bg-zinc-800"
            }`}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const isLive = getThumbnailType(project) === "live";

  return (
    <main
      className={`min-h-screen pt-24 pb-16 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-zinc-900"
      }`}
    >
      {/* Back Button */}
      <div className="px-6 md:px-24 mb-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate("/projects")}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 group ${
            darkMode
              ? "bg-zinc-800/50 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-zinc-600"
              : "bg-white hover:bg-gray-50 text-zinc-900 border border-gray-200 hover:border-gray-300 shadow-sm"
          }`}
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Projects</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <div className="px-6 md:px-24 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Thumbnail */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
            <ProjectThumbnail project={project} size="large" darkMode={darkMode} />
          </div>

          {/* Title and Badges */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  project.status === "Active"
                    ? "bg-green-600 text-white"
                    : "bg-yellow-500 text-white"
                }`}
              >
                {project.status}
              </span>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  isLive
                    ? darkMode
                      ? "bg-green-700/50 text-green-300"
                      : "bg-green-100 text-green-700"
                    : darkMode
                    ? "bg-blue-700/50 text-blue-300"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {isLive ? "Live Project" : "GitHub Repository"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-zinc-300" : "text-zinc-700"
              }`}
            >
              {project.longDescription || project.description}
            </p>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    darkMode
                      ? "bg-zinc-800 text-white border border-zinc-700"
                      : "bg-zinc-100 text-zinc-800 border border-zinc-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul
                className={`space-y-2 ${
                  darkMode ? "text-zinc-300" : "text-zinc-700"
                }`}
              >
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Challenges */}
          {project.challenges && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-zinc-300" : "text-zinc-700"
                }`}
              >
                {project.challenges}
              </p>
            </motion.section>
          )}

          {/* Screenshots Gallery */}
          {project.images && project.images.length > 0 && isLive && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                ))}
              </div>
            </motion.section>
          )}

          {/* Links */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  darkMode
                    ? "bg-green-600 hover:bg-green-500 text-white"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                <Globe size={20} />
                Visit Website
                <ExternalLink size={16} />
              </a>
            )}
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all border ${
                darkMode
                  ? "border-zinc-700 hover:bg-zinc-800 text-white"
                  : "border-zinc-300 hover:bg-gray-100 text-zinc-900"
              }`}
            >
              <Github size={20} />
              View Source Code
              <ExternalLink size={16} />
            </a>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;

