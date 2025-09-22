import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import RightSide from "./RightSide";

function App() {
const [theme, setTheme] = useState(() => {
  // Initialize from localStorage or default to light
  return localStorage.getItem("theme") || "light";
});

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
useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}, []);




  
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

return (
  <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4 py-6 gap-6 relative">
    
    {/* Sidebar toggle button */}
    <button
      onClick={toggleSidebar}
      className="fixed top-4 left-4 p-2 bg-gray-200 rounded md:hidden z-50"
    >
      ☰
    </button>

    {/* Sidebar */}
    <Sidebar 
      isOpen={isOpen}
      toggleSidebar={toggleSidebar}
      toggleTheme={toggleTheme}
      theme={theme}
    />

    {/* Main Content */}
    <main className={`flex-1 flex flex-col gap-6 transition-all duration-300 ${isOpen ? 'md:ml-64' : ''}`}>
      <Header />
      {/* Other sections like CareerStats, Featured, Projects */}
    </main>

    {/* Right Side */}
    <aside className="w-72 hidden xl:block">
      <RightSide />
    </aside>
  </div>
);

}

export default App;
