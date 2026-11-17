import React from "react";
import PosterVideo from "@/components/PosterVideo";
import "../workCss/TnowExperienceVideo.css";

const TnowExperienceVideo = ({ videoSrc, poster }) => {
  return (
    <section className="tnow-experience-section">
      <h2 className="head-text tnow-experience-heading">What Our Clients say</h2>
      <div className="tnow-experience-media">
        <PosterVideo src={videoSrc} poster={poster} />
      </div>
    </section>
  );
};

export default TnowExperienceVideo;
