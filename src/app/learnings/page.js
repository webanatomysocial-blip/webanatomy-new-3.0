import React from "react";
import LearningsSection from "@/components/BlogComponents/LearningsSection";

export const metadata = {
  title: "All Learnings | Web anatomy",
  description: "Read all the latest learnings, strategies, and news from Web anatomy.",
};

export default async function LearningsPage() {
  let initialLearnings = null;
  try {
    const res = await fetch(`${process.env.API_URL}/api/posts.php?type=learning`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(5000),
    });
    const data = await res.json();
    if (data.status === "success" && Array.isArray(data.data)) {
      initialLearnings = data.data;
    }
  } catch {}

  return (
    <div style={{ paddingTop: "80px", backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <LearningsSection limit="all" backgroundColor="#f8f8f8" initialLearnings={initialLearnings} />
    </div>
  );
}
