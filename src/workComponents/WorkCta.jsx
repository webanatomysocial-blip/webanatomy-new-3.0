"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../workCss/WorkCta.css";
import landscapeImg from "../WorkImages/threatsenseai/beautiful-scenery.jpg";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function WorkCta({
  src,
  text,
  heading,
  sub,
  ctaText,
  supremeLogo,
  bottomLeftLogo,
  className = "",
}) {
  const containerRef = useRef(null);
  const imageSrc = src && typeof src === "object" ? src.src : src;
  const fallbackSrc = landscapeImg && typeof landscapeImg === "object" ? landscapeImg.src : landscapeImg;

  return (
    <section className={`work-cta-wrapper ${className}`} ref={containerRef}>
      <div className="work-cta-bottom">
        <img
          src={imageSrc || fallbackSrc}
          alt="CTA Background"
          className="work-cta-landscape-bg"
        />

        {/* Top-Right brand logo (e.g., Supreme) */}
        {supremeLogo && (
          <div className="work-cta-top-right-logo">
            <img
              src={typeof supremeLogo === "object" ? supremeLogo.src : supremeLogo}
              alt="Brand Partner"
            />
          </div>
        )}

        {/* White CTA Card Box on the left */}
        <div className="work-cta-text-box">
          {heading ? (
            <div className="work-cta-custom-content">
              <h2 className="work-cta-heading">
                {heading}
              </h2>
              {sub && <p className="work-cta-sub">{sub}</p>}
              {ctaText && (
                <Link href="/contact" className="work-cta-btn">
                  {ctaText}
                </Link>
              )}
            </div>
          ) : (
            <>
              <div className="work-cta-flag">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                  alt="India Flag"
                  width="40"
                />
              </div>
              <p>
                {text ||
                  "On a COVID morning, with barely enough groceries to whip up a meal, every Mrs. Helpless was completely clueless looking at the hungry, wailing babies, and this scenario was increasing in numbers."}
              </p>
            </>
          )}
        </div>

        {/* Bottom-Left Badge / Logo (e.g., Leenus India white card) */}
        {bottomLeftLogo && (
          <div className="work-cta-bottom-left-badge">
            <img
              src={typeof bottomLeftLogo === "object" ? bottomLeftLogo.src : bottomLeftLogo}
              alt="Client Brand"
            />
          </div>
        )}
      </div>
    </section>
  );
}
