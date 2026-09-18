import ScreenshotPair from "./ScreenshotPair";
import CitedByAI from "./CitedByAI";
import KeywordRankingTable from "./KeywordRankingTable";
import "../../workCss/leenusIndiaCss/OrganicAISearch.css";

export default function OrganicAISearch({
  organicSearchShot,
  aiSearchShot,
  localPackShot,
  googleBusinessShot,
}) {
  return (
    <section className="leenus-organic-section">
      <div className="leenus-stats-badge">
        Beyond Paid <span>Organic &amp; AI Search</span>
      </div>
      <h2 className="head-text">
        The Same Precision, Applied to Organic and AI Search
      </h2>
      <p className="paragraph-text leenus-organic-desc">
        Paid search wasn't carrying the account alone. Over the same engagement,
        leenusindia.com was built out around the same high-value categories — layout
        development, piping networks, underground drainage — so Leenus shows up
        whether a buyer clicks an ad, searches organically, or asks an AI assistant.
      </p>

      <div className="leenus-organic-stats">
        <div className="leenus-organic-stat">
          <h3>214</h3>
          <p>Organic Keywords Ranked (+4.4%)</p>
        </div>
        <div className="leenus-organic-stat">
          <h3>30</h3>
          <p>Keywords in the Top 5 — Every Layout-Development Term</p>
        </div>
        <div className="leenus-organic-stat">
          <h3>645</h3>
          <p>Referring Domains</p>
        </div>
        <div className="leenus-organic-stat">
          <h3>98.1K</h3>
          <p>Backlinks</p>
        </div>
      </div>

      <div className="leenus-organic-stat leenus-organic-stat--solo">
        <h3>23%</h3>
        <p>Category Traffic Share (India)</p>
      </div>
      <p className="leenus-stats-note">
        Domain Authority Score: 12 ("Fine" tier) · Organic traffic: 333 sessions. Data
        via Semrush, leenusindia.com, September 2026.
      </p>

      <ScreenshotPair
        items={[
          {
            src: organicSearchShot,
            caption:
              'Google\'s AI Overview for "layout development in hyderabad" cites Leenus India directly, with an organic listing right below it.',
          },
          {
            src: aiSearchShot,
            caption:
              "Domain overview: 214 organic keywords, 645 referring domains, 98.1K backlinks, 23% share of category traffic in India.",
          },
        ]}
      />

      <CitedByAI />
      <p className="leenus-stats-note">
        leenusindia.com is being surfaced by name across all four tracked AI engines —
        48 unique pages cited in total — for the exact high-intent searches ("piping
        network in Hyderabad", "underground drainage services", "trusted supreme pipe
        distributors") that used to be paid-only territory.
      </p>

      <KeywordRankingTable />

      <ScreenshotPair
        items={[
          {
            src: localPackShot,
            caption:
              'Local pack + AI Overview for "trusted supreme pipe distributors": Leenus India, 5.0★ (48 reviews).',
          },
          {
            src: googleBusinessShot,
            caption: "Google Business Profile: 67 calls generated directly from the listing, Apr–Sept 2026.",
          },
        ]}
      />

      <div className="leenus-organic-final-stats">
        <div className="leenus-organic-stat">
          <h3>67</h3>
          <p>Calls from Google Business Profile (6 Months)</p>
        </div>
        <div className="leenus-organic-stat">
          <h3>63</h3>
          <p>Organic Leads Generated (12 Months)</p>
        </div>
        <div className="leenus-organic-stat">
          <h3>5.0★</h3>
          <p>Google Rating (48 Reviews)</p>
        </div>
      </div>
    </section>
  );
}
