// Sidebar.jsx
import headerPic from "./assets/profile.jpg";
import { useState, useEffect } from "react";

function Sidebar({ isOpen, toggleSidebar,toggleTheme ,theme}) {


  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={` fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 p-6 shadow-lg z-40
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
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
          >
            Achievements
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
          >
            Blogs
          </a>
        </nav>

        {/* Theme toggle & copyright */}
        <div className="flex flex-col items-center space-y-4 mt-8">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
          >
            <span>{theme === "light" ? "🌙" : "☀️"}</span>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © 2025 Dikshit Phuyal
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
