"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ParallaxSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Background layer */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800"
      />
      
      {/* Middle layer with shapes */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-64 h-64 rounded-full bg-emerald-200/30 dark:bg-emerald-900/20 blur-3xl" />
      </motion.div>
      
      {/* Foreground layer with content */}
      <motion.div
        style={{ y: y3, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center p-8">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Parallax Effect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Scroll to see the parallax effect in action
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxSection;