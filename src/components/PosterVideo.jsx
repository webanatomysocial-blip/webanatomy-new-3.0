"use client";
import React, { useRef, useState } from "react";
import "@/css/HomeComponentsCss/VideoTestimonials.css";

export default function PosterVideo({ src, poster, label = "Play video" }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="video-testimonial-media">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        controls={playing}
        data-poster-video
        onPlay={(e) =>
          document
            .querySelectorAll("video[data-poster-video]")
            .forEach((v) => v !== e.currentTarget && v.pause())
        }
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          className="video-testimonial-play"
          onClick={play}
          aria-label={label}
        >
          <span className="video-testimonial-play-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
