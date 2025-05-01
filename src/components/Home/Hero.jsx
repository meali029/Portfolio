import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Notification from '../../components/Notification/Notification';

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
  const [notification, setNotification] = useState(null);

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

  // Blinking Cursor
  // useEffect(() => {
  //   const blinkInterval = setInterval(() => {
  //     setBlink((prev) => !prev);
  //   }, 500);
  //   return () => clearInterval(blinkInterval);
  // }, []);
    // Function to trigger a notification
    const triggerNotification = (message, type) => {
      setNotification({ message, type });
    };
    useEffect(() => {
      // Trigger a "Website under construction" notification on component mount
      triggerNotification('Website is under development 👨‍💻', 'warning');
    }, []);
  return (
    <section
    className={`relative  h-[45rem] md:h-[35rem] pt-18 md:pt-0 md:pb-0 flex flex-col justify-center items-center text-center px-6 transition-colors duration-500 ${
      darkMode
        ? 'bg-gradient-to-b from-zinc-900 via-zinc-800 to-black text-white'
        : 'bg-white text-black'
    }`}
  >
    {/* Social Icons */}
    <div className="mt-10 order-2 md:fixed md:left-8 flex md:flex-col gap-10 md:gap-6 z-20 relative">
  {/* Animated Background Blob */}
  <motion.div
    initial={{ opacity: 0.4, scale: 0.8 }}
    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    }}
    className={`absolute md:-z-10  w-70 h-30 md:w-30 md:h-60 blur-2xl rounded-full ${
      darkMode ? 'bg-white' : 'bg-black'
    }`}
    style={{ top: '-40px', left: '-40px' }}
  />

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
      className="p-3 rounded-full border border-current hover:bg-opacity-10 transition-all duration-300 hover:scale-110 shadow-md backdrop-blur-sm"
    >
      <Icon size={20} />
    </a>
  ))}
</div>

  
    {/* Main Content */}
    <motion.div
      className="flex flex-col justify-center items-center  md:mt-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight ">
        Hi, I’m Mehboob Ali
      </motion.h1>
  
      <motion.p
        className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {text}
        <span className="ml-1">{blink ? '|' : ' '}</span>
      </motion.p>
  
      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        {/* View Projects */}
        <a
          href="#projects"
          className={`px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md ${
            darkMode
              ? 'bg-white text-black border border-white hover:bg-zinc-100'
              : 'bg-black text-white border border-black hover:bg-zinc-800'
          }`}
        >
          View Projects
        </a>
  
        {/* Contact Me */}
        <a
          href="#contact"
          className={`px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md ${
            darkMode
              ? 'border border-white text-white hover:bg-white hover:text-black'
              : 'border border-black text-black hover:bg-black hover:text-white'
          }`}
        >
          Contact Me
        </a>
  
        {/* Resume */}
        <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className={`px-6 py-3 flex items-center justify-center gap-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md ${
    darkMode
      ? 'border border-white text-white hover:bg-white hover:text-black'
      : 'border border-black text-black hover:bg-black hover:text-white'
  }`}
>
  <FaDownload size={18} />
  View Resume
</a>

      </motion.div>
       {/* Trigger Notifications Example */}
       {/* <button
        onClick={() => triggerNotification('N', 'info')}
        className="mt-5 px-6 py-3 rounded-full bg-blue-500 text-white"
      >
        Show Notification
      </button> */}

      {/* Notification Display */}
    </motion.div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          autoHide={true}
          onClose={() => setNotification(null)}
        />
      )}
  </section>
  
  );
};

export default Hero;
