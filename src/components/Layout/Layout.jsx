import Navbar from "../Navbar/Navbar";
import { useDarkMode } from "../../context/DarkModeContext";

const Layout = ({ children }) => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-black" : "bg-white"}`}>
      <section id="navbar">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </section>
      {children}
    </div>
  );
};

export default Layout;

