"use client";
import React from 'react';
import '../../css/HomeComponentsCss/WhatWeDo.css';
import Image from 'next/image';

import image1 from "../../assets/images/home/whatwedo/1.png";
import image2 from "../../assets/images/home/whatwedo/2.png";
import image3 from "../../assets/images/home/whatwedo/3.png";
import image4 from "../../assets/images/home/whatwedo/4.png";
import image5 from "../../assets/images/home/whatwedo/5.png";
import image6 from "../../assets/images/home/whatwedo/6.png";

const cardsData = [
  {
    id: 1,
    title: "24/7 Priority Care",
    desc: "Every client has a dedicated team that is reachable when it matters. Urgent timelines, critical updates and important decisions never wait until Monday morning.",
    img: image1,
    layout: "image-top"
  },
  {
    id: 2,
    title: "Built on Strategy",
    desc: "Every product we build starts with a strategic foundation because the best engineering in the world means nothing if it is solving the wrong problem.",
    img: image2,
    layout: "text-top"
  },
  {
    id: 3,
    title: "Brand at Your Fingertips",
    desc: "We build brand systems that travel consistently across every platform, every campaign and every customer touchpoint your business will ever need.",
    img: image3,
    layout: "image-top"
  },
  {
    id: 4,
    title: "Engineering That Scales",
    desc: "From the first line of code to the final deployment, we build with the architecture that grows alongside your business without needing to be rebuilt from scratch.",
    img: image4,
    layout: "text-top"
  },
  {
    id: 5,
    title: "Design That Converts",
    desc: "Every screen, every interaction and every user journey is designed with one goal, turning visitors into customers and customers into advocates.",
    img: image5,
    layout: "image-top"
  },
  {
    id: 6,
    title: "Marketing That Performs",
    desc: "Data-driven campaigns across every major platform, built to find the right audience, earn their attention and convert it into measurable business growth.",
    img: image6,
    layout: "text-top"
  }
];

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section">
      <div className="what-we-do-container">
        
        {/* Header */}
        <div className="what-we-do-header">
          <h2 className="head-text what-we-do-title">What We Do</h2>
          <div className="what-we-do-pill">
            <span>✦</span> Key milestones
          </div>
        </div>

        {/* Cards Grid */}
        <div className="what-we-do-grid">
          {cardsData.map((card) => {
            const isImageTop = card.layout === "image-top";
            
            return (
              <div key={card.id} className={`what-we-do-card card-style-${card.id}`}>
                {isImageTop ? (
                  <>
                    <div className="card-image-container">
                      <Image src={card.img} alt={card.title} className="card-logo-image" style={{ width: '100%', height: 'auto', maxHeight: '180px', objectFit: 'contain' }} />
                    </div>
                    <div className="card-text-box">
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="card-text-box">
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                    <div className="card-image-container">
                      <Image src={card.img} alt={card.title} className="card-logo-image" style={{ width: '100%', height: 'auto', maxHeight: '180px', objectFit: 'contain' }} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
