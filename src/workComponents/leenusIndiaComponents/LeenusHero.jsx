import "../../workCss/leenusIndiaCss/LeenusHero.css";

export default function LeenusHero({ title, tags = [], backgroundImage }) {
  return (
    <section className="leenus-hero">
      {backgroundImage && (
        <div
          className="leenus-hero-bg-image"
          style={{ backgroundImage: `url(${backgroundImage?.src || backgroundImage})` }}
        />
      )}
      <div className="leenus-hero-overlay" />
      <div className="leenus-hero-grid" />
      <h1 className="head-text-white leenus-hero-title">{title}</h1>
      <p className="leenus-hero-tags">{tags.join(" | ")}</p>
    </section>
  );
}
