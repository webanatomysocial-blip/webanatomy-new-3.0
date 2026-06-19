import React from "react";
import LearningPostClient from "./LearningPostClient";

export default async function LearningPostPage({ params }) {
  // Await the params object in Next.js 15 App Router
  const { slug } = await params;

  return <LearningPostClient slug={slug} />;
}
