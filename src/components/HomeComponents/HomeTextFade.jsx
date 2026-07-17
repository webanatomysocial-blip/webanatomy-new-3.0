"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/HomeComponentsCss/HomeTextFade.css";

gsap.registerPlugin(ScrollTrigger);

const HomeTextFade = ({ triggerRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef ? triggerRef.current : sectionRef.current,
          start: "top top", // Start when wrapper hits top
          end: "top+=100 top", // End when wrapper hits bottom
          scrub: 0.5,
        },
      });

      // Animate normal chars to white
      tl.to(".char-span:not(.gradient-char)", {
        color: "white",
        duration: 0.1,
        stagger: 0.03,
        ease: "power1.inOut",
      }).to(".gradient-char", {
        color: "white",
        duration: 1,
        stagger: 0.03,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const text = `The digital world doesn't need more websites, campaigns, or
platforms. It needs better thinking. At Web Anatomy, we believe
every successful project begins by understanding the problem,
not by selling a solution. That's how we bring clarity to complexity
and build digital experiences that truly matter.`;

  const lines = text.split("\n");
  const targetPhrase = "making that a reality.";

  return (
    <div className="Text-Section" ref={sectionRef}>
      <div className="text-container">
        {lines.map((line, lineIndex) => {
          const isTargetLine = line.includes(targetPhrase);
          const targetStartIndex = line.indexOf(targetPhrase);

          return (
            <div key={lineIndex} className="line">
              {line.split("").map((char, charIndex) => {
                if (char === " ") {
                  return <span key={charIndex} className="space"> </span>;
                }

                const isLastPeriod =
                  lineIndex === lines.length - 1 &&
                  charIndex === line.length - 2 &&
                  char === ".";

                let isGradientChar = false;
                if (isTargetLine && charIndex >= targetStartIndex) {
                  if (charIndex < targetStartIndex + targetPhrase.length) {
                    isGradientChar = true;
                  }
                }

                return (
                  <span
                    key={charIndex}
                    className={`char-span ${isLastPeriod ? "visi" : ""} ${
                      isGradientChar ? "gradient-char" : ""
                    }`}
                  >
                    {char}
                  </span>
                );
              })}
              {lineIndex < lines.length - 1 && (
                <>
                  <br className="desktop-br" />
                  <span className="mobile-space"> </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeTextFade;
