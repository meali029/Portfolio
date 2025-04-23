import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white transition-colors duration-300">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-800 mb-4">
        Hi, I’m <span className="text-blue-600">Mehboob Ali</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-2xl mb-6">
        A passionate <span className="font-semibold">Full Stack Developer</span> crafting clean, functional, and modern web experiences.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-zinc-800 text-zinc-800 rounded-full hover:bg-zinc-100 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
