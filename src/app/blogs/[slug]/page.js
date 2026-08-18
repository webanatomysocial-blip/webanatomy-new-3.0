import React from "react";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/posts.php?type=blog`, {
      signal: AbortSignal.timeout(5000),
    });
    const data = await res.json();
    if (data.status === "success" && Array.isArray(data.data)) {
      return data.data.map((post) => ({ slug: post.slug }));
    }
  } catch {}
  return [];
}

async function fetchPost(slug) {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/posts.php?slug=${encodeURIComponent(slug)}`,
      { next: { revalidate: 60 }, signal: AbortSignal.timeout(5000) }
    );
    const data = await res.json();
    return data.status === "success" ? data.data : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) return { title: "Blog | Webanatomy" };
  return {
    title: `${post.title} | Webanatomy`,
    description: post.meta_description || post.excerpt || "",
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const initialPost = await fetchPost(slug);
  return <BlogPostClient slug={slug} initialPost={initialPost} />;
}
