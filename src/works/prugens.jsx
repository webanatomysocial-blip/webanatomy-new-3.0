"use client";
import React from "react";
import ServicesSecondSec from "../workComponents/ServicesSecondSec";
import WorkBanner from "../workComponents/WorkBanner";
import Context from "../workComponents/Context";
import ImageExpand from "../workComponents/imageExpand";
import BothImages from "../workComponents/threatsenseaicomponents/BothImages";
import WorkCta from "../workComponents/WorkCta";
import JustHeading from "../workComponents/JustHeading";

import img1 from "../WorkImages/prugens/1.webp";
import img2 from "../WorkImages/prugens/2.webp";
import img3 from "../WorkImages/prugens/3.webp";
import img31 from "../WorkImages/prugens/3.1.webp";
import img4 from "../WorkImages/prugens/4.webp";
import img5 from "../WorkImages/prugens/5.webp";
import img51 from "../WorkImages/prugens/5.1.webp";
import img6 from "../WorkImages/prugens/6.webp";
import imgMid from "../WorkImages/prugens/mid.png";
import imgSec from "../WorkImages/prugens/sec.gif";

export default function Prugens() {
  const services = [
    "Branding",
    "Visual Identity",
    "Strategy",
    "Digital Design",
  ];

  const stats = [
    { label: "Role", value: "Brand Strategy & Visual Design" },
    { label: "Timeline", value: "7 Weeks" },
    { label: "Focus", value: "Distinctive Corporate Identity" },
  ];

  return (
    <div>
      <WorkBanner
        title="Prugens"
        src={img1}
        title2="Prugens"
        category2="Crafting Distinctive Brand Stories"
      />
      <ServicesSecondSec
        services={services}
        title="A Bold New Voice in Consulting"
        description="Prugens approached us to rethink their brand from the ground up. They needed an identity that broke away from traditional consulting tropes while maintaining an air of absolute professionalism and trust."
        stats={stats}
        liveLink="#"
      />

      <ImageExpand src={img2} alt="Prugens Brand Identity" />

      <Context
        subheading="The Challenge"
        tittle="Differentiating in a Sea of Sameness"
        description="The consulting sector is visually dominated by safe, uninspired corporate blues and generic typography. Prugens wanted to stand out without shouting. The challenge was crafting a visual language that felt intelligent, modern, and distinctively theirs."
        description2="We developed a brand foundation built on striking typography, a refined color palette, and a focus on clarity over complexity."
      />

      <BothImages src1={img3} src2={img31} />
      <JustHeading
        paddingTop={100}
        tittle={
          " “We approached Web Anatomy with a challenge that felt almost impossible: evolve a legacy brand into a modern, digital-first identity without losing the trust it took decades to build. They didn’t just understand the assignment—they transformed our entire brand.” "
        }
        subtitle="Founder, Prugens"
      />
      <ImageExpand src={imgSec} alt="Prugens Dynamic Logo" />

      <Context
        subheading="Visual System"
        tittle="Intelligent Design"
        description="Every element of the Prugens visual system was designed to convey precision. The core logo mark is subtle yet instantly recognizable, scaling effortlessly across all digital and physical touchpoints."
        description2="By establishing strict typographic rules and a cohesive layout structure, we ensured that every piece of communication feels considered and impactful."
      />

      <BothImages src1={img5} src2={img51} />

      <JustHeading
        paddingTop={100}
        tittle={
          ' "Web Anatomy did not just give us a logo; they gave us a complete visual language that finally matches the ambition and caliber of our consulting work." '
        }
        subtitle="Founder, Prugens Consulting"
      />

      <ImageExpand src={imgMid} alt="Prugens Visual Concept" />

      <Context
        subheading="Application"
        tittle="A Seamless Rollout"
        description="From presentation decks and business cards to the core digital platform, the new identity ensures Prugens presents a unified, powerful front to every prospective client."
        description2="The resulting brand is not just a cosmetic upgrade—it's a strategic asset that supports their growth and market positioning."
      />

      <ImageExpand src={img4} alt="Prugens Stationery and Print" />
      <JustHeading
        paddingTop={100}
        tittle={
          ' “From the initial strategy sessions to the final pixel-perfect execution, Web Anatomy was a true partner. They didn’t just deliver a new look—they elevated our entire brand narrative." '
        }
        subtitle="Founder, Prugens Consulting"
      />
      <ImageExpand src={img6} alt="Prugens Digital Assets" />

      <Context
        subheading="Outcome"
        tittle="A Confident Future"
        description="The success of the rebrand was measured in how quickly the new identity was embraced both internally and externally. The Prugens team now moves with the confidence that their brand visually represents the caliber of their work."
        description2="We continue to support Prugens with their evolving digital needs, ensuring their brand remains sharp, relevant, and ahead of the curve in the competitive consulting landscape."
      />
      <WorkCta
        heading="Ready to Build Something That Sets the Standard?"
        sub="Share your brief with us. Our team will come back with a perspective worth hearing."
        ctaText="Share Your Brief →"
      />
    </div>
  );
}
