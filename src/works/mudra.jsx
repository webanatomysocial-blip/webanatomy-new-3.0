"use client";
import React from "react";
import ServicesSecondSec from "../workComponents/ServicesSecondSec";
import WorkBanner from "../workComponents/WorkBanner";
import Context from "../workComponents/Context";
import ImageExpand from "../workComponents/imageExpand";
import BothImages from "../workComponents/threatsenseaicomponents/BothImages";
import WorkCta from "../workComponents/WorkCta";
import JustHeading from "../workComponents/JustHeading";

import img1 from "../WorkImages/mudra/1.webp";
import img2 from "../WorkImages/mudra/2.webp";
import img3 from "../WorkImages/mudra/3.webp";
import img4 from "../WorkImages/mudra/4.webp";
import img51 from "../WorkImages/mudra/5.1.webp";
import img52 from "../WorkImages/mudra/5.2.webp";
import img6 from "../WorkImages/mudra/6.webp";
import img7 from "../WorkImages/mudra/7.webp";
import img8 from "../WorkImages/mudra/8.gif";
import imgLast from "../WorkImages/mudra/last.gif";

export default function Mudra() {
  const services = [
    "Branding",
    "Brand Strategy",
    "Visual Identity",
    "Collateral Design",
  ];

  const stats = [
    { label: "Role", value: "Brand Identity & Design" },
    { label: "Timeline", value: "6 Weeks" },
    { label: "Focus", value: "Modern Yoga Studio Branding" },
  ];

  return (
    <div>
      <WorkBanner
        title="Mudra"
        src={img1}
        title2="Mudra"
        category2="Crafting a Modern Yoga Studio Identity"
      />
      <ServicesSecondSec
        services={services}
        title="Balancing Tradition with Modern Aesthetics"
        description="Mudra Yoga Studio came to us looking for a brand identity that honors the deep traditions of yoga while presenting a clean, modern aesthetic that appeals to today's wellness community."
        stats={stats}
        liveLink="#"
      />

      <ImageExpand src={img2} alt="Mudra Brand Assets" />

      <Context
        subheading="The Challenge"
        tittle="Standing out in the Wellness Space"
        description="The modern wellness and yoga space is filled with clichéd lotus flowers and predictable earth tones. The challenge for Mudra was to establish an identity that felt inherently grounded and spiritual, yet distinctively premium and contemporary."
        description2="Our approach focused on subtle geometric alignments, balanced typography, and a refined color palette that brings a sense of calm and structure."
      />

      <BothImages src1={img3} src2={img4} />

      <Context
        subheading="Visual System"
        tittle="A Grounded Foundation"
        description="We developed a visual system that reflects the concept of finding balance. The typography is modern and approachable, while the core symbol represents the interconnectedness of mind, body, and breath."
        description2="This foundation carries through all their collateral, creating an environment that feels both welcoming and highly professional before a student even steps onto the mat."
      />

      <BothImages src1={img51} src2={img52} />

      <JustHeading
        paddingTop={100}
        tittle={
          ' "The identity Web Anatomy created perfectly captures the energy we wanted for our studio—calm, intentional, and entirely unique in our market." '
        }
        subtitle="Founder, Mudra Yoga"
      />

      <ImageExpand src={img6} alt="Mudra Merchandise" />

      <Context
        subheading="Digital & Physical"
        tittle="A Seamless Experience"
        description="From the studio signage to the digital presence, the brand needed to flow effortlessly. We ensured the color system and typography performed just as well on a mobile screen as they do printed on studio merchandise."
        description2="The resulting identity gives Mudra the flexibility to grow their offerings while maintaining a cohesive, recognizable presence."
      />

      <ImageExpand src={img7} alt="Mudra Digital Presence" />
      <JustHeading
        paddingTop={100}
        tittle={
          ' "Web Anatomy took one of the most complex briefs we could have presented and delivered a platform that our parents, teachers and operations team rely on every single day. The biometric payment system alone transformed how we run the centre." '
        }
        subtitle="Founder, The Pied Piper"
      />
      <BothImages src1={img8} src2={imgLast} />
      <Context
        subheading="The Biometric Payment System"
        tittle="Replacing Cash With a UV Eye Scan Wallet System"
        description="The cafeteria payment system was among the most technically distinctive elements of the entire build, and one of the most considered in terms of user experience. Rather than children handling cash at the point of purchase, each student is identified through a UV eye scan, and the payment is deducted automatically from a pre-loaded parent wallet, with the transaction logged and visible to parents in real time."
        description2="Integrating biometric hardware into a live web application required precise coordination across identity verification, wallet management, real-time synchronisation and parent notifications, all within a single seamless interaction. The result eliminated cash handling from the centre entirely, gave parents complete visibility and control over their child's spending, and made every cafeteria transaction faster and more reliable than anything a cash-based system could offer."
      />
      <WorkCta
        heading="Ready to Build Something That Sets the Standard?"
        sub="Share your brief with us. Our team will come back with a perspective worth hearing."
        ctaText="Share Your Brief →"
      />
    </div>
  );
}
