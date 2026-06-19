"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "@/css/CareersComponentsCss/CareersCarousel.css";
import WhiteButton from "../WhiteButton";

// Import new images from careers gallery
import slide1 from "@/assets/images/careers/gallery/1.jpeg";
// import slide2 from "@/assets/images/careers/gallery/2.jpeg";
import slide3 from "@/assets/images/careers/gallery/3.jpeg";
import slide4 from "@/assets/images/careers/gallery/4.jpeg";
import slide5 from "@/assets/images/careers/gallery/5.jpeg";
import slide6 from "@/assets/images/careers/gallery/6.JPG";
import slide7 from "@/assets/images/careers/gallery/7.JPG";
import slide8 from "@/assets/images/careers/gallery/8.JPG";
// import slide9 from "@/assets/images/careers/gallery/9.jpg";
import slide10 from "@/assets/images/careers/gallery/10.JPG";
import slide11 from "@/assets/images/careers/gallery/11.jpg";
// import slide12 from "@/assets/images/careers/gallery/12.jpg";
// import slide13 from "@/assets/images/careers/gallery/13.jpg";

// Import transparent image for the overlay card
import centerImg from "@/WorkImages/Thesase/reverse-nobackground-locker/locker_01_trans_0284.webp";

const SLIDES = [
  slide1,  slide3, slide4, slide5, slide6, 
  slide7, slide8, slide10, slide11,
];

export default function CareersCarousel() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Create a linear infinite scroll from right to left (xPercent goes to -50% because slides are duplicated)
    const tween = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    tweenRef.current = tween;

    return () => {
      if (tween) tween.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      // Smoothly decelerate the scroll speed on hover
      gsap.to(tweenRef.current, { timeScale: 0.15, duration: 0.8, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      // Smoothly accelerate back to normal speed on leave
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.8, ease: "power2.out" });
    }
  };

  // Duplicate the slides list to achieve a seamless loop
  const doubledSlides = [...SLIDES, ...SLIDES];

  return (
    <section className="ccar-section">
      <div 
        className="ccar-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Carousel Track Wrapper */}
        <div className="ccar-track-wrapper">
          <div ref={trackRef} className="ccar-track">
            {doubledSlides.map((slide, index) => (
              <div key={index} className="ccar-slide">
                <img 
                  src={slide.src} 
                  alt={`Slide ${index + 1}`} 
                  className="ccar-slide-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Central Overlay Glass Card */}
        <div className="ccar-center-card">
          <div className="ccar-center-image-wrapper">
           
          </div>
          
          <WhiteButton 
            text="Start Your Growth Journey" 
            style={{ width: "100%" }}
            href="/contact"
          />
        </div>

      </div>
    </section>
  );
}
