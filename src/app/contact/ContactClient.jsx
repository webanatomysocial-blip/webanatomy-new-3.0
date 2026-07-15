"use client";

import React, { useState } from "react";
import "../../css/contact.css";
import fullBg from "@/assets/images/contact-page.avif";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";

export default function ContactClient() {
  const [copiedText, setCopiedText] = useState("");

  const handleCopyEmail = (e, email) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedText(email);
    setTimeout(() => {
      setCopiedText("");
    }, 2000);
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}?subject=Project Inquiry - Web Anatomy`;
  };

  return (
    <div className="contact-page">
      <div
        className="contact-left"
        style={{ backgroundImage: `url(${fullBg.src})` }}
      >
        <div className="contact-left-content">
          <div className="main-stat-block">
            <h1 className="big-head-text-white">₹50 Cr+</h1>
            <p className="sub-head-text-white">Ad Spend Managed</p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <h2 className="sub-head-text-white">100+</h2>
              <p className="sub-paragraph-text-white">Brands Worked With</p>
            </div>
            <div className="stat-item">
              <h2 className="sub-head-text-white">300%</h2>
              <p className="sub-paragraph-text-white">Avg. Conversion Lift</p>
            </div>
            <div className="stat-item">
              <h2 className="sub-head-text-white">2k+</h2>
              <p className="sub-paragraph-text-white">Leads Generated for Clients</p>
            </div>
            <div className="stat-item">
              <h2 className="sub-head-text-white">~7</h2>
              <p className="sub-paragraph-text-white">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <div className="contact-header">
          <h2 className="head-text-white">Contact Us</h2>
          <p className="paragraph-text-white">
            Have a project in mind? Let's talk. We'll get back to you promptly.
          </p>
        </div>

        <div className="contact-email-container">
          <p className="paragraph-text-white email-lead-text">
            Skip the form. Connect with our team directly. Click the button below to draft an email to our leadership team.
          </p>
          
          <a
            href="mailto:Srujan@mosol9.com,Moumita@Thewebanatomy.com?subject=Project Inquiry - Web Anatomy&body=Hello Web Anatomy Team,%0D%0A%0D%0AI'm reaching out to discuss a project..."
            className="white-bg-btn email-cta-btn"
            style={{ textDecoration: "none" }}
          >
            <span>Send us an Email</span>
            <div className="icon-btn">
              <span className="icon-inside-btn-1">→</span>
              <span className="icon-inside-btn-2">→</span>
            </div>
          </a>

          <div className="email-divider">
            <span className="divider-line"></span>
            <span className="divider-text">OR REACH OUT INDIVIDUALLY</span>
            <span className="divider-line"></span>
          </div>

          <div className="email-cards-grid">
            <div className="email-card" onClick={() => handleEmailClick("Srujan@mosol9.com")}>
              <div className="email-card-left">
                <div className="email-icon-wrapper">
                  <FiMail className="email-icon" size={20} />
                </div>
                <div className="email-card-info">
                  <span className="email-card-label">Srujan</span>
                  <span className="email-card-address">Srujan@mosol9.com</span>
                </div>
              </div>
              <div className="email-card-action">
                <button 
                  className={`email-action-icon-btn ${copiedText === "Srujan@mosol9.com" ? "copied" : ""}`}
                  onClick={(e) => handleCopyEmail(e, "Srujan@mosol9.com")}
                  title="Copy email address"
                >
                  {copiedText === "Srujan@mosol9.com" ? (
                    <>
                      <FiCheck size={14} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <FiCopy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="email-card" onClick={() => handleEmailClick("Moumita@Thewebanatomy.com")}>
              <div className="email-card-left">
                <div className="email-icon-wrapper">
                  <FiMail className="email-icon" size={20} />
                </div>
                <div className="email-card-info">
                  <span className="email-card-label">Moumita</span>
                  <span className="email-card-address">Moumita@Thewebanatomy.com</span>
                </div>
              </div>
              <div className="email-card-action">
                <button 
                  className={`email-action-icon-btn ${copiedText === "Moumita@Thewebanatomy.com" ? "copied" : ""}`}
                  onClick={(e) => handleCopyEmail(e, "Moumita@Thewebanatomy.com")}
                  title="Copy email address"
                >
                  {copiedText === "Moumita@Thewebanatomy.com" ? (
                    <>
                      <FiCheck size={14} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <FiCopy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

