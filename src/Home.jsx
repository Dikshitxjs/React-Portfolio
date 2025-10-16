// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Video from "./assets/Video.mp4";
import feature1 from "./assets/feature1.png";
import {
  FaHtml5,
  FaJs,
  FaJava,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaWhatsapp,
  FaReact,
  FaThumbtack,
  FaChartLine,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { SiGmail, SiMui, SiFigma, SiCanva, SiAdobephotoshop } from "react-icons/si";
import CountUp from "react-countup";
import FeaturedModal from "./FeatureModal";

function Home() {
  // Typing Text
  const fullText = [
    "Welcome to my creative space :)",
    "I deliver digital impact",
    "Serious? Let’s get in touch",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (fullText.length === 0) return;
    if (charIndex < fullText[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[textIndex][charIndex]);
        setCharIndex((c) => c + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((t) => (t + 1) % fullText.length);
      }, 1400);
      return () => clearTimeout(pause);
    }
  }, [charIndex, textIndex]);

  // Date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Featured Works
  const [selectedWork, setSelectedWork] = useState(null);
  const works = [
    {
      title: "HackerRank Frontend Developer Certificate",
      date: "2025, June 17",
      image: "/assets/hackerrank.png",
      description:
        "I earned my HackerRank Frontend Developer Certificate after completing challenges in React, CSS, and JavaScript. This certificate validates my frontend development skills and problem-solving ability.",
    },
    {
      title: "My Portfolio — First JavaScript Project",
      date: "August 5, 2025",
      image: feature1,
      description:
        "This is the first project I built during my JavaScript learning journey — a personal portfolio website created with React and Tailwind CSS. It represents how I started turning my design ideas into interactive web experiences.",
    },
    {
      title: "Techspire College Project",
      date: "2025, May 10",
      image: "/assets/techspire.png",
      description:
        "Developed a college management system with a React front end and Node.js backend, helping automate student record management efficiently.",
    },
    {
      title: "React E-commerce UI",
      date: "2025, July 14",
      image: "/assets/ecommerce.png",
      description:
        "Built a modern, fully responsive React e-commerce UI with cart, filtering, and animations using Tailwind and Framer Motion.",
    },
    {
      title: "Figma to React Conversion",
      date: "2025, March 28",
      image: "/assets/figma.png",
      description:
        "Converted Figma designs into pixel-perfect responsive React pages using Tailwind CSS and reusable components.",
    },
  ];

  // Responsive carousel
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const itemsPerPage = windowWidth < 640 ? 1 : 3;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    setStartIndex((s) => Math.min(s, Math.max(0, works.length - 1)));
  }, [itemsPerPage, works.length]);

  const nextSlide = () => setStartIndex((s) => (s + itemsPerPage) % works.length);
  const prevSlide = () => setStartIndex((s) => (s - itemsPerPage + works.length) % works.length);

  const isMobileScroll = windowWidth < 640;
  const safeImage = (img) => (img ? img : feature1);

  const getVisibleWorks = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const idx = (startIndex + i) % works.length;
      visible.push({ ...works[idx], originalIndex: idx });
    }
    return visible;
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 px-3 sm:px-4 md:px-8 mt-20 md:mt-0">
      {/* Left/Main Section */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Hero Video */}
        <header className="relative w-full rounded-xl overflow-hidden shadow-lg">
          <div className="relative w-full pt-[55%] sm:pt-[45%] md:pt-[35%]">
            <video
              src={Video}
              autoPlay
              loop
              muted
              onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 0.5)}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-3 left-3 sm:top-5 sm:left-6">
              <span className="text-sm sm:text-base md:text-lg font-semibold text-white drop-shadow-md">
                {formattedDate}
              </span>
            </div>
            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-6">
              <p className="text-base sm:text-lg md:text-2xl font-bold text-white drop-shadow-md">
                {displayedText}
                <span className="border-r-2 border-white animate-pulse ml-1"></span>
              </p>
            </div>
          </div>
        </header>

        {/* Career Stats */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow">
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-gray-700 dark:text-white">
            <FaChartLine /> Career Stats
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { emoji: "⏱️", end: 1, label: "Experience", suffix: " years" },
              { emoji: "🏅", end: 5, label: "Certificates" },
              { emoji: "📂", end: 16, label: "Projects" },
              { emoji: "💻", end: 7, label: "Technologies" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-xl">
                <span className="text-lg sm:text-xl">{stat.emoji}</span>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-2 text-gray-800 dark:text-white">
                  <CountUp start={0} end={stat.end} duration={2.5} /> {stat.suffix || ""}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg md:text-xl font-bold flex items-center gap-2 text-gray-800 dark:text-white">
              <FaThumbtack /> Featured
            </h2>
            {!isMobileScroll && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous"
                  className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 shadow"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next"
                  className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 shadow"
                >
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Scroll */}
          {isMobileScroll ? (
            <div className="overflow-x-auto flex gap-3 snap-x snap-mandatory scrollbar-hide">
              {works.map((work, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedWork(idx)}
                  className="min-w-[85%] flex-shrink-0 snap-center bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img src={safeImage(work.image)} alt={work.title} className="w-full h-44 object-cover" />
                  <div className="p-3 sm:p-4 text-left">
                    <p className="text-xs text-gray-500 mb-1">{work.date}</p>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                      {work.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {getVisibleWorks().map((work) => (
                <div
                  key={work.originalIndex}
                  onClick={() => setSelectedWork(work.originalIndex)}
                  className="cursor-pointer bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 select-none"
                >
                  <img src={safeImage(work.image)} alt={work.title} className="w-full h-40 object-cover" />
                  <div className="p-3 text-left">
                    <p className="text-xs text-gray-500 mb-1">{work.date}</p>
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{work.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Modal */}
          {selectedWork !== null && (
            <FeaturedModal
              isOpen={selectedWork !== null}
              onClose={() => setSelectedWork(null)}
              works={works}
              currentIndex={selectedWork}
              setCurrentIndex={setSelectedWork}
            />
          )}
        </section>
      </div>

      {/* Right Side */}
      <aside className="w-full xl:w-96 flex-shrink-0 flex flex-col gap-6">
        {/* Skill Set */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow">
          <h2 className="text-base sm:text-lg font-bold mb-4 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <span>🔗</span> Skill Set
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 place-items-center">
            {[
              <FaHtml5 className="text-orange-500" />,
              <FaJs className="text-yellow-400" />,
              <FaJava className="text-red-600" />,
              <FaGithub className="text-gray-700 dark:text-white" />,
              <FaReact className="text-sky-500" />,
              <SiMui className="text-blue-500" />,
              <SiFigma className="text-pink-500" />,
              <SiAdobephotoshop className="text-blue-700" />,
              <SiCanva className="text-teal-400" />,
              <FaMedium className="text-black dark:text-white" />,
            ].map((icon, i) => (
              <motion.div
                key={i}
                className="text-3xl sm:text-4xl cursor-pointer"
                animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: i * 0.1 }}
                whileHover={{ scale: 1.3 }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Expertise */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow">
          <h2 className="text-base sm:text-lg font-bold mb-4 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <span>📊</span> Expertise
          </h2>
          <ul className="flex flex-col gap-3 sm:gap-4 text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center">💻</span> Web Development
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center">🎨</span> Graphic Design
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-cyan-200 rounded-full flex items-center justify-center">📈</span> Digital Marketing
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">✨</span> UI / UX Design
            </li>
          </ul>
        </section>

        {/* Get in Touch */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow">
          <h2 className="text-base sm:text-lg font-bold mb-4 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <span>📬</span> Get in Touch
          </h2>
          <div className="flex gap-4 flex-wrap justify-center text-2xl sm:text-3xl">
            <SiGmail className="text-red-500 cursor-pointer hover:scale-110 transition" />
            <FaGithub className="text-gray-700 dark:text-white cursor-pointer hover:scale-110 transition" />
            <FaLinkedin className="text-blue-600 cursor-pointer hover:scale-110 transition" />
            <FaMedium className="text-black dark:text-white cursor-pointer hover:scale-110 transition" />
            <FaWhatsapp className="text-green-500 cursor-pointer hover:scale-110 transition" />
          </div>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-white mt-3 text-center">
            Let’s build something great together <br /> Don’t be shy! Hit me up 🎈
          </p>
        </section>
      </aside>
    </div>
  );
}

export default Home;
