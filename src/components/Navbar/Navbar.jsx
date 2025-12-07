import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  User,
  Briefcase,
  FolderOpen,
  FileText,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home },
  { name: "About", icon: User },
  { name: "Projects", icon: FolderOpen },
  { name: "Resume", icon: FileText },
  { name: "Experience", icon: Briefcase },
  { name: "Contact", icon: Mail },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isProjectsPage = location.pathname === "/projects" || location.pathname.startsWith("/projects/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    if (!isHomePage) {
      // Set active section based on route
      if (location.pathname === "/projects") {
        setActiveSection("projects");
      }
      setScrolledToTop(false);
      return;
    }

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            setScrolledToTop(id === "navbar" ? true : false);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [isHomePage, location.pathname]);
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  // Don't render navbar on projects pages
  if (isProjectsPage) {
    return null;
  }

  return (
    <>
      <nav
        className={`fixed w-fit m-auto rounded-full left-0 right-0 z-[60] flex justify-center transition-all duration-300
          ${scrolledToTop ? "top-5" : "bottom-5"}
        `}
      >
        <div
          className={`flex items-center px-6 py-2 shadow-lg backdrop-blur-md transition-all duration-300
            ${
              scrolledToTop
                ? "h-[60px] rounded-full gap-10"
                : "h-[55px] rounded-full gap-2"
            }
            ${
              darkMode
                ? "bg-black/40 border border-zinc-800 "
                : "bg-white/40 border border-zinc-300 "
            }
          `}
        >
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2 transition-opacity duration-300
              ${
                scrolledToTop
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none hidden"
              }
            `}
          >
            <h1
              className={`font-bold text-3xl ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {"</>M"}
            </h1>
          </Link>

          {/* Nav Links */}
          <ul
            className={`hidden md:flex text-sm font-medium gap-4  ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {navItems.map((item, i) => {
              const Icon = item.icon;
              const itemName = item.name.toLowerCase();
              const isActive =
                itemName === "projects"
                  ? location.pathname.startsWith("/projects") || activeSection === "projects"
                  : activeSection === itemName;

              // Special handling for Projects - always use route
              if (itemName === "projects") {
                return (
                  <li key={i} className="relative group">
                    <Link
                      to="/projects"
                      aria-label={`Navigate to ${item.name} section`}
                      className={`flex items-center gap-1 font-bold relative px-3 py-2 rounded-xl transition-all duration-300 group-hover:scale-105
    ${
      isActive
        ? darkMode
          ? "bg-zinc-700 text-white"
          : "bg-gray-200 text-black"
        : darkMode
        ? "hover:bg-zinc-800 text-white"
        : "hover:bg-gray-100 text-black"
    }
  `}
                    >
                      <Icon size={scrolledToTop ? 18 : 22} />
                      <span
                        className={`ml-1 transition-all duration-300 ${
                          scrolledToTop
                            ? "inline"
                            : "absolute opacity-0 group-hover:opacity-100 group-hover:top-[-40px] top-[0px] left-[19px] -translate-x-1/2  p-2 text-xs rounded-md shadow-md bg-zinc-800 text-white"
                        } ${darkMode ? " text-white" : "text-black"}`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              }

              // For home page sections, use anchor links
              // For other pages, navigate to home with hash
              const href = isHomePage
                ? `#${itemName}`
                : `/#${itemName}`;
              
              return (
                <li key={i} className="relative group">
                  <a
                    href={href}
                    aria-label={`Navigate to ${item.name} section`}
                    onClick={(e) => {
                      if (!isHomePage) {
                        e.preventDefault();
                        window.location.href = href;
                      }
                    }}
                    className={`flex items-center gap-1 font-bold relative px-3 py-2 rounded-xl transition-all duration-300 group-hover:scale-105
    ${
      isActive
        ? darkMode
          ? "bg-zinc-700 text-white"
          : "bg-gray-200 text-black"
        : darkMode
        ? "hover:bg-zinc-800 text-white"
        : "hover:bg-gray-100 text-black"
    }
  `}
                  >
                    <Icon size={scrolledToTop ? 18 : 22} />
                    <span
                      className={`ml-1 transition-all duration-300 ${
                        scrolledToTop
                          ? "inline"
                          : "absolute opacity-0 group-hover:opacity-100 group-hover:top-[-40px] top-[0px] left-[19px] -translate-x-1/2  p-2 text-xs rounded-md shadow-md bg-zinc-800 text-white"
                      } ${darkMode ? " text-white" : "text-black"}`}
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
              className={`p-2 rounded-full shadow-md transition hover:scale-110 duration-300
                ${darkMode ? "bg-white text-black" : "bg-black text-white"}
              `}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`md:hidden ${darkMode ? "text-white" : "text-black"}`}
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
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 z-30 backdrop-blur-sm bg-black/40 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Mobile Menu Panel */}
          <div className="md:hidden fixed top-[80px] left-0 w-full z-40 animate-slideDown">
            <div
              className={`mx-4 mt-2 rounded-2xl shadow-xl border p-4 
          ${darkMode ? "bg-black border-zinc-800" : "bg-white border-zinc-200"}
        `}
            >
              <ul
                className={`flex flex-col gap-3 font-semibold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  const itemName = item.name.toLowerCase();
                  const isActive =
                    itemName === "projects"
                      ? location.pathname.startsWith("/projects")
                      : activeSection === itemName;

                  if (itemName === "projects") {
                    return (
                      <li key={i}>
                        <Link
                          to="/projects"
                          onClick={() => setMenuOpen(false)}
                          aria-label={`Navigate to ${item.name} section`}
                          className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? "bg-zinc-800 text-white"
                        : darkMode
                        ? "hover:bg-zinc-800"
                        : "hover:bg-gray-100"
                    }
                  `}
                        >
                          <Icon size={20} />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    );
                  }

                  const href = isHomePage ? `#${itemName}` : `/#${itemName}`;
                  
                  return (
                    <li key={i}>
                      <a
                        href={href}
                        onClick={() => {
                          setMenuOpen(false);
                          if (!isHomePage) {
                            window.location.href = href;
                          }
                        }}
                        aria-label={`Navigate to ${item.name} section`}
                        className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? "bg-zinc-800 text-white"
                        : darkMode
                        ? "hover:bg-zinc-800"
                        : "hover:bg-gray-100"
                    }
                  `}
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
        </>
      )}
    </>
  );
};

export default Navbar;
