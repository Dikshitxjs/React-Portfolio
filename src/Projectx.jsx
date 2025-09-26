
import Project1 from "./assets/Project1.png"
function Project(){
return(
<> 
{/* Projects Section */}
<section className="w-full mt-12 bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg">
  <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
    My Projects
  </h2>

  {/* Featured Projects */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Featured Project Card */}
    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
      <img
        src={Project1} // Replace with your project screenshot
        alt="Project 1"
        className="w-full h-60 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Portfolio Website</h3>
        <p className="text-gray-200 text-sm mb-4">Tech: React, TailwindCSS</p>
        <a
          href="https://parba-nepal.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Live Demo
        </a>
      </div>
    </div>

    {/* Featured Project Card 2 */}
    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
      <img
        src="https://via.placeholder.com/400x250"
        alt="Project 2"
        className="w-full h-60 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-2">To-Do List App</h3>
        <p className="text-gray-200 text-sm mb-4">Tech: React, LocalStorage</p>
        <a
          href="https://yourtodolistapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Live Demo
        </a>
      </div>
    </div>

    {/* Featured Project Card 3 */}
    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
      <img
        src="https://via.placeholder.com/400x250"
        alt="Project 3"
        className="w-full h-60 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Weather App</h3>
        <p className="text-gray-200 text-sm mb-4">Tech: React, API</p>
        <a
          href="https://yourweatherapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>

  {/* Other GitHub Repos */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
      Other Projects on GitHub
    </h3>
    <ul className="flex flex-wrap gap-4">
      <li>
        <a
          href="https://github.com/yourusername/project1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          Project 1
        </a>
      </li>
      <li>
        <a
          href="https://github.com/yourusername/project2"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          Project 2
        </a>
      </li>
      <li>
        <a
          href="https://github.com/yourusername/project3"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          Project 3
        </a>
      </li>
      {/* Add more GitHub projects here */}
    </ul>
  </div>
</section>

</>);
}
export default Project;