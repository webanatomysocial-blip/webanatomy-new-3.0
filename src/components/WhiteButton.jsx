"use client";

import React from 'react';
import '../css/WhiteButton.css';
import Link from 'next/link';

export default function WhiteButton({ text, onClick, href, target, ...props }) {
  if (href) {
    return (
      <Link href={href} target={target} className="white-button" onClick={onClick} {...props}>
        <span className="white-button-text-wrapper">
          <span className="white-button-text-primary">{text}</span>
          <span className="white-button-text-secondary">{text}</span>
        </span>
      </Link>
    );
  }

  return (
    <button className="white-button" onClick={onClick} {...props}>
      <span className="white-button-text-wrapper">
        <span className="white-button-text-primary">{text}</span>
        <span className="white-button-text-secondary">{text}</span>
      </span>
    </button>
  );
}
