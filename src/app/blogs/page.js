import React from "react";
import BlogsSection from "@/components/BlogComponents/BlogsSection";

export const metadata = {
  title: "All Blogs | Webanatomy",
  description: "Read all the latest insights, strategies, and news from Webanatomy.",
};

export default function BlogsPage() {
  return (
    <div style={{ paddingTop: "80px", backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <BlogsSection limit="all" backgroundColor="#f8f8f8" />
    </div>
  );
}
