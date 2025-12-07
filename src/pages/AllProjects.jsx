import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import ProjectCard from "../components/Project/ProjectCard";
import projects from "../components/Project/project.json";
import { getThumbnailType, generateProjectId } from "../utils/projectUtils";

const AllProjects = () => {
  const { darkMode } = useDarkMode();
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const statusMatch = statusFilter === "All" || project.status === statusFilter;
      const projectType = getThumbnailType(project);
      const typeMatch =
        typeFilter === "All" ||
        (typeFilter === "Live" && projectType === "live") ||
        (typeFilter === "GitHub" && projectType === "github");
      return statusMatch && typeMatch;
    });
  }, [statusFilter, typeFilter]);

  const liveCount = projects.filter((p) => getThumbnailType(p) === "live").length;
  const githubCount = projects.filter((p) => getThumbnailType(p) === "github").length;

  return (
    <main
      className={`min-h-screen pt-24 pb-16 px-6 md:px-24 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-zinc-900"
      }`}
    >
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Link
          to="/"
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 group ${
            darkMode
              ? "bg-zinc-800/50 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-zinc-600"
              : "bg-white hover:bg-gray-50 text-zinc-900 border border-gray-200 hover:border-gray-300 shadow-sm"
          }`}
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          All Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg ${
            darkMode ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          {statusFilter !== "All" || typeFilter !== "All"
            ? ` (filtered)`
            : ""}
        </motion.p>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-wrap gap-4 justify-center">
        {/* Status Filter */}
        <div className="flex gap-2">
          <span className={`text-sm font-medium ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
            Status:
          </span>
          {["All", "Active", "Working"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                statusFilter === status
                  ? darkMode
                    ? "bg-zinc-700 text-white"
                    : "bg-zinc-200 text-zinc-900"
                  : darkMode
                  ? "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  : "bg-gray-100 text-zinc-600 hover:bg-gray-200"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Type Filter */}
        <div className="flex gap-2">
          <span className={`text-sm font-medium ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
            Type:
          </span>
          {[
            { label: "All", count: projects.length },
            { label: "Live", count: liveCount },
            { label: "GitHub", count: githubCount },
          ].map(({ label, count }) => (
            <button
              key={label}
              onClick={() => setTypeFilter(label)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                typeFilter === label
                  ? darkMode
                    ? "bg-zinc-700 text-white"
                    : "bg-zinc-200 text-zinc-900"
                  : darkMode
                  ? "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  : "bg-gray-100 text-zinc-600 hover:bg-gray-200"
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={generateProjectId(project)}
              project={project}
              darkMode={darkMode}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className={`text-lg ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            No projects found matching the selected filters.
          </p>
        </div>
      )}
    </main>
  );
};

export default AllProjects;

