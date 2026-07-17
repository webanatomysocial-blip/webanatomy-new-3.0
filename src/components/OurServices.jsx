"use client";
import React, { useRef } from 'react';
import '../css/OurServices.css';
import { PiSparkleFill, PiStarFourFill, PiSquaresFourFill, PiSunFill, PiAsteriskFill } from 'react-icons/pi';

import s1 from '@/assets/images/Services/service-1.webp';
import s2 from '@/assets/images/Services/service-2.webp';
import s3 from '@/assets/images/Services/service-3.webp';
import s4 from '@/assets/images/Services/service-4.webp';

const services = [
  {
    id: 1,
    title: "Brand & Identity",
    description: "Build recognition, consistency and credibility across every touchpoint.",
    tags: "Brand Strategy • Identity • Messaging • Guidelines • Visual Systems • Content",
    img: s1,
    Icon: PiStarFourFill,
    number: "Brand"
  },
  {
    id: 2,
    title: "Experience Design",
    description: "Experiences that make people trust your business before they speak to you.",
    tags: "UI/UX • Research • Branding • Design Systems • Prototyping",
    img: s3,
    Icon: PiSunFill,
    number: "Design"
  },
  {
    id: 3,
    title: "Product Engineering",
    description: "Digital products engineered for businesses that are ready to scale.",
    tags: "Websites • Web Apps • Mobile Apps • Customer Platforms • Digital Products • Automation • CRM • ERP • SaaS • AI Solutions",
    img: s2,
    Icon: PiSquaresFourFill,
    number: "Build"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Turn digital experiences into measurable business growth.",
    tags: "SEO • Performance Marketing • Social • Content • Automation • Analytics",
    img: s4,
    Icon: PiAsteriskFill,
    number: "Scale"
  }
];

export default function OurServices() {
  const tagRefs = useRef({});
  const scrollTimers = useRef({});

  const startTagScroll = (id) => {
    const el = tagRefs.current[id];
    if (!el) return;
    clearInterval(scrollTimers.current[id]);
    scrollTimers.current[id] = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      if (el.scrollLeft >= maxScroll) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 1;
      }
    }, 25);
  };

  const stopTagScroll = (id) => {
    clearInterval(scrollTimers.current[id]);
  };

  return (
    <section className="os-section">
      <div className="os-header">
        <h2 className="head-text-white">Our Services</h2>
       
      </div>

      <div className="os-grid">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="os-card"
            onMouseEnter={() => startTagScroll(svc.id)}
            onMouseLeave={() => stopTagScroll(svc.id)}
          >
            {/* Background Image */}
            <img src={svc.img.src} alt={svc.title} className="os-card-bg" loading="lazy" />

            {/* Gradient Overlay to ensure text readability */}
            <div className="os-card-overlay"></div>

            <div className="os-card-top">
              <svc.Icon className="os-card-icon" size={24} />
              <span className="os-card-number">{svc.number}</span>
            </div>

            <div className="os-card-bottom">
              <div>
                <h3 className="os-card-title">{svc.title}</h3>
                <p className="os-card-desc">{svc.description}</p>
              </div>
              <div
                className="os-card-tags"
                ref={(el) => (tagRefs.current[svc.id] = el)}
              >
                {svc.tags.split('•').map((tag, i) => (
                  <span key={i} className="os-card-tag">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
