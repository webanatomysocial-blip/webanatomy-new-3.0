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
          Beyond Paid <span>Organic Search &amp; AI Citations</span>
        </div>
        <h2 className="head-text">
          Found on Google. Found by AI. Found Without an Ad.
        </h2>
        <p className="paragraph-text leenus-organic-desc">
          We started with SEO and added Meta ads alongside it, so ads were never carrying
          the account alone. We built the Leenus India website around the same high-value
          work: layout development, piping networks and underground drainage. Now Leenus
          turns up whether a buyer clicks an ad, searches Google or asks an AI tool.
        </p>
      </div>

      {/* 5-Statistic Blue Pill Banner with Semrush Footnote */}
      <div className="leenus-stats-pill-banner-wrap leenus-stats-pill-banner-wrap--in-organic">
        <div className="leenus-stats-pill-banner leenus-stats-pill-banner--5col">
          <div className="leenus-stats-pill-col leenus-stats-pill-col--1">
            <div className="leenus-stats-pill-num">214</div>
            <p className="leenus-stats-pill-desc">Keywords Ranking<br />on Google</p>
          </div>

          <div className="leenus-stats-pill-divider" aria-hidden="true" />

          <div className="leenus-stats-pill-col leenus-stats-pill-col--2">
            <div className="leenus-stats-pill-num">30</div>
            <p className="leenus-stats-pill-desc">Keywords in the Top 5<br />on Google Page 1</p>
          </div>

          <div className="leenus-stats-pill-divider" aria-hidden="true" />

          <div className="leenus-stats-pill-col leenus-stats-pill-col--3">
            <div className="leenus-stats-pill-num">939</div>
            <p className="leenus-stats-pill-desc">Referring<br />Domains</p>
          </div>

          <div className="leenus-stats-pill-divider" aria-hidden="true" />

          <div className="leenus-stats-pill-col leenus-stats-pill-col--4">
            <div className="leenus-stats-pill-num">76.2K</div>
            <p className="leenus-stats-pill-desc">Total<br />Backlinks</p>
          </div>

          <div className="leenus-stats-pill-divider" aria-hidden="true" />

          <div className="leenus-stats-pill-col leenus-stats-pill-col--5">
            <div className="leenus-stats-pill-num">23%</div>
            <p className="leenus-stats-pill-desc">Share of Category Search<br />Traffic (India)</p>
          </div>
        </div>
      </div>

      {/* Block 1: Top Laptop Pair with design background */}
      <div className="leenus-organic-mockup-block leenus-organic-mockup-top">
        <ScreenshotPair
          items={[
            {
              src: domainOverviewImage,
              caption:
                "214 keywords ranking, 939 websites linking, 76.2K backlinks and a 23% share of category search traffic in India.",
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
