import "../../workCss/leenusIndiaCss/CitedByAI.css";

const ENGINES = ["ChatGPT", "Google AI Overview", "AI Mode", "Gemini"];

export default function CitedByAI() {
  return (
    <div className="leenus-cited-row">
      {ENGINES.map((engine) => (
        <span key={engine} className="leenus-cited-pill">
          {engine} <strong>— cited</strong>
        </span>
      ))}
    </div>
  );
}
