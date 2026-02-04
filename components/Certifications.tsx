"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Star } from "lucide-react";
import { entranceAnimations, hoverAnimations, tapAnimations } from "@/lib/enhancedAnimations";

interface Certification {
  name: string;
  issuer: string;
  year: string;
  credential: string;
}

export default function Certifications({ certificationsData }: { certificationsData: Certification[] }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent dark:via-amber-950/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={entranceAnimations.staggerChildren}
        >
          <div className="text-center mb-20">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={entranceAnimations.popIn}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full border border-gray-200/50 dark:border-gray-700/50 mb-6"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Certifications
              </span>
            </motion.div>

            <motion.h2
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={entranceAnimations.fadeSlideUp}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-6"
            >
              Credentials
            </motion.h2>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={entranceAnimations.fadeSlideUp}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              Professional certifications and achievements
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={entranceAnimations.floatUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-800/50 shadow-lg"
                {...hoverAnimations.lift}
                {...tapAnimations.press}
              >
                <div className="flex justify-center mb-4">
                  <Award className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                </div>
                <motion.h3
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={entranceAnimations.fadeSlideUp}
                  className="font-semibold text-lg text-gray-900 dark:text-white mb-1"
                >
                  {cert.name}
                </motion.h3>
                <motion.p
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={entranceAnimations.fadeSlideUp}
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  {cert.issuer} - {cert.year}
                </motion.p>
                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={entranceAnimations.fadeSlideUp}
                  className="mt-3 text-xs text-gray-500 dark:text-gray-500"
                >
                  ID: {cert.credential}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}