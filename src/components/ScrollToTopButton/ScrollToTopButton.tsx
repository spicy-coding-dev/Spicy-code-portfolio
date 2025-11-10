"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-23 right-5 z-50 flex h-11 w-11 md:h-13 md:w-13 items-center justify-center rounded-full bg-red-500 cursor-pointer text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
        >
          <ArrowUp className="h-8 w-7 md:h-6 md:w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
