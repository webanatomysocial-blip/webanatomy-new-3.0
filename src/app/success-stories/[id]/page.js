import React, { Suspense } from 'react';
import { worksMetadata } from '@/works/metadata';
import WorkPageClient from './WorkPageClient';

export function generateStaticParams() {
  const ids = new Set();
  worksMetadata.forEach((w) => {
    if (w.id) ids.add(w.id);
    if (w.slug) ids.add(w.slug);
  });
  return Array.from(ids).map((id) => ({ id }));
}

export default async function WorkPage({ params }) {
  const { id } = await params;
  return (
    <div style={{ color: "#000000", backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <Suspense fallback={<div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>Loading work case study...</div>}>
        <WorkPageClient id={id} />
      </Suspense>
    </div>
  );
}
