"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "@/css/Blog.css";

const API = process.env.NEXT_PUBLIC_API_URL || "";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const LearningsSection = ({ backgroundColor = "#f8f8f8", limit = 3, initialLearnings = null }) => {
  const [learnings, setLearnings] = useState(initialLearnings ?? []);
  const [visibleCount, setVisibleCount] = useState(typeof limit === "number" ? limit : 9999);
  const [loading, setLoading] = useState(initialLearnings === null);

  useEffect(() => {
    if (initialLearnings !== null) return;
    fetch(`${API}/api/posts.php?type=learning`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success" && Array.isArray(data.data)) {
          setLearnings(data.data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (limit === "all") {
      setVisibleCount(learnings.length);
    } else {
      setVisibleCount(typeof limit === "number" ? limit : 3);
    }
  }, [limit, learnings.length]);

  const showLoadMore = limit === "all" && visibleCount < learnings.length;

  return (
    <div className="whole-blog-section" style={{ backgroundColor }}>
      <div className="blogs-container">

        <div className="page-blogs-header">
          <div className="page-blogs-header-content">
            <h2 className="head-text" style={{ margin: 0 }}>Learnings</h2>
          </div>
          <div className="page-blogs-header-button">
            <span style={{ fontSize: "14px", fontWeight: 500, color: "black" }}>✦ Key milestones</span>
          </div>
        </div>

        <div className="blogs-grid">
          {loading && <p>Loading learnings...</p>}
          {!loading && learnings.length === 0 && <p>No learnings found.</p>}
          {learnings.slice(0, visibleCount).map((learning, index) => (
            <div key={learning.id ?? index} className="inner-news-blogs-container">
              <Link href={`/learnings/${learning.slug}`} style={{ display: "block", textDecoration: "none" }}>
                <div
                  className="image-hover-text-come"
                  style={{ backgroundImage: learning.image_url ? `url(${learning.image_url})` : "none", backgroundColor: "#e0e0e0" }}
                >
                  <div className="inner-text-come">
                    <div>
                      <p className="small-text-black">{learning.excerpt}</p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="blog-text">
                <p className="text-black" style={{ marginBottom: "4px" }}>
                  {formatDate(learning.published_date)}
                </p>
                <Link href={`/learnings/${learning.slug}`} style={{ textDecoration: "none" }}>
                  <h3 className="sub-big-heading-text-black">{learning.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showLoadMore && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button className="load-more" onClick={() => setVisibleCount(learnings.length)}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningsSection;
