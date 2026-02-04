"use client";

import { motion } from "framer-motion";

export default function Skills({ skillsData }: { skillsData: any }) {
  const allSkills = Object.values(skillsData).flat();

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-serif font-bold text-[#2c5d63] dark:text-[#d4f1f4] mb-20">
            Magical Artifacts
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {allSkills.map((skill: any, index: number) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.05, type: "spring" }}
              whileHover={{ scale: 1.15 }}
              className="relative cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 3 + Math.random(),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random()
                }}
                className="w-28 h-28 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-lg"
              >
                <span className="font-bold text-[#2c5d63] dark:text-white text-sm px-2">
                    {skill}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
