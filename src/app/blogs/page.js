import React from "react";
import BlogsSection from "@/components/BlogComponents/BlogsSection";

export const metadata = {
  title: "All Blogs | Web anatomy",
  description: "Read all the latest insights, strategies, and news from Web anatomy.",
};

export default async function BlogsPage() {
  let initialBlogs = null;
  try {
    const res = await fetch(`${process.env.API_URL}/api/posts.php?type=blog`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(5000),
    });
    const data = await res.json();
    if (data.status === "success" && Array.isArray(data.data)) {
      initialBlogs = data.data;
    }
  } catch {}

  return (
    <div style={{ paddingTop: "80px", backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <BlogsSection limit="all" backgroundColor="#f8f8f8" initialBlogs={initialBlogs} />
    </div>
  );
}
