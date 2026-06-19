import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/threatsenseaicss/ThreatSenseAIIconScroll.css";
import tsLogo from "../../WorkImages/threatsenseai/svgs/Ts - 01.svg";
import behanceBg from "../../WorkImages/threatsenseai/svgs/Behance.png";

gsap.registerPlugin(ScrollTrigger);

const ThreatSenseAIIconScroll = () => {
  const containerRef = useRef(null);
  const mainIconRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // DESKTOP ANIMATION
      mm.add("(min-width: 769px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=1300",
            scrub: 1,
            pin: true,
          },
        });

        // Move icon to the right
        tl.fromTo(
          mainIconRef.current,
          {
            xPercent: -50,
            yPercent: -50,
            x: "-1vw",
            y: 30,
          },
          {
            xPercent: -50,
            yPercent: -50,
            x: "50vw",
            y: 30,
            ease: "power2.inOut",
            duration: 2,
          },
        );

        // Show text
        tl.to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 1,
          },
          ">",
        );
      });

      // MOBILE ANIMATION
      mm.add("(max-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=1300",
            scrub: 1,
            pin: true,
          },
        });

        // Move icon down
        tl.fromTo(
          mainIconRef.current,
          {
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          {
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: "45vh",
            ease: "power2.inOut",
            duration: 2,
          },
        );

        // Show text
        tl.to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 1,
          },
          ">",
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="ts-icon-scroll-main-wrapper">
      <section className="ts-icon-scroll-main-section" ref={containerRef}>
        <div className="ts-icon-scroll-left" style={{ backgroundImage: `url(${behanceBg.src})` }}>
          <div className="ts-icon-scroll-center-icon" ref={mainIconRef}>
            <img src={tsLogo.src} alt="ThreatSenseAI Logo" />
          </div>
        </div>
        <div className="ts-icon-scroll-right">
          <div className="ts-icon-scroll-content">
            <div className="ts-icon-scroll-text" ref={textRef}>
              ThreatSenseAI
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreatSenseAIIconScroll;
