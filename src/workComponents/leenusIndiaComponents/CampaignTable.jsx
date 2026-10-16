"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import wavesForeground from "../../WorkImages/leenus-india/waves-foreground-retina.png";
import "../../workCss/leenusIndiaCss/CampaignTable.css";

const CAMPAIGNS = [
  { name: "Underground drainage leads, TG & AP · 1 Feb 2026", reach: "11,340", impressions: "15,021", clicks: "96", ctr: "0.85%", cpc: "₹5.56", spent: "₹1,538.81", results: "22 Leads (Form)", costPerResult: "₹69.95" },
  { name: "Underground drainage leads, TG & AP · 22 Jan 2026 (test version)", reach: "1,444", impressions: "1,607", clicks: "8", ctr: "0.55%", cpc: "₹10.67", spent: "₹277.48", results: "1 Lead (Form)", costPerResult: "₹277.48" },
  { name: "Underground drainage leads, TG & AP · 22 Jan 2026", reach: "13,069", impressions: "19,255", clicks: "157", ctr: "1.20%", cpc: "₹5.17", spent: "₹2,557.06", results: "30 Leads (Form)", costPerResult: "₹85.24" },
  { name: "Underground drainage leads · 9 Jan 2026", reach: "13,848", impressions: "19,737", clicks: "143", ctr: "1.03%", cpc: "₹8.48", spent: "₹2,933.52", results: "42 Leads (Form)", costPerResult: "₹69.85" },
  { name: "Underground drainage leads, bid cap · 11 Jun 2026", reach: "36,714", impressions: "52,898", clicks: "211", ctr: "0.57%", cpc: "₹14.34", spent: "₹7,256.54", results: "37 Leads (Form)", costPerResult: "₹196.12" },
  { name: "Underground drainage leads · 14 May to 12 Jun 2026", reach: "49,541", impressions: "98,674", clicks: "540", ctr: "1.09%", cpc: "₹10.03", spent: "₹14,617.14", results: "92 Leads (Form)", costPerResult: "₹158.88" },
  { name: "Leads campaign · 25 Nov 2025", reach: "4,332", impressions: "5,981", clicks: "41", ctr: "0.95%", cpc: "₹19.75", spent: "₹1,382.76", results: "12 Leads (Form)", costPerResult: "₹115.23" },
  { name: "Underground campaign · 17 Nov 2025", reach: "11,412", impressions: "17,674", clicks: "118", ctr: "1.03%", cpc: "₹18.94", spent: "₹3,976.83", results: "22 Leads (Form)", costPerResult: "₹180.77" },
  { name: "Underground leads campaign · 23 Oct 2025", reach: "38,081", impressions: "69,751", clicks: "439", ctr: "1.15%", cpc: "₹14.40", spent: "₹11,589.56", results: "77 Leads (Form)", costPerResult: "₹150.51" },
  { name: "Leenus India ad campaign (website visits)", reach: "2,095", impressions: "2,585", clicks: "220", ctr: "10.50%", cpc: "₹3.64", spent: "₹847.47", results: "Website Contact", costPerResult: "n/a" },
];

const SUMMARY = [
  { value: "₹46,977", label: "Total Spend Across These Campaigns" },
  { value: "335", label: "Total Form Leads Generated" },
  { value: "~₹138", label: "Average Cost Per Lead" },
];
const SUMMARY_NOTE = "The ₹138 average leaves out the website-visit campaign (₹847), which was not a lead-form campaign.";

export default function CampaignTable() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Start reveal when the top of the container enters from bottom: rect.top <= windowHeight
            // Complete reveal when container is well inside viewport: rect.top <= windowHeight * 0.35
            const startY = windowHeight;
            const endY = windowHeight * 0.25;

            const progress = (startY - rect.top) / (startY - endY);
            const clamped = Math.max(0, Math.min(1, progress));
            setScrollProgress(clamped);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="leenus-campaign-section">
      <h2 className="head-text">
        Structuring Spend Around the Projects That Actually Move the Business
      </h2>
      <p className="paragraph-text leenus-campaign-desc">
        We focused on layout development, with most of the budget going into underground drainage. Each campaign got its own audience and location, and we ran multiple ad sets and ads side by side, so the numbers told us what to keep and what to drop. Below is the campaign data exactly as it appears in Meta Ads Manager.
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

      {/* Waves Landscape with Rising Blue Cards Driven Directly on Scroll */}
      <div ref={containerRef} className="leenus-waves-stage">
        <div className="leenus-waves-cards-track">
          {SUMMARY.map((s, i) => {
            // Card translateY moves from 220px (hidden deep behind waves) to 0px (fully revealed)
            // Stagger slightly by index so the cards emerge dynamically
            const staggeredProgress = Math.max(
              0,
              Math.min(1, (scrollProgress - i * 0.08) / (1 - 0.16))
            );
            const translateY = (1 - staggeredProgress) * 230;
            const opacity = Math.min(1, staggeredProgress * 1.5);

            return (
              <div
                key={i}
                className={`leenus-waves-card leenus-waves-card--${i + 1}`}
                style={{
                  "--translate-y": `${translateY}px`,
                  "--card-opacity": opacity,
                }}
              >
                <h3 className="leenus-waves-card-val">{s.value}</h3>
                <p className="leenus-waves-card-lbl">{s.label}</p>
              </div>
            );
          })}
        </div>

        {/* Foreground Monochrome Grassy Hills Waves */}
        <div className="leenus-waves-foreground-wrap">
          <Image
            src={wavesForeground}
            alt="Waves Landscape Foreground"
            className="leenus-waves-foreground-img"
            priority
          />
        </div>
      </div>
      <p className="leenus-campaign-footnote">{SUMMARY_NOTE}</p>
    </section>
  );
}
