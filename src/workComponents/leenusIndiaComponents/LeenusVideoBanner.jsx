import React from "react";
import "../../workCss/leenusIndiaCss/LeenusVideoBanner.css";

export default function LeenusVideoBanner({
  videoUrl = "https://leenusindia.com/wp-content/uploads/2024/09/2157145_Industry_Machine_1920x1080.mp4",
  subtitle = "ONE STOP SOLUTION TO",
  title = "DRAINAGE SYSTEM",
}) {
  return (
    <section className="leenus-video-banner">
      <video
        className="leenus-video-banner__video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="leenus-video-banner__overlay" />
      <div className="leenus-video-banner__content">
        {subtitle && <p className="leenus-video-banner__subtitle">{subtitle}</p>}
        {title && <h2 className="leenus-video-banner__title">{title}</h2>}
      </div>
    </section>
  );
}
