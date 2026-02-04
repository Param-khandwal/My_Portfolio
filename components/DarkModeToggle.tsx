"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-gray-200 dark:border-gray-800">
        <Moon className="w-5 h-5 text-gray-700" />
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-gray-200 dark:border-gray-800 hover:bg-white/20 dark:hover:bg-black/30 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </motion.div>
    </motion.button>
  );
}
