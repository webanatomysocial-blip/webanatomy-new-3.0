import PosterVideo from "@/components/PosterVideo";
import "../../workCss/leenusIndiaCss/QuoteVideo.css";

export default function QuoteVideo({ quote, subtitle, videoSrc, poster }) {
  return (
    <section className="quote-video-section">
      <h2 className="head-text quote-video-heading">What Our Clients say</h2>
      <div className="quote-video-container">
        <div className="quote-video-media">
          <PosterVideo src={videoSrc} poster={poster} />
        </div>
        <div className="quote-video-text">
          <h2 className="head-text">{quote}</h2>
          {subtitle && <p className="quote-video-subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
