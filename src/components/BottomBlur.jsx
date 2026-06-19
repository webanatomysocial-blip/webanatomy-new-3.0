import React from 'react';

const BottomBlur = () => {
  const steps = 8;
  const maxBlur = 40; // Max blur at the very bottom

  return (
    <div className="bottom-blur-container">
      {Array.from({ length: steps }).map((_, i) => {
        // Calculate percentages for the mask
        // i=0: 0% to 12.5%, i=1: 12.5% to 25%, etc.
        const stepSize = 100 / steps;
        
        // To avoid seams, Framer overlaps the gradients slightly by stretching the solid part
        // transparent at (i-1)*step, solid at i*step, solid at (i+1)*step, transparent at (i+2)*step
        const transparentStart = Math.max(0, (i - 1) * stepSize);
        const solidStart = i * stepSize;
        const solidEnd = (i + 1) * stepSize;
        const transparentEnd = Math.min(100, (i + 2) * stepSize);

        // Exponential blur increase
        // i=0 -> low blur, i=7 -> max blur
        const blurAmount = maxBlur * Math.pow(i / (steps - 1), 2);

        // First layer doesn't need a top transparent fade
        // Last layer doesn't need a bottom transparent fade
        const gradient = `linear-gradient(to bottom, 
          rgba(0,0,0,0) ${i === 0 ? 0 : transparentStart}%, 
          rgba(0,0,0,1) ${solidStart}%, 
          rgba(0,0,0,1) ${solidEnd}%, 
          rgba(0,0,0,0) ${i === steps - 1 ? 100 : transparentEnd}%)`;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              pointerEvents: 'none',
              maskImage: gradient,
              WebkitMaskImage: gradient,
              backdropFilter: `blur(${blurAmount}px)`,
              WebkitBackdropFilter: `blur(${blurAmount}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default BottomBlur;
