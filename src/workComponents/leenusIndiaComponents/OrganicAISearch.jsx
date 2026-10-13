import ScreenshotPair from "./ScreenshotPair";
import CitedByAI from "./CitedByAI";
import KeywordRankingTable from "./KeywordRankingTable";
import "../../workCss/leenusIndiaCss/OrganicAISearch.css";
import "../../workCss/leenusIndiaCss/OrganicStatsPill.css";

export default function OrganicAISearch({
  semrushShot,
  googleAiShot,
  localPackShot,
  googleBusinessShot,
  organicSearchShot,
  aiSearchShot,
}) {
  const domainOverviewImage = semrushShot || aiSearchShot;
  const googleAiImage = googleAiShot || organicSearchShot;

  return (
    <section className="leenus-organic-section">
      <div className="leenus-organic-header-content">
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
      </div>

      {/* 5-Statistic Blue Pill Banner with Semrush Footnote */}
      <div className="leenus-stats-pill-banner-wrap leenus-stats-pill-banner-wrap--in-organic">
        <div className="leenus-stats-pill-banner leenus-stats-pill-banner--5col">
          <div className="leenus-stats-pill-col leenus-stats-pill-col--1">
            <div className="leenus-stats-pill-num">214</div>
            <p className="leenus-stats-pill-desc">Organic Keywords Ranked (+4.4%)</p>
          </div>

          <div className="leenus-stats-pill-divider" aria-hidden="true" />

          <div className="leenus-stats-pill-col leenus-stats-pill-col--2">
            <div className="leenus-stats-pill-num">30</div>
            <p className="leenus-stats-pill-desc">Keywords in the Top 5 — Every Layout-Development Term</p>
          </div>

          <div className="leenus-stats-pill-divider" aria-hidden="true" />

          <div className="leenus-stats-pill-col leenus-stats-pill-col--3">
            <div className="leenus-stats-pill-num">645</div>
            <p className="leenus-stats-pill-desc">Referring Domains</p>
          </div>

          <div className="leenus-stats-pill-divider" aria-hidden="true" />

          <div className="leenus-stats-pill-col leenus-stats-pill-col--4">
            <div className="leenus-stats-pill-num">98.1K</div>
            <p className="leenus-stats-pill-desc">Backlinks</p>
          </div>

          <div className="leenus-stats-pill-divider" aria-hidden="true" />

          <div className="leenus-stats-pill-col leenus-stats-pill-col--5">
            <div className="leenus-stats-pill-num">23%</div>
            <p className="leenus-stats-pill-desc">Category Traffic Share (India)</p>
          </div>
        </div>

        <p className="leenus-stats-pill-footnote">
          Domain Authority Score: 12 (&quot;Fine&quot; tier) · Organic traffic: 333 sessions. Data via Semrush, leenusindia.com, September 2026.
        </p>
      </div>

      {/* Block 1: Top Laptop Pair with design background */}
      <div className="leenus-organic-mockup-block leenus-organic-mockup-top">
        <ScreenshotPair
          items={[
            {
              src: domainOverviewImage,
              caption:
                "Domain overview: 214 organic keywords, 845 referring domains, 68.1K backlinks, 23% share of category traffic in India.",
            },
            {
              src: googleAiImage,
              caption:
                'Google\'s AI Overview for "layout development in hyderabad" cites Leenus India directly, with an organic listing right below it.',
            },
          ]}
        />
      </div>

      {/* Block 2: Middle Section (Cited By AI + Keyword Table + Notes) */}
      <div className="leenus-organic-middle-block">
        <CitedByAI />
        <KeywordRankingTable />
      </div>

      {/* Block 3: Bottom Laptop Pair with design background */}
      <div className="leenus-organic-mockup-block leenus-organic-mockup-bottom">
        <ScreenshotPair
          items={[
            {
              src: localPackShot,
              caption:
                'Local pack + AI Overview for "trusted supreme pipe distributors": Leenus India, 5.0 ★ (48 reviews).',
            },
            {
              src: googleBusinessShot,
              caption: "Google Business Profile: 67 calls generated directly from the listing, Apr-Sept 2026.",
            },
          ]}
        />
      </div>
    </section>
  );
}
