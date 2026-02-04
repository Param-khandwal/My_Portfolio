"use client";

import { motion } from "framer-motion";

export default function About({ personalData }: { personalData: any }) {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#fff9f0] dark:bg-[#232334] p-8 md:p-16 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-[8px] border-double border-[#d4c5a9] dark:border-[#4a4a6a]"
        >
          {/* Paper Texture Corner Decoration */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#eaddcf] dark:bg-[#3a3a50] rounded-bl-3xl z-20" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Character/Image Area */}
            <div className="relative group mx-auto">
               <motion.div
                 animate={{ rotate: [0, 5, -5, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -inset-4 bg-[#b8e2f2] dark:bg-[#2d4a6f] rounded-full opacity-40 blur-xl group-hover:opacity-60 transition-opacity"
               />
               <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                 <img src={personalData.profileImage} alt="Profile" className="w-full h-full object-cover" />
               </div>
            </div>

            {/* Story Text */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#2c5d63] dark:text-[#d4f1f4] mb-6">
                The Prologue
              </h2>
              <div className="space-y-4 text-lg font-serif leading-relaxed text-[#5f6c7b] dark:text-[#a0a0b0]">
                 {personalData.bio.split(". ").map((sentence: string, i: number) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {sentence}.
                    </motion.p>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
