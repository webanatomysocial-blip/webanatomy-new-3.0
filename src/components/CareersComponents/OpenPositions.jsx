"use client";

import React from "react";
import "@/css/CareersComponentsCss/OpenPositions.css";

const JOBS = [
  {
    id: 1,
    title: "Performance Marketer",
    tags: ["On-site · Hyderabad", "Full-time · Below 2 Years"],
    desc: "Plan and execute data-driven ad campaigns across platforms to maximize ROI and drive scalable growth for our clients.",
    applyUrl: "https://loooped.in/careers/performance-marketer"
  },
  {
    id: 2,
    title: "Graphic Designer",
    tags: ["On-site · Hyderabad", "Full-time · Below 2 Years"],
    desc: "Create visually compelling designs, brand assets, and creative collaterals that bring brands and campaigns to life.",
    applyUrl: "https://loooped.in/careers/graphic-designer"
  },
  {
    id: 3,
    title: "Account Manager",
    tags: ["On-site · Hyderabad", "Full-time · Below 2 Years"],
    desc: "Be the bridge between our clients and our team, managing relationships, timelines, and deliverables with clarity and confidence.",
    applyUrl: "https://loooped.in/careers/account-manager"
  },
  {
    id: 4,
    title: "SEO Intern",
    tags: ["On-site · Hyderabad", "Internship"],
    desc: "Learn and assist in keyword research, on-page optimization, content analysis, and performance tracking to drive organic visibility.",
    applyUrl: "https://loooped.in/careers/seo-intern"
  },
  {
    id: 5,
    title: "Social Media Intern",
    tags: ["On-site · Hyderabad", "Internship"],
    desc: "Support our social media campaigns, content calendars, audience engagement, and community building across multiple channels.",
    applyUrl: "https://loooped.in/careers/social-media-intern"
  },
  {
    id: 6,
    title: "Development Intern",
    tags: ["On-site · Hyderabad", "Internship"],
    desc: "Work alongside our engineering team building and refining web applications, picking up hands-on development experience on real projects.",
    applyUrl: "https://loooped.in/careers/development-intern"
  },
  {
    id: 7,
    title: "Founder's Office Intern",
    tags: ["On-site · Hyderabad", "Internship"],
    desc: "Work directly alongside leadership across strategic initiatives, business operations, and growth experiments inside a high-pace creative agency.",
    applyUrl: "https://loooped.in/careers/founder-s-office-intern"
  },
  {
    id: 8,
    title: "Performance Marketing Intern",
    tags: ["On-site · Hyderabad", "Internship"],
    desc: "Gain hands-on experience setting up, monitoring, and optimizing paid marketing campaigns, analyzing performance metrics, and testing creatives.",
    applyUrl: "https://loooped.in/careers/performance-marketing-intern"
  }
];

export default function OpenPositions() {
  return (
    <section className="openpos-section" id="open-positions">
      <div className="openpos-container">
        
        {/* Section Header */}
        <div className="openpos-header">
          <div className="openpos-header-left">
            <h2 className="head-text openpos-title">Open Positions</h2>
            <p className="openpos-subtitle">
              Eight roles. One team. Find where you fit.
            </p>
          </div>
          <div className="openpos-header-right">
            <span className="openpos-badge">{JOBS.length} Open Roles</span>
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
                <a 
                  href={job.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="openpos-apply-btn"
                >
                  <span className="openpos-apply-btn-text-wrapper">
                    <span className="openpos-apply-btn-text-primary">Apply Now</span>
                    <span className="openpos-apply-btn-text-secondary">Apply Now</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
