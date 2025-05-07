import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Contact = ({ darkMode }) => {
  return (
    <section id="contact">
      <div
        className={`h-350px px-6 md:px-24 pt-12 pb-24 transition-all duration-500 ${
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
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.2,
            }}
            className={`mb-12 text-lg ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Got a project, collaboration idea, or just wanna chat about tech? Hit
            me up on LinkedIn.
          </motion.p>

          {/* LinkedIn Button with Seamless Shining Effect */}
          <motion.a
            href="https://www.linkedin.com/in/mehboob-ali2004/"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg overflow-hidden transition duration-200 ${
              darkMode ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <Linkedin size={24} />
            Connect on LinkedIn

            {/* Shining Effect */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50 blur-sm transform rotate-6"></div>
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
