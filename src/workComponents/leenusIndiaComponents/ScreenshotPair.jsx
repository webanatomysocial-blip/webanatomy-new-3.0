"use client";

import { useState, useEffect } from "react";
import "../../workCss/leenusIndiaCss/ScreenshotPair.css";

export default function ScreenshotPair({ items = [], className = "", style = {} }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") setLightboxIndex((p) => (p > 0 ? p - 1 : items.length - 1));
      if (e.key === "ArrowRight") setLightboxIndex((p) => (p < items.length - 1 ? p + 1 : 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, items.length]);

  return (
    <>
      <div className={`leenus-screenshot-row ${className}`} style={style}>
        <div className="leenus-screenshot-inner">
          {items.map((item, i) => (
            <figure
              key={i}
              className="leenus-screenshot-item"
              onClick={() => setLightboxIndex(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLightboxIndex(i); } }}
              aria-label={`Enlarge screenshot ${i + 1}`}
            >
              <div className="leenus-screenshot-zoom-hint" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
              <img src={item.src?.src || item.src} alt={item.caption} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && items[lightboxIndex] && (
        <div
          className="leenus-lightbox-overlay leenus-lightbox-overlay--white"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button className="leenus-lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {items.length > 1 && (
            <>
              <button className="leenus-lightbox-nav prev" onClick={(e) => { e.stopPropagation(); setLightboxIndex((p) => (p > 0 ? p - 1 : items.length - 1)); }} aria-label="Previous">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button className="leenus-lightbox-nav next" onClick={(e) => { e.stopPropagation(); setLightboxIndex((p) => (p < items.length - 1 ? p + 1 : 0)); }} aria-label="Next">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </>
          )}
          <div className="leenus-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="leenus-lightbox-media"
              src={items[lightboxIndex].src?.src || items[lightboxIndex].src}
              alt={items[lightboxIndex].caption}
            />
            <div className="leenus-lightbox-caption">
              <span className="leenus-lightbox-counter">{lightboxIndex + 1} of {items.length}</span>
              <span>·</span>
              <span>{items[lightboxIndex].caption}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
