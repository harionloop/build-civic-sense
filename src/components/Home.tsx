'use client';

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Home = ({ onNavigate }) => {
  const tips = [
    "Always dispose of waste properly to keep our communities clean.",
    "Be mindful of noise in public places like parks and libraries.",
    "Follow traffic rules, even when no one is watching.",
    "Be kind and respectful in your online interactions. Your words have an impact.",
    "Offer your seat to the elderly or those in need on public transport.",
    "Conserve water and electricity at home to help the environment.",
    "Respect public property; it belongs to everyone.",
    "Volunteer for local community clean-ups.",
    "Learn about local customs and traditions when you travel.",
    "A civil conversation can lead to a productive outcome."
  ];
  const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#10b981", "#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7"];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const tipRef = useRef(null);

  useEffect(() => {
    // Automatically cycle through tips every 5 seconds
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [tips.length]);

  useEffect(() => {
    const gsap = window.gsap;
    if (tipRef.current && gsap) {
      // Animate the current card out to the left
      gsap.to(tipRef.current, {
        opacity: 0,
        x: '-100%', // Animate to the left
        scale: 0.8,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
          // Animate the new card in from the right
          gsap.fromTo(tipRef.current,
            { opacity: 0, x: '100%', scale: 0.8 },
            { opacity: 1, x: '0%', scale: 1, duration: 0.8, ease: "power3.out" }
          );
        }
      });
    }
  }, [currentTipIndex]);

  const handleMouseEnter = () => {
    const gsap = window.gsap;
    if(tipRef.current && gsap) {
        // Hover animation for the card
        gsap.to(tipRef.current, { scale: 1.05, duration: 0.3, ease: "power2.inOut" });
    }
  };

  const handleMouseLeave = () => {
    const gsap = window.gsap;
    if(tipRef.current && gsap) {
        // Reverse the hover animation
        gsap.to(tipRef.current, { scale: 1, duration: 0.3, ease: "power2.inOut" });
    }
  };

  const currentColor = colors[currentTipIndex % colors.length];

  return (
    <div className="flex flex-col items-center p-8 text-center min-h-[calc(100vh-6rem)]">
      <h1 className="text-5xl md:text-6xl font-extrabold themed-text mb-4 leading-tight">
        Master Your <br /> Civic Sense
      </h1>
      <p className="text-xl md:text-2xl themed-subtext max-w-2xl mb-12 opacity-80">
        Welcome! Embark on a journey to learn about civic duties, test your
        knowledge, and track your progress.
      </p>
      <div
        ref={tipRef}
        key={currentTipIndex} // Add key to force re-render and animation
        className="glass-card p-6 md:p-8 rounded-3xl w-full max-w-xl mb-12 cursor-pointer"
        style={{
          borderColor: currentColor,
          boxShadow: `0 0 30px ${currentColor}33`,
          transition: 'border-color 0.5s ease, box-shadow 0.5s ease',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="text-xl themed-card-text font-bold leading-relaxed">{tips[currentTipIndex]}</p>
      </div>
      <button
        onClick={() => onNavigate("learn")}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
      >
        Start Learning
      </button>
    </div>
  );
};

export default Home;
