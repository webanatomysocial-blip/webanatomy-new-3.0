"use client";
import { useEffect } from "react";
import ServicesSecondSec from "../workComponents/ServicesSecondSec";
import Context from "../workComponents/Context";
import JustHeading from "../workComponents/JustHeading";
import WorkCta from "../workComponents/WorkCta";
import LeenusHero from "../workComponents/leenusIndiaComponents/LeenusHero";
import BeforeAfter from "../workComponents/leenusIndiaComponents/BeforeAfter";
import CampaignTable from "../workComponents/leenusIndiaComponents/CampaignTable";
import CreativeShowcase from "../workComponents/leenusIndiaComponents/CreativeShowcase";
import StatsBlock from "../workComponents/leenusIndiaComponents/StatsBlock";
import OrganicAISearch from "../workComponents/leenusIndiaComponents/OrganicAISearch";
import OrganicStatsPill from "../workComponents/leenusIndiaComponents/OrganicStatsPill";

import LeenusVideoBanner from "../workComponents/leenusIndiaComponents/LeenusVideoBanner";

import semrushShot from "../WorkImages/leenus-india/semrush-domain-overview-laptop.png";
import googleAiShot from "../WorkImages/leenus-india/google-ai-overview-laptop.png";
import localPackShot from "../WorkImages/leenus-india/local-pack-laptop.png";
import googleBusinessShot from "../WorkImages/leenus-india/google-business-profile-laptop.png";
import ctaBackground from "../WorkImages/leenus-india/leenus-cta-pipes.jpg";
import supremeLogo from "../WorkImages/leenus-india/supreme-logo-clean-trans.png";
import leenusLogo from "../WorkImages/leenus-india/leenus-official-logo.png";
import resultsBackground from "../WorkImages/leenus-india/the-result-bg.jpg";
import heroBannerImage from "../WorkImages/leenus-india/leenus-hero-banner.jpg";

export default function LeenusIndia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="leenus-case-study-page" style={{ width: "100%", overflowX: "clip" }}>
      <LeenusHero
        title="The Ad Spend Was ₹47K. The Pipeline Was ₹54 Crore+."
        tags={[
          "Paid Social",
          "SEO",
          "Creative Production",
          "Conversion Tracking",
        ]}
        backgroundImage={heroBannerImage}
      />

      <ServicesSecondSec
        services={[
          "Paid Social",
          "Campaign Strategy",
          "Conversion Tracking",
          "SEO",
          "Creative Production",
        ]}
        title="Turning a Small, Disciplined Ad Budget Into ₹54 Crore+ in Business Opportunity"
        description="Leenus India has been solving infrastructure problems since 2015: underground drainage, water supply, stormwater systems, water storage, surveying, design and installation. Their reputation was built the hard way, through relationships and results on the ground. Web Anatomy was engaged to build a paid social engine that could do the same thing at scale, backed by organic search visibility and bilingual creative that carried the same message across every channel."
        stats={[
          { label: "Platform", value: "Meta Ads (Lead Form Campaigns)" },
          { label: "Campaigns Analyzed", value: "10" },
          { label: "Focus", value: "Paid Social · Lead Generation" },
        ]}
        liveLink="https://leenusindia.com"
      />

      <LeenusVideoBanner
        videoUrl="https://leenusindia.com/wp-content/uploads/2024/09/2157145_Industry_Machine_1920x1080.mp4"
        title="Turning Ad Spend Into Pipeline"
      />

      <Context
        subheading="Context"
        tittle="About Client"
        description="Leenus operates in a category most ad accounts get wrong. Infrastructure buyers do not browse. They search for exactly the project they need: underground drainage contractors, stormwater system installation, water storage solutions. These are high-intent, high-value searches, and most of the traffic chasing them is generic, unqualified, or both."
        description2="Leenus had never run paid campaigns against this kind of precision. There was no account structured around the specific, high-value work Leenus actually wins: Full Development contracts worth ₹1 crore and above, high-value category projects worth ₹40 lakh and above. Spend, when it happened, had no way of proving what it returned."
      />

      <JustHeading
        paddingTop={0}
        tittle={
          "The question wasn’t how do we get more clicks. It was how do we make sure every click is a buyer who’s already close to a decision."
        }
      />

      <BeforeAfter
        before="Unstructured spend. No way to trace a lead back to a category, a campaign, or a return."
        after="Category-split campaigns, each accountable for its own cost-per-lead and its own pipeline."
      />

      <CampaignTable />

      <CreativeShowcase
        videoUrl="/videos/work/leenus/leenus.mp4"
        galleryItems={[
          {
            type: "video",
            src: "/works/leenus/gallery/video1.mp4",
            label: "Excavation",
          },
          {
            type: "video",
            src: "/works/leenus/gallery/video2.mp4",
            label: "Supply",
          },
          {
            type: "image",
            src: "/works/leenus/gallery/image1.jpeg",
            label: "Branded Material",
          },
          {
            type: "image",
            src: "/works/leenus/gallery/image2.jpeg",
            label: "Final Testing",
          },
        ]}
      />

      <JustHeading
        paddingTop={0}
        tittle={
          ' "Web Anatomy didn\'t just run our ads. They understood which projects actually move our business and built every campaign around getting us in front of that exact buyer." '
        }
        subtitle="Leenus India Leadership"
      />

      <StatsBlock
        badgeText="SEARCH VISIBILITY"
        title="The Result"
        description="Beyond the individual campaign data above, paid search across the full 10-month engagement was reported to have delivered the following business outcomes."
        backgroundImage={resultsBackground.src || resultsBackground}
        stats={[
          { value: "400+", label: "Qualified Leads (10 Months)" },
          { value: "30%+", label: "Lead-to-Opportunity Conversion" },
          { value: "₹54 Cr+", label: "Minimum Business Opportunity Enabled" },
          { value: "69", label: "Leads From One Telangana Campaign" },
        ]}
        note="We built dedicated pages for each high-value service, matched to how buyers actually search, and strengthened the Google Business Profile alongside them. The ranking and the calls followed."
      />

      <OrganicAISearch
        semrushShot={semrushShot}
        googleAiShot={googleAiShot}
        localPackShot={localPackShot}
        googleBusinessShot={googleBusinessShot}
      />

      <OrganicStatsPill />

      <WorkCta
        src={ctaBackground}
        heading="Have a business built on reputation that needs a pipeline to match?"
        sub="Let's talk about how we can make your ad spend accountable to real business outcomes, not just clicks."
        ctaText="Start a Conversation →"
        supremeLogo={supremeLogo}
        bottomLeftLogo={leenusLogo}
        className="leenus-fullwidth-cta"
      />
    </div>
  );
}
