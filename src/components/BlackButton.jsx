"use client";

import React from 'react';
import '../css/BlackButton.css';
import Link from 'next/link';

export default function BlackButton({ text, onClick, href, target, ...props }) {
  if (href) {
    return (
      <Link href={href} target={target} className="black-button" onClick={onClick} {...props}>
        <span className="black-button-text-wrapper">
          <span className="black-button-text-primary">{text}</span>
          <span className="black-button-text-secondary">{text}</span>
        </span>
      </Link>
    );
  }

  return (
    <button className="black-button" onClick={onClick} {...props}>
      <span className="black-button-text-wrapper">
        <span className="black-button-text-primary">{text}</span>
        <span className="black-button-text-secondary">{text}</span>
      </span>
    </button>
  );
}
