export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 👈 Enables dark mode using 'class' strategy
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
