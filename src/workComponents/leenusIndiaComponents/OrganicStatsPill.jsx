import React from "react";
import "../../workCss/leenusIndiaCss/OrganicStatsPill.css";

export default function OrganicStatsPill() {
  return (
    <section className="leenus-stats-pill-banner-wrap" aria-label="Organic and Google Performance Stats">
      <div className="leenus-stats-pill-banner">
        <div className="leenus-stats-pill-col">
          <div className="leenus-stats-pill-num">67</div>
          <p className="leenus-stats-pill-desc">Calls from Google Business Profile (6 Months)</p>
        </div>

        <div className="leenus-stats-pill-divider" aria-hidden="true" />

        <div className="leenus-stats-pill-col">
          <div className="leenus-stats-pill-num">63</div>
          <p className="leenus-stats-pill-desc">Organic Leads Generated (12 Months)</p>
        </div>

        <div className="leenus-stats-pill-divider" aria-hidden="true" />

        <div className="leenus-stats-pill-col">
          <div className="leenus-stats-pill-num">
            5.0<span className="leenus-stats-pill-star">★</span>
          </div>
          <p className="leenus-stats-pill-desc">Google Rating (48 Reviews)</p>
        </div>
      </div>
    </section>
  );
}
