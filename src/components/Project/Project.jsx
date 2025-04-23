import React, { useRef } from 'react';
import { Github, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "SkillUp – Freelancing Platform",
    description: "An AI-powered freelancing platform made for Pakistani students and freelancers.",
    github: "https://github.com/yourusername/skillup",
    image: "/projects/skillup.png"
  },
  {
    title: "AmitPatel Website",
    description: "Client portfolio & blog site using the MERN stack. Clean, responsive, and deployed on Vercel.",
    github: "https://github.com/yourusername/amitpatel-website",
    image: "/projects/amitpatel.png"
  },
  {
    title: "Task Manager (Java)",
    description: "A Java desktop app with user login, task creation, and reminders.",
    github: "https://github.com/yourusername/task-manager-java",
    image: "/projects/taskmanager.png"
  },
  {
    title: "WeatherApp",
    description: "Weather forecast app using RapidAPI and Bootstrap.",
    github: "https://github.com/yourusername/weather-app",
    image: "/projects/weatherapp.png"
  }
];

const Project = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 350;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-16 bg-white text-zinc-800 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">✨ Projects Showcase</h2>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full hover:bg-zinc-100 transition"
            aria-label="Scroll Left"
          >
            <ArrowLeftCircle size={28} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full hover:bg-zinc-100 transition"
            aria-label="Scroll Right"
          >
            <ArrowRightCircle size={28} />
          </button>

          {/* Project Cards Row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-hidden scroll-smooth scrollbar-hide px-10"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="min-w-[300px] sm:min-w-[350px] bg-[#f9f9f9] rounded-2xl shadow-md p-4 border border-zinc-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-600 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-800 transition"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
