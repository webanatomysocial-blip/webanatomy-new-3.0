"use client";
import React from "react";
import ServicesSecondSec from "../workComponents/ServicesSecondSec";
import WorkBanner from "../workComponents/WorkBanner";
import Context from "../workComponents/Context";
import ImageExpand from "../workComponents/imageExpand";
import BothImages from "../workComponents/threatsenseaicomponents/BothImages";
import WorkCta from "../workComponents/WorkCta";
import JustHeading from "../workComponents/JustHeading";

import img1 from "../WorkImages/eryntis/1.webp";
import img2 from "../WorkImages/eryntis/2.webp";
import img3 from "../WorkImages/eryntis/3.webp";
import img4 from "../WorkImages/eryntis/4.webp";
import img5 from "../WorkImages/eryntis/5.webp";
import img6 from "../WorkImages/eryntis/6.webp";
import img7 from "../WorkImages/eryntis/7.webp";
import img8 from "../WorkImages/eryntis/8.webp";

export default function Eryntis() {
  const services = ["Branding", "UI/UX Design", "Web Development", "Strategy"];

  const stats = [
    { label: "Role", value: "Brand Identity & Digital Design" },
    { label: "Timeline", value: "8 Weeks" },
    { label: "Focus", value: "Tech-Forward Minimalist Identity" },
  ];

  return (
    <div>
      <WorkBanner
        title="Eryntis"
        src={img1}
        title2="Eryntis"
        category2="Tech-Forward Identity with a Minimal Touch"
      />

      <ServicesSecondSec
        services={services}
        title="Redefining Tech Identity with Minimalism"
        description="Eryntis approached us with a vision to build a tech-forward identity that stands out in a crowded market. The goal was to create a clean, minimalist brand that communicates innovation, reliability, and precision without unnecessary complexity."
        stats={stats}
        liveLink="#"
      />

      <ImageExpand src={img2} alt="Eryntis Brand Identity" />

      <Context
        subheading="The Challenge"
        tittle="Standing out in the Tech Industry"
        description="The tech landscape is saturated with complex, over-engineered brand identities. Eryntis needed to convey their deep technical expertise without losing accessibility. The challenge was finding the perfect balance between a highly technical aesthetic and an approachable, minimal design language."
        description2="We stripped away the unnecessary, focusing on core geometric forms, a refined typographic palette, and a high-contrast color scheme that feels both futuristic and grounded."
      />

      <BothImages src1={img3} src2={img4} />

      <Context
        subheading="Visual System"
        tittle="A Minimal Touch"
        description="The visual system relies on a stark, minimalist approach. By prioritizing whitespace and clean lines, we allowed the content and the core message to take center stage."
        description2="Every touchpoint, from the digital platform to the marketing materials, was designed to reflect this ethos, ensuring a consistent and powerful brand presence across all mediums."
      />

      <ImageExpand src={img5} alt="Eryntis Visual System" />

      <JustHeading
        paddingTop={100}
        tittle={
          ' "Web Anatomy took one of the most complex briefs we could have presented and delivered a platform that our parents, teachers and operations team rely on every single day. The biometric payment system alone transformed how we run the centre." '
        }
        subtitle="Founder, The Pied Piper"
      />
      <BothImages src1={img6} src2={img7} />
      <Context
        subheading="The Biometric Payment System"
        tittle="Replacing Cash With a UV Eye Scan Wallet System"
        description="The cafeteria payment system was among the most technically distinctive elements of the entire build, and one of the most considered in terms of user experience. Rather than children handling cash at the point of purchase, each student is identified through a UV eye scan, and the payment is deducted automatically from a pre-loaded parent wallet, with the transaction logged and visible to parents in real time."
        description2="Integrating biometric hardware into a live web application required precise coordination across identity verification, wallet management, real-time synchronisation and parent notifications, all within a single seamless interaction. The result eliminated cash handling from the centre entirely, gave parents complete visibility and control over their child's spending, and made every cafeteria transaction faster and more reliable than anything a cash-based system could offer."
      />
      <ImageExpand src={img8} alt="Eryntis Final Deliverables" />
    <JustHeading
        paddingTop={100}
        tittle={
          ' "Web Anatomy took one of the most complex briefs we could have presented and delivered a platform that our parents, teachers and operations team rely on every single day. The biometric payment system alone transformed how we run the centre." '
        }
        subtitle="Founder, The Pied Piper"
      />
      <WorkCta
        heading="Ready to Build Something That Sets the Standard?"
        sub="Share your brief with us. Our team will come back with a perspective worth hearing."
        ctaText="Share Your Brief →"
      />
    </div>
  );
}
