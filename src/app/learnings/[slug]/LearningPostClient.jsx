"use client";

import React, { useEffect, useState } from "react";
import BlogLayout from "@/components/BlogComponents/BlogLayout";

const API = process.env.NEXT_PUBLIC_API_URL || "";

export default function LearningPostClient({ slug }) {
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    fetch(`${API}/api/posts.php?slug=${encodeURIComponent(slug)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success" && data.data) {
          setPost(data.data);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true));

    fetch(`${API}/api/posts.php?type=learning`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success" && Array.isArray(data.data)) {
          setRecentPosts(
            data.data
              .filter((p) => p.slug !== slug)
              .slice(0, 5)
              .map((p) => ({ title: p.title, link: `/learnings/${p.slug}` }))
          );
        }
      })
      .catch(() => {});
  }, [slug]);

  if (notFound) {
    return (
      <div style={{ padding: "120px 40px", textAlign: "center" }}>
        <h1>Learning post not found.</h1>
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ padding: "120px 40px", textAlign: "center" }}>
        <p>Loading...</p>
      </div>
    );
  }

  const sanitizedContent = (post.content || "")
    .replace(/&nbsp;/gi, " ")
    .replace(/\u00a0/g, " ");

  const content = <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;

  return (
    <BlogLayout
      category="LEARNING"
      title={post.title}
      image={post.image_url || ""}
      content={content}
      recentPosts={recentPosts}
    />
  );
}
