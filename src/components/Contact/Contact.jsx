import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`h-350px px-6 md:px-24 py-24 transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-zinc-800"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Let’s Connect!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
          className={`mb-12 text-lg ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}
        >
         Got a project, collaboration idea, or just wanna chat about tech? Hit me up on LinkedIn.
        </motion.p>

        {/* LinkedIn Button */}
        <motion.a
          href="https://www.linkedin.com/in/mehboob-ali2004/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition ${
            darkMode ? "hover:bg-blue-500" : "hover:bg-blue-700"
          }`}
        >
          <Linkedin size={24} />
          Connect on LinkedIn
        </motion.a>
      </div>

      {/* Decorative Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 absolute -bottom-20 -left-20"
        ></div>
        <div
          className="w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20 absolute -top-20 -right-20"
        ></div>
      </motion.div>
    </section>
  );
};

export default Contact;
