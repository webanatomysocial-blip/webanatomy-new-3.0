"use client";

import React from 'react';
import DynamicWork from '@/components/DynamicWork';
import { worksMetadata } from '@/works/metadata';
import ToggleNow from '@/works/ToggleNow';
import ThreatSenseAI from '@/works/threatsenseai';
import PiedPippers from '@/works/piedpippers';
import TheSase from '@/works/TheSase';
import Eryntis from '@/works/erynits';
import Mudra from '@/works/mudra';
import Prugens from '@/works/prugens';

export default function WorkPageClient({ id }) {
  if (!id) {
    return <div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>No work ID provided.</div>;
  }

  // Find the work item by id (converting both to string to be safe)
  const work = worksMetadata.find(
    (w) =>
      w.id?.toString().toLowerCase() === id.toLowerCase() ||
      w.slug?.toLowerCase() === id.toLowerCase()
  );

  if (!work) {
    return <div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>Work case study not found.</div>;
  }

  const workIdLower = work.id?.toString().toLowerCase();

  if (workIdLower === 'togglenow') {
    return <ToggleNow />;
  }
  if (workIdLower === 'threatsenseai') {
    return <ThreatSenseAI />;
  }
  if (workIdLower === 'thesase') {
    return <TheSase />;
  }
  if (workIdLower === 'piedpippers') {
    return <PiedPippers />;
  }
  if (workIdLower === 'eryntis-tech-forward-identity-with-a-minimal-touch') {
    return <Eryntis />;
  }
  if (workIdLower === 'mudra-yoga-crafting-a-yoga-studio-identity') {
    return <Mudra />;
  }
  if (workIdLower === 'prugens-consulting-crafting-distinctive-brand-stories') {
    return <Prugens />;
  }

  return (
    <DynamicWork
      category={work.category}
      title={work.title}
      content={work.description}
      image={work.image}
    />
  );
}
