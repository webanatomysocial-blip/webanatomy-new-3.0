import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/pipeCss/UpDownImages.css";
import img1 from "../../WorkImages/piedpipper/last.jpg";
// import img2 from "../../WorkImages/pipe/2.png";
gsap.registerPlugin(ScrollTrigger);

const UpDownImages = () => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      let mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        gsap.to(".UpDownImages-stick-img", {
          width: "100%",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "center center",
            scrub: 0.2,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      className="UpDownImages-whole-container up-down-200vh"
      ref={containerRef}
    >
      <div className="UpDownImages-stick-img">
        <img src={img1.src} alt="" />
      </div>
    </section>
  );
};

export default UpDownImages;
