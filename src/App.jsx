import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Hero";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Resume from "./components/Resume/Resume";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <section id="navbar">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </section>

      <main
        className={` pt-24 bg-white ${
          darkMode ? "dark:bg-zinc-900" : "*:  "
        } transition-colors duration-500`}
      >
        <section id="home">
          <Hero darkMode={darkMode} />
        </section>

        <section id="about">
          <About darkMode={darkMode} />
        </section>

        <section id="projects">
          <Project darkMode={darkMode} />
        </section>

        <section id="resume">
          <Resume darkMode={darkMode} />
        </section>

        <section id="experience">
          <Experience darkMode={darkMode} />
        </section>

        <section id="contact">
          <Contact darkMode={darkMode} />
        </section>
      </main>
      {/* <footer className={`bg-white ${darkMode?"bg-zinc-900":""} text-center py-4 pb-20`}>
        <p className={`text-sm text-gray-500 ${darkMode?"text-gray-400":""}`}>
          &copy; 2025 Mehboob Ali. All rights reserved.
        </p>
     
       
        <p className={`text-sm text-gray-500 ${darkMode?"text-gray-400":""}`}>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/mehboob-ali2004/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Mehboob Ali
          </a>
        </p>
     
        
        </footer> */}
    </div>
  );
};

export default App;
