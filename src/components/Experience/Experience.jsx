import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import experiences from "./experiences"; // Adjust the import path as necessary


const Experience = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`min-h-screen px-6 md:px-24 py-24 transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-zinc-900"
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <p
          className={`text-base md:text-lg ${
            darkMode ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          A walk through my professional journey so far.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div
          className={`absolute top-0 left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 ${
            darkMode ? "bg-zinc-400/30" : "bg-zinc-600/20"
          }`}
        ></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
              className={`relative mb-16 md:flex md:items-center ${
                isLeft ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-5 md:left-1/2 transform md:-translate-x-1/2 top-6 w-4 h-4 rounded-full border-4 z-20 ${
                  darkMode
                    ? "bg-white border-black"
                    : "bg-zinc-900 border-white"
                }`}
              />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`mt-6 md:mt-0 w-full md:w-5/12 p-6 rounded-2xl border shadow-md z-10 transition-all ${
                  darkMode
                    ? "bg-zinc-800 border-zinc-700 text-white"
                    : "bg-white border-zinc-200 text-zinc-900"
                } ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {/* Logo */}
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-8 h-8 rounded-full border object-contain"
                  />
                  {/* Role and Icon */}
                  <div className="flex items-center gap-2">
                    <Briefcase
                      className={darkMode ? "text--400" : "text-e-600"}
                      size={20}
                    />
                    <h3 className="text-lg md:text-xl font-semibold">
                      {exp.role}
                    </h3>
                  </div>
                </div>

                <span
                  className={`text-sm block mb-2 ${
                    darkMode ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {exp.company} — {exp.duration}
                </span>

                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
