import React from "react";
import { motion } from "framer-motion";
import { FileDown, Eye } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiGithub,
  SiFramer,
  SiGit,
} from "react-icons/si";
import CV from "../../assets/resume.pdf";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-zinc-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  {
    name: "GitHub",
    icon: <SiGithub className="text-white bg-black rounded-full p-[2px]" />,
  },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
];

const Resume = ({ darkMode }) => {
  return (
    <section
      id="resume"
      className={`min-h-fit px-6 md:px-24 py-24 transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-zinc-900"
      }`}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
        <p
          className={`text-base md:text-lg ${
            darkMode ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          A quick look at my experience, skills, and strengths.
        </p>
      </div>

      {/* Summary Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`max-w-4xl mx-auto p-8 rounded-2xl border shadow-md text-center mb-16 ${
          darkMode ? "bg-zinc-800 border-zinc-700" : "bg-white border-zinc-200"
        }`}
      >
        <p className="text-lg mb-6">
          I’m a Full Stack Developer skilled in building modern, scalable, and
          interactive web apps using the <strong>MERN stack</strong>,{" "}
          <strong>Tailwind CSS</strong>, and tools like{" "}
          <strong>Framer Motion</strong>.
        </p>
        <p className="text-lg mb-6">
          From travel websites to LMS platforms, I love solving real-world
          problems through clean code, beautiful interfaces, and smooth user
          experiences.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 justify-center px-5 py-3 rounded-md text-sm font-medium transition ${
              darkMode
                ? "bg-white text-black hover:bg-zinc-200"
                : "bg-black text-white hover:opacity-90"
            }`}
          >
            <Eye size={18} /> View Resume
          </a>
          <a
            href="/resume.pdf"
            download
            className={`flex items-center gap-2 justify-center px-5 py-3 rounded-md text-sm font-medium transition ${
              darkMode
                ? "bg-white text-black hover:bg-zinc-200"
                : "bg-black text-white hover:opacity-90"
            }`}
          >
            <FileDown size={18} /> Download Resume
          </a>
        </div>
      </motion.div>

      {/* Skills Section */}
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">Skills</h3>
        <p
          className={`text-base ${
            darkMode ? "text-zinc-400" : "text-zinc-700"
          }`}
        >
          Technologies & tools I work with:
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.a
            key={i}
            whileHover={{
              scale: 1.08,
              rotate: [0, 1, -1, 0],
              boxShadow: darkMode
                ? "0px 0px 10px rgba(255,255,255,0.2)"
                : "0px 0px 10px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`flex flex-col items-center justify-center p-5 h-32 text-center rounded-xl font-medium transition-all border  hover:-translate-y-1 hover:shadow-lg ${
              darkMode
                ? "bg-zinc-800 text-white border-zinc-600 hover:bg-zinc-700"
                : "bg-white text-zinc-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <span className="text-sm">{skill.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Resume;
