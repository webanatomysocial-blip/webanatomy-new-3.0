import "../../workCss/leenusIndiaCss/BeforeAfter.css";

export default function BeforeAfter({ before, after }) {
  return (
    <div className="leenus-before-after">
      <div className="leenus-ba-col leenus-ba-before">
        <span className="leenus-ba-label">Before</span>
        <p>{before}</p>
      </div>
      <div className="leenus-ba-col leenus-ba-after">
        <span className="leenus-ba-label">After</span>
        <p>{after}</p>
      </div>
    </div>
  );
}
