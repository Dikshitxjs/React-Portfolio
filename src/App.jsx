import Sidebar from "./Sidebar";
import Home from "./Home";
import Project from "./Projectx";
import { Routes, Route } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div className="flex min-h-screen bg-blue-100 dark:bg-gray-900 px-4 py-6 gap-6 relative">
      
    
      <Sidebar />

   
      <main className="flex-1 flex flex-col gap-6 transition-all duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
