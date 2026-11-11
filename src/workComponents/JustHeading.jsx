import "../workCss/JustHeading.css";

export default function JustHeading({ tittle, subtitle, paddingTop, as: Component = "h2" }) {
  return (
    <>
      <section className="JustHeading-section" style={{ paddingTop }}>
        <Component className="head-text">{tittle}</Component>
        {subtitle && (
          <p className="sub-para-text" style={{ marginTop: "24px", fontSize: "18px", color: "#666", textAlign: "center", fontStyle: "normal" }}>
            {subtitle}
          </p>
        )}
      </section>
    </>
  );
}
