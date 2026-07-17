"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiSparkleFill } from "react-icons/pi";
import "../../css/HomeComponentsCss/OurProcess.css";
import image1 from "../../assets/images/OurProcess/1.png";
import image2 from "../../assets/images/OurProcess/2.png";
import image3 from "../../assets/images/OurProcess/3.png";
import image4 from "../../assets/images/OurProcess/4.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurProcess() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const getScrollAmount = () => {
        let trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth + 150);
      };

      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const processSteps = [
    {
      id: "01",
      title: "Understand",
      desc: "Every project begins with understanding the real problem",
      imgUrl: image1,
    },
    {
      id: "02",
      title: "Define",
      desc: "Turn complexity into clarity.",
      imgUrl: image2,
    },
    {
      id: "03",
      title: "Design",
      desc: "Design experiences that solve problems.",
      imgUrl: image3,
    },
    {
      id: "04",
      title: "Build",
      desc: "Engineer solutions that perform and scale.",
      imgUrl: image4,
    },
    {
      id: "05",
      title: "Measure",
      desc: "Every decision is backed by data.",
      imgUrl: image4,
    },
    {
      id: "06",
      title: "Evolve",
      desc: "Every insight improves the next iteration.",
      imgUrl: image4,
    },
  ];

  return (
    <div className="our-process-pin-wrapper">
      <section className="our-process-section" ref={sectionRef}>
        <div className="op-track-wrapper">
          <div className="op-track" ref={trackRef}>
            <div className="op-header-container">
              <div className="op-header-top">
                <PiSparkleFill size={14} style={{ marginRight: "6px" }} /> The Loooped Framework
              </div>

              <div className="op-header-bottom">
                <h2 className="sub-para-text" style={{fontSize:"24px",fontWeight:"500"}}>Every project at Web Anatomy is <br/> Powered by LOOPED</h2>
                <p className="sub-para-text" >our proprietary operating system built to bring clarity, accountability, and momentum to every stage of delivery.</p>
              </div>
            </div>

            {processSteps.map((step, idx) => (
              <div className="op-card" key={idx}>
                <div className="op-card-number">{step.id}</div>

                <h3 className="sub-big-heading op-card-title">{step.title}</h3>

                <div className="op-card-image-wrapper">
                  <img
                    src={step.imgUrl.src}
                    alt={step.title}
                    className="op-card-image"
                    loading="lazy"
                  />
                </div>

                <p className="sub-para-text op-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
