import { useState, useEffect } from 'react';
import {
  Menu, X, Sun, Moon,
  Home, User, Briefcase, FolderOpen, FileText, Mail
} from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home },
  { name: 'About', icon: User },
  { name: 'Projects', icon: FolderOpen },
  { name: 'Resume', icon: FileText },
  { name: 'Experience', icon: Briefcase },
  { name: 'Contact', icon: Mail },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            if (id === 'home') {
              setScrolledToTop(true);
            } else {
              setScrolledToTop(false);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolledToTop ? 'top-0 h-[80px]' : 'bottom-5 h-[50px]'
        }`}
      >
        <div
          className={`flex items-center shadow-md px-6 transition-all duration-300 ${
            scrolledToTop
              ? 'mt-4 py-4 rounded-[40px] gap-10'
              : 'py-2 rounded-full gap-4'
          } bg-[#f8f9fa] ${darkMode ? 'dark:bg-zinc-900' : 'bg-[#f8f9fa]'}`}
        >
          {/* Logo */}
          <div
            className={`flex items-center gap-2 transition-opacity duration-300 ${
              scrolledToTop ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'
            }`}
          >
            <h1 className={`font-bold text-3xl text-zinc-800 ${darkMode ? 'dark:text-white' : 'text-zinc-800'}`}>{"</>M"}</h1>
          </div>

          {/* Nav Links */}
          <ul className={`hidden md:flex text-sm font-medium text-zinc-700 gap-4 ${darkMode ? 'dark:text-white' : 'text-zinc-800'}`}>
            {navItems.map((item, i) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <li key={i} className="relative group">
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    className={`flex items-center gap-1 font-bold relative px-3 py-2 rounded-xl transition-all duration-300 transform group-hover:scale-110 group-hover:bg-blue-100   ${darkMode ? 'dark:text-white  dark:group-hover:bg-zinc-800  hover:text-blue-400' : 'text-zinc-800  hover:text-blue-600'} ${
                      isActive ? 'text-blue-600' : 'text-zinc-800'
                    } `}
                  >
                    <Icon size={scrolledToTop ? 18 : 22} />
                    <span
                      className={`ml-1 transition-all duration-300 ${
                        scrolledToTop
                          ? 'inline'
                          : 'absolute opacity-0 group-hover:opacity-100 top-[-37px] left-[20px] -translate-x-1/2 bg-white p-2 text-blue text-xs  rounded-tl-lg rounded-tr-lg shadow-neutral-700'
                      } ${darkMode ? ' dark:group-hover:bg-zinc-800 ' : ''}`}
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Dark Mode + Mobile Menu */}
          <div className="flex items-center ml-auto gap-2 md:gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full shadow-md transition hover:scale-110 duration-300 ${darkMode ?  'bg-white text-zinc-800':'bg-zinc-800 text-white' }`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20}/> : <Moon size={20} />}
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
  <div className="md:hidden fixed top-[80px] left-0 w-full z-40 animate-slideDown">
    <div className={` mx-4 mt-2 rounded-2xl shadow-xl border p-4 ${darkMode ? 'dark:bg-zinc-900 dark:border-zinc-700' : ' border-zinc-200 bg-white'}`}>
      <ul className={`flex flex-col gap-3 text-zinc-700 font-semibold ${darkMode ? 'dark:text-white' : 'text-zinc-800'}`}>
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = activeSection === item.name.toLowerCase();
          return (
            <li key={i}>
              <a
                href={`#${item.name.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 ${darkMode? 
                  'dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:hover:text-white'
                  : 'text-zinc-800 hover:bg-zinc-100'
                } ${
                  isActive
                    ? 'bg-blue-100 text-blue-600 shadow-md'
                    : 'hover:bg-zinc-100'
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
)}


      {/* Spacer only needed when navbar is at bottom */}
      {!scrolledToTop && <div className="h-[60px] w-full"></div>}
    </>
  );
};

export default Navbar;
