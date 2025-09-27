import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Video from "./assets/Video.mp4";
import { 
  FaHtml5, FaJs, FaJava, FaGithub, FaLinkedin, FaMedium, FaWhatsapp, FaReact ,FaThumbtack, FaChartLine
} from "react-icons/fa";
import { SiGmail, SiMui, SiFigma, SiCanva, SiAdobephotoshop } from "react-icons/si";

import CountUp from "react-countup";
function Home() {
  // --- Typing Text ---
  const fullText = [
    "Welcome to my creative space :)",
    "I deliver digital impact",
    "Serious? Let’s get in touch"
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



  // --- Date ---
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
   <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">

  {/* Left/Main Section */}
  <div className="flex-1 flex flex-col gap-4">

    {/* Header Section */}
    <header className="relative w-full mx-auto rounded-lg overflow-hidden bg-white dark:bg-gray-800">
      <div className="w-full pt-[35%] relative">
        <video src={Video} autoPlay loop muted onLoadedMetadata={e => (e.currentTarget.playbackRate = 0.5)} className="absolute top-0 left-0 w-full h-full object-cover" />

        {/* Date */}
        <div className="absolute top-4 left-4 sm:left-6">
          <span className="text-lg sm:text-xl font-bold text-white">{formattedDate}</span>
        </div>
        {/* Typing Text */}
        <div className="absolute bottom-4 left-4 sm:left-6">
          <p className="text-xl sm:text-2xl font-bold text-white">
            {displayedText}
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </p>
        </div>
      </div>
    </header>

    {/* Career Stats Section */}
    <section className="w-full bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow">
       <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-gray-700 dark:text-white">
      <FaChartLine className=" text-gray-800 dark:text-white" size={22} />
      Career Stats
    </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 md:p-6 rounded-xl">
          <span className="text-xl sm:text-2xl">⏱️</span>
          <h3 className="text-base sm:text-lg md:text-lg font-semibold mt-2 text-gray-700 dark:text-white"><CountUp start={0} end={1} duration={12}/> years</h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">Experience</p>
        </div>
        <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 md:p-6 rounded-xl">
          <span className="text-xl sm:text-2xl">🏅</span>
          <h3 className="text-base sm:text-lg md:text-lg font-semibold mt-2 text-gray-700 dark:text-white"><CountUp start={0} end={5} duration={12}/></h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">Certificates</p>
        </div>
        <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 md:p-6 rounded-xl">
          <span className="text-xl sm:text-2xl">📂</span>
          <h3 className="text-base sm:text-lg md:text-lg font-semibold mt-2 text-gray-700 dark:text-white"><CountUp start={0} end={16} duration={8}/></h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">Projects</p>
        </div>
        <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 md:p-6 rounded-xl">
          <span className="text-xl sm:text-2xl">💻</span>
          <h3 className="text-base sm:text-lg md:text-lg font-semibold mt-2 text-gray-700 dark:text-white"><CountUp start={0} end={7} duration={10}/></h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">Technologies</p>
        </div>
      </div>
    </section>

    {/* Featured Section */}
    <section className="w-full bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow">
   
      <h2 className="text-lg sm:text-xl font-bold mb-4 flex text-gray-800 dark:text-white items-center gap-2">
      <FaThumbtack className="text-gray-800 dark:text-white" size={20} />
      Featured 
    </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-5 md:p-6">Feature 1</div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-5 md:p-6">Feature 2</div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-5 md:p-6">Feature 3</div>
      </div>
    </section>

  </div>

  {/* Right Side Section */}
  <aside className="w-full xl:w-96 flex-shrink-0 space-y-4 sm:space-y-6 md:space-y-8">

    {/* Skill Set */}
{/* Skill Set */}
<section className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow w-full">
  <h2 className="text-lg sm:text-xl xt-gray-700 dark:text-gray-200 font-bold mb-4 sm:mb-6 flex items-center gap-2">
    <span>🔗</span> Skill Set
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 place-items-center">
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
        className="text-3xl sm:text-4xl md:text-4xl cursor-pointer"
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
    <section className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow w-full">
      <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-700 dark:text-gray-200 flex items-center gap-2">
        <span>📊</span> Expertise
      </h2>
      <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5">
        <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200 sm:gap-3"><span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-purple-200 flex text-gray-700 dark:text-gray-200 items-center justify-center">💻</span> Web Development</li>
        <li className="flex items-center gap-2text-gray-700 dark:text-gray-200 sm:gap-3"><span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-orange-200 flex items-center justify-center">🎨</span> Graphic Design</li>
        <li className="flex items-center gap-2text-gray-700 dark:text-gray-200 sm:gap-3"><span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyan-200 flex items-center justify-center">📈</span> Digital Marketing</li>
        <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200 sm:gap-3"><span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-200 flex items-center justify-center">✨</span> UI / UX Design</li>
      </ul>
    </section>

    {/* Get in Touch */}
    <section className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow w-full">
      <h2 className="text-lg text-gray-700 dark:text-gray-200 sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
        <span>📬</span> Get in Touch
      </h2>
      <div className="flex gap-3 sm:gap-4 md:gap-5 flex-wrap text-2xl sm:text-2xl md:text-3xl">
        <SiGmail className="text-red-500 cursor-pointer hover:scale-110 transition" />
        <FaGithub className="text-gray-700 dark:text-white cursor-pointer hover:scale-110 transition" />
        <FaLinkedin className="text-blue-600 cursor-pointer hover:scale-110 transition" />
        <FaMedium className="text-black dark:text-white cursor-pointer hover:scale-110 transition" />
        <FaWhatsapp className="text-green-500 cursor-pointer hover:scale-110 transition" />
      </div>
      <p className="text-sm sm:text-base md:text-base text-gray-700 dark:text-white mt-3 sm:mt-4">
        Let’s build something great together <br/> Don't be shy! Hit me up! 🎈
      </p>
    </section>

  </aside>
</div>

  );
}

export default Home;
