"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import "@/css/Footer.css";

export default function Footer() {
  const topMarqueeItems = [
    "Visual Design", "Branding & Identity", "Web Design & Development", "UI/UX Design", "Motion & Visual Design",
    "Visual Design", "Branding & Identity", "Web Design & Development", "UI/UX Design", "Motion & Visual Design",
    "Visual Design", "Branding & Identity", "Web Design & Development", "UI/UX Design", "Motion & Visual Design"
  ];

  const bottomMarqueeItems = [
    "Find Clarity In Chaos.", "Find Clarity In Chaos.", "Find Clarity In Chaos.", "Find Clarity In Chaos."
  ];

  return (
    <footer className="wa-footer">
      {/* 1. Top Section (Pill Marquee) */}
      <div className="footer-top-marquee">
        <div className="marquee-track marquee-left">
          {topMarqueeItems.map((item, index) => (
            <span key={index} className="marquee-pill">{item}</span>
          ))}
        </div>
      </div>

      {/* 2. Middle Section */}
      <div className="footer-middle">
        {/* Left Column */}
        <div className="footer-middle-left">
          <p className="footer-marketing-tech">Marketing Tech based in Hyderabad.</p>
          <div className="footer-links-list">
            <Link href="/about" className="footer-nav-link">
              <span>About us</span>
              <FiArrowUpRight className="footer-link-icon" />
            </Link>
            <Link href="/works" className="footer-nav-link">
              <span>Projects</span>
              <FiArrowUpRight className="footer-link-icon" />
            </Link>
            <Link href="/services" className="footer-nav-link">
              <span>Services</span>
              <FiArrowUpRight className="footer-link-icon" />
            </Link>
            <Link href="/blog" className="footer-nav-link">
              <span>Blog</span>
              <FiArrowUpRight className="footer-link-icon" />
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-middle-right">
          <div className="footer-info-row top-info-row">
            <Link href="/privacy-policy" className="footer-info-link">Privacy policy</Link>
            <Link href="/terms-of-service" className="footer-info-link">Terms of service</Link>
          </div>
          
          <div className="footer-info-row">
            <div className="footer-info-block">
              <span className="footer-info-label">LOCATION</span>
              <span className="footer-info-value" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <span>
                  🇮🇳 <strong>India</strong><br />
                </span>
                <span>
                  🇬🇧 <strong>UK</strong><br />
                </span>
                <span>
                  🇿🇦 <strong>South Africa</strong><br />
                </span>
              </span>
            </div>
            <div className="footer-info-block contact-block">
              <span className="footer-info-label">CONTACT US</span>
              <a href="tel:+919705030977" className="footer-info-value">+91 97050 30977</a>
            </div>
          </div>

          <div className="footer-info-row">
            <div className="footer-info-block">
              <span className="footer-info-label">MON—FRI</span>
              <span className="footer-info-value">09.00am—06.00pm</span>
            </div>
            <div className="footer-info-block contact-block">
              <span className="footer-info-label">EMAIL</span>
              <a href="mailto:hello@webanatomy.in" className="footer-info-value">hello@webanatomy.in</a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Section (Massive Marquee) */}
      <div className="footer-bottom-marquee">
        <div className="marquee-track marquee-right">
          {bottomMarqueeItems.map((item, index) => (
            <span 
              key={index} 
              className="massive-marquee-text"
              style={{ color: '#ffffff' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

     
    </footer>
  );
}