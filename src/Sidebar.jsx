import React, { useState, useEffect } from "react";
import headerPic from "./assets/profile.jpg";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaTrophy,
  FaProjectDiagram,
  FaBlog,
  FaDownload,
} from "react-icons/fa";

function Sidebar() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
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
    < >
   
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
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md z-40
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:h-auto`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center">
          <img
            src={headerPic}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Dikshit Phuyal
          </h2>
          <h3 className="text-sm text-gray-500 dark:text-gray-300">
            Front-End Developer
          </h3>

          <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 mt-6 px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <FaDownload />
            Resume
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-5 mt-10 text-gray-700 dark:text-gray-200">
          <Link
            to="/"
            className="flex items-center gap-3 hover:text-blue-500 transition-colors"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-3 hover:text-blue-500 transition-colors"
          >
            <FaUser /> About
          </Link>
          <Link
            to="/achievements"
            className="flex items-center gap-3 hover:text-blue-500 transition-colors"
          >
            <FaTrophy /> Achievements
          </Link>
          <Link
            to="/project"
            className="flex items-center gap-3 hover:text-blue-500 transition-colors"
          >
            <FaProjectDiagram /> Projects
          </Link>
          <Link
            to="/blogs"
            className="flex items-center gap-3 hover:text-blue-500 transition-colors"
          >
            <FaBlog /> Blogs
          </Link>
        </nav>

        {/* Theme toggle & copyright */}
        <div className="flex flex-col items-center mt-10">
          {/* Dark Mode Toggle */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 transition-colors"
            onClick={toggleTheme}
          >
            <span className="text-xl">
              {theme === "light" ? "🌙" : "🌙"}
            </span>
            <span className="text-sm font-medium">Dark Mode</span>
            <div className="w-12 h-6 bg-gray-400 dark:bg-gray-600 rounded-full relative">
              <div
                className={`w-6 h-6 bg-white dark:bg-gray-300 rounded-full shadow absolute top-0 left-0 transform transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center">
            Designed & Built by Dikshit Phuyal  
            <br />© 2025, All rights reserved.
          </p>
        </div>
      </aside>
      
    </>
  );
}

export default Sidebar;
