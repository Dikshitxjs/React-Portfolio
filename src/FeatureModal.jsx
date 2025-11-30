// FeaturedModal.jsx
import React, { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { scale: 0.95, y: 20, opacity: 0 },
  visible: { scale: 1, y: 0, opacity: 1 },
  exit: { scale: 0.95, y: 20, opacity: 0 },
};

function FeaturedModal({ isOpen, onClose, works, currentIndex, setCurrentIndex }) {
  const startX = useRef(null);
  const dragging = useRef(false);

  if (!isOpen) return null;

  const work = works[currentIndex];
  if (!work) return null;

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1));

  // ------------ Swipe Handling ------------
  const handlePointerDown = (e) => {
    startX.current = e.clientX;
    dragging.current = true;
  };

  const handlePointerUp = (e) => {
    if (!dragging.current) return;

    const diff = startX.current - e.clientX;

    if (diff > 60) handleNext();
    else if (diff < -60) handlePrev();

    dragging.current = false;
    startX.current = null;
  };

  // ------------- Keyboard Controls ----------
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.15 }}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.25 }}
          className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-3xl overflow-hidden"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-black dark:hover:text-white text-2xl"
          >
            ✕
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded-full shadow-md text-gray-800 dark:text-white"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded-full shadow-md text-gray-800 dark:text-white"
          >
            <FaArrowRight />
          </button>

          {/* Image */}
          <div className="mb-5 flex justify-center">
            <img
              src={work.image}
              alt={work.title}
              className="rounded-xl w-full max-h-[65vh] object-contain select-none"
              draggable={false}
            />
          </div>

          {/* Info Section */}
          <h2 className="text-2xl font-bold mb-1 dark:text-white">
            {work.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {work.date}
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            {work.description}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FeaturedModal;
