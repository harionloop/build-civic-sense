'use client';

import React from 'react';

const Nav = ({ onNavigate, isDarkMode, setIsDarkMode, currentView, selectedCategory, handleNavigateToCategories }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 p-4 glass-card backdrop-blur-sm shadow-lg rounded-b-3xl">
    <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
      <div className="flex items-center">
        {(currentView === 'learn' && selectedCategory) && (
          <button
            onClick={handleNavigateToCategories}
            className="mr-4 transition duration-200 nav-icon p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        )}
      </div>
      <div className="flex space-x-2 md:space-x-4">
        <button
          onClick={() => onNavigate('home')}
          className="nav-link font-medium px-3 py-2 md:px-4 md:py-2 rounded-full"
        >
          Home
        </button>
        <button
          onClick={() => onNavigate('learn')}
          className="nav-link font-medium px-3 py-2 md:px-4 md:py-2 rounded-full"
        >
          Learn
        </button>
        <button
          onClick={() => onNavigate('quiz')}
          className="nav-link font-medium px-3 py-2 md:px-4 md:py-2 rounded-full"
        >
          Quiz
        </button>
        <button
          onClick={() => onNavigate('progress')}
          className="nav-link font-medium px-3 py-2 md:px-4 md:py-2 rounded-full"
        >
          Progress
        </button>
        <button
          onClick={() => onNavigate('about')}
          className="nav-link font-medium px-3 py-2 md:px-4 md:py-2 rounded-full"
        >
          About
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className="nav-link font-medium px-3 py-2 md:px-4 md:py-2 rounded-full"
        >
          Contact
        </button>
      </div>
      <div className="flex items-center">
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="nav-icon transition duration-200 p-2 rounded-full">
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.847 1.57a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM12 18a.75.75 0 01.75-.75v2.25a.75.75 0 01-1.5 0V18a.75.75 0 01.75-.75zM17.653 1.57a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM12 1.5a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25A.75.75 0 0112 1.5zM3.52 4.12a.75.75 0 011.06-1.06l1.59 1.59a.75.75 0 11-1.06 1.06L3.52 4.12zM12 18.75a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M9.544 1.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM6.53 4.672a.75.75 0 011.06-1.06l1.59 1.59a.75.75 0 11-1.06 1.06l-1.59-1.59zM2.25 9.75a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM4.12 17.653a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06zM9.75 22.25a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM17.653 19.88a.75.75 0 01-1.06 1.06l-1.59-1.59a.75.75 0 111.06-1.06l1.59 1.59zM21.75 9.75a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM19.88 4.672a.75.75 0 01-1.06 0l-1.59-1.59a.75.75 0 111.06-1.06l1.59 1.59a.75.75 0 010 1.06z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </div>
  </nav>
);

export default Nav;
