import "../../workCss/leenusIndiaCss/CampaignTable.css";

const CAMPAIGNS = [
  { name: "UGD leads campaign TG and AP 01-02-2026", reach: "11,340", impressions: "15,021", clicks: "96", ctr: "0.85%", cpc: "₹5.56", spent: "₹1,538.81", results: "22 Leads (Form)", costPerResult: "₹69.95" },
  { name: "UGD leads campaign TG and AP 22-01-2026 – C...", reach: "1,444", impressions: "1,607", clicks: "8", ctr: "0.55%", cpc: "₹10.67", spent: "₹277.48", results: "1 Lead (Form)", costPerResult: "₹277.48" },
  { name: "UGD leads campaign TG and AP 22-01-2026", reach: "13,069", impressions: "19,255", clicks: "157", ctr: "1.20%", cpc: "₹5.17", spent: "₹2,557.06", results: "30 Leads (Form)", costPerResult: "₹85.24" },
  { name: "Leenus 09-01-2026 Underground drainage leads...", reach: "13,848", impressions: "19,737", clicks: "143", ctr: "1.03%", cpc: "₹8.48", spent: "₹2,933.52", results: "42 Leads (Form)", costPerResult: "₹69.85" },
  { name: "(BID cap) Leads Campaign 11-06-2026 Undergro...", reach: "36,714", impressions: "52,898", clicks: "211", ctr: "0.57%", cpc: "₹14.34", spent: "₹7,256.54", results: "37 Leads (Form)", costPerResult: "₹196.12" },
  { name: "Leads Campaign 14-05-2026 – 12-06-2026 Und...", reach: "49,541", impressions: "98,674", clicks: "540", ctr: "1.09%", cpc: "₹10.03", spent: "₹14,617.14", results: "92 Leads (Form)", costPerResult: "₹158.88" },
  { name: "Leads campaign 25-11-2025", reach: "4,332", impressions: "5,981", clicks: "41", ctr: "0.95%", cpc: "₹19.75", spent: "₹1,382.76", results: "12 Leads (Form)", costPerResult: "₹115.23" },
  { name: "Underground Campaign 17-11-2025", reach: "11,412", impressions: "17,674", clicks: "118", ctr: "1.03%", cpc: "₹18.94", spent: "₹3,976.83", results: "22 Leads (Form)", costPerResult: "₹180.77" },
  { name: "Under Ground Leads campaign 23-10-2025", reach: "38,081", impressions: "69,751", clicks: "439", ctr: "1.15%", cpc: "₹14.40", spent: "₹11,589.56", results: "77 Leads (Form)", costPerResult: "₹150.51" },
  { name: "Leenus India Ad Campaign", reach: "2,095", impressions: "2,585", clicks: "220", ctr: "10.50%", cpc: "₹3.64", spent: "₹847.47", results: "— Website Contact", costPerResult: "—" },
];

const SUMMARY = [
  { value: "₹46,977", label: "Total Spend Across These Campaigns" },
  { value: "335", label: "Total Form Leads Generated" },
  { value: "~₹138", label: "Average Cost Per Lead" },
];

export default function CampaignTable() {
  return (
    <section className="leenus-campaign-section">
      <h2 className="head-text">
        Structuring Spend Around the Projects That Actually Move the Business
      </h2>
      <p className="paragraph-text leenus-campaign-desc">
        Campaigns were split by project category — underground drainage, electrical,
        stormwater, pipe systems — so each could be managed against its own economics
        instead of blending into one generic push. Below is the exact campaign-level
        performance data from the Meta Ads dashboard, reproduced as reported.
      </p>

      <div className="leenus-campaign-table-wrap">
        <table className="leenus-campaign-table">
          <thead>
            <tr>
              <th>Campaign</th>
              <th>Reach</th>
              <th>Impressions</th>
              <th>Unique Link Clicks</th>
              <th>Unique CTR</th>
              <th>Cost / Click</th>
              <th>Amount Spent</th>
              <th>Results</th>
              <th>Cost / Result</th>
            </tr>
          </thead>
          <tbody>
            {CAMPAIGNS.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td>{c.reach}</td>
                <td>{c.impressions}</td>
                <td>{c.clicks}</td>
                <td>{c.ctr}</td>
                <td>{c.cpc}</td>
                <td>{c.spent}</td>
                <td className="leenus-campaign-results">{c.results}</td>
                <td>{c.costPerResult}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="leenus-campaign-summary">
        {SUMMARY.map((s, i) => (
          <div key={i} className="leenus-campaign-summary-item">
            <h3>{s.value}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>

      <p className="leenus-campaign-note">
        Figures reproduced exactly as reported in the Meta Ads campaign dashboard. This
        table reflects Meta/Facebook lead-form campaigns only — figures may not
        represent total paid spend across all platforms.
      </p>
    </section>
  );
}
