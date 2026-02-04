import { Variants } from "framer-motion";

// Advanced entrance animations
export const entranceAnimations = {
  fadeSlideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  },
  
  fadeSlideDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  },
  
  fadeSlideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  },
  
  fadeSlideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  },
  
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  },
  
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  },
  
  letterByLetter: (delay?: number): Variants => ({
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: delay ? delay + i * 0.03 : i * 0.03,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }),
  
  wordByWord: (delay?: number): Variants => ({
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay ? delay + i * 0.1 : i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }),
  
  floatUp: {
    hidden: { opacity: 0, y: 100, rotateX: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  },
  
  floatDown: {
    hidden: { opacity: 0, y: -100, rotateX: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  },
  
  floatLeft: {
    hidden: { opacity: 0, x: 100, rotateY: -10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  },
  
  floatRight: {
    hidden: { opacity: 0, x: -100, rotateY: 10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  },
  
  popIn: {
    hidden: { opacity: 0, scale: 0.5, rotate: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  },
  
  slideInFromBottom: {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  },
  
  slideInFromTop: {
    hidden: { opacity: 0, y: -100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  },
  
  slideInFromLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  },
  
  slideInFromRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  },
  
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  },
  
  flipIn: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { 
      opacity: 1, 
      rotateY: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  },
  
  rotateIn: {
    hidden: { opacity: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  }
};

// Enhanced scroll animations
export const scrollAnimations = {
  parallaxY: (range: [number, number] = [-20, 20]) => ({
    y: range
  }),
  
  parallaxOpacity: (range: [number, number] = [0, 1]) => ({
    opacity: range
  }),
  
  parallaxScale: (range: [number, number] = [0.8, 1.2]) => ({
    scale: range
  }),
  
  parallaxRotate: (range: [number, number] = [-5, 5]) => ({
    rotate: range
  }),
  
  parallaxBlur: (range: [number, number] = [0, 10]) => ({
    filter: (value: number) => `blur(${value}px)`
  })
};

// Enhanced hover animations
export const hoverAnimations = {
  glow: {
    whileHover: {
      boxShadow: "0 0 20px rgba(91, 163, 89, 0.5), 0 0 40px rgba(91, 163, 89, 0.3)",
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  },
  
  lift: {
    whileHover: {
      y: -5,
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  },
  
  pulse: {
    whileHover: {
      scale: 1.05,
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  },
  
  tilt: {
    whileHover: {
      rotate: [0, -5, 5, 0],
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  },
  
  shimmer: {
    whileHover: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 1.5,
        repeat: Infinity
      }
    }
  }
};

// Enhanced tap animations
export const tapAnimations = {
  press: {
    whileTap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  },
  
  ripple: {
    whileTap: {
      scale: 0.98,
      boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)",
      transition: { duration: 0.1 }
    }
  }
};