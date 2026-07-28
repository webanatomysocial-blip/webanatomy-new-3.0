"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/css/blog-post.css";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import ShareButton from "./ShareButton";
import Link from "next/link";

const BlogLayout = ({ category = "BLOG", title, content, image, recentPosts }) => {
  const isLearning = category === "LEARNING";
  const sectionLabel = isLearning ? "Learnings" : "Blogs";
  const sectionHref = isLearning ? "/learnings" : "/blogs";
  const progressBarRef = useRef(null);
  const headerRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState("");
  const [scrollDir, setScrollDir] = useState("up"); // "up" | "down"
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    setCurrentUrl(window.location.href);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Progress bar
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = progress + "%";
      }

      setIsAtTop(currentScrollY < 10);

      // Scroll direction (only update if moved more than 4px to avoid jitter)
      if (Math.abs(currentScrollY - lastScrollY) > 4) {
        setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial values

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pod-post-page">
      {/* Hero Section */}
      <div className="pod-hero-section">
        <div className="pod-split-header">
          <div className="pod-title-section">
            <Link href="/" className="blog-go-back">
              &larr; Go Back
            </Link>
            <h1 className="head-text" style={{ fontSize: "40px", marginTop: "10px", marginBottom: "10px" }}>{title}</h1>
            <div className="blog-breadcrumbs">
              <Link href="/">Home</Link> <span className="breadcrumb-separator">/</span> <Link href={sectionHref}>{sectionLabel}</Link> <span className="breadcrumb-separator">/</span> <span className="breadcrumb-current">{title}</span>
            </div>
          </div>
          <div className="pod-hero-img-container">
            {image && <img src={image} alt={title} />}
          </div>
        </div>
      </div>

      {/* Sticky / Fixed Header - class switches based on scroll direction */}
      <div
        className={`pod-sticky-header-container pod-sticky--${scrollDir} ${isAtTop ? "pod-sticky--at-top" : ""}`}
        ref={headerRef}
      >
        <div className="pod-sticky-header">
          <div className="pod-header-content">
            <div className="pod-header-title">
              {category}{" "}
              <span style={{ margin: "0 10px", color: "#ccc" }}>|</span>{" "}
              {title}
            </div>
            <div className="pod-header-actions">
              <div className="social-icons-header">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="social-link-header"
                >
                  <FiFacebook size={20} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="social-link-header"
                >
                  <FiLinkedin size={20} />
                </a>
              </div>
              <ShareButton url={currentUrl} title={title} />
            </div>
          </div>
          <div className="scroll-progress-bar" ref={progressBarRef}></div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="pod-container two-column-layout">
        <aside className="pod-sidebar-left">
          <div className="recent-posts">
            <h3>Recent posts</h3>
            {recentPosts &&
              recentPosts.map((post, index) => (
                <Link key={index} href={post.link} className="recent-post-item" style={{ display: "block" }}>
                  {post.title}
                  <hr />
                </Link>
              ))}
          </div>
        </aside>

        <div className="pod-main-content">
          <div className="pod-body">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
