import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Github } from "lucide-react";
import ProjectThumbnail from "./ProjectThumbnail";
import { generateProjectId, getThumbnailType } from "../../utils/projectUtils";

const ProjectCard = ({ project, darkMode, index = 0 }) => {
  const projectId = generateProjectId(project);
  const thumbnailType = getThumbnailType(project);
  const isLive = thumbnailType === "live";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link
        to={`/projects/${projectId}`}
        className={`block h-full rounded-2xl overflow-hidden shadow-xl border transition-all duration-300 hover:shadow-2xl ${
          darkMode
            ? "bg-zinc-800 border-zinc-700 text-white"
            : "bg-white border-gray-200 text-zinc-900"
        }`}
      >
        {/* Thumbnail */}
        <div className="relative">
          <ProjectThumbnail
            project={project}
            size="medium"
            darkMode={darkMode}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold">{project.title}</h3>
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

          {/* Description */}
          <p
            className={`text-sm mb-4 line-clamp-2 ${
              darkMode ? "text-zinc-300" : "text-zinc-700"
            }`}
          >
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech, i) => (
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
            {project.tech.length > 4 && (
              <span
                className={`text-xs px-2 py-1 rounded-md ${
                  darkMode
                    ? "bg-zinc-600 text-white"
                    : "bg-zinc-200 text-zinc-800"
                }`}
              >
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Footer with type badge */}
          <div className="flex items-center justify-between">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
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
            <div className="flex gap-2">
              {project.website && (
                <Globe
                  size={16}
                  className={darkMode ? "text-zinc-400" : "text-zinc-600"}
                />
              )}
              <Github
                size={16}
                className={darkMode ? "text-zinc-400" : "text-zinc-600"}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;

