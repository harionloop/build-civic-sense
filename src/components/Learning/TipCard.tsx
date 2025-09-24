'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TipCard = ({ tip }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const cardRef = useRef(null);
  const gsap = window.gsap;

  useEffect(() => {
    if (isRevealed && cardRef.current && gsap) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isRevealed]);

  return (
    <div className="glass-card rounded-xl p-4 transition-all duration-300 dark:bg-opacity-10 dark:hover:bg-opacity-20 light:bg-gray-200 light:text-gray-800 light:hover:bg-gray-300">
      <button
        onClick={() => setIsRevealed(!isRevealed)}
        className="flex items-center justify-between w-full themed-card-text font-semibold transform transition-transform duration-300 hover:scale-[1.02]"
      >
        <span>{isRevealed ? "Hide Tip" : "Read a Tip"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform duration-300 ${
            isRevealed ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isRevealed && (
        <div ref={cardRef}>
          <p className="text-sm italic mt-2 themed-card-subtext">{tip}</p>
        </div>
      )}
    </div>
  );
};

export default TipCard;
