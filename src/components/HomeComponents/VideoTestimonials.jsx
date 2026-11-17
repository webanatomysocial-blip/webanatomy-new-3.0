"use client";
import React, { useRef, useState } from "react";
import "../../css/HomeComponentsCss/VideoTestimonials.css";

const testimonials = [
  {
    id: 1,
    src: "/videos/Testimonials/Leenuns-Enhanced-480p.mp4",
    name: "Ganesh",
    role: "Leenus India",
  },
  {
    id: 2,
    src: "/videos/Testimonials/Togglenow experience --480p.mp4",
    name: "Raghu boddu",
    role: "ToggleNow",
  },
];

const TestimonialVideo = ({ item }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="video-testimonial-card">
      <div className="video-testimonial-media">
        <video
          ref={videoRef}
          src={`${item.src}#t=0.1`}
          preload="metadata"
          playsInline
          controls={playing}
          onPlay={(e) =>
            e.currentTarget
              .closest(".video-testimonials-grid")
              ?.querySelectorAll("video")
              .forEach((v) => v !== e.currentTarget && v.pause())
          }
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <button
            type="button"
            className="video-testimonial-play"
            onClick={play}
            aria-label={`Play testimonial from ${item.name}`}
          >
            <span className="video-testimonial-play-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="video-testimonial-meta">
        <h3>{item.name}</h3>
        <p>{item.role}</p>
      </div>
    </div>
  );
};

const VideoTestimonials = () => {
  return (
    <section className="video-testimonials-section">
      <div className="video-testimonials-container">
        <div className="video-testimonials-header">
          <h2 className="head-text video-testimonials-title">
            Results Are Better When They Speak.
          </h2>
          <div className="video-testimonials-pill">
            <span>✦</span> Client testimonials
          </div>
        </div>

        <p className="paragraph-text video-testimonials-desc">
          Good work speaks for itself. But sometimes, it&apos;s better heard
          straight from the people we&apos;ve worked with. Here&apos;s what our
          clients have to say about building, growing and creating something
          meaningful together.
        </p>

        <div className="video-testimonials-grid">
          {testimonials.map((item) => (
            <TestimonialVideo key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
