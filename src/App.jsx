import { useState } from 'react';
import './App.css';
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
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className= {` pt-24 bg-white ${darkMode?'dark:bg-zinc-900':'*:  '} transition-colors duration-500`}>
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
    </div>
  );
};

export default App;
