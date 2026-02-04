"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function LivingBackground() {
  const { scrollYProgress } = useScroll();

  // Color transforms based on scroll (Morning -> Day -> Sunset -> Night)
  // Using proper Ghibli colors: #e0f7fa (Sky Blue), #5ba359 (Grass Green), #f4a261 (Sunset Orange)
  const skyColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [
      "linear-gradient(to bottom, #8ac4d0, #e0f7fa)", // Morning Blue (Ghibli Sky)
      "linear-gradient(to bottom, #8ac4d0, #b3e5fc)", // Day Bright
      "linear-gradient(to bottom, #f4a261, #ffca28)", // Sunset Orange
      "linear-gradient(to bottom, #1a237e, #311b92)", // Deep Night
    ]
  );

  const darkSkyColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [
      "linear-gradient(to bottom, #1e3a5f, #2d4a6f)", // Morning Blue (dark)
      "linear-gradient(to bottom, #2d4a6f, #3d5a7f)", // Day Bright (dark)
      "linear-gradient(to bottom, #4a2c1a, #5a3c2a)", // Sunset Orange (dark)
      "linear-gradient(to bottom, #0a0a1a, #1a1a2a)", // Deep Night (dark)
    ]
  );

  return (
    <>
      {/* Light Mode Sky */}
      <motion.div 
        className="fixed inset-0 z-[-1] dark:hidden"
        style={{ background: skyColor }}
      >
        {/* Moving Clouds Layer */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            animate={{ x: ["-10%", "10%"] }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="w-[120%] h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10,50 Q30,30 50,50 T90,50' stroke='white' stroke-width='2' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>

        {/* Swaying Grass Layer (Bottom) */}
        <div className="absolute bottom-0 w-full h-32 flex items-end overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[3.5%] h-24 bg-gradient-to-t from-[#5ba359] to-[#6bb369] rounded-t-full mx-[-0.5%]"
              animate={{ 
                skewX: [0, 8, -4, 0], 
                height: ["100%", "95%", "100%"] 
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Dark Mode Sky */}
      <motion.div 
        className="fixed inset-0 z-[-1] hidden dark:block"
        style={{ background: darkSkyColor }}
      >
        {/* Stars for dark mode */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Swaying Grass Layer (Bottom) - Dark Mode */}
        <div className="absolute bottom-0 w-full h-32 flex items-end overflow-hidden opacity-50">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[3.5%] h-24 bg-gradient-to-t from-slate-900 to-slate-700 rounded-t-full mx-[-0.5%]"
              animate={{ 
                skewX: [0, 8, -4, 0], 
                height: ["100%", "95%", "100%"] 
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}