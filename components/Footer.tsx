"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface PersonalData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  profileImage: string;
  resumeUrl: string;
}

export default function Footer({ personalData }: { personalData: PersonalData }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 bg-white/30 dark:bg-gray-900/30 border-t border-black/5 dark:border-white/5 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold text-gray-700 dark:text-gray-300">
            © {new Date().getFullYear()} {personalData.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Crafted with a touch of magic and code.
          </p>
        </div>

        <motion.button
          onClick={scrollToTop}
          className="group relative p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full shadow-lg border border-white/20 dark:border-gray-700/20
                     hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all overflow-hidden"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-gray-600 dark:text-gray-300 relative z-10" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#5ba359] to-emerald-400 opacity-0 group-hover:opacity-20 rounded-full"
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </footer>
  );
}