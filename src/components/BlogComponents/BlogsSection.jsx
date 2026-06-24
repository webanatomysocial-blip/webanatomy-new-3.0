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

const BlogsSection = ({ backgroundColor = "#f8f8f8", limit = 3 }) => {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(typeof limit === "number" ? limit : 9999);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/posts.php?type=blog`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success" && Array.isArray(data.data)) {
          setBlogs(data.data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (limit === "all") {
      setVisibleCount(blogs.length);
    } else {
      setVisibleCount(typeof limit === "number" ? limit : 3);
    }
  }, [limit, blogs.length]);

  const showLoadMore = limit === "all" && visibleCount < blogs.length;

  return (
    <div className="whole-blog-section" style={{ backgroundColor }}>
      <div className="blogs-container">

        <div className="page-blogs-header">
          <div className="page-blogs-header-content">
            <h2 className="head-text" style={{ margin: 0 }}>Blogs</h2>
          </div>
          <div className="page-blogs-header-button">
            <span style={{ fontSize: "14px", fontWeight: 500, color: "black" }}>✦ Key milestones</span>
          </div>
        </div>

        <div className="blogs-grid">
          {loading && <p>Loading blogs...</p>}
          {!loading && blogs.length === 0 && <p>No blogs found.</p>}
          {blogs.slice(0, visibleCount).map((blog, index) => (
            <div key={blog.id ?? index} className="inner-news-blogs-container">
              <Link href={`/blogs/${blog.slug}`} style={{ display: "block", textDecoration: "none" }}>
                <div
                  className="image-hover-text-come"
                  style={{ backgroundImage: blog.image_url ? `url(${blog.image_url})` : "none", backgroundColor: "#e0e0e0" }}
                >
                  <div className="inner-text-come">
                    <div>
                      <p className="small-text-black">{blog.excerpt}</p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="blog-text">
                <p className="text-black" style={{ marginBottom: "4px" }}>
                  {formatDate(blog.published_date)}
                </p>
                <Link href={`/blogs/${blog.slug}`} style={{ textDecoration: "none" }}>
                  <h3 className="sub-big-heading-text-black">{blog.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showLoadMore && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button className="load-more" onClick={() => setVisibleCount(blogs.length)}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsSection;
