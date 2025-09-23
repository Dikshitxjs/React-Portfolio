import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPaintBrush, FaChartLine } from "react-icons/fa";

function About() {
  const [readMore, setReadMore] = useState(false);

  const aboutText = `Hi! I'm Dikshit Phuyal, a passionate front-end developer and graphic designer. 
  I love creating responsive and interactive web applications using modern technologies like React and TailwindCSS. 
  I enjoy problem-solving, learning new tools, and crafting visually appealing designs that enhance user experiences.`;

  const additionalText = ` Over the past 2 years, I've worked on multiple projects ranging from portfolio websites, to-do apps, 
  and API-based web apps. I am also skilled in digital marketing and UI/UX design, which allows me to approach projects holistically.`;

  return (
    <section className="w-11/12 mx-auto mt-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
      {/* About Me */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">About Me</h2>
      <p className="text-gray-700 dark:text-gray-200 mb-2">
        {readMore ? aboutText + additionalText : aboutText}
      </p>
      <button
        onClick={() => setReadMore(!readMore)}
        className="text-blue-500 hover:underline mb-6"
      >
        {readMore ? "Read Less" : "Read More"}
      </button>

      {/* Languages & Experiences */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Languages & Experiences</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
        <li className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl shadow-md hover:shadow-xl transition">
          <FaHtml5 className="text-orange-500 text-4xl mb-2" />
          HTML - 2 Years
        </li>
        <li className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl shadow-md hover:shadow-xl transition">
          <FaCss3Alt className="text-blue-500 text-4xl mb-2" />
          CSS - 2 Years
        </li>
        <li className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl shadow-md hover:shadow-xl transition">
          <FaJs className="text-yellow-400 text-4xl mb-2" />
          JavaScript - 1.5 Years
        </li>
        <li className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl shadow-md hover:shadow-xl transition">
          <FaReact className="text-cyan-400 text-4xl mb-2" />
          React - 1 Year
        </li>
        <li className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl shadow-md hover:shadow-xl transition">
          <FaPaintBrush className="text-pink-500 text-4xl mb-2" />
          Graphic Design - 2 Years
        </li>
        <li className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl shadow-md hover:shadow-xl transition">
          <FaChartLine className="text-purple-500 text-4xl mb-2" />
          Digital Marketing - 1 Year
        </li>
      </ul>

      {/* Education */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Education</h2>
      <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-600 mb-6">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-3 border border-gray-300 dark:border-gray-600">Level</th>
            <th className="p-3 border border-gray-300 dark:border-gray-600">Institution</th>
            <th className="p-3 border border-gray-300 dark:border-gray-600">Year</th>
            <th className="p-3 border border-gray-300 dark:border-gray-600">Field</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 dark:bg-gray-800">
            <td className="p-3 border border-gray-300 dark:border-gray-600">+2</td>
            <td className="p-3 border border-gray-300 dark:border-gray-600">Techspire College</td>
            <td className="p-3 border border-gray-300 dark:border-gray-600">2023</td>
            <td className="p-3 border border-gray-300 dark:border-gray-600">Science</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <td className="p-3 border border-gray-300 dark:border-gray-600">Bachelor</td>
            <td className="p-3 border border-gray-300 dark:border-gray-600">APU</td>
            <td className="p-3 border border-gray-300 dark:border-gray-600">Ongoing</td>
            <td className="p-3 border border-gray-300 dark:border-gray-600">IT / CS</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default About;
