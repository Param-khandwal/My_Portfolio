"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollTriggeredAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background layer */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
      />
      
      {/* Middle layer with shapes */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 blur-3xl opacity-30" />
      </motion.div>
      
      {/* Foreground layer with content */}
      <motion.div
        style={{ y: y3, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center p-8">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Scroll Triggered
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Advanced animations triggered by scroll position
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollTriggeredAnimations;