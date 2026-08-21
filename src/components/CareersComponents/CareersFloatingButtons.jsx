"use client";

import React from "react";
import { PiEnvelopeSimpleFill, PiBriefcaseFill } from "react-icons/pi";
import "@/css/CareersComponentsCss/CareersFloatingButtons.css";

// Same recipient list send-email.php uses for formType=careers
const CAREERS_MAIL_TO = [
  "webanatomysocial@gmail.com",
  "udaya@mosol9.com",
  "priya.k@mosol9.com",
  "Srujan@mosol9.com",
  "supraja@mosol9.com",
].join(",");

export default function CareersFloatingButtons() {
  const scrollToOpenPositions = () => {
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="careers-floating-buttons">
      <a
        href={`mailto:${CAREERS_MAIL_TO}?subject=${encodeURIComponent("Career Inquiry")}`}
        className="careers-floating-btn"
        aria-label="Mail"
        title="Mail"
      >
        <PiEnvelopeSimpleFill size={20} />
      </a>
      <button
        type="button"
        className="careers-floating-btn"
        onClick={scrollToOpenPositions}
        aria-label="Open Positions"
        title="Open Positions"
      >
        <PiBriefcaseFill size={20} />
      </button>
    </div>
  );
}
