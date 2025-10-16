// FeaturedModal.jsx
import React, { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function FeaturedModal({ isOpen, onClose, works, currentIndex, setCurrentIndex }) {
  const startX = useRef(null);
  const dragging = useRef(false);
  const modalRef = useRef(null);

  if (!isOpen) return null;

  const work = works[currentIndex];
  if (!work) return null;

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1));

  // Pointer handlers for swipe (only interpret on modal root/backdrop)
  const handlePointerDown = (e) => {
    // Only start if the pointer down is on the backdrop (not in the modal content)
    // We will store clientX when pointer down happens on the backdrop.
    const target = e.target;
    // If pointer down happened inside modalRef, start swipe on that element instead.
    startX.current = e.clientX;
    dragging.current = true;
  };
  const handlePointerMove = (e) => {
    if (!dragging.current) return;
    // no-op for now; we only use startX + endX on pointer up
  };
  const handlePointerUp = (e) => {
    if (!dragging.current || startX.current === null) return;
    const diff = startX.current - e.clientX;
    // threshold
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    dragging.current = false;
    startX.current = null;
  };

  // Close when clicking backdrop: check if click target is the backdrop container
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Keyboard Controls
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [works, currentIndex]);

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 sm:px-6"
        onPointerDown={handleBackdropClick} // close on backdrop click
        onClick={handleBackdropClick} // fallback for non-pointer environments
      >
        <motion.div
          key="modal-content"
          initial={{ scale: 0.98, y: 10, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.98, y: 10, opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl p-6 overflow-hidden"
          ref={modalRef}
          onPointerDown={(e) => {
            // stop propagation so pointerDown on modal doesn't trigger backdrop close
            e.stopPropagation();
            // start swipe inside modal
            startX.current = e.clientX;
            dragging.current = true;
          }}
          onPointerMove={(e) => {
            e.stopPropagation();
            handlePointerMove(e);
          }}
          onPointerUp={(e) => {
            e.stopPropagation();
            handlePointerUp(e);
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-black dark:hover:text-white text-2xl z-10"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded-full text-gray-800 dark:text-white shadow-lg transition z-10"
            aria-label="Previous"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded-full text-gray-800 dark:text-white shadow-lg transition z-10"
            aria-label="Next"
          >
            <FaArrowRight />
          </button>

          {/* Image */}
          <div className="mb-4 flex justify-center">
            <img
              src={work.image || ""}
              alt={work.title}
              className="rounded-xl w-full max-h-[60vh] object-contain select-none"
              draggable={false}
            />
          </div>

          {/* Text */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            {work.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mb-2">{work.date}</p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{work.description}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FeaturedModal;
