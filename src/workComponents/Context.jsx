import "../workCss/Context.css";

export default function Context({
  subheading,
  tittle,
  description,
  description2,
  paddingBottom,
}) {
  return (
    <>
      <section className="context-section" style={{ paddingBottom }}>
        <p className="sub-small-head">{subheading}</p>
        <h2 className="head-text">{tittle}</h2>
        <div className="context-description">
          <p className="paragraph-text ">{description}</p>
          <p className="paragraph-text ">{description2}</p>
        </div>
      </section>
    </>
  );
}
