"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// Removed portfolioData import as personalData will be passed as a prop

interface PersonalData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  profileImage: string;
  resumeUrl: string;
}

export function IntroOverlay({ personalData }: { personalData: PersonalData }) { // Accept personalData as a prop
  // Local visibility state removed; now controlled by useIntroAnimation hook
  // if (!isVisible) return null; // Logic handled by parent component

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="fixed inset-0 z-[10000] bg-gradient-to-br from-[#367c9c] via-[#4a9bc4] to-[#367c9c] flex items-center justify-center"
    >
      {/* Studio Ghibli style clouds in background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/20 rounded-full blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              x: [0, 50, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center relative z-10"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-4xl md:text-6xl font-serif font-bold tracking-widest drop-shadow-lg mb-4"
        >
          {personalData.name.toUpperCase()} {/* Use personalData.name */}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-blue-100 mt-4 text-xl font-serif tracking-widest"
        >
          PRESENTS
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 h-1 bg-white/30 mx-auto w-32"
        />
      </motion.div>
    </motion.div>
  );
}
