import React, { useState } from 'react';
import profilePic from '../../assets/mehboob.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const About = ({ darkMode }) => {
  const [showTechCard, setShowTechCard] = useState(false);

  return (
    <section
      id="about"
      className={`relative min-h-screen px-6 py-24 flex flex-col md:flex-row items-center justify-center gap-12 transition-all duration-500 overflow-hidden ${
        darkMode ? 'bg-black text-white' : 'bg-white text-zinc-900'
      }`}
    >
      {/* Dim & blur background when card is shown */}
      {showTechCard && (
        <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black/20 transition-all duration-300" />
      )}

      {/* Background Tech Card Appearing on Hover */}
      <AnimatePresence>
        {showTechCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="absolute inset-0 flex justify-center items-center z-20"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className={`w-[450px] h-[450px] rounded-full blur-3xl border border-dashed shadow-inner ${
                darkMode
                  ? 'bg-zinc-600 border-zinc-500'
                  : 'bg-gray-300/40 border-gray-400'
              }`}
            ></motion.div>

<div
  className={`absolute w-96 h-96 rounded-2xl backdrop-blur-xl p-8 border shadow-2xl flex flex-col items-center justify-center space-y-6 ${
    darkMode
      ? 'bg-zinc-800/80 text-white border-zinc-700'
      : 'bg-white/90 text-zinc-900 border-gray-200'
  }`}
>
  <h3 className="text-xl font-bold tracking-wide mb-2">
    🚀 Tech Stack
  </h3>
  <ul className="grid grid-cols-2 gap-4 text-center font-medium text-sm">
    <li className="bg-white text-zinc-800 px-4 py-2 rounded-xl shadow-md border border-gray-200 hover:bg-gray-100 transition">
      MERN Stack
    </li>
    <li className="bg-white text-zinc-800 px-4 py-2 rounded-xl shadow-md border border-gray-200 hover:bg-gray-100 transition">
      Tailwind CSS
    </li>
    <li className="bg-white text-zinc-800 px-4 py-2 rounded-xl shadow-md border border-gray-200 hover:bg-gray-100 transition">
      React
    </li>
    <li className="bg-white text-zinc-800 px-4 py-2 rounded-xl shadow-md border border-gray-200 hover:bg-gray-100 transition">
      APIs & Animations
    </li>
  </ul>
</div>


          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Image */}
      
      <motion.div
        onHoverStart={() => setShowTechCard(true)}
        onHoverEnd={() => setShowTechCard(false)}
        className="relative group z-30"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1 }}
          className="rounded-full overflow-hidden border-4 border-gray-300 dark:border-zinc-700 shadow-lg"
        >
          <img
            src={profilePic}
            alt="Mehboob Ali"
            className="w-52 h-52 object-cover rounded-full"
          />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200"
        >
          Mehboob Ali
        </motion.div> */}
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 ,filter: 'blur(10px)'}}
        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(10px)' }}
        transition={{ type: 'spring', stiffness: 100}}
        className="max-w-2xl text-center md:text-left z-10 "
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-6  ${darkMode ? 'text-white' : 'text-zinc-800'}`}>
          About Me
        </h2>
        <p className={`text-base md:text-lg leading-relaxed mb-4  ${darkMode ? 'text-zinc-300' : 'text-zinc-800'}`}>
          Hey there 👋 I'm <span className="font-semibold">Mehboob Ali</span>, a
          Full Stack Developer and Software Engineering student based in Pakistan 🇵🇰.
          I build sleek, responsive, and futuristic web experiences.
        </p>
        <p className={`text-base md:text-lg leading-relaxed mb-4  ${darkMode ? 'text-zinc-300' : 'text-zinc-800'}`}>
          I use the MERN stack (MongoDB, Express, React, Node.js), styled with Tailwind, and I
          love experimenting with APIs, animations, and modern tooling.
        </p>
        <p className={`text-base md:text-lg leading-relaxed mb-4  ${darkMode ? 'text-zinc-300' : 'text-zinc-800'}`}>
          Real-world builds? A <strong>Travel Website</strong>, a{' '}
          <strong>Learning Platform</strong>, and interactive portfolios — designed to solve
          problems and wow users 🚀.
        </p>
        <p className={`text-base md:text-lg leading-relaxed  ${darkMode ? 'text-zinc-300' : 'text-zinc-800'}`}>
          I’m fascinated by the lifecycle of web apps — from design to deployment. Let’s innovate together and build something next-level 💡.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
