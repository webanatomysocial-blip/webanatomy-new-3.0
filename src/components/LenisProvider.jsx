"use client";
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LenisContext } from './LenisContext';
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  useEffect(() => {
    const newLenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = newLenis;
    setLenis(newLenis);
    setIsLoading(false);

    // Sync Lenis with GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    newLenis.on('scroll', ScrollTrigger.update);

    function update(time) {
      newLenis.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      newLenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(update);
      newLenis.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

export default LenisProvider;