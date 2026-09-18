import "../../workCss/leenusIndiaCss/CreativeShowcase.css";

export default function CreativeShowcase({
  englishAd,
  teluguAd,
  galleryImages = [],
}) {
  return (
    <section className="leenus-creative-section">
      <div className="leenus-creative-eyebrow">
        Creative <span>That Earned The Click</span>
      </div>
      <h2 className="head-text">
        Two Languages, One Warning: Making The Ad Feel Like A Warning, Not A Pitch
      </h2>
      <p className="paragraph-text leenus-creative-desc">
        Because the top-performing campaigns ran across Telangana and Andhra Pradesh,
        every static ad shipped in English and Telugu — same headline logic
        ("One Leakage Can Damage Your Entire Reputation"), same offer (a free project
        survey), localized language so it read as a warning worth acting on rather than
        a stock ad.
      </p>

      <div className="leenus-ads-row">
        <div className="leenus-ad-card">
          <img src={englishAd.src} alt="English static lead ad" />
          <div className="leenus-ad-tag">
            <span className="leenus-ad-badge">ENGLISH</span>
            Static Lead Ad
          </div>
        </div>
        <div className="leenus-ad-card">
          <img src={teluguAd.src} alt="Telugu static lead ad" />
          <div className="leenus-ad-tag">
            <span className="leenus-ad-badge">తెలుగు</span>
            Static Lead Ad
          </div>
        </div>
      </div>

      <p className="leenus-gallery-eyebrow">
        Companion Video Ad — Real Site Footage, Not Stock
      </p>
      <div className="leenus-gallery-row">
        {galleryImages.map((g, i) => (
          <div key={i} className="leenus-gallery-item">
            <img src={g.src.src} alt={g.label} />
            <span className="leenus-gallery-label">
              {i + 1} · {g.label}
            </span>
          </div>
        ))}
      </div>
      <p className="leenus-creative-note">
        Same edit, cut in English and Telugu, run alongside the static creative — real
        on-ground footage (excavation → pipe supply → branded DWC/HDPE/PVC material →
        final testing) built to pre-answer the buyer's real objection: will this
        actually get installed properly.
      </p>
    </section>
  );
}
