"use client";

import { useEffect, useRef, useState } from "react";
import "../../workCss/leenusIndiaCss/CreativeShowcase.css";

export default function CreativeShowcase({
  videoUrl = "/videos/work/leenus/leenus.mp4",
  galleryItems,
  galleryImages,
}) {
  const videoRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const items = galleryItems || galleryImages || [
    { type: "video", src: "/works/leenus/gallery/video1.mp4", label: "Excavation" },
    { type: "video", src: "/works/leenus/gallery/video2.mp4", label: "Pipe Supply" },
    { type: "image", src: "/works/leenus/gallery/image1.jpeg", label: "Branded Material" },
    { type: "image", src: "/works/leenus/gallery/image2.jpeg", label: "Final Testing" },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [videoUrl]);

  // Lock body scroll and listen for Escape / Arrow navigation when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowLeft") {
          setLightboxIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
        }
        if (e.key === "ArrowRight") {
          setLightboxIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [lightboxIndex, items.length]);

  const closeLightbox = () => setLightboxIndex(null);
  const prevLightbox = () =>
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  const nextLightbox = () =>
    setLightboxIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));

  return (
    <section className="leenus-creative-section">
      <div className="leenus-creative-header-content">
        <div className="leenus-creative-eyebrow">
          Creative <span>That Earned The Clicks</span>
        </div>
        <h2 className="head-text">
          Two Languages, One Warning
        </h2>
        <p className="paragraph-text leenus-creative-desc">
          Our strongest campaigns ran across Telangana and Andhra Pradesh, so every static
          ad spoke in both English and Telugu. The line stayed the same: &quot;One Leakage Can
          Damage Your Entire Reputation.&quot; The offer stayed the same too: a free project
          survey. It read like a warning, not a pitch.
        </p>
      </div>

      {/* Full-Width Video Block */}
      <div className="leenus-creative-video-fullwidth">
        <video
          ref={videoRef}
          className="leenus-creative-video-player"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="leenus-creative-bottom-content">
        <p className="leenus-gallery-eyebrow">
          Campaign Ad Videos: Answering the Question Before It&apos;s Asked
        </p>
        <div className="leenus-gallery-row">
          {items.map((g, i) => {
            const mediaSrc = typeof g.src === "string" ? g.src : g.src?.src || g.src;
            const isVideo =
              g.type === "video" ||
              (typeof mediaSrc === "string" &&
                (/\.(mp4|webm|mov|ogg)($|\?)/i.test(mediaSrc) || mediaSrc.includes("/video")));

            return (
              <div
                key={i}
                className="leenus-gallery-item"
                onClick={() => setLightboxIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(i);
                  }
                }}
                aria-label={`Open ${g.label} in lightbox`}
                title="Click to view full size"
              >
                {/* Zoom icon hint on hover */}
                <div className="leenus-gallery-zoom-hint" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>

                {isVideo ? (
                  <video
                    className="leenus-gallery-media"
                    src={mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    className="leenus-gallery-media"
                    src={mediaSrc}
                    alt={g.label || `Gallery item ${i + 1}`}
                  />
                )}
                <span className="leenus-gallery-label">
                  {i + 1} · {g.label}
                </span>
              </div>
            );
          })}
        </div>
        <p className="leenus-creative-note">
          Every buyer has the same concern: &quot;Will this actually be installed properly?&quot; So
          we showed them. Real footage from the site, cut in English and Telugu, from the
          first dig to the final test, with branded DWC, HDPE and PVC material in between.
        </p>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && items[lightboxIndex] && (
        <div
          className="leenus-lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
        >
          <button
            className="leenus-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {items.length > 1 && (
            <>
              <button
                className="leenus-lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightbox();
                }}
                aria-label="Previous item"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                className="leenus-lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightbox();
                }}
                aria-label="Next item"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          <div
            className="leenus-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const activeItem = items[lightboxIndex];
              const activeSrc =
                typeof activeItem.src === "string"
                  ? activeItem.src
                  : activeItem.src?.src || activeItem.src;
              const activeIsVideo =
                activeItem.type === "video" ||
                (typeof activeSrc === "string" &&
                  (/\.(mp4|webm|mov|ogg)($|\?)/i.test(activeSrc) ||
                    activeSrc.includes("/video")));

              return activeIsVideo ? (
                <video
                  key={activeSrc}
                  className="leenus-lightbox-media"
                  src={activeSrc}
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  key={activeSrc}
                  className="leenus-lightbox-media"
                  src={activeSrc}
                  alt={activeItem.label || "Lightbox image"}
                />
              );
            })()}

            <div className="leenus-lightbox-caption">
              <span className="leenus-lightbox-counter">
                {lightboxIndex + 1} of {items.length}
              </span>
              <span>·</span>
              <span>{items[lightboxIndex].label}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
