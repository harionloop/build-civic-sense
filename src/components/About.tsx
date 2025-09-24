'use client';

import React from 'react';

const About = () => (
  <div className="flex flex-col items-center p-8 min-h-[calc(100vh-6rem)]">
    <h2 className="text-3xl font-bold themed-text mb-6">About the Developer</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
      {/* Left Card: Profile & Image */}
      <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center">
        <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-purple-400">
          <img
            src="https://placehold.co/200x200/94a3b8/e2e8f0?text=HS"
            alt="Hariom Sharma"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold themed-text mb-1">Hariom Sharma</h3>
        <p className="text-lg themed-subtext mb-6">Software Developer</p>
        <button className="mt-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
          Download CV
        </button>
      </div>

      {/* Right Column: Details & Socials */}
      <div className="flex flex-col space-y-8">
        {/* About Me Card */}
        <div className="glass-card rounded-3xl p-8">
          <h4 className="text-xl font-bold themed-text mb-4 flex items-center">
            About Me
          </h4>
          <p className="text-md leading-relaxed themed-subtext mb-4">
            I am a passionate software developer with 5+ years of experience in
            creating intuitive and robust web applications. I specialize in
            front-end development, focusing on building delightful user
            interfaces that are both powerful and delightful to use. I'm a quick
            learner and enjoy tackling complex challenges to deliver
            high-quality solutions.
          </p>
          <p className="text-md leading-relaxed themed-subtext">
            This application, **Civic Sense**, is a passion project of mine. My
            goal is to leverage technology to promote social awareness and
            responsible behavior, making learning about civic duties an engaging
            and rewarding experience.
          </p>
        </div>

        {/* Social Presence Card */}
        <div className="glass-card rounded-3xl p-8">
          <h4 className="text-xl font-bold themed-text mb-4">
            Social Presence
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://www.linkedin.com/in/hariomsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl flex items-center transition-all duration-300 hover:scale-105 dark:bg-opacity-10 light:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-blue-500 mr-3"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <div>
                <p className="font-semibold themed-card-text">LinkedIn</p>
                <p className="text-sm themed-card-subtext opacity-80">
                  /in/hariomsharma
                </p>
              </div>
            </a>
            <a
              href="https://www.github.com/hariomsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl flex items-center transition-all duration-300 hover:scale-105 dark:bg-opacity-10 light:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gray-400 mr-3"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.873 8.209 11.417.75.139 1.025-.303 1.025-.674 0-.335-.013-1.157-.013-2.288-3.323.724-4.026-1.571-4.026-1.571-.545-1.385-1.328-1.754-1.328-1.754-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.493.996.108-.775.419-1.305.762-1.604-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.468-2.383 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.082 11.082 0 0112 5.82c.983 0 1.96.136 2.9.404 2.29-1.552 3.298-1.23 3.298-1.23.652 1.652.241 2.873.118 3.176.77.838 1.233 1.911 1.233 3.221 0 4.609-2.805 5.624-5.474 5.922.43.37.823 1.102.823 2.222 0 1.607-.015 2.897-.015 3.284 0 .373.272.824 1.03.673C20.56 21.87 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <div>
                <p className="font-semibold themed-card-text">GitHub</p>
                <p className="text-sm themed-card-subtext opacity-80">
                  /hariomsharma
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
