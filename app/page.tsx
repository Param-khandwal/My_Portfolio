"use client";

import { portfolioData } from "@/data/portfolio";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// Corrected to named imports
import { IntroOverlay } from "@/components/IntroOverlay";
import { useIntroAnimation } from "@/lib/animations";
import { LivingBackground } from "@/components/LivingBackground";
import { GrainOverlay } from "@/components/GrainOverlay";
import { SootCursor } from "@/components/SootCursor";
import { Atmosphere } from "@/components/Atmosphere";
import Navbar from "@/components/Navbar";
import ThreeHero from "@/components/ThreeHero";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  const { isAnimationActive, isIntroFinished } = useIntroAnimation();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <LivingBackground />
      </div>
      <ParticleBackground />
      <GrainOverlay />
      <SootCursor />
      <Atmosphere />

      {isAnimationActive && <IntroOverlay personalData={portfolioData.personal} />}

      <main
        className={`transition-opacity duration-500 ${
          isIntroFinished ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* 3D scrollytelling hero */}
          <ThreeHero
            name={portfolioData.personal.name}
            title={portfolioData.personal.title}
            subtitle={portfolioData.personal.subtitle}
          />
          {/* Existing 2D hero (optional, can be removed if you only want 3D) */}
          <Hero personalData={portfolioData.personal} />
          <About personalData={portfolioData.personal} />
          <Skills skillsData={portfolioData.skills} />
          <Experience experienceData={portfolioData.experience} educationData={portfolioData.education} />
          <Projects projectsData={portfolioData.projects} />
          <Certifications certificationsData={portfolioData.certifications} />
          <Contact socialData={portfolioData.social} />
        </div>
        <Footer personalData={portfolioData.personal} />
      </main>
    </>
  );
}
