"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import "@/css/CareersComponentsCss/OpenPositions.css";

const JOBS = [
  {
    id: 1,
    title: "SEO Executive",
    tags: ["On-site · Hyderabad", "Full-time · 1 – 2 Years"],
    desc: "Drive organic growth for Web Anatomy and our clients through smart keyword strategy, on-page optimisation and measurable performance."
  },
  {
    id: 2,
    title: "Content Creator",
    tags: ["On-site · Hyderabad", "Full-time · 0 – 1 Year"],
    desc: "Write and create content that is sharp, purposeful and built for the right audience, across social media, campaigns and brand communication."
  },
  {
    id: 3,
    title: "Account Manager",
    tags: ["On-site · Hyderabad", "Full-time · 0 – 1.5 Years"],
    desc: "Be the bridge between our clients and our team, managing relationships, timelines and expectations with clarity and confidence."
  },
  {
    id: 4,
    title: "Founder's Office",
    tags: ["On-site · Hyderabad", "Full-time · 0 – 1 Year"],
    desc: "Work directly alongside the founders across strategy, operations and growth initiatives. For someone who wants to understand how a premium agency is built from the inside."
  },
  {
    id: 5,
    title: "Performance Marketer",
    tags: ["On-site · Hyderabad", "Full-time · 1 – 2 Years"],
    desc: "Plan and execute data-driven ad campaigns across platforms to maximize ROI and drive scalable growth for our clients."
  }
];

const MAX_WORDS = 100;

const countWords = (text) => {
  if (!text || !text.trim()) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
};

const limitToMaxWords = (text, maxWords = MAX_WORDS) => {
  if (!text) return "";
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return text;

  let count = 0;
  let cutIndex = 0;
  const regex = /\S+/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    count++;
    if (count === maxWords) {
      cutIndex = match.index + match[0].length;
      break;
    }
  }
  return text.substring(0, cutIndex);
};

export default function OpenPositions() {
  const formRef = useRef(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    resume: null
  });
  
  const [status, setStatus] = useState("idle");
  const [responseMsg, setResponseMsg] = useState("");
  const fileInputRef = useRef(null);

  const handleApplyClick = (jobTitle) => {
    setFormData(prev => ({
      ...prev,
      role: jobTitle
    }));
    
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else if (name === "message") {
      const limitedValue = limitToMaxWords(value, MAX_WORDS);
      setFormData(prev => ({ ...prev, [name]: limitedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setResponseMsg("");

    try {
      const submitData = new FormData();
      submitData.append("formType", "careers");
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("role", formData.role);
      submitData.append("message", formData.message);
      
      if (formData.resume) {
        submitData.append("resume", formData.resume);
      }

      const response = await fetch('/api/send-email.php', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", role: "", message: "", resume: null });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        router.push("/careers/thank-you");
      } else {
        setStatus("error");
        setResponseMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setResponseMsg("Network error. Please try again later.");
    }
  };

  const messageWordCount = countWords(formData.message);

  const getMessagePlaceholder = () => {
    if (formData.role && formData.role !== "Other") {
      return `Describe yourself and why do you fit to this ${formData.role} role`;
    }
    return "Describe yourself and why do you fit to this role";
  };

  return (
    <section className="openpos-section">
      <div className="openpos-container">
        
        {/* Section Header */}
        <div className="openpos-header">
          <div className="openpos-header-left">
            <h2 className="head-text openpos-title">Open Positions</h2>
            <p className="openpos-subtitle">
              Five roles. One team. Find where you fit.
            </p>
          </div>
          <div className="openpos-header-right">
            <span className="openpos-badge">5 Open Roles</span>
          </div>
        </div>

        {/* Divider */}
        <div className="openpos-divider-line"></div>

        {/* Jobs List */}
        <div className="openpos-list">
          {JOBS.map((job) => (
            <div key={job.id} className="openpos-item">
              <div className="openpos-item-left">
                {/* Title & Tags Row */}
                <div className="openpos-item-title-row">
                  <h3 className="openpos-item-title">{job.title}</h3>
                  <div className="openpos-item-tags">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="openpos-tag-badge">{tag}</span>
                    ))}
                  </div>
                </div>
                {/* Description */}
                <p className="openpos-item-desc">{job.desc}</p>
              </div>

              {/* Apply Button */}
              <div className="openpos-item-right">
                <button 
                  className="openpos-apply-btn"
                  onClick={() => handleApplyClick(job.title)}
                >
                  <span className="openpos-apply-btn-text-wrapper">
                    <span className="openpos-apply-btn-text-primary">Apply Now</span>
                    <span className="openpos-apply-btn-text-secondary">Apply Now</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="openpos-form-section" ref={formRef} id="apply-form">
          <h3 className="openpos-form-title">Apply Now</h3>
          
          <form className="openpos-form" onSubmit={handleSubmit}>
            
            <div className="openpos-form-group">
              <label className="openpos-form-label" htmlFor="role">Role Applied For *</label>
              <select 
                id="role" 
                name="role" 
                className="openpos-form-input openpos-form-select" 
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select a role</option>
                {JOBS.map(job => (
                  <option key={job.id} value={job.title}>{job.title}</option>
                ))}
                <option value="Other">Other / Spontaneous Application</option>
              </select>
            </div>

            <div className="openpos-form-group">
              <label className="openpos-form-label" htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="openpos-form-input" 
                placeholder="Jane Doe" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="openpos-form-group">
              <label className="openpos-form-label" htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="openpos-form-input" 
                placeholder="jane@example.com" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="openpos-form-group">
              <label className="openpos-form-label" htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="openpos-form-input" 
                placeholder="+91 98765 43210" 
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="openpos-form-group">
              <label className="openpos-form-label" htmlFor="resume">Resume (PDF only) *</label>
              <input 
                type="file" 
                id="resume" 
                name="resume" 
                accept=".pdf"
                className="openpos-form-input openpos-form-file" 
                onChange={handleInputChange}
                ref={fileInputRef}
                required 
              />
            </div>

            <div className="openpos-form-group">
              <div className="openpos-label-row">
                <label className="openpos-form-label" htmlFor="message">Message *</label>
                <span className={`openpos-word-count ${messageWordCount >= MAX_WORDS ? "limit-reached" : ""}`}>
                  {messageWordCount} / {MAX_WORDS} words
                </span>
              </div>
              <textarea 
                id="message" 
                name="message" 
                className="openpos-form-textarea" 
                placeholder={getMessagePlaceholder()} 
                value={formData.message}
                onChange={handleInputChange}
                required 
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="openpos-form-submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Submit Application"}
            </button>

            {responseMsg && (
              <div className={`openpos-form-message ${status === "success" ? "success" : "error"}`}>
                {responseMsg}
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
