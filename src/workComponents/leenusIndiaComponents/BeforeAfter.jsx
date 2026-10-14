"use client";

import { useEffect, useRef, useState } from "react";
import "../../workCss/leenusIndiaCss/BeforeAfter.css";

function AnimatedPill({ text, badgeLabel, badgeClass }) {
  const pillRef = useRef(null);
  const rectRef = useRef(null);
  const [dims, setDims] = useState(null);
  const [inView, setInView] = useState(false);
  const [perimeter, setPerimeter] = useState(1000);

  useEffect(() => {
    const measure = () => {
      if (!pillRef.current) return;
      const { offsetWidth: w, offsetHeight: h } = pillRef.current;
      if (w > 0 && h > 0) setDims({ w, h });
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (pillRef.current) ro.observe(pillRef.current);

    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (pillRef.current) io.observe(pillRef.current);

    return () => { ro.disconnect(); io.disconnect(); };
  }, []);

  useEffect(() => {
    if (rectRef.current) {
      const len = rectRef.current.getTotalLength();
      if (len > 0) setPerimeter(len);
    }
  }, [dims]);

  const rx = 52;
  const pad = 1.5;
  const rw = dims ? dims.w - pad * 2 : 0;
  const rh = dims ? dims.h - pad * 2 : 0;

  return (
    <div className="leenus-ba-item">
      <div className="leenus-ba-badge-wrap">
        <span className={`leenus-ba-badge ${badgeClass}`}>{badgeLabel}</span>
      </div>
      <div className="leenus-ba-pill-wrapper">
        <div className="leenus-ba-pill" ref={pillRef}>
          {dims && (
            <svg className="leenus-ba-svg" aria-hidden="true">
              <rect
                className="leenus-ba-svg-track"
                x={pad} y={pad} width={rw} height={rh} rx={rx} ry={rx}
              />
              <rect
                className="leenus-ba-svg-progress leenus-ba-svg-progress--soft-glow"
                x={pad} y={pad} width={rw} height={rh} rx={rx} ry={rx}
                style={{
                  strokeDasharray: perimeter,
                  strokeDashoffset: inView ? 0 : perimeter,
                }}
              />
              <rect
                ref={rectRef}
                className="leenus-ba-svg-progress leenus-ba-svg-progress--core"
                x={pad} y={pad} width={rw} height={rh} rx={rx} ry={rx}
                style={{
                  strokeDasharray: perimeter,
                  strokeDashoffset: inView ? 0 : perimeter,
                }}
              />
            </svg>
          )}
          <div className="leenus-ba-pill-content">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter({
  before = "Unstructured spend. No way to trace a lead back to a category, a campaign, or a return.",
  after = "Category-split campaigns, each accountable for its own cost-per-lead and its own pipeline.",
  note = "What changed: spend that could be traced, compared and judged campaign by campaign.",
}) {
  return (
    <section className="leenus-ba-section">
      <div className="leenus-ba-glow leenus-ba-glow--left" />
      <div className="leenus-ba-glow leenus-ba-glow--right" />
      <div className="leenus-ba-container">
        <div className="leenus-ba-grid">
          <AnimatedPill text={before} badgeLabel="Before" badgeClass="leenus-ba-badge--before" />
          <AnimatedPill text={after} badgeLabel="After" badgeClass="leenus-ba-badge--after" />
        </div>
        {note && <p className="leenus-ba-note">{note}</p>}
      </div>
    </section>
  );
}
