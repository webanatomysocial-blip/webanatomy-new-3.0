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

// Case studies still in draft — keep them out of search results.
const DRAFT_WORK_IDS = new Set([
  'eryntis-tech-forward-identity-with-a-minimal-touch',
  'mudra-yoga-crafting-a-yoga-studio-identity',
  'prugens-consulting-crafting-distinctive-brand-stories',
]);

export async function generateMetadata({ params }) {
  const { id } = await params;
  const work = worksMetadata.find(
    (w) =>
      w.id?.toString().toLowerCase() === id?.toLowerCase() ||
      w.slug?.toLowerCase() === id?.toLowerCase()
  );
  if (work && DRAFT_WORK_IDS.has(work.id)) {
    return { robots: { index: false, follow: false } };
  }
  return {};
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
