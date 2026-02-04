"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export function SootCursor() {
  const [sprites, setSprites] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // RAW coordinates for instant reaction (No Lag)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Direct updates - ZERO latency
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Throttled trail generation (less sprites = better performance)
      if (Math.random() > 0.9) {
        const id = Date.now() + Math.random();
        setSprites((prev) => [
          ...prev.slice(-10), // Keep fewer sprites
          { id, x: e.clientX, y: e.clientY },
        ]);
        
        setTimeout(() => {
          setSprites((prev) => prev.filter((s) => s.id !== id));
        }, 600);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, input, textarea, [role="button"]'));
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          body, a, button, input, textarea {
            cursor: none !important;
          }
        }
      `}</style>
      
      <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
        {/* Main Body - MOVES INSTANTLY */}
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="absolute -top-3 -left-3"
        >
          <motion.div
            animate={{ scale: isHovering ? 1.5 : 1 }}
            transition={{ duration: 0.1 }} // Snappy click response
            className="relative w-6 h-6 bg-black rounded-full blur-[0.5px] shadow-sm flex items-center justify-center"
          >
            {/* Eyes - Look at cursor direction could go here, keeping simple for perf */}
            <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-white rounded-full">
              <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-black rounded-full" />
            </div>
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-white rounded-full">
              <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-black rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* The Trail - Float away logic */}
        {sprites.map((sprite) => (
          <motion.div
            key={sprite.id}
            initial={{ opacity: 0.6, scale: 0.6, x: sprite.x, y: sprite.y }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              y: sprite.y - 30, // Floats UP like soot
              x: sprite.x + (Math.random() * 20 - 10)
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black/40 rounded-full blur-[1px]"
          />
        ))}
      </div>
    </>
  );
}
