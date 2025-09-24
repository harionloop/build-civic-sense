'use client';

import React from 'react';

const Footer = () => (
  <footer className="w-full text-center py-8 glass-card rounded-t-3xl">
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <p className="themed-subtext opacity-60">
          &copy; {new Date().getFullYear()} Hariom Sharma. All Rights Reserved.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-2 md:space-y-0 mb-4 md:mb-0">
        <a
          href="#"
          className="themed-link hover:text-purple-400 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="themed-link hover:text-purple-400 transition-colors duration-300"
        >
          Learn
        </a>
        <a
          href="#"
          className="themed-link hover:text-purple-400 transition-colors duration-300"
        >
          Quiz
        </a>
        <a
          href="#"
          className="themed-link hover:text-purple-400 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="themed-link hover:text-purple-400 transition-colors duration-300"
        >
          Contact
        </a>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/hariomsharma"
          target="_blank"
          rel="noopener noreferrer"
          className="themed-link hover:text-blue-500 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href="https://www.github.com/hariomsharma"
          target="_blank"
          rel="noopener noreferrer"
          className="themed-link hover:text-gray-400 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.873 8.209 11.417.75.139 1.025-.303 1.025-.674 0-.335-.013-1.157-.013-2.288-3.323.724-4.026-1.571-4.026-1.571-.545-1.385-1.328-1.754-1.328-1.754-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.493.996.108-.775.419-1.305.762-1.604-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.468-2.383 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.082 11.082 0 0112 5.82c.983 0 1.96.136 2.9.404 2.29-1.552 3.298-1.23 3.298-1.23.652 1.652.241 2.873.118 3.176.77.838 1.233 1.911 1.233 3.221 0 4.609-2.805 5.624-5.474 5.922.43.37.823 1.102.823 2.222 0 1.607-.015 2.897-.015 3.284 0 .373.272.824 1.03.673C20.56 21.87 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://www.twitter.com/hariomsharma"
          target="_blank"
          rel="noopener noreferrer"
          className="themed-link hover:text-blue-400 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.799-1.574 2.164-2.72-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.495 2.529-5.495 5.495 0 .428.05.845.15.24c-4.593-.231-8.625-2.434-11.339-5.748-.475.817-.749 1.761-.749 2.766 0 1.912.973 3.595 2.458 4.587-1.073-.035-2.08-.348-2.964-.818v.069c0 2.748 1.983 5.043 4.606 5.567-.481.131-.989.193-1.51.193-.377 0-.745-.035-1.103-.105.732 2.274 2.859 3.921 5.393 3.967-1.979 1.553-4.47 2.477-7.18 2.477-.468 0-.932-.027-1.38-.08 2.551 1.641 5.577 2.607 8.877 2.607 10.648 0 16.467-8.796 16.467-16.467 0-.251-.006-.504-.015-.758.948-.685 1.777-1.54 2.433-2.52z" />
          </svg>
        </a>
      </div>
      <p className="themed-subtext opacity-60 mt-4">
        &copy; {new Date().getFullYear()} Hariom Sharma. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
