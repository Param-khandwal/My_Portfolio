export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

export const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

// Premium animation variants
export const wordAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

export const glassCard = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 10px 40px rgba(91, 163, 89, 0.3)",
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

export const rippleEffect = {
  whileTap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

export const breathingAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

import { useState, useEffect } from "react";

export function useIntroAnimation() {
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setIsAnimationActive(false);
      setIsIntroFinished(true);
    } else {
      setIsAnimationActive(true);
      const timer = setTimeout(() => {
        setIsAnimationActive(false);
        setIsIntroFinished(true);
        sessionStorage.setItem("hasSeenIntro", "true");
      }, 3500); // Duration of IntroOverlay animation + delay

      return () => clearTimeout(timer);
    }
  }, []);

  return { isAnimationActive, isIntroFinished };
}