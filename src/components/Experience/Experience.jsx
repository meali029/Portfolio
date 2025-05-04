import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

// 🔁 Add experiences here. You can keep adding more!
const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "TechNova Pvt Ltd",
    duration: "Jan 2024 - Apr 2024",
    description: "Worked on real-time dashboards using MERN stack. Integrated REST APIs and built reusable React components.",
  },
  {
    role: "Freelance Web Developer",
    company: "Fiverr / Remote",
    duration: "2023 - Present",
    description: "Completed over 15 freelance projects. Built portfolio websites, admin dashboards, and responsive landing pages.",
  },
  {
    role: "Front-End Developer",
    company: "AmitPatel Client",
    duration: "Oct 2023 - Dec 2023",
    description: "Designed and developed a client’s personal website using React, Tailwind, and hosted on Vercel.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-zinc-50 text-zinc-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">💼 Experience Timeline</h2>

        <div className="relative border-l-4 border-blue-600 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-1">
                <Briefcase className="text-blue-600" size={20} />
                <h3 className="text-xl font-semibold">{exp.role}</h3>
              </div>
              <span className="text-sm text-zinc-500 mb-1 block">{exp.company} — {exp.duration}</span>
              <p className="text-sm text-zinc-600 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
