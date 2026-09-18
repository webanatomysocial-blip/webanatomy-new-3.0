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

import englishAd from "../WorkImages/leenus-india/img1.jpeg";
import teluguAd from "../WorkImages/leenus-india/img2.jpeg";
import excavation from "../WorkImages/leenus-india/Excavation.jpeg";
import supply from "../WorkImages/leenus-india/Supply.jpeg";
import brandedMaterial from "../WorkImages/leenus-india/Branded-Material.jpeg";
import finalTesting from "../WorkImages/leenus-india/Final-Testing.jpeg";
import organicSearchShot from "../WorkImages/leenus-india/Organic.jpeg";
import aiSearchShot from "../WorkImages/leenus-india/AI-Search.jpeg";
import localPackShot from "../WorkImages/leenus-india/Local-pack.jpeg";
import googleBusinessShot from "../WorkImages/leenus-india/Google-Business.jpeg";

export default function LeenusIndia() {
  return (
    <>
      <LeenusHero
        title="The Ad Spend Was ₹47K. The Pipeline Was ₹54 Crore+."
        tags={["Paid Search", "SEO", "Creative Production", "Conversion Tracking"]}
      />

      <ServicesSecondSec
        services={["Paid Search", "Campaign Strategy", "Conversion Tracking", "SEO", "Creative Production"]}
        title="Turning a Small, Disciplined Ad Budget Into ₹54 Crore+ in Business Opportunity"
        description="Leenus India has been solving infrastructure problems since 2015 — underground drainage, water supply, stormwater systems, water storage, surveying, design and installation. Their reputation was built the hard way, through relationships and results on the ground. Web Anatomy was engaged to build a paid search engine that could do the same thing at scale — backed by organic search visibility and bilingual creative that carried the same message across every channel."
        stats={[
          { label: "Platform", value: "Meta Ads (Lead Form Campaigns)" },
          { label: "Campaigns Analyzed", value: "10" },
          { label: "Focus", value: "Paid Search · Lead Generation" },
        ]}
        liveLink="https://leenusindia.com"
      />

      <Context
        subheading="Context"
        tittle="About Client"
        description="Leenus operates in a category most ad accounts get wrong. Infrastructure buyers do not browse — they search for exactly the project they need: underground drainage contractors, stormwater system installation, water storage solutions. These are high-intent, high-value searches, and most of the traffic chasing them is generic, unqualified, or both."
        description2="Leenus had never run paid campaigns against this kind of precision. There was no account structured around the specific, high-value work Leenus actually wins — Full Development contracts worth ₹1 crore and above, high-value category projects worth ₹40 lakh and above. Spend, when it happened, had no way of proving what it returned."
      />

      <JustHeading
        paddingTop={0}
        tittle={
          ' "The question wasn\'t how do we get more clicks. It was how do we make sure every click is a buyer who\'s already close to a decision." '
        }
      />

      <BeforeAfter
        before="Unstructured spend. No way to trace a lead back to a category, a campaign, or a return."
        after="Category-split campaigns, each accountable for its own cost-per-lead and its own pipeline."
      />

      <CampaignTable />

      <CreativeShowcase
        englishAd={englishAd}
        teluguAd={teluguAd}
        galleryImages={[
          { src: excavation, label: "Excavation" },
          { src: supply, label: "Supply" },
          { src: brandedMaterial, label: "Branded Material" },
          { src: finalTesting, label: "Final Testing" },
        ]}
      />

      <JustHeading
        paddingTop={100}
        tittle={
          ' "Web Anatomy didn\'t just run our ads. They understood which projects actually move our business and built every campaign around getting us in front of that exact buyer." '
        }
        subtitle="Leenus India Leadership — quote pending final confirmation"
      />

      <StatsBlock
        badgePrefix="Overall"
        badgeHighlight="Paid Results"
        title="The Result"
        description="Beyond the individual campaign data above, paid search — across the full 10-month engagement — was reported to have delivered the following business outcomes."
        stats={[
          { value: "400+", label: "Qualified Leads (10 Months)" },
          { value: "30%+", label: "Lead-to-Opportunity Conversion" },
          { value: "₹54 Cr+", label: "Minimum Business Opportunity Enabled" },
          { value: "69", label: "Leads From One Telangana Campaign" },
        ]}
        note="Deal values reflect minimum project sizes as reported by Leenus and represent business opportunity enabled, not confirmed closed revenue. These headline figures are as previously reported and are shown separately from the Meta campaign-level table above, which may represent only part of total paid spend."
      />

      <OrganicAISearch
        organicSearchShot={organicSearchShot}
        aiSearchShot={aiSearchShot}
        localPackShot={localPackShot}
        googleBusinessShot={googleBusinessShot}
      />

      <WorkCta
        heading="Have a business built on reputation that needs a pipeline to match?"
        sub="Let's talk about how we can make your ad spend accountable to real business outcomes, not just clicks."
        ctaText="Start a Conversation →"
      />
    </>
  );
}
