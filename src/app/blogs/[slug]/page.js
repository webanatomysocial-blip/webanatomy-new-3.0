import React from "react";
import BlogPostClient from "./BlogPostClient";

export default async function BlogPostPage({ params }) {
  // Await the params object in Next.js 15 App Router
  const { slug } = await params;

  return <BlogPostClient slug={slug} />;
}
