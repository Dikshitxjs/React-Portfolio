
import headerPic from "./assets/profile.jpg"; 

function Sidebar() {
  return (
    <aside className="w-72 bg-white dark:bg-gray-900 p-6 flex flex-col justify-between h-screen">
 
      <div className="flex flex-col items-center">
        <img
           src={headerPic}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-200 dark:border-gray-700 mx-auto"
        />
        <h2 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">Dikshit Phuyal</h2>
        <h3 className="text-sm text-gray-500 dark:text-gray-400">Front-End-Developer</h3>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" >
          Download CV
        </button>
      </div>

    
      <nav className="flex flex-col space-y-4 mt-8">
        <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Home</a>
        <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">About</a>
        <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Achievements</a>
        <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Projects</a>
        <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Blogs</a>
      </nav>

    
      <div className="flex flex-col items-center space-y-4 mt-8">
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600">
          Theme change
        </button>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          © 2025 Dikshit Phuyal
        </p>
      </div>
    </aside>

  );
}

export default Sidebar;
