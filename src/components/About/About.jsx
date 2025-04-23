import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-4 py-20 flex flex-col justify-center items-center bg-zinc-100 transition-colors duration-300"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6">
          About Me
        </h2>
        <p className="text-zinc-700 text-lg leading-relaxed">
          Yo 👋 I’m <span className="font-semibold text-blue-600">Mehboob Ali</span>, a full stack
          developer and a Software Engineering student who loves turning ideas
          into pixel-perfect, responsive web apps.
          <br />
          <br />
          I specialize in building modern websites using the MERN stack, React,
          Tailwind, and other tools. Whether it's designing slick UIs or wiring
          up a backend, I got you.
          <br />
          <br />
          When I’m not coding, I’m probably vibing with design tools, learning
          new tech, or scrolling dev Twitter for spicy code memes 🧠💻
        </p>
      </div>
    </section>
  );
};

export default About;
