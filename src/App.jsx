import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Hero";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Resume from "./components/Resume/Resume";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24"> {/* Adds padding to avoid being hidden behind navbar */}
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Project />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
<Contact/>
        </section>
      </main>
    </>
  );
};

export default App;
