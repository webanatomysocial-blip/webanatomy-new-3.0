"use client";

import React, { useState } from "react";
import "../../css/contact.css";
import fullBg from "@/assets/images/contact-page.avif";

export default function ContactClient() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "IN",
    phone: "",
    message: "",
    privacy: false,
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.privacy) {
      setErrorMsg("Please agree to the privacy policy before submitting.");
      return;
    }
    if (!form.email || !form.message) {
      setErrorMsg("Email and message are required.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const data = new FormData();
    data.append("name", `${form.firstName} ${form.lastName}`.trim());
    data.append("email", form.email);
    data.append("phone", `${form.countryCode} ${form.phone}`.trim());
    data.append("message", form.message);

    try {
      const res = await fetch("/api/send-email.php", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          countryCode: "IN",
          phone: "",
          message: "",
          privacy: false,
        });
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Could not reach the server. Please try again later.");
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

        {status === "success" ? (
          <div className="contact-success">
            <h3 className="sub-head-text-white">Message Sent!</h3>
            <p className="paragraph-text-white">
              Thank you for reaching out. We'll be in touch soon.
            </p>
            <button
              className="white-bg-btn"
              style={{ marginTop: "20px" }}
              onClick={() => setStatus("idle")}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Tony"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Stark"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="tony@starkindustries.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <div className="phone-input-wrapper">
                <select
                  className="country-select"
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                >
                  <option value="US">US</option>
                  <option value="IN">IN</option>
                  <option value="UK">UK</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 020-3050"
                  style={{ flex: 1 }}
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Leave us a message..."
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {errorMsg && (
              <p style={{ color: "#ff6b6b", fontSize: "14px", marginBottom: "12px" }}>
                {errorMsg}
              </p>
            )}

            <div className="privacy-policy">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={form.privacy}
                onChange={handleChange}
              />
              <label htmlFor="privacy">
                You agree to our friendly <a href="#">privacy policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className="white-bg-btn"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              {status !== "sending" && (
                <div className="icon-btn">
                  <span className="icon-inside-btn-1">→</span>
                  <span className="icon-inside-btn-2">→</span>
                </div>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
