import "../../workCss/leenusIndiaCss/ScreenshotPair.css";

export default function ScreenshotPair({ items = [], className = "", style = {} }) {
  return (
    <div className={`leenus-screenshot-row ${className}`} style={style}>
      <div className="leenus-screenshot-inner">
        {items.map((item, i) => (
          <figure key={i} className="leenus-screenshot-item">
            <img src={item.src?.src || item.src} alt={item.caption} />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
