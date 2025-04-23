import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.scrollY <= 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ["Home", "About", "Experience", "Projects", "Resume", "Contact"];

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolledToTop ? 'top-0 h-[80px]' : 'bottom-10 h-[60px]'
        }`}
      >
        <div
          className={`mx-auto w-full ${
            scrolledToTop ? 'max-w-[1200px] mt-4 py-4' : 'max-w-[1100px] py-2'
          } px-6 rounded-[40px] bg-[#f8f9fa] flex items-center justify-between shadow-md transition-all duration-300`}
        >
          {/* Logo */}
          <div className={`flex items-center gap-2 transition-all duration-300 ${
            scrolledToTop ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'
          }`}>
            <h1 className="font-bold text-xl text-zinc-800">{`</>M`}</h1>
          </div>

          {/* Nav Links */}
          <ul className={`hidden md:flex text-sm font-medium text-zinc-700 ${
            scrolledToTop ? 'gap-6' : 'gap-4'
          }`}>
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-2 md:gap-3 ml-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-zinc-800 text-white shadow-md transition hover:scale-110"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="md:hidden text-zinc-800"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full fixed top-[80px] left-0 shadow-lg z-40">
          <ul className="flex flex-col p-6 gap-4 text-zinc-700 font-medium">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Spacer for floating navbar */}
      {!scrolledToTop && <div className="h-[80px] w-full"></div>}
    </>
  );
};

export default Navbar;
