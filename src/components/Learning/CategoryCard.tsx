"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CategoryCard = ({ category, onClick }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    if (gsap) {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  const handleMouseEnter = () => {
    const gsap = window.gsap;
    if(gsap) {
        gsap.to(cardRef.current, { scale: 1.05, duration: 0.3 });
    }
  };

  const handleMouseLeave = () => {
    const gsap = window.gsap;
    if(gsap) {
        gsap.to(cardRef.current, { scale: 1, duration: 0.3 });
    }
  };

  return (
    <div
      ref={cardRef}
      className={`glass-card rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-300 hover:shadow-purple-500/30`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={category.imageUrl} alt={category.title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h4 className="text-xl font-bold themed-card-text mb-2">{category.title}</h4>
        <p className="text-sm themed-card-subtext opacity-80">{category.description}</p>
      </div>
    </div>
  );
};



export default CategoryCard;
