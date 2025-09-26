import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaJs, FaJava, FaGithub, FaLinkedin, FaMedium, FaWhatsapp, FaReact 
} from "react-icons/fa";
import { SiGmail, SiMui, SiFigma, SiCanva, SiAdobephotoshop } from "react-icons/si";

import image from "./assets/image.png";
import something from "./assets/something.png";
import VRBox from "./assets/VRBox.png";
import CountUp from "react-countup";
function Home() {
  // --- Typing Text ---
  const fullText = [
    "You’re now in my creative space :)",
    "I build amazing web apps!",
    "Let’s create something together!"
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (fullText.length === 0) return;

    if (charIndex < fullText[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((textIndex + 1) % fullText.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, textIndex, fullText]);

  // --- Image Slider ---
  const images = [VRBox, image, something];
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      setImgIndex((imgIndex + 1) % images.length);
    }, 7000);
    return () => clearTimeout(interval);
  }, [imgIndex]);

  // --- Date ---
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="flex flex-col xl:flex-row gap-6">

      {/* Left/Main Section (Header + Career Stats + Featured) */}
      <div className="flex-1 flex flex-col gap-6">

        {/* Header Section */}
        <header className="relative w-full rounded-3xl overflow-hidden bg-white dark:bg-gray-800">
          <div className="w-full pt-[40%] relative">
            <img
              src={images[imgIndex]}
              alt="Profile"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Date */}
            <div className="absolute top-4 left-6">
              <span className="text-xl font-bold text-white">{formattedDate}</span>
            </div>

            {/* Typing Text */}
            <div className="absolute bottom-4 left-6">
              <p className="text-2xl font-bold text-white">
                {displayedText}
                <span className="border-r-2 border-white animate-pulse ml-1"></span>
              </p>
            </div>
          </div>
        </header>

        {/* Career Stats Section */}
        <section className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-bold mb-4">Career Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
              <span className="text-2xl">⏱️</span>
              <h3 className="text-lg font-semibold mt-2"><CountUp start ={0} end ={1} duration ={8}/> years</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">Experience</p>
            </div>
            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
              <span className="text-2xl">🏅</span>
              <h3 className="text-lg font-semibold mt-2"><CountUp start ={0} end ={5} duration ={8}/></h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">Certificates</p>
            </div>
            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
              <span className="text-2xl">📂</span>
              <h3 className="text-lg font-semibold mt-2"><CountUp start ={0} end ={16} duration ={8}/></h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">Projects</p>
            </div>
            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
              <span className="text-2xl">💻</span>
              <h3 className="text-lg font-semibold mt-2"><CountUp start ={0} end ={7} duration ={10}/></h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">Technologies</p>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-bold mb-4">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">Feature 1</div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">Feature 2</div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">Feature 3</div>
          </div>
        </section>
      </div>

      {/* Right Side Section */}
      <aside className="w-full xl:w-72 flex-shrink-0 space-y-6">
        
      {/* Skill Set */}
<section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow w-full">
  <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
    <span>🔗</span> Skill Set
  </h2>

  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
    {[
      { icon: <FaHtml5 className="text-orange-500" /> },
      { icon: <FaJs className="text-yellow-400" /> },
      { icon: <FaJava className="text-red-600" /> },
      { icon: <FaGithub className="text-gray-700 dark:text-white" /> },
      { icon: <FaReact className="text-sky-500" /> },
      { icon: <SiMui className="text-blue-500" /> },
      { icon: <SiFigma className="text-pink-500" /> },
      { icon: <SiAdobephotoshop className="text-blue-700" /> },
      { icon: <SiCanva className="text-teal-400" /> },
     
      { icon: <FaMedium className="text-black dark:text-white" /> },
      
    ].map((item, i) => (
      <motion.div
        key={i}
        className="text-4xl cursor-pointer"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          x: [0, Math.sin(i) * 15, 0],
          y: [0, Math.cos(i) * 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
          delay: i * 0.1,
        }}
        whileHover={{ scale: 1.3 }}
      >
        {item.icon}
      </motion.div>
    ))}
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

    </div>
  );
}

export default Home;
