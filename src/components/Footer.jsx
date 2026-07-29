"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";
import "@/css/Footer.css";
import badgeZenith from "@/assets/images/badge-zenith.png";
import zeNetzeroBadge from "@/assets/ze-netzero-badge.png";
import popupimage from "@/assets/plantation-vzm.jpg";

export default function Footer() {
  const [isNetZeroPopupOpen, setIsNetZeroPopupOpen] = useState(false);
  const [zenithUrl, setZenithUrl] = useState("https://zenithenergy.com/fail");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const allowedUrls = ["http://webanatomy.in/", "https://webanatomy.in/"];
      const referringUrl = document.referrer || window.location.href;
      const isAllowed =
        allowedUrls.some((url) => referringUrl.startsWith(url)) ||
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";

      if (isAllowed) {
        setZenithUrl("https://zenithenergy.com/success");
      } else {
        setZenithUrl("https://zenithenergy.com/fail");
      }
    }
  }, []);

  const topMarqueeItems = [
    "Visual Design",
    "Branding & Identity",
    "Web Design & Development",
    "UI/UX Design",
    "Motion & Visual Design",
    "Visual Design",
    "Branding & Identity",
    "Web Design & Development",
    "UI/UX Design",
    "Motion & Visual Design",
    "Visual Design",
    "Branding & Identity",
    "Web Design & Development",
    "UI/UX Design",
    "Motion & Visual Design",
  ];

  const bottomMarqueeItems = [
    "Find Clarity In Chaos.",
    "Find Clarity In Chaos.",
    "Find Clarity In Chaos.",
    "Find Clarity In Chaos.",
  ];

  return (
    <footer className="wa-footer">
      {/* 1. Top Section (Pill Marquee) */}
      <div className="footer-top-marquee">
        <div className="marquee-track marquee-left">
          {topMarqueeItems.map((item, index) => (
            <span key={index} className="marquee-pill">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Middle Section */}
      <div className="footer-middle">
        {/* Left Column */}
        <div className="footer-middle-left">
          <p className="footer-marketing-tech">
            Marketing Tech based in Hyderabad.
          </p>
          <div className="footer-links-list">
            <Link href="/about" className="footer-nav-link">
              <span>About us</span>
              <FiArrowUpRight className="footer-link-icon" />
            </Link>
            <Link href="/success-stories" className="footer-nav-link">
              <span>Projects</span>
              <FiArrowUpRight className="footer-link-icon" />
            </Link>
            <Link href="/services" className="footer-nav-link">
              <span>Services</span>
              <FiArrowUpRight className="footer-link-icon" />
            </Link>
            <Link href="/blogs" className="footer-nav-link">
              <span>Blogs</span>
              <FiArrowUpRight className="footer-link-icon" />
            </Link>
          </div>

          <div className="footer-social-icons">
            <a
              href="https://www.linkedin.com/company/web-anatomy-in/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/webanatomy.in?igsh=cHQ3aWxnMGZ1aXJu"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.behance.net/webanatomys"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <FaBehance size={24} />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-middle-right">
          <div className="footer-info-row top-info-row">
            <Link href="/privacy-policy" className="footer-info-link">
              Privacy policy
            </Link>
            <Link href="/terms-of-service" className="footer-info-link">
              Terms of service
            </Link>
          </div>

          <div className="footer-info-row">
            <div className="footer-info-block">
              <span className="footer-info-label">LOCATION</span>
              <span
                className="footer-info-value"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img
                    src="https://flagcdn.com/w20/in.png"
                    alt="India"
                    style={{ width: "20px" }}
                  />
                  <strong>India</strong>
                </span>
                <a
                  style={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                  }}
                  href="https://businessanatomy.co.uk/"
                >
                  <img
                    src="https://flagcdn.com/w20/gb.png"
                    alt="UK"
                    style={{ width: "20px" }}
                  />
                  <strong>UK</strong>
                </a>
                <a
                  href="https://businessanatomy.co.uk/"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img
                    src="https://flagcdn.com/w20/za.png"
                    alt="South Africa"
                    style={{ width: "20px" }}
                  />
                  <strong>South Africa</strong>
                </a>
              </span>
            </div>
            <div className="footer-info-block contact-block">
              <span className="footer-info-label">CONTACT US</span>
              <a href="tel:+919705030977" className="footer-info-value">
                +91 97050 30977
              </a>
              <br />
              {/* <br /> */}
              <span className="footer-info-label">EMAIL</span>
              <a
                href="mailto:hello@webanatomy.in"
                className="footer-info-value"
              >
                hello@webanatomy.in
              </a>
            </div>
          </div>

          <div className="footer-info-row">
            <div className="footer-info-block">
              <span className="footer-info-label">MON—FRI</span>
              <span className="footer-info-value">09.00am—06.00pm</span>
            </div>
            <div className="footer-info-block contact-block">
              <div
                className="footer-badge-container"
                onClick={() => setIsNetZeroPopupOpen(true)}
                style={{
                  cursor: "pointer",
                  maxWidth: "110px",
                  display: "none",
                }}
              >
                <Image
                  src={badgeZenith}
                  alt="Net Zero Badge"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
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
              style={{ color: "#ffffff" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {isNetZeroPopupOpen && (
        <div
          className="netzero-popup-overlay"
          onClick={() => setIsNetZeroPopupOpen(false)}
        >
          <div
            className="netzero-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="netzero-popup-close"
              onClick={() => setIsNetZeroPopupOpen(false)}
            >
              <FiX />
            </button>
            <div className="netzero-popup-image-container">
              <Image
                src={popupimage}
                alt="Trees planted"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  zIndex: "100000000000000000000000000000",
                }}
              />
            </div>
            <div className="netzero-popup-body">
              <h2 className="netzero-popup-title">Net Zero Website!</h2>
              <p className="netzero-popup-text">
                These trees are planted to offset the CO2 emissions of the
                website www.mosol9.com & is Verified by{" "}
                <span className="text-red">Zenith Energy</span>
              </p>
              <p className="netzero-popup-text">
                Let's make the Internet CO2 neutral!
              </p>
              <div className="netzero-popup-verify">
                Click the badge to verify{" "}
                <span className="verify-check">✔</span>
              </div>
              <div
                onClick={() => window.open(zenithUrl, "_blank", "noopener")}
                className="netzero-popup-badge-btn"
                role="button"
                tabIndex={0}
                style={{ cursor: "pointer", display: "inline-block" }}
              >
                <Image
                  src={zeNetzeroBadge}
                  alt="Carbon Neutral Badge"
                  style={{ width: "160px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
