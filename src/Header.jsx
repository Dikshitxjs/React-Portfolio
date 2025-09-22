
import image from "./assets/image.png";
import something from "./assets/something.png";
import VRBox from "./assets/VRBox.png";
import React, { useState, useEffect } from "react";
function Header() {
 
 const today = new Date();                                                  //This is for date section
                                                                           //This is for date section
const formattedDate = today.toLocaleDateString("en-US", {                   //This is for date section
    weekday: "short", // Mon, Tue, ..
    year: "numeric",  
    month: "long",    
    day: "numeric"    
  });

   const fullText = [
    "You’re now in my creative space :)",
    "I build amazing web apps!",
    "Let’s create something together!"
  ];

  const [textIndex, setTextIndex] = useState(0);  // Which string
  const [charIndex, setCharIndex] = useState(0);  // Which character
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // Stop if no texts
    if (fullText.length === 0) return;

    // Check if we are still typing current string
    if (charIndex < fullText[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100); // typing speed in ms
      return () => clearTimeout(timeout);
    } else {
      // Finished current string, pause before next
      const pause = setTimeout(() => {
        setDisplayedText(""); // clear text
        setCharIndex(0); // reset char index
        setTextIndex((textIndex + 1) % fullText.length); // next string
      }, 1500); // pause 1.5s before next string
      return () => clearTimeout(pause);
    }
  }, [charIndex, textIndex, fullText]);
 


const images = [VRBox ,image,something,  ];

const [imgIndex, setImgIndex] = useState(0);
useEffect(() => {
  const interval = setTimeout(() => {
    setImgIndex((imgIndex + 1) % images.length); 
  }, 7000); // change image every 3 seconds
  return () => clearTimeout(interval);
}, [imgIndex]);





  return (
    <>
        <header className="relative w-11/12 mx-auto rounded-3xl overflow-hidden bg-white dark:bg-gray-800">
  <div className="w-full pt-[40%] relative">
    <img
      src={images[imgIndex]}
      alt="Profile"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />

    {/* Date at top-left */}
    <div className="absolute top-4 left-6 ">
      <span className="text-xl font-bold text-white">{formattedDate}</span>
    </div>

    {/* Typing Text at bottom-left */}
    <div className="absolute bottom-4 left-6">
      <p className="text-2xl font-bold text-white">
        {displayedText}
        <span className="border-r-2 border-white animate-pulse ml-1"></span>
      </p>
    </div>
  </div>
</header>


      {/* Career Stats Section */}
      <section className="w-11/12 mx-auto mt-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
        <h2 className="text-xl font-bold mb-4">Career Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card */}
          <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
            <span className="text-2xl">⏱️</span>
            <h3 className="text-lg font-semibold mt-2">2 years</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">Experience</p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
            <span className="text-2xl">🏅</span>
            <h3 className="text-lg font-semibold mt-2">20</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">Certificates</p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
            <span className="text-2xl">📂</span>
            <h3 className="text-lg font-semibold mt-2">15</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">Projects</p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
            <span className="text-2xl">💻</span>
            <h3 className="text-lg font-semibold mt-2">20</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">Technologies</p>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="w-11/12 mx-auto mt-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
        <h2 className="text-xl font-bold mb-4">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">Feature 1</div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">Feature 2</div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">Feature 3</div>
        </div>
      </section>
    </>
  );
}

export default Header;
