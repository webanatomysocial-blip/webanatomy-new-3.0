"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/css/AboutComponentsCss/ClientsRecognition.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerImg from "@/assets/images/Clients-logos/www.avif";
import ScrollOverlay from "../HomeComponents/ScrollOverlay";
import Image from "next/image";

import img1 from "@/assets/images/Clients-logos/1.png";
import img2 from "@/assets/images/Clients-logos/2.png";
import img3 from "@/assets/images/Clients-logos/3.png";
import img4 from "@/assets/images/Clients-logos/zenith.png";
import img5 from "@/assets/images/Clients-logos/5.png";
import img6 from "@/assets/images/Clients-logos/6.png";
import img7 from "@/assets/images/Clients-logos/7.png";
import img8 from "@/assets/images/Clients-logos/8.png";
import img9 from "@/assets/images/Clients-logos/9.png";
import img10 from "@/assets/images/Clients-logos/10.png";
import img11 from "@/assets/images/Clients-logos/11.png";
import img12 from "@/assets/images/Clients-logos/12.png";
import img13 from "@/assets/images/Clients-logos/13.png";
import img14 from "@/assets/images/Clients-logos/14.png";
import img15 from "@/assets/images/Clients-logos/15.png";
import img16 from "@/assets/images/Clients-logos/16.png";
import img17 from "@/assets/images/Clients-logos/17.png";
import img18 from "@/assets/images/Clients-logos/18.png";
import img19 from "@/assets/images/Clients-logos/19.png";
import img20 from "@/assets/images/Clients-logos/20.png";
import img21 from "@/assets/images/Clients-logos/21.png";
import img22 from "@/assets/images/Clients-logos/22.png";
import img23 from "@/assets/images/Clients-logos/23.png";
import img24 from "@/assets/images/Clients-logos/24.png";
import img25 from "@/assets/images/Clients-logos/25.png";
import img26 from "@/assets/images/Clients-logos/26.png";
import img27 from "@/assets/images/Clients-logos/27.png";
import img28 from "@/assets/images/Clients-logos/28.png";
import img29 from "@/assets/images/Clients-logos/29.png";
import img30 from "@/assets/images/Clients-logos/30.png";
import img31 from "@/assets/images/Clients-logos/31.png";
import img32 from "@/assets/images/Clients-logos/32.png";
import img33 from "@/assets/images/Clients-logos/33.png";
import img34 from "@/assets/images/Clients-logos/34.png";
import img35 from "@/assets/images/Clients-logos/35.png";
import img36 from "@/assets/images/Clients-logos/36.png";
import img37 from "@/assets/images/Clients-logos/37.png";
import img38 from "@/assets/images/Clients-logos/38.png";
import img39 from "@/assets/images/Clients-logos/39.png";
import img40 from "@/assets/images/Clients-logos/40.png";
import img41 from "@/assets/images/Clients-logos/41.png";
import img42 from "@/assets/images/Clients-logos/42.png";
import img43 from "@/assets/images/Clients-logos/43.png";
import img44 from "@/assets/images/Clients-logos/44.png";
import img45 from "@/assets/images/Clients-logos/45.png";
import img46 from "@/assets/images/Clients-logos/46.png";
import img47 from "@/assets/images/Clients-logos/47.png";
import img48 from "@/assets/images/Clients-logos/48.png";
import img49 from "@/assets/images/Clients-logos/49.png";
import img50 from "@/assets/images/Clients-logos/50.png";
import img51 from "@/assets/images/Clients-logos/51.png";
import img52 from "@/assets/images/Clients-logos/52.png";
import img53 from "@/assets/images/Clients-logos/53.png";
import img54 from "@/assets/images/Clients-logos/54.png";
import img55 from "@/assets/images/Clients-logos/55.png";

const allLogos = [
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
];

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
    { row: 1, col: 2, type: "image", img: img48 },
    { row: 1, col: 4, type: "image", img: img4 },
    { name: "100+ Clients", row: 2, col: 3, type: "stat" },
    { row: 3, col: 2, type: "image", img: img34 },
    { row: 3, col: 4, type: "image", img: img32 },
    { row: 4, col: 1, type: "image", img: img54 },
    { row: 4, col: 3, type: "image", img: img55 },
    { row: 5, col: 2, type: "image", img: img18 },
    { row: 5, col: 4, type: "image", img: img12 },
    { row: 6, col: 3, type: "image", img: img25 },
    { row: 7, col: 4, type: "image", img: img23 },
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
