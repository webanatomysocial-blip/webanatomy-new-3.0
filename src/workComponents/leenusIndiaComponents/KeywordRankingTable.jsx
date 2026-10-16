import "../../workCss/leenusIndiaCss/KeywordRankingTable.css";

const KEYWORDS = [
  { keyword: "layout development in hyderabad", rank: "#1" },
  { keyword: "layout development", rank: "#1" },
  { keyword: "layout development for real estate", rank: "#1" },
  { keyword: "layout development for builders", rank: "#1" },
  { keyword: "piping network services", rank: "#1" },
  { keyword: "piping network in hyderabad", rank: "#1" },
  { keyword: "smart drainage solutions", rank: "#1" },
  { keyword: "underground drainage contractors", rank: "#2" },
  { keyword: "underground drainage services", rank: "#2" },
  { keyword: "layout development contractors in hyderabad", rank: "#2" },
];

export default function KeywordRankingTable() {
  return (
    <div className="leenus-keyword-table-wrap">
      <table className="leenus-keyword-table">
        <thead>
          <tr>
            <th>KEYWORD</th>
            <th>RANKING</th>
            <th>APPEARS IN GOOGLE&apos;S AI ANSWER</th>
          </tr>
        </thead>
        <tbody>
          {KEYWORDS.map((k, i) => (
            <tr key={i}>
              <td className="leenus-keyword-name">{k.keyword}</td>
              <td className="leenus-keyword-rank">{k.rank}</td>
              <td className="leenus-keyword-yes">Yes</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="leenus-keyword-subnote">
        A selection of the 214 ranking keywords. All tracked layout development keywords rank in the top 3, and 30 tracked keywords sit in the top 5 on Google page 1.
      </p>
    </div>
  );
}
