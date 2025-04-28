import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const typingTexts = [
  "Full Stack Developer",
  "MERN Stack Enthusiast",
  "Crafting Clean Web Experiences",
];

const Hero = ({ darkMode }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Typewriter Effect
  useEffect(() => {
    if (index === typingTexts.length) return;

    if (subIndex === typingTexts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % typingTexts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setText(typingTexts[index].substring(0, subIndex));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      className={`relative min-h-screen flex flex-col justify-center items-center text-center px-6 transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white'
          : 'bg-gradient-to-b from-white via-gray-100 to-white text-zinc-900'
      }`}
    >
      {/* Social Links (Left side for big screens, Top for small screens) */}
      <div className="mt-10 order-2 md:fixed md:left-8 flex md:flex-col gap-10 md:gap-6 z-20">
        {[
          { icon: FaGithub, link: "https://github.com/meali029" },
          { icon: FaLinkedin, link: "https://linkedin.com/in/mehboob-ali2004" },
          { icon: FaEnvelope, link: "mailto:mehboobaliali150@gmail.com" },
        ].map(({ icon: Icon, link }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 md:p-3 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md hover:scale-110"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Main Section */}
      <motion.div className="flex flex-col justify-center items-center mt-16 md:mt-0">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight"
        >
          Hi, I’m <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Mehboob Ali</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 font-medium"
        >
          {text}
          <span className="text-blue-500">{blink ? '|' : ' '}</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          <a
            href="#projects"
            className="px-5 py-2 md:px-6 md:py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2 md:px-6 md:py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 md:px-6 md:py-3 flex items-center justify-center gap-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105"
          >
            <FaDownload size={18} />
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
