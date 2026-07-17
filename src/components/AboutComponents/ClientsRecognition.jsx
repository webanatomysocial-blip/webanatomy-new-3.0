"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/css/AboutComponentsCss/ClientsRecognition.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerImg from "@/assets/images/home/Industry-Recognitions/11.png";
import ScrollOverlay from "../HomeComponents/ScrollOverlay";
import Image from "next/image";

import img1 from "@/assets/images/home/Industry-Recognitions/1.png";
import img2 from "@/assets/images/home/Industry-Recognitions/2.png";
import img3 from "@/assets/images/home/Industry-Recognitions/3.png";
import img4 from "@/assets/images/home/Industry-Recognitions/4.png";
import img5 from "@/assets/images/home/Industry-Recognitions/5.png";
import img6 from "@/assets/images/home/Industry-Recognitions/6.png";
import img7 from "@/assets/images/home/Industry-Recognitions/7.png";
import img8 from "@/assets/images/home/Industry-Recognitions/8.png";
import img9 from "@/assets/images/home/Industry-Recognitions/9.png";
import img10 from "@/assets/images/home/Industry-Recognitions/10.png";

export default function ClientsRecognition({
  scrollOverlayColor = "white",
  title,
  tag,
  statNum = "50+",
}) {
  const sectionRef = useRef(null);
  const floatingImgRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const floatingImg = floatingImgRef.current;
    if (!section) return;

    const anims = [];

    if (floatingImg) {
      // Smooth parallax GSAP scroll effect on the floating dummy image
      const anim = gsap.to(floatingImg, {
        y: 160, // smoothly scrolls downward relative to the section scroll
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // scrubbing with delay for premium smoothness
        },
      });
      anims.push(anim);
    }

    // Scroll overlay divs animation aligned with top of the section
    const elements = section.querySelectorAll(".video-scroll-up");
    if (elements.length > 0) {
      const overlayTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // starts when top of section enters 80% viewport
          end: "top 20%", // ends when top of section reaches 20% viewport
          scrub: 1,
        },
      });

      elements.forEach((el, index) => {
        overlayTl.to(
          el,
          {
            top: "-300px",
            ease: "none",
          },
          index * 0.05,
        );
      });

      anims.push(overlayTl);
    }

    return () => {
      anims.forEach((anim) => anim.kill());
    };
  }, []);

  const LOGO_CARDS = [
    { row: 1, col: 2, type: "image", img: img1, invert: true },
    { row: 1, col: 4, type: "image", img: img2 },
    { name: "100+ Clients", row: 2, col: 3, type: "stat" },
    { row: 3, col: 2, type: "image", img: img3 },
    { row: 3, col: 4, type: "image", img: img4 },
    { row: 4, col: 1, type: "image", img: img5 },
    { row: 4, col: 3, type: "image", img: img6 },
    { row: 5, col: 2, type: "image", img: img7 },
    { row: 5, col: 4, type: "image", img: img8 },
    { row: 6, col: 3, type: "image", img: img9 },
    { row: 7, col: 4, type: "image", img: img10 },
  ];

  return (
    <section ref={sectionRef} className="cr-section">
      <ScrollOverlay color={scrollOverlayColor} heights={[60, 80, 100]} />
      {/* Background Grid Lines to match reference image */}
      <div className="cr-grid-lines">
        <div className="cr-line"></div>
        <div className="cr-line"></div>
        <div className="cr-line"></div>
        <div className="cr-line"></div>
        <div className="cr-line"></div>
      </div>

      <div className="cr-container">
        {/* Left column: Header text */}
        <div className="cr-left">
          <div className="cr-tag">{tag || "✦ Clients & Recognition"}</div>
          <h2 className="head-text-white cr-title">
            {title || (
              <>
                Trusted By Clients,
                <br />
                Recognized For Leads.
              </>
            )}
          </h2>
        </div>

        {/* Right column: Logo grid and floating image */}
        <div className="cr-right">
          <div className="cr-logo-grid">
            {/* Floating dummy image (about banner) with GSAP scroll effect */}
            <div className="cr-floating-img-wrapper">
              <Image
                ref={floatingImgRef}
                src={bannerImg}
                alt="Floating Brand Emblem"
                className="cr-floating-img"
              />
            </div>
            {LOGO_CARDS.map((card, i) => {
              let imageObj = card.img;

              return (
                <div
                  key={i}
                  className={`cr-logo-card cr-card-${card.type}`}
                  style={{ gridRow: card.row, gridColumn: card.col }}
                >
                  {card.type === "stat" ? (
                    <div className="cr-stat-content">
                      <span className="cr-stat-num">{statNum}</span>
                      <span className="cr-stat-lbl">Clients</span>
                    </div>
                  ) : card.type === "image" && imageObj ? (
                    <div
                      className="cr-logo-content"
                      style={{ padding: "24px" }}
                    >
                      <Image
                        key={imageObj.src || i}
                        src={imageObj}
                        className="cr-logo-img"
                        alt="Client Logo"
                        style={
                          card.invert
                            ? { filter: "invert(1) brightness(2)" }
                            : {}
                        }
                      />
                    </div>
                  ) : card.type === "logo-text" ? (
                    <div className="cr-logo-content">
                      <span className="cr-logo-icon">{card.icon}</span>
                      <span className="cr-logo-name">{card.name}</span>
                    </div>
                  ) : (
                    <div className="cr-logo-content">
                      <span className="cr-logo-name">{card.name}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
