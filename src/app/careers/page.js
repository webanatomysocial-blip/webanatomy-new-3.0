export const metadata = {
  title: "Careers at Web Anatomy | Join Our Creative Team",
  description:
    "Join Web Anatomy and build your career in web development, UI/UX, branding, SEO, digital marketing, content, and sales. Explore our current job openings.",
};

import CareersBanner from "@/components/CareersComponents/CareersBanner";
import CompetitivePros from "@/components/CareersComponents/CompetitivePros";
import CareersCarousel from "@/components/CareersComponents/CareersCarousel";
import OpenPositions from "@/components/CareersComponents/OpenPositions";
import GloballyConnected from "@/components/AboutComponents/GloballyConnected";
import MultiImagesCTA from "@/components/MultiImagesCTA";

export default function CareersPage() {
    return (
        <>
            <CareersBanner />
            <CompetitivePros />
            <OpenPositions />
            <CareersCarousel />
            <MultiImagesCTA />
        </>
    );
}

