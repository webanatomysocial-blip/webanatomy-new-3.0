import React from "react";
import LearningPostClient from "./LearningPostClient";

async function fetchPost(slug) {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/posts.php?slug=${encodeURIComponent(slug)}`,
      { next: { revalidate: 60 } }
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
  if (!post) return { title: "Learning | Webanatomy" };
  return {
    title: `${post.title} | Webanatomy`,
    description: post.meta_description || post.excerpt || "",
  };
}

export default async function LearningPostPage({ params }) {
  const { slug } = await params;
  const initialPost = await fetchPost(slug);
  return <LearningPostClient slug={slug} initialPost={initialPost} />;
}
