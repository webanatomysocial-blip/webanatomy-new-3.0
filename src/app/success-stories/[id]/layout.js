export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const idLower = resolvedParams?.id?.toLowerCase();
  
  if (idLower === 'piedpippers') {
    return {
      title: "Pied Pippers Branding Case Study | Web Anatomy",
      description: "Discover how Web Anatomy created the Pied Pippers brand identity with strategic branding, logo design, and visual storytelling for a memorable children's club.",
    };
  }
  if (idLower === 'thesase') {
    return {
      title: "The Sase Case Study | Branding & Website by Web Anatomy",
      description: "Discover how Web Anatomy transformed The Sase with strategic branding, website design, UI/UX, and digital experiences that strengthen brand identity and engagement.",
    };
  }
  if (idLower === 'threatsenseai') {
    return {
      title: "ThreatSenseAI Case Study | AI Branding by Web Anatomy",
      description: "Explore how Web Anatomy built the ThreatSenseAI brand with strategic identity design, AI-focused branding, and a modern visual system for a cybersecurity platform.",
    };
  }
  if (idLower === 'togglenow') {
    return {
      title: "ToggleNow Case Study | UI/UX & Product Design Portfolio",
      description: "Discover how Web Anatomy redesigned ToggleNow with intuitive UI/UX, modern product design, and seamless user experiences for an enterprise SaaS platform.",
    };
  }
  if (idLower === 'eryntis-tech-forward-identity-with-a-minimal-touch') {
    return {
      title: "Eryntis Case Study | Web Anatomy",
      description: "Eryntis - Tech forward identity with a minimal touch.",
    };
  }
  if (idLower === 'mudra-yoga-crafting-a-yoga-studio-identity') {
    return {
      title: "Mudra Case Study | Web Anatomy",
      description: "Crafting a Modern Yoga Studio Identity.",
    };
  }
  if (idLower === 'prugens-consulting-crafting-distinctive-brand-stories') {
    return {
      title: "Prugens Consulting Case Study | Web Anatomy",
      description: "Crafting Distinctive Brand Stories for Prugens Consulting.",
    };
  }



  
  return {
    title: "Work Case Study | Web Anatomy",
    description: "Explore Web Anatomy's portfolio of brand, design, and engineering work.",
  };
}

export default function WorkLayout({ children }) {
  return <>{children}</>;
}
