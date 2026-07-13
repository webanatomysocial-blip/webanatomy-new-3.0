export const metadata = {
  title: "Best Digital Marketing Services in Hyderabad | Web Anatomy",
  description:
    "Reimagine Your World In Digital With Web Anatomy. We offer all top Digital Marketing Services like search engine marketing, social media marketing etc",
};

import ServiceBanner from "@/components/ServiceComponents/ServiceBanner";
import ServiceAccordionList from "@/components/ServiceComponents/ServiceAccordionList";
import ClientsRecognition from "@/components/AboutComponents/ClientsRecognition";
import GloballyConnected from "@/components/AboutComponents/GloballyConnected";
import MultiImagesCTA from "@/components/MultiImagesCTA";

export default function AboutPage() {
    return (
        <>
           <ServiceBanner/>
           <ServiceAccordionList/>
            <ClientsRecognition scrollOverlayColor="#f5f5f3" tag="✦ Clients" title="Businesses That Trust Web Anatomy to Get It Right." />
           <GloballyConnected />
            <MultiImagesCTA />
        </>
    );
}

