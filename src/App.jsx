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

        {/* Resume Section - In Development */}
<section id="resume" className="relative overflow-hidden">
  <div className="blur-sm pointer-events-none opacity-60">
    <Resume darkMode={darkMode} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <span className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded shadow-lg">
      ⚠️ Resume Section - Currently in Development
    </span>
  </div>
</section>

{/* Experience Section - In Development */}
<section id="experience" className="relative overflow-hidden">
  <div className="blur-sm pointer-events-none opacity-60">
    <Experience darkMode={darkMode} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <span className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded shadow-lg">
      ⚠️ Experience Section - Currently in Development
    </span>
  </div>
</section>

{/* Contact Section - In Development */}
<section id="contact" className="relative overflow-hidden">
  <div className="blur-sm pointer-events-none opacity-60">
    <Contact darkMode={darkMode} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <span className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded shadow-lg">
      ⚠️ Contact Section - Currently in Development
    </span>
  </div>
</section>

      </main>
    </div>
  );
};

export default App;
