"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosFlash } from "react-icons/io";

export default function CursorFollower() {
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // If we're on mobile/tablet (touch devices), don't initialize the follower
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1024px)").matches) {
      return;
    }

    const handleMouseMove = (e) => {
      if (followerRef.current) {
        followerRef.current.style.left = `${e.clientX}px`;
        followerRef.current.style.top = `${e.clientY}px`;
      }

      // Check if mouse is hovering over target buttons
      const target = e.target.closest(".white-button, .black-button, .blue-button");
      setIsHovering(!!target);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 999999,
        transform: `translate(-4px, -4px) scale(${isHovering ? 1 : 0})`,
        transformOrigin: "4px 4px",
        transition: "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)",
        width: "32px",
        height: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: "-100px",
        top: "-100px",
      }}
    >
      <IoIosFlash 
        size={32} 
        color="#ffdd00" 
        style={{ 
          filter: "drop-shadow(1px 1px 1px #000)"
        }} 
      />
    </div>
  );
}
