"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects({ projectsData }: { projectsData: any[] }) {
  return (
    <section id="projects" className="relative py-40 overflow-hidden">
      {/* Cloud Divider */}
      <div className="absolute top-0 left-0 right-0 h-32 z-10 -translate-y-1">
         <svg viewBox="0 0 1440 320" className="w-full h-full fill-transparent">
           <path className="fill-[#e0f7fa] dark:fill-[#1a1a2a]" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
         </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-32"
        >
            <h2 className="text-5xl md:text-6xl font-serif font-black text-[#2c5d63] dark:text-[#d4f1f4]">
              Tales of Creation
            </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-y-40">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={index % 2 === 0 ? "md:mt-0" : "md:mt-32"}
            >
              {/* Floating Animation */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.2 }
                }}
                className="group relative bg-white dark:bg-[#2d3748] rounded-[2.5rem] overflow-hidden border-[6px] border-white dark:border-[#4a5568] shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-[#2c5d63] opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-[#2c5d63] dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#5f6c7b] dark:text-[#a0a0b0] mb-6 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                     {project.tech.map((t: string) => (
                        <span key={t} className="px-3 py-1 bg-[#e0f7fa] dark:bg-[#4a5568] text-[#2c5d63] dark:text-[#d4f1f4] rounded-full text-xs font-bold tracking-wide">
                            {t}
                        </span>
                     ))}
                  </div>

                  <div className="flex gap-4 border-t border-slate-100 dark:border-slate-700 pt-6">
                    <a href={project.liveUrl} className="flex items-center gap-2 text-[#5ba359] font-bold hover:text-[#4a8a49] transition-colors">
                      <ExternalLink className="w-4 h-4" /> Visit World
                    </a>
                    <a href={project.githubUrl} className="flex items-center gap-2 text-[#5f6c7b] dark:text-slate-400 font-bold hover:text-[#2c5d63] dark:hover:text-white transition-colors">
                      <Github className="w-4 h-4" /> Grimoire
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
