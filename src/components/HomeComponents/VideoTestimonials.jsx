"use client";
import React from "react";
import PosterVideo from "@/components/PosterVideo";
import "../../css/HomeComponentsCss/VideoTestimonials.css";

const testimonials = [
  {
    id: 1,
    src: "/videos/Testimonials/Leenuns-Enhanced-480p.mp4",
    poster: "/videos/posters/leenus-thumb.jpg",
    name: "Ganesh",
    role: "Leenus India",
  },
  {
    id: 2,
    src: "/videos/Testimonials/Togglenow experience --480p.mp4",
    poster: "/videos/posters/togglenow-thumb.jpg",
    name: "Raghu boddu",
    role: "ToggleNow",
  },
];

const TestimonialVideo = ({ item }) => {
  return (
    <div className="video-testimonial-card">
      <PosterVideo
        src={item.src}
        poster={item.poster}
        label={`Play testimonial from ${item.name}`}
      />
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
