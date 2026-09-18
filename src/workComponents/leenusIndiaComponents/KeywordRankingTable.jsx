import "../../workCss/leenusIndiaCss/KeywordRankingTable.css";

const KEYWORDS = [
  { keyword: "layout development in hyderabad", rank: "#1" },
  { keyword: "layout development", rank: "#1" },
  { keyword: "layout development for real estate", rank: "#1" },
  { keyword: "layout development for builders", rank: "#1" },
  { keyword: "piping networks services", rank: "#1" },
  { keyword: "piping network in hyderabad", rank: "#1" },
  { keyword: "smart drainage solutions", rank: "#1" },
  { keyword: "underground drainage contractors", rank: "#2" },
  { keyword: "underground drainage services", rank: "#2" },
  { keyword: "layout development contractors in hyderabad", rank: "#2" },
  { keyword: "smart drainage system", rank: "#2" },
];

export default function KeywordRankingTable() {
  return (
    <div className="leenus-keyword-table-wrap">
      <table className="leenus-keyword-table">
        <thead>
          <tr>
            <th>Keyword</th>
            <th>Ranking</th>
            <th>Appears in AI Overview</th>
          </tr>
        </thead>
        <tbody>
          {KEYWORDS.map((k, i) => (
            <tr key={i}>
              <td>{k.keyword}</td>
              <td className="leenus-keyword-rank">{k.rank}</td>
              <td className="leenus-keyword-yes">Yes</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="leenus-keyword-note">
        A selection of the 214 ranked keywords, reproduced as reported (data from
        Semrush).
        <br />
        Every keyword related to layout development ranks in the top 5.
      </p>
    </div>
  );
}
