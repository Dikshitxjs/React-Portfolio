import React, { useState, useEffect } from "react";
import headerPic from "./assets/profile.jpg";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaTrophy, FaProjectDiagram, FaBlog } from "react-icons/fa";

function Sidebar() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Sidebar (for mobile)
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <>
      {/* Sidebar toggle button for mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-md md:hidden z-50 shadow"
      >
        ☰
      </button>

      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 p-6 shadow-lg z-40
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:h-auto`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center">
          <img
            src={headerPic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-200 dark:border-gray-700 mx-auto"
          />
          <h2 className="mt-4 text-lg font-bold text-gray-700 dark:text-white">
            Dikshit Phuyal
          </h2>
          <h3 className="text-sm text-gray-500 dark:text-gray-400">
            Front-End Developer
          </h3>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Download CV
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4 mt-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/About"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
          >
            <FaUser /> About
          </Link>
          <Link
            to="/achievements"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
          >
            <FaTrophy /> Achievements
          </Link>
          <Link
            to="/Project"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
          >
            <FaProjectDiagram /> Projects
          </Link>
          <Link
            to="/blogs"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
          >
            <FaBlog /> Blogs
          </Link>
        </nav>

        {/* Theme toggle & copyright */}
        <div className="flex flex-col items-center space-y-4 mt-8">
          {/* Slider Toggle */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleTheme}
          >
            <span className="text-sm">{theme === "light" ? "🌙" : "☀️"}</span>
            <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full relative transition-colors">
              <div
                className={`w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300 absolute top-0.5 ${
                  theme === "dark" ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © 2025 Dikshit Phuyal
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
