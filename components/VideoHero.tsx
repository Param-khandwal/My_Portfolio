"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function VideoHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoDuration, setVideoDuration] = useState(0);

  // Track scroll progress within this container (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll value so the video plays smoothly
  const smoothScroll = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    mass: 0.5,
  });

  // Update video time when scroll changes
  useEffect(() => {
    const updateVideo = () => {
      if (videoRef.current && videoDuration) {
        const scrollValue = smoothScroll.get();
        if (Number.isFinite(scrollValue)) {
          videoRef.current.currentTime = videoDuration * scrollValue;
        }
      }
    };

    const unsubscribe = smoothScroll.on("change", updateVideo);
    return () => unsubscribe();
  }, [smoothScroll, videoDuration]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  // Text 1 fades out at 20% scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Text 2 fades in at 30% and out at 60%
  const opacity2 = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.6, 0.7],
    [0, 1, 1, 0]
  );
  const scale2 = useTransform(scrollYProgress, [0.3, 0.7], [0.8, 1]);

  // Text 3 fades in at 75–85%
  const opacity3 = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  return (
    // Height 500vh means the user scrolls 5 screen lengths to scrub through the video
    <div ref={containerRef} className="relative h-[500vh]">
      {/* Sticky container holding video & text */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Video layer */}
        <video
          ref={videoRef}
          src="/intro.mp4" // Place intro.mp4 into /public
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
        />

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Scene 1: Intro */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight drop-shadow-2xl">
            HELLO.
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-slate-200 font-light">
            Scroll to begin the journey
          </p>
        </motion.div>

        {/* Scene 2: Role */}
        <motion.div
          style={{ opacity: opacity2, scale: scale2 }}
          className="absolute inset-0 flex items-center justify-start px-8 md:px-20 z-10"
        >
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-none">
              I AM A <br />
              <span className="text-blue-400">DEVELOPER.</span>
            </h2>
          </div>
        </motion.div>

        {/* Scene 3: CTA */}
        <motion.div
          style={{ opacity: opacity3 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white border-4 border-white px-8 py-6 md:px-12 md:py-8">
            SEE MY WORK
          </h2>
        </motion.div>
      </div>
    </div>
  );
}

