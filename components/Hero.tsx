"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Hero({ personalData }: { personalData: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden"
    >
      {/* 1. Background Sun/Moon Glow */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-100/60 rounded-full blur-3xl" />

      {/* 2. Slow Moving Background Clouds */}
      <div className="absolute inset-0 pt-20">
        {[...Array(3)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute bg-white/40 rounded-full blur-2xl"
             initial={{ x: -200 }}
             animate={{ x: "120vw" }}
             transition={{
               duration: 40 + i * 10,
               repeat: Infinity,
               ease: "linear",
               delay: i * 5
             }}
             style={{
               top: `${10 + i * 15}%`,
               width: `${300 + i * 100}px`,
               height: `${100 + i * 50}px`,
             }}
           />
        ))}
      </div>

      {/* 3. The Main Title (Text) */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 pb-32"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-9xl font-serif font-black text-[#2c5d63] dark:text-[#d4f1f4] drop-shadow-sm"
        >
          {personalData.name}
        </motion.h1>
        <p className="mt-6 text-xl md:text-2xl text-[#3a7e87] dark:text-[#a0cdd4] font-serif italic tracking-wide">
          {personalData.title}
        </p>
      </motion.div>

      {/* 4. The Hills (Parallax Layers) */}

      {/* Back Hill - Distant */}
      <motion.div
        style={{ y: mountainY }}
        className="absolute bottom-0 left-0 right-0 h-96 z-10"
      >
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full fill-[#8fbac4] dark:fill-[#2d4a6f] opacity-80">
          <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>

      {/* Front Hill - Close Up */}
      <div className="absolute bottom-0 left-0 right-0 h-64 z-30">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full fill-[#5ba359] dark:fill-[#1e3a5f]">
          <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* 5. Wind Lines (Animation Detail) */}
      <motion.div
        className="absolute bottom-32 left-0 right-0 z-40 opacity-30 pointer-events-none"
        animate={{ x: [-100, 100], opacity: [0, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-0.5 w-32 bg-white rounded-full absolute left-[10%]" />
        <div className="h-0.5 w-20 bg-white rounded-full absolute left-[40%] top-10" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-8 h-8 drop-shadow-md" />
      </motion.div>
    </section>
  );
}
