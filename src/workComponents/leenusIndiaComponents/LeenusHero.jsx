import "../../workCss/leenusIndiaCss/LeenusHero.css";

export default function LeenusHero({ title, tags = [] }) {
  return (
    <section className="leenus-hero">
      <div className="leenus-hero-grid" />
      <h1 className="head-text-white leenus-hero-title">{title}</h1>
      <p className="leenus-hero-tags">{tags.join(" | ")}</p>
    </section>
  );
}
