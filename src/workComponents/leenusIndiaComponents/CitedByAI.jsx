import "../../workCss/leenusIndiaCss/CitedByAI.css";

const ENGINES = [
  { name: "ChatGPT", status: "AI Cited" },
  { name: "Google AI Answers", status: "AI Cited" },
  { name: "Gemini", status: "AI Cited" },
];

export default function CitedByAI() {
  return (
    <div className="leenus-cited-container">
      <div className="leenus-cited-row">
        {ENGINES.map((engine) => (
          <span key={engine.name} className="leenus-cited-pill">
            <span className="leenus-cited-name">{engine.name}</span>
            <span className="leenus-cited-divider">—</span>
            <span className="leenus-cited-status">{engine.status}</span>
          </span>
        ))}
      </div>

      <p className="leenus-cited-note">
        The Leenus India website is mentioned by name across the AI tools, with 45 different pages picked up. These
        are the same high-intent searches, like &quot;piping network in hyderabad&quot;, &quot;underground drainage services&quot; and
        &quot;trusted supreme pipe distributors&quot;.
      </p>
    </div>
  );
}
