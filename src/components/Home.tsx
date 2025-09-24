'use client';

import React from 'react';

const Home = ({ onNavigate }) => (
  <div className="flex flex-col items-center justify-center p-8 text-center min-h-[calc(100vh-6rem)]">
    <h1 className="text-5xl md:text-6xl font-extrabold themed-text mb-4 leading-tight">
      Master Your <br /> Civic Sense
    </h1>
    <p className="text-xl md:text-2xl themed-subtext max-w-2xl mb-12 opacity-80">
      Welcome! Embark on a journey to learn about civic duties, test your
      knowledge, and track your progress.
    </p>
    <button
      onClick={() => onNavigate("learn")}
      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
    >
      Start Learning
    </button>
  </div>
);

export default Home;

