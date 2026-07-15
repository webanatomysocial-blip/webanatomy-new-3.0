"use client";

import React from "react";
import "@/css/AboutComponentsCss/GloballyConnected.css";
import mapImg from "@/assets/images/about/map.png";

const PINS = [
  { id: 1, name: "Hyderabad", left: "66%", top: "52%" },
  { id: 2, name: "UK", left: "46%", top: "22%" },
  { id: 3, name: "South Africa", left: "51%", top: "78%" },
];

export default function GloballyConnected() {
  return (
    <section className="gcon-section">
      <div className="gcon-container">
        {/* Section Header */}
        <div className="gcon-header">
          <h2 className="head-text gcon-title"> We Work Without Borders</h2>
          <span className="gcon-tag">✦ Our Reach</span>
        </div>

        {/* World Map Wrapper */}
        <div className="gcon-map-wrapper">
          <img
            src={mapImg.src}
            alt="World Map Grid"
            className="gcon-map-image"
          />

          {/* Interactive Project Pins */}
          {PINS.map((pin) => (
            <div
              key={pin.id}
              className="gcon-pin"
              style={{ left: pin.left, top: pin.top }}
            >
              {/* Pin Label */}
              <div className="gcon-pin-label">{pin.name}</div>

              {/* Pin Marker Pointer SVG */}
              <svg viewBox="0 0 24 30" className="gcon-pin-icon">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 9 12 18 12 18s12-9 12-18c0-6.63-5.37-12-12-12z"
                  fill="#000000"
                />
                <circle cx="12" cy="12" r="3.5" fill="#ffffff" />
              </svg>
            </div>
          ))}
        </div>

        {/* Section Bottom Description */}
        <p className="gcon-desc">
          We’re available across multiple locations worldwide, Delivering
          creativity without borders, Connected Globally. Designed Universally.
        </p>
      </div>
    </section>
  );
}
