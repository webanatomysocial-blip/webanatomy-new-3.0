"use client";

import { useEffect } from "react";
import Image from "next/image";
import WhiteButton from "@/components/WhiteButton";
import img from "../assets/images/404.png";
import "@/css/not-found.css";

export default function NotFound() {
  useEffect(() => {
    document.body.classList.add("is-404");
    return () => document.body.classList.remove("is-404");
  }, []);

  return (
    <main className="notFound">
      <div className="notFound__row">
        <span className="notFound__digit">4</span>

        <span className="notFound__image-wrap">
          <Image
            src={img}
            alt="404"
            width={500}
            height={500}
            className="notFound__image"
          />
        </span>

        <span className="notFound__digit">4</span>
      </div>

      <h2 className="notFound__heading">Oops! Page Not Found</h2>

      <WhiteButton text="Take Me Home" href="/" style={{ textDecoration: "none" }} />
    </main>
  );
}
