"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Banner from "../Banner";
import bannerImg from "@/assets/images/knxrt-CZynSbrMmrk-unsplash.jpg.jpeg";

export default function ServiceBanner() {
  const router = useRouter();

  return (
    <Banner
      title={
        <>
          The Expertise to Build It.
          <br className="only-windows" />
          The Experience to Build It Right.
        </>
      }
      desc="At Web Anatomy, we have spent years building products, designing experiences and growing businesses for clients who expect the best, and we have never once lowered that standard."
      image={bannerImg}
      buttons={[
        { text: "Explore Our Work →", onClick: () => router.push("/works") },
        { text: "Book a Call", onClick: () => router.push("/contact") }
      ]}
    />
  );
}
