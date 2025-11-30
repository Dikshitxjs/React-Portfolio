import Project1 from "./assets/Project1.png";
import Parba from "./assets/parba.png";
import Currency from "./assets/currency.png";
import TicTacToe from "./assets/tictactoe.png";


import MERN from "./assets/mern.png";

function Project() {
  return (
    <>
      {/* Projects Section */}
      <section className="w-full mt-12 bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
          My Projects
        </h2>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Portfolio Website */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={Project1}
              alt="Portfolio Website"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Portfolio Website</h3>
              <p className="text-gray-200 text-sm mb-4">Tech: React, Tailwind CSS</p>
              <a
                href="https://phuyaldikshit.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Currency Converter */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={Currency}
              alt="Currency Converter"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Currency Converter</h3>
              <p className="text-gray-200 text-sm mb-4">Tech: React, API</p>
              <a
                href="https://currency-converterxx.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Tic Tac Toe */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={TicTacToe}
              alt="Tic Tac Toe"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Tic Tac Toe Game</h3>
              <p className="text-gray-200 text-sm mb-4">Tech: React, State Logic</p>
              <a
                href="https://tic-tac-toe-tau-cyan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Parba Nepal */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={Parba}
              alt="Parba Nepal"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Parba Nepal</h3>
              <p className="text-gray-200 text-sm mb-4">Tech: React, Tailwind CSS</p>
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

          {/* MERN Project */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={MERN}
              alt="Full Stack Project"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Full Stack MERN App</h3>
              <p className="text-gray-200 text-sm mb-4">Tech: MongoDB, Express, React, Node</p>
              <a
                href="https://mern-project-two-weld.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>

        </div>

        {/* GitHub Repos */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Other Projects on GitHub
          </h3>

          <ul className="flex flex-wrap gap-4">
            <li>
              <a
                href="https://github.com/dikshitxjs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                View All GitHub Repositories
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Project;
