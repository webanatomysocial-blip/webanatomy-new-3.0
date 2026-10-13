import "../../workCss/leenusIndiaCss/StatsBlock.css";

export default function StatsBlock({
  badgePrefix,
  badgeHighlight,
  badgeText,
  title,
  description,
  stats = [],
  note,
  align = "center",
  backgroundImage,
}) {
  const containerStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <section
      className={`leenus-stats-block leenus-stats-block--${align} ${
        backgroundImage ? "leenus-stats-block--has-bg" : ""
      }`}
      style={containerStyle}
    >
      <div className="leenus-stats-inner">
        {(badgeText || badgePrefix || badgeHighlight) && (
          <div className="leenus-stats-pill-badge">
            {badgeText ? (
              badgeText
            ) : (
              <>
                {badgePrefix} <span>{badgeHighlight}</span>
              </>
            )}
          </div>
        )}

        {title && <h2 className="leenus-stats-title">{title}</h2>}

        {description && (
          <p className="leenus-stats-desc">{description}</p>
        )}

        <div className="leenus-stats-cards-grid">
          {stats.map((s, i) => (
            <div key={i} className="leenus-stats-glass-card">
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>

        {note && <p className="leenus-stats-note">{note}</p>}
      </div>
    </section>
  );
}
