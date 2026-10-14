import "../../workCss/leenusIndiaCss/CitedByAI.css";

const ENGINES = [
  { name: "ChatGPT", status: "cited" },
  { name: "Google AI Overview", status: "cited" },
  { name: "Gemini", status: "cited" },
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
        leenusindia.com is being surfaced by name across all four tracked AI engines. 45 unique pages cited in total,
        for the exact high-intent searches (&quot;piping network in hyderabad&quot;, &quot;underground drainage services&quot;, &quot;trusted
        supreme pipe distributors&quot;) that used to be paid-only territory.
      </p>
    </div>
  );
}
