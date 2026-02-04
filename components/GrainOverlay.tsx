export function GrainOverlay() {
  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none opacity-20 mix-blend-multiply">
      {/* This SVG filter creates a moving noise texture */}
      <svg className="w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
