"use client";

import { motion } from "framer-motion";

export default function Experience({ experienceData, educationData }: { experienceData: any[]; educationData: any[] }) {
  return (
    <section id="experience" className="relative py-40">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-serif font-bold text-[#2c5d63] dark:text-[#d4f1f4] text-center mb-24">
          The Journey So Far
        </h2>

        <div className="relative border-l-4 border-dashed border-[#5ba359]/30 dark:border-[#5ba359]/20 ml-6 md:ml-12 space-y-16">
          {[...experienceData, ...educationData].map((item, index) => {
            // Determine if this is an experience or education item
            const isExperience = 'role' in item;
            const title = isExperience ? item.role : item.degree;
            const org = isExperience ? item.company : item.institution;
            const period = isExperience ? item.period : item.year;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Leaf/Marker on the line */}
                <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#5ba359] rounded-full border-4 border-[#e0f7fa] dark:border-[#1a1a2a]" />

                <div className="bg-white/60 dark:bg-[#2d3748]/60 p-8 rounded-3xl border border-[#5ba359]/20 shadow-sm backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-[#2c5d63] dark:text-white">{title}</h3>
                  <p className="text-[#5ba359] font-serif italic text-lg">{org}</p>
                  <p className="text-sm text-slate-500 mb-4">{period}</p>

                  {isExperience && item.achievements && (
                    <ul className="list-disc pl-5 text-[#5f6c7b] dark:text-[#a0a0b0] space-y-2">
                      {item.achievements.map((ach: string, i: number) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
