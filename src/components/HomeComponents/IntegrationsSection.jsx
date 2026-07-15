"use client";
import React from "react";
import "../../css/HomeComponentsCss/IntegrationsSection.css";
import {
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiMail, FiGlobe, FiBarChart2 } from "react-icons/fi";
import BlackButton from "@/components/BlackButton";

const icons = [
  { id: 1, Icon: FaGoogle, color: "#4285F4" }, // SEO / Search
  { id: 2, Icon: FaFacebookF, color: "#1877F2" }, // Facebook Marketing
  { id: 3, Icon: FaInstagram, color: "#E4405F" }, // Instagram Marketing
  { id: 4, Icon: FaLinkedinIn, color: "#0A66C2" }, // LinkedIn Marketing
  { id: 5, Icon: FaYoutube, color: "#FF0000" }, // YouTube Marketing
  { id: 6, Icon: FiMail, color: "#34A853" }, // Email Marketing
  { id: 7, Icon: FiBarChart2, color: "#F59E0B" }, // Analytics
  { id: 8, Icon: FiGlobe, color: "#10B981" }, // Website / Web Presence
];

const IntegrationsSection = () => {
  return (
    <section className="integrations-section">
      <div className="integrations-container">
        
        {/* Left Side Content */}
        <div className="integrations-left">
          <div className="integrations-pill">
            <span className="pill-icon">✦</span> Integrations
          </div>

          <h2 className="head-text integrations-title">
            Your Entire Marketing,
            <br />
            Managed From One Place
          </h2>

          <p className="integrations-subtitle">
            We connect every channel your audience uses search, social,
            email, and beyond into one strategy built around your goals
            and refined by real results.
          </p>

          <BlackButton text="View All Services" href="/services" />
        </div>

        {/* Right Side Orbit */}
        <div className="integrations-right">
          <div className="orbit-wrapper">
            {/* Center Gradient Circle */}
            <div className="orbit-center"></div>

            {/* Inner Ring */}
            <div className="orbit-ring-inner"></div>

            {/* Rotating Ring */}
            <div className="orbit-ring">
              {icons.map((item, index) => {
                const angle = index * (360 / icons.length);

                return (
                  <div
                    className="orbit-anchor"
                    key={item.id}
                    style={{ "--angle": `${angle}deg` }}
                  >
                    <div className="orbit-icon-counter-spin">
                      <div
                        className="orbit-icon"
                        style={{ color: item.color }}
                      >
                        <item.Icon />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="integrations-quote">
            “One strategy. Every platform.
            <br />
            Measurable growth at every step.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;