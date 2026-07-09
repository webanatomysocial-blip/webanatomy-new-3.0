export const metadata = {
  title: "Careers",
  description:
    "Join the Webanatomy team. We're looking for designers, engineers, and growth thinkers who care deeply about craft.",
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

