"use client";

import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressDotX = useTransform(scrollYProgress, [0, 1], ["0%", "calc(100% - 4px)"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsScrolled(latest > 0.1);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-xl font-serif font-bold text-[#2c5d63] dark:text-blue-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#5ba359] dark:hover:text-emerald-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5ba359] dark:bg-emerald-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar - Premium Design */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        <motion.div
          className="absolute bottom-0 h-1 w-1 bg-white rounded-full shadow-lg"
          style={{ x: progressDotX }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-16 right-0 bottom-0 w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl z-40 md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-[#5ba359] dark:hover:text-emerald-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
