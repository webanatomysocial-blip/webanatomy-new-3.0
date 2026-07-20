"use client";

import React, { useEffect, useRef } from "react";
import HomeTextFade from "./HomeTextFade";
import "../../css/HomeComponentsCss/TextFadeSection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiSparkleFill } from "react-icons/pi";
import Image from "next/image";
import fobesImg from "../../assets/images/fobes.jpeg";



gsap.registerPlugin(ScrollTrigger);

export default function TextFadeSection() {
  const containerRef = useRef(null);
  const countersRef = useRef(null);
  const triggerRef = useRef(null);
  const clarityRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation scoped to the container
      const counters = gsap.utils.toArray(countersRef.current.querySelectorAll(".counter-val"));
      const counterItems = gsap.utils.toArray(countersRef.current.querySelectorAll(".counter-item"));

      gsap.fromTo(
        counters,
        {
          innerText: 0,
        },
        {
          innerText: (i, target) => target.getAttribute("data-target"),
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          stagger: 0.2,
          scrollTrigger: {
            trigger: countersRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        counterItems,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: countersRef.current,
            start: "top 80%",
          },
        }
      );

      // "Find clarity in chaos" is visible from the start (no entrance animation)
      // and simply fades out in place as the counters below fade in.
      gsap.set(clarityRef.current, { opacity: 1 });
      gsap.set(countersRef.current, { opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: countersRef.current,
          start: "top bottom",
          end: "top 60%",
          scrub: true,
        },
      })
        .to(clarityRef.current, { opacity: 0, duration: 1 })
        .to(countersRef.current, { opacity: 1, duration: 1 }, "<");
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="text-fade-section-container">
      {/* 1st Container: Trusted By (Not Sticky) */}
      

      {/* 2nd Container: Sticky Text Fade + Find Clarity heading, pinned together */}
      <div className="sticky-wrapper" ref={triggerRef}>
        <div className="sticky-text-container">
          <HomeTextFade triggerRef={triggerRef} />
          <div className="clarity-heading" ref={clarityRef}>
            <h2>Find clarity in chaos</h2>
          </div>
        </div>
      </div>

      {/* 3rd Container: Counters */}
      <div className="counters-container" ref={countersRef}>
        <div className="counter-item">
          <div className="counter-number">
            <span className="counter-val" data-target="50" dangerouslySetInnerHTML={{ __html: "0" }}></span>+
          </div>
          <p className="counter-label">Global Clients</p>
        </div>
        <div className="counter-item">
          <div className="counter-number">
            <span className="counter-val" data-target="100" dangerouslySetInnerHTML={{ __html: "0" }}></span>+
          </div>
          <p className="counter-label">Projects Delivered</p>
        </div>
        <div className="counter-item">
          <div className="counter-number">
            <span className="counter-val" data-target="6" dangerouslySetInnerHTML={{ __html: "0" }}></span>+
          </div>
          <p className="counter-label">Years of Craft</p>
        </div>
        <div className="counter-item">
          <div className="counter-number">
            <span className="counter-val" data-target="25" dangerouslySetInnerHTML={{ __html: "0" }}></span>+
          </div>
          <p className="counter-label">Expert Team</p>
        </div>
      </div>
    </section>
  );
}
