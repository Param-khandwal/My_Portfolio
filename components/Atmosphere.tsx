"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Atmosphere() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate random firefly particles
    const particleCount = 30;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // %
      y: Math.random() * 100, // %
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      glowIntensity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-yellow-200/60 blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 3}px rgba(255, 255, 200, ${p.glowIntensity})`,
          }}
          animate={{
            y: [0, -100, 0], // Float up and down slowly
            x: [0, Math.random() * 50 - 25, 0], // Drift sideways
            opacity: [0, p.glowIntensity, 0], // Twinkle
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Optional: A light overlay vignette for "Cinematic" feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none" />
    </div>
  );
}