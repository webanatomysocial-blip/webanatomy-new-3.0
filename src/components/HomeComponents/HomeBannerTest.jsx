"use client";

import React, { useEffect, useRef } from "react";
import "../../css/HomeComponentsCss/HomeBannerTest.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeBannerTest() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the container for one screen height of scroll.
      ScrollTrigger.create({
        trigger: ".home-banner-container",
        start: "top top",
        end: () => "+=" + containerRef.current.offsetHeight,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      // Scroll-driven reveal of the title, word by word, left to right,
      // same scrub pattern as HomeTextFade: tied to scroll position and
      // reversible if the user scrolls back up.
      const words = gsap.utils.toArray(".title-word");

      gsap.set(words, { opacity: 0, y: 40 });
      gsap.to(words, {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".home-banner-container",
          start: "top top",
          end: "+=50%",
          scrub: 0.1,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="home-banner-container" ref={containerRef}>
      {/* Background Video */}
      <video
        className="home-banner-bg"
        src="/videos/homeBanner/banner.mp4?v=2"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="HomeBannerOverlay"></div>

      {/* Content Overlay */}
      <div className="home-banner-content">
        <div className="home-banner-bottom-left">
          <h1 className="big-head-text">Build what matters</h1>
          <h1 className="head-text-white-2 title-line" style={{paddingTop:"20px",}}>
            {["Design", ".", "Build", ".", "Scale"].map((word, i) => (
              <span key={i} className="title-word" style={{ display: "inline-block", marginRight: "0.25em" }}>
                {word}
              </span>
            ))}
          </h1>
        </div>
        <div className="home-banner-bottom-right">
          {/* Buttons completely removed */}
        </div>
      </div>
    </div>
  );
}
