import { FaHtml5, FaJs, FaJava, FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function RightSide() {
  return (
    <aside className="w-full xl:w-72 space-y-6">
      
      {/* Skill Set */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow w-full">
        <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
          <span>🔗</span> Skill Set
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-4xl place-items-center">
          <FaHtml5 className="text-orange-500 hover:scale-110 transition" />
          <FaJs className="text-yellow-400 hover:scale-110 transition" />
          <FaJava className="text-red-600 hover:scale-110 transition" />
          <FaGithub className="text-gray-700 dark:text-white hover:scale-110 transition" />
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow w-full">
        <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
          <span>📊</span> Expertise
        </h2>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-purple-200 flex items-center justify-center">💻</span>
            Web Development
          </li>
          <li className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-orange-200 flex items-center justify-center">🎨</span>
            Graphic Design
          </li>
          <li className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-cyan-200 flex items-center justify-center">📈</span>
            Digital Marketing
          </li>
          <li className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-blue-200 flex items-center justify-center">✨</span>
            UI / UX Design
          </li>
        </ul>
      </section>

      {/* Get in Touch */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow w-full">
        <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
          <span>📬</span> Get in Touch
        </h2>
        <div className="flex gap-4 flex-wrap text-2xl">
          <SiGmail className="text-red-500 cursor-pointer hover:scale-110 transition" />
          <FaGithub className="text-gray-700 dark:text-white cursor-pointer hover:scale-110 transition" />
          <FaLinkedin className="text-blue-600 cursor-pointer hover:scale-110 transition" />
          <FaMedium className="text-black dark:text-white cursor-pointer hover:scale-110 transition" />
          <FaWhatsapp className="text-green-500 cursor-pointer hover:scale-110 transition" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-4">
          Let’s build something great together — feel free to connect with me through any of the platforms above.
        </p>
      </section>
    </aside>
  );
}

export default RightSide;
