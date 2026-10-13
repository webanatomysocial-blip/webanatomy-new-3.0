"use client";

import { useEffect, useRef, useState } from "react";
import "../../workCss/leenusIndiaCss/BeforeAfter.css";

export default function BeforeAfter({
  before = "Unstructured spend. No way to trace a lead back to a category, a campaign, or a return.",
  after = "Category-split campaigns, each accountable for its own cost-per-lead and its own pipeline.",
  note = "Figures reproduced exactly as reported in the Meta Ads campaign dashboard. This table reflects Meta/Facebook lead-form campaigns only — figures may not represent total paid spend across all platforms.",
}) {
  const containerRef = useRef(null);
  const beforeRectRef = useRef(null);
  const afterRectRef = useRef(null);

  const [inView, setInView] = useState(false);
  const [beforePerimeter, setBeforePerimeter] = useState(0);
  const [afterPerimeter, setAfterPerimeter] = useState(0);

  const updatePerimeters = () => {
    if (beforeRectRef.current) {
      const len = beforeRectRef.current.getTotalLength();
      if (len > 0) setBeforePerimeter(len);
    }
    if (afterRectRef.current) {
      const len = afterRectRef.current.getTotalLength();
      if (len > 0) setAfterPerimeter(len);
    }
  };

  useEffect(() => {
    updatePerimeters();
    window.addEventListener("resize", updatePerimeters);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updatePerimeters);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="leenus-ba-section" ref={containerRef}>
      {/* Soft atmospheric background glow */}
      <div className="leenus-ba-glow leenus-ba-glow--left" />
      <div className="leenus-ba-glow leenus-ba-glow--right" />

      <div className="leenus-ba-container">
        <div className="leenus-ba-grid">
          {/* BEFORE CARD */}
          <div className="leenus-ba-item">
            <div className="leenus-ba-badge-wrap">
              <span className="leenus-ba-badge leenus-ba-badge--before">Before</span>
            </div>

            <div className="leenus-ba-pill-wrapper">
              <div className="leenus-ba-pill">
                <svg className="leenus-ba-svg" aria-hidden="true">
                  {/* Faint subtle base outline */}
                  <rect
                    className="leenus-ba-svg-track"
                    x="1.5"
                    y="1.5"
                    width="calc(100% - 3px)"
                    height="calc(100% - 3px)"
                    rx="52"
                    ry="52"
                  />

                  {/* Soft subtle blurred bloom behind line */}
                  <rect
                    className="leenus-ba-svg-progress leenus-ba-svg-progress--soft-glow"
                    x="1.5"
                    y="1.5"
                    width="calc(100% - 3px)"
                    height="calc(100% - 3px)"
                    rx="52"
                    ry="52"
                    style={{
                      strokeDasharray: beforePerimeter || 1000,
                      strokeDashoffset: inView ? 0 : beforePerimeter || 1000,
                    }}
                  />

                  {/* Clean, elegant white progress stroke */}
                  <rect
                    ref={beforeRectRef}
                    className="leenus-ba-svg-progress leenus-ba-svg-progress--core"
                    x="1.5"
                    y="1.5"
                    width="calc(100% - 3px)"
                    height="calc(100% - 3px)"
                    rx="52"
                    ry="52"
                    style={{
                      strokeDasharray: beforePerimeter || 1000,
                      strokeDashoffset: inView ? 0 : beforePerimeter || 1000,
                    }}
                  />
                </svg>

                <div className="leenus-ba-pill-content">
                  <p>{before}</p>
                </div>
              </div>
            </div>
          </div>

          {/* AFTER CARD */}
          <div className="leenus-ba-item">
            <div className="leenus-ba-badge-wrap">
              <span className="leenus-ba-badge leenus-ba-badge--after">After</span>
            </div>

            <div className="leenus-ba-pill-wrapper">
              <div className="leenus-ba-pill">
                <svg className="leenus-ba-svg" aria-hidden="true">
                  {/* Faint subtle base outline */}
                  <rect
                    className="leenus-ba-svg-track"
                    x="1.5"
                    y="1.5"
                    width="calc(100% - 3px)"
                    height="calc(100% - 3px)"
                    rx="52"
                    ry="52"
                  />

                  {/* Soft subtle blurred bloom behind line */}
                  <rect
                    className="leenus-ba-svg-progress leenus-ba-svg-progress--soft-glow"
                    x="1.5"
                    y="1.5"
                    width="calc(100% - 3px)"
                    height="calc(100% - 3px)"
                    rx="52"
                    ry="52"
                    style={{
                      strokeDasharray: afterPerimeter || 1000,
                      strokeDashoffset: inView ? 0 : afterPerimeter || 1000,
                    }}
                  />

                  {/* Clean, elegant white progress stroke */}
                  <rect
                    ref={afterRectRef}
                    className="leenus-ba-svg-progress leenus-ba-svg-progress--core"
                    x="1.5"
                    y="1.5"
                    width="calc(100% - 3px)"
                    height="calc(100% - 3px)"
                    rx="52"
                    ry="52"
                    style={{
                      strokeDasharray: afterPerimeter || 1000,
                      strokeDashoffset: inView ? 0 : afterPerimeter || 1000,
                    }}
                  />
                </svg>

                <div className="leenus-ba-pill-content">
                  <p>{after}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {note && <p className="leenus-ba-note">{note}</p>}
      </div>
    </section>
  );
}
