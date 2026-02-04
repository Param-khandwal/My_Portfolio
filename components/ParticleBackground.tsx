"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  
  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    // Create particles
    const colors = [
      "rgba(91, 163, 89, 0.5)", // emerald
      "rgba(59, 130, 246, 0.5)", // blue
      "rgba(139, 92, 246, 0.5)", // purple
      "rgba(236, 72, 153, 0.5)", // pink
      "rgba(16, 185, 129, 0.5)", // emerald-500
    ];
    
    const initParticles = () => {
      const particleCount = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 10000));
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };
    
    initParticles();
    
    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with slight transparency for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check - wrap around
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;
        
        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Draw connections between close particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = 1 - distance / 100;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(91, 163, 89, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      particlesRef.current.forEach((particle) => {
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.speedX += (dx / distance) * force * 0.1;
          particle.speedY += (dy / distance) * force * 0.1;
        }
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);
  
  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1.5 }}
    />
  );
};

export default ParticleBackground;