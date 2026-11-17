import React from "react";
import "../workCss/TnowExperienceVideo.css";

const TnowExperienceVideo = ({ videoSrc }) => {
  return (
    <section className="tnow-experience-section">
      <div className="tnow-experience-media">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default TnowExperienceVideo;
