"use client";

import React from "react";
import "@/css/CareersComponentsCss/OpenPositions.css";

const JOBS = [
  {
    id: 1,
    title: "SEO Executive",
    tags: ["On-site · Hyderabad", "Full-time · 6 Months – 1 Year"],
    desc: "Drive organic growth for Web Anatomy and our clients through smart keyword strategy, on-page optimisation and measurable performance."
  },
  {
    id: 2,
    title: "Account Manager",
    tags: ["On-site · Hyderabad", "Full-time · 6 Months – 1 Year"],
    desc: "Be the bridge between our clients and our team, managing relationships, timelines and expectations with clarity and confidence."
  },
  {
    id: 3,
    title: "Content Creator",
    tags: ["On-site · Hyderabad", "Full-time · 0 – 1 Year"],
    desc: "Write and create content that is sharp, purposeful and built for the right audience, across social media, campaigns and brand communication."
  },
  {
    id: 4,
    title: "Founder's Office",
    tags: ["On-site · Hyderabad", "Full-time · 0 – 1 Year"],
    desc: "Work directly alongside the founders across strategy, operations and growth initiatives. For someone who wants to understand how a premium agency is built from the inside."
  }
];

export default function OpenPositions() {
  return (
    <section className="openpos-section">
      <div className="openpos-container">
        
        {/* Section Header */}
        <div className="openpos-header">
          <div className="openpos-header-left">
            <h2 className="head-text openpos-title">Open Positions</h2>
            <p className="openpos-subtitle">
              Four roles. One team. Find where you fit.
            </p>
          </div>
          <div className="openpos-header-right">
            <span className="openpos-badge">4 Open Roles</span>
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
                  onClick={() => {
                    window.location.href = `mailto:Srujan@mosol9.com,supraja@mosol9.com?cc=priya.k@mosol9.com,udaya@mosol9.com&subject=Job Application: ${job.title} - Web Anatomy&body=Hello Web Anatomy Team,%0D%0A%0D%0AI am writing to apply for the ${job.title} position.%0D%0A%0D%0A[Please attach your resume and portfolio links here]`;
                  }}
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

      </div>
    </section>
  );
}
