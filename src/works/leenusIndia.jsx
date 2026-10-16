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
        title="The Ad Spend Was ₹47K. The Business Opportunity Was ₹54 Crore+."
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
        title="Small Budget. Sharp Targeting. ₹54 Crore+ in Business Opportunity."
        description="Since 2015, Leenus India has been solving the problems that sit underground: drainage, water supply, stormwater and water storage, from surveying to design to installation. Their name was earned on site, one project and one relationship at a time. Our job was to carry that reputation online. We began with SEO to make Leenus easy to find on Google, then added Meta lead campaigns around the projects Leenus wants to win, backed by English and Telugu creatives. Now the right buyer reaches them whichever way they look."
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
        description="Infrastructure buyers don’t browse. They search for the exact job they need: underground drainage contractors, stormwater installation, water storage. These are serious searches, and a click from the wrong person is money gone."
        description2="Leenus wins big projects, including full development contracts of ₹1 crore and above and projects of ₹40 lakh and above. But their ads weren’t built around that work. Audiences and locations were mixed, and nobody could say which ad brought which lead, or what it cost."
      />

      <JustHeading
        paddingTop={0}
        tittle="The question wasn’t how to get more clicks. It was how to make sure every click comes from a buyer who is already close to a decision."
      />

      <BeforeAfter
        before="Mixed audiences. Mixed locations. No way to trace a lead back to its campaign or its cost."
        after="Separate campaigns by audience and location, each accountable for its own cost per lead."
        note="What changed: every rupee of spend could now be traced, compared and judged, campaign by campaign."
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
        tittle='"Web Anatomy didn&apos;t just run our ads. They understood which projects actually move our business and built every campaign around getting us in front of that exact buyer."'
        subtitle="Team Leenus India"
      />

      <StatsBlock
        badgeText="Creative That Earned The Clicks"
        title="The Result"
        description="400 total leads across 10 months from Meta ads, and 65 from organic search over 12 months. Below are the headline business outcomes."
        backgroundImage={resultsBackground.src || resultsBackground}
        stats={[
          { value: "400", label: "Total Leads (Meta + Organic)" },
          { value: "~34", label: "Meta Leads Every Month on Average" },
          { value: "₹54 Cr+", label: "Business Opportunity Created" },
          { value: "69", label: "Leads From One Telangana Campaign" },
        ]}
        note="Business opportunity is the total worth of quotations sent to leads, not money received. The ₹47K is Meta ad spend only, and the leads include organic search."
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
