import Hero from "../components/Home/Hero";
import About from "../components/About/About";
import Project from "../components/Project/Project";
import Resume from "../components/Resume/Resume";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import { useDarkMode } from "../context/DarkModeContext";

const Home = () => {
  const { darkMode } = useDarkMode();

  return (
    <main
      className={`pt-24 transition-colors duration-500 ${
        darkMode ? "bg-zinc-900" : "bg-white"
      }`}
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
  );
};

export default Home;

