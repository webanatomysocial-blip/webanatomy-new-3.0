import "../../workCss/leenusIndiaCss/QuoteVideo.css";

export default function QuoteVideo({ quote, subtitle, videoSrc }) {
  return (
    <section className="quote-video-section">
      <div className="quote-video-container">
        <div className="quote-video-media">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
        <div className="quote-video-text">
          <h2 className="head-text">{quote}</h2>
          {subtitle && <p className="quote-video-subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
