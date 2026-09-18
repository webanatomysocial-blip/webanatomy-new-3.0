import "../../workCss/leenusIndiaCss/ScreenshotPair.css";

export default function ScreenshotPair({ items = [] }) {
  return (
    <div className="leenus-screenshot-row">
      {items.map((item, i) => (
        <figure key={i} className="leenus-screenshot-item">
          <img src={item.src.src} alt={item.caption} />
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
