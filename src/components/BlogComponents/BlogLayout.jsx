"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/css/blog-post.css";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import ShareButton from "./ShareButton";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const BlogLayout = ({ category = "BLOG", title, content, image, recentPosts }) => {
  const progressBarRef = useRef(null);
  const headerRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState("");
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setCurrentUrl(window.location.href);
    
    // Animate Progress Bar width based on scroll
    gsap.to(progressBarRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    // Track scroll direction for sticky header
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY && currentScrollY > 80) {
        // Scrolling up and past the top header
        setIsScrollingUp(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsScrollingUp(false);
      } else if (currentScrollY <= 80) {
        // At the very top, main header is visible
        setIsScrollingUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
              <Link href="/">Home</Link> <span className="breadcrumb-separator">/</span> <span>Blogs</span> <span className="breadcrumb-separator">/</span> <span className="breadcrumb-current">{title}</span>
            </div>
          </div>
          <div className="pod-hero-img-container">
            {image && <img src={image} alt={title} />}
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <div 
        className="pod-sticky-header-container" 
        ref={headerRef}
        style={{
          top: isScrollingUp ? '80px' : '0px',
          transition: 'top 0.3s ease-in-out'
        }}
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

      {/* Three-Column Layout */}
      <div className="pod-container three-column-layout">
        <aside className="pod-sidebar-left">
          <div className="recent-posts">
            <h3>Recent posts</h3>
            {recentPosts &&
              recentPosts.map((post, index) => (
                <Link key={index} href={post.link} className="recent-post-item" style={{display: 'block'}}>
                  {post.title}
                  <hr />
                </Link>
              ))}
          </div>
        </aside>

        <div className="pod-main-content">
          <div className="pod-body">{content}</div>
        </div>

        <aside className="pod-sidebar-right">
          <div className="sponsored-card">
             <span className="sponsored-label">Featured</span>
             <div className="sponsored-text">
               <h4>Do you run your entire marketing department as one person?</h4>
               <p>Call the marketing hotline at MarketingHotline.com</p>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogLayout;
