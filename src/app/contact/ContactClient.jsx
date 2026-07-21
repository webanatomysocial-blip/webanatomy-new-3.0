"use client";

import React, { useState } from "react";
import "../../css/contact.css";
import fullBg from "@/assets/images/contact-page.avif";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setResponseMsg("");

    try {
      const response = await fetch('/api/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, formType: "contact" }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResponseMsg("Message sent successfully. We will get back to you soon!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setResponseMsg("Network error. Please try again later.");
    }
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Jane Doe" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="jane@example.com" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="+91 98765 43210" 
              value={formData.phone} 
              onChange={handleInputChange} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Tell us about your project..." 
              rows="4" 
              value={formData.message} 
              onChange={handleInputChange} 
              required
            ></textarea>
          </div>

          <button type="submit" className="white-bg-btn" disabled={status === "submitting"}>
            <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
            <div className="icon-btn">
              <span className="icon-inside-btn-1">→</span>
              <span className="icon-inside-btn-2">→</span>
            </div>
          </button>

          {responseMsg && (
            <div style={{ marginTop: '15px', color: status === 'success' ? '#2ed573' : '#ff4757', fontSize: '14px' }}>
              {responseMsg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
