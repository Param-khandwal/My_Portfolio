\"use client\";

import React, { useRef } from \"react\";
import { Canvas } from \"@react-three/fiber\";
import {
  ScrollControls,
  Scroll,
  useScroll,
  Environment,
} from \"@react-three/drei\";
import { useFrame } from \"@react-three/fiber\";

// Simple placeholder 3D object driven by scroll.
// You can replace this with a GLB character later.
function ScrollObject() {
  const ref = useRef<any>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (!ref.current) return;
    const t = scroll.offset; // 0 → 1
    ref.current.rotation.y = t * Math.PI * 2;
    ref.current.position.y = -1 + Math.sin(t * Math.PI) * 0.5;
  });

  return (
    <group ref={ref} position={[0, -1, 0]}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.7, 64, 64]} />
        <meshStandardMaterial
          color=\"#38bdf8\"
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
      <mesh position={[0, -0.9, 0]} receiveShadow>
        <cylinderGeometry args={[1.2, 1.2, 0.1, 64]} />
        <meshStandardMaterial
          color=\"#0f172a\"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

type ThreeHeroProps = {
  name: string;
  title: string;
  subtitle?: string;
};

export default function ThreeHero({ name, title, subtitle }: ThreeHeroProps) {
  return (
    <section id=\"hero\" className=\"relative h-screen w-full overflow-hidden\">
      {/* Canvas-based 3D scene */}
      <Canvas
        camera={{ position: [0, 1.5, 4], fov: 50 }}
        shadows
        className=\"absolute inset-0\"
      >
        {/* Lighting & environment */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Environment preset=\"city\" />

        {/* Scroll controls: 3 \"pages\" worth of scroll */}
        <ScrollControls pages={3} damping={0.2}>
          {/* 3D world */}
          <ScrollObject />

          {/* HTML overlay that scrolls with the scene */}
          <Scroll html className=\"w-full\">
            {/* Page 1 */}
            <section className=\"h-screen flex items-center justify-start px-8 md:px-20\">
              <div className=\"max-w-3xl space-y-4 md:space-y-6\">
                <p className=\"text-sm md:text-base uppercase tracking-[0.3em] text-slate-300/80\">
                  Portfolio
                </p>
                <h1 className=\"text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight\">
                  {name}
                </h1>
                <p className=\"text-lg md:text-2xl text-slate-200/90 font-medium\">
                  {title}
                </p>
              </div>
            </section>

            {/* Page 2 */}
            <section className=\"h-screen flex items-center justify-end px-8 md:px-20\">
              <div className=\"max-w-lg bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl text-left\">
                <h2 className=\"text-2xl md:text-3xl font-semibold text-white mb-4\">
                  About this portfolio
                </h2>
                <p className=\"text-sm md:text-base text-slate-100/90 leading-relaxed\">
                  {subtitle ||
                    \"A fully animated, story-driven interface built with Next.js, Framer Motion, and Three.js. Scroll to explore the journey.\"}
                </p>
              </div>
            </section>

            {/* Page 3 */}
            <section className=\"h-screen flex items-center justify-center px-8\">
              <div className=\"text-center space-y-4\">
                <p className=\"text-sm md:text-base uppercase tracking-[0.3em] text-slate-300/80\">
                  Scroll to Continue
                </p>
                <h2 className=\"text-3xl md:text-5xl font-bold text-white\">
                  Scroll down to see my work
                </h2>
              </div>
            </section>
          </Scroll>
        </ScrollControls>
      </Canvas>

      {/* Overlay gradient for readability at top */}
      <div className=\"pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 via-slate-950/70 to-transparent\" />
    </section>
  );
}

