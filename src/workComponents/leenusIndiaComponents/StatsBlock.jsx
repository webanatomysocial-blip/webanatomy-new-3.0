import "../../workCss/leenusIndiaCss/StatsBlock.css";

export default function StatsBlock({
  badgePrefix,
  badgeHighlight,
  title,
  description,
  stats = [],
  note,
  align = "center",
}) {
  return (
    <section className={`leenus-stats-block leenus-stats-block--${align}`}>
      {(badgePrefix || badgeHighlight) && (
        <div className="leenus-stats-badge">
          {badgePrefix} <span>{badgeHighlight}</span>
        </div>
      )}
      {title && <h2 className="head-text">{title}</h2>}
      {description && (
        <p className="paragraph-text leenus-stats-desc">{description}</p>
      )}

      <div className="leenus-stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="leenus-stats-item">
            <h3>{s.value}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>

      {note && <p className="leenus-stats-note">{note}</p>}
    </section>
  );
}
