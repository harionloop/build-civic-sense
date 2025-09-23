'use client';

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

// Define the content for all 10 learning chapters with headings and subheadings.
const chapters = [
  {
    title: "Chapter 1: The Foundation of Civic Sense",
    sections: [
      {
        heading: "What is Civic Sense?",
        content: [
          "Civic sense is an unwritten code of conduct that people in a society are expected to follow. It's about respecting public spaces, being courteous to others, and contributing to a harmonious community. It's not about big, grand gestures, but the small, consistent actions that collectively make a big impact.",
          "Think of it as the social glue that holds a community together. It's the silent agreement to be a responsible, respectful, and considerate neighbor to everyone, whether you know them or not. From keeping public areas clean to being mindful of your words, civic sense is a reflection of your character and your commitment to a better society."
        ],
        lottie: {
          "v": "5.7.4", "fr": 30, "ip": 0, "op": 60, "w": 100, "h": 100, "nm": "Civic Sense Start", "ddd": 0,
          "assets": [],
          "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "Circle", "sr": 1, "ks": { "o": { "a": 0, "k": 100 }, "r": { "a": 1, "k": [{ "i": { "x": 0.67, "y": 0 }, "o": { "x": 0.33, "y": 1 }, "t": 0, "v": 0 }, { "t": 60, "v": 360 }] }, "p": { "a": 0, "k": [50, 50, 0] }, "s": { "a": 0, "k": [100, 100, 100] } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "el", "d": 1, "s": { "a": 0, "k": [60, 60] }, "p": { "a": 0, "k": [0, 0] } }, { "ty": "st", "c": { "a": 0, "k": [0.6, 0.4, 0.9, 1] }, "o": { "a": 0, "k": 100 }, "w": { "a": 0, "k": 5 } }, { "ty": "tr", "p": { "a": 0, "k": [0, 0] }, "a": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [100, 100] } }], "nm": "Ellipse Group" }], "ip": 0, "op": 60 }]
        }
      },
      {
        heading: "Why It Matters",
        content: [
          "A strong civic sense is the bedrock of a well-functioning society. It reduces conflict, promotes public safety, and fosters a sense of collective ownership. When everyone contributes, the community becomes a more pleasant and efficient place to live.",
          "This app is your guide to understanding and practicing these core values, helping you become a more responsible and respected member of your community. It's about moving from an 'I' mentality to a 'we' mentality."
        ],
        tip: "A good way to start practicing civic sense is to simply smile at strangers you pass on the street. It can brighten their day and costs you nothing!"
      },
      {
        heading: "A Quick Check",
        content: [
          "Civic sense is not about large, grand gestures, but is built on small, consistent actions."
        ]
      }
    ],
  },
  {
    title: "Chapter 2: Responsibility to Public Spaces",
    sections: [
      {
        heading: "Keep it Clean",
        content: [
          "Public spaces like parks, streets, and public transport are shared resources. It is everyone's responsibility to keep them clean and well-maintained. Littering is a major issue that detracts from the beauty and cleanliness of our surroundings. It shows a lack of respect for the environment and for the people who share these spaces with you.",
          "Properly disposing of your trash, even if it means carrying it with you until you find a bin, is a simple yet powerful act of civic sense. It's a clear signal that you value your community."
        ],
        svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>`
      },
      {
        heading: "Vandalism and Damage",
        content: [
          "Defacing public property, whether through graffiti or physical damage, is not just a crime; it's a direct attack on the community's resources. Such acts cost taxpayers money and make the environment less inviting for everyone. Report damages instead of ignoring them.",
          "Instead of a destructive mindset, cultivate a protective one. If you see a damaged bench or a broken street light, take the initiative to report it to the proper authorities. You are a guardian of your community's assets."
        ],
        tip: "Next time you're in a public space, try to find the nearest dustbin or recycling container. Being aware of these resources is the first step to using them!"
      },
      {
        heading: "Small Acts, Big Impact",
        content: [
          "Simple acts like using a dustbin, not littering, and reporting damages can make a huge difference in creating a more pleasant environment for all. It's about treating these spaces as if they were your own home and encouraging others to do the same through your actions."
        ]
      }
    ]
  },
  {
    title: "Chapter 3: Respecting Public Property",
    sections: [
      {
        heading: "Shared Ownership",
        content: [
          "Public property, from benches and buses to monuments and libraries, belongs to the community. Vandalism, graffiti, and misuse not only cost taxpayers but also degrade our shared heritage.",
          "These shared assets are a testament to our collective investment. When you respect public property, you are respecting every single person who has contributed to and relies on it. Your actions show that you understand and value this shared trust."
        ],
        svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-blue-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.468 9.563 5 8 5a4 4 0 000 8h2m0-8h2m-2 8a4 4 0 01-8 0H3c.801-4.04 4.145-6.6 8.5-6.6a9.492 9.492 0 014.288.948" />
          </svg>`
      },
      {
        heading: "A Personal Responsibility",
        content: [
          "A key part of civic sense is treating public property with the same care and respect you would treat your own. Be a guardian of your community's assets and encourage others to do the same. This personal responsibility is a sign of maturity and social awareness."
        ]
      }
    ]
  },
  {
    title: "Chapter 4: Noise Pollution & Etiquette",
    sections: [
      {
        heading: "The Problem of Noise",
        content: [
          "Noise pollution can be a major source of frustration in shared living spaces. Loud conversations on phones, blaring music, and excessive honking all contribute to a less peaceful environment. This can be especially disruptive in residential areas and public transport.",
          "Unnecessary noise disrupts the peace and tranquility of others. It can affect their concentration, sleep, and overall well-being. A silent environment is a gift you give to your community."
        ],
        svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.899a9 9 0 010 12.728M8.464 8.464l7.072 7.072m-.707 3.536a5 5 0 01-7.072 0m-2.828 9.899a9 9 0 01-12.728 0m.707-.707l-7.072-7.072" />
          </svg>`
      },
      {
        heading: "Practice Quiet Etiquette",
        content: [
          "Practice quiet etiquette in public places like hospitals, libraries, and movie theaters. This shows respect for others who need a peaceful environment. A little thoughtfulness goes a long way in ensuring a calm and respectful atmosphere for everyone. It's about being aware of your surroundings and the people in them."
        ],
        tip: "Consider wearing headphones in public even if you're not listening to anything. This is a subtle way to show others that you're being mindful of noise levels."
      }
    ]
  },
  {
    title: "Chapter 5: Road Safety & Traffic Rules",
    sections: [
      {
        heading: "It's a Shared Responsibility",
        content: [
          "Following traffic rules is not just a legal obligation; it's a fundamental aspect of civic sense that ensures the safety of all road users. This includes pedestrians, cyclists, and drivers. Ignoring rules puts everyone at risk.",
          "When you are on the road, you are part of a complex system. Your adherence to rules, such as using indicators and staying within speed limits, contributes to the smooth and safe flow of traffic for everyone. It's a collective effort to prevent accidents and save lives."
        ],
        svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-yellow-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v14m-9 0v-5m-6 5V9m9 0h6m-3-6h.01M9 19v-5" />
          </svg>`
      },
      {
        heading: "Simple Rules to Live By",
        content: [
          "Always use crosswalks, respect traffic signals, and give way to emergency vehicles. These simple actions prevent accidents and contribute to a smoother flow of traffic. Be a patient and predictable presence on the road. Remember, your actions on the road have consequences for everyone around you."
        ]
      }
    ]
  },
  {
    title: "Chapter 6: Environment & Waste Management",
    sections: [
      {
        heading: "Proper Waste Disposal",
        content: [
          "Proper waste disposal is crucial for a clean environment. Segregating waste into recyclables and non-recyclables is a simple yet impactful habit. Remember that a clean neighborhood reflects a conscientious community. When you dispose of waste correctly, you are actively participating in protecting your local ecosystem.",
          "By choosing to recycle, you're helping to reduce the amount of waste sent to landfills and conserving natural resources. It’s a small step that makes a big difference over time."
        ],
        svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-teal-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>`
      },
      {
        heading: "Reduce, Reuse, Recycle",
        content: [
          "Avoid single-use plastics and choose sustainable alternatives whenever possible. Every small effort helps in the collective fight against environmental degradation. Your choices as a consumer have a direct impact on the world around you. By reducing your consumption and reusing items, you minimize your environmental footprint."
        ],
        tip: "Keep a reusable bag with you at all times. This small change eliminates the need for plastic bags, a major source of pollution."
      }
    ]
  },
  {
    title: "Chapter 7: Respect for Others",
    sections: [
      {
        heading: "Beyond Physical Spaces",
        content: [
          "Civic sense goes beyond physical spaces; it extends to our interactions with people. Politeness, empathy, and patience are the cornerstones of a respectful society. This is especially true in crowded public areas.",
          "Every interaction you have, no matter how brief, is an opportunity to practice civic sense. A simple 'please' and 'thank you,' or a smile to a stranger, can brighten someone's day and improve the social atmosphere."
        ],
        svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-pink-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>`
      },
      {
        heading: "The Ripple Effect",
        content: [
          "Be considerate of others in queues, hold doors for people, and offer help to those in need. These small gestures create a ripple effect of kindness in the community. They cost nothing but are invaluable to a healthy social fabric. Your kindness can inspire others to pay it forward, creating a more positive and supportive environment."
        ]
      }
    ]
  },
  {
    title: "Chapter 8: Water & Energy Conservation",
    sections: [
      {
        heading: "Conserving Our Resources",
        content: [
          "Our natural resources are finite. Civic sense includes a responsibility to conserve water and energy for future generations. This is a crucial element of being a responsible global citizen. By using resources wisely, you're ensuring that they are available for others and for the future.",
          "Small actions, like turning off lights when you leave a room or taking shorter showers, can add up to a significant impact. Be a steward of the environment in your daily life."
        ],
        svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-indigo-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>`
      },
      {
        heading: "Habits for a Sustainable Future",
        content: [
          "Turn off lights when you leave a room, fix leaky faucets, and be mindful of your water usage. Every drop and watt saved contributes to a more sustainable future. These habits start at home and can be applied everywhere you go. Encourage others to do the same by setting a good example."
        ]
      }
    ]
  },
  {
    title: "Chapter 9: The Role of Community",
    sections: [
      {
        heading: "Building a Collective",
        content: [
          "A community is a collective. Participating in local events, volunteering for neighborhood clean-ups, and helping your neighbors builds a stronger, more connected society. Don't be a passive bystander; be an active participant.",
          "When you get involved, you not only improve your neighborhood but also build social bonds. These connections are vital for community resilience and well-being. Look for opportunities to contribute, no matter how small."
        ],
        svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h-7c-2.761 0-5-2.239-5-5s2.239-5 5-5h7l-3-3m0 6l3 3m-3-3v-6" />
          </svg>`
      },
      {
        heading: "Fostering a Sense of Belonging",
        content: [
          "Being an active and engaged member of your community helps foster a sense of belonging and collective responsibility. When you contribute, you'll feel a greater connection to the people and places around you. This sense of belonging is a powerful motivator for positive change."
        ],
        tip: "Consider joining a local community group or volunteer for a cause you care about. It's a great way to meet like-minded people and contribute to a cause you believe in."
      }
    ]
  },
  {
    title: "Chapter 10: Digital Civic Sense",
    sections: [
      {
        heading: "Civic Sense in the Digital World",
        content: [
          "In the modern age, civic sense extends to the digital world. This includes responsible social media use, avoiding the spread of misinformation, and being respectful in online communities. The same rules of respect and politeness apply online.",
          "Just as in the physical world, your actions online have a direct impact on others. Cyberbullying, trolling, and spreading false information can cause real harm. Be a positive force in your online interactions."
        ],
        svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-purple-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>`
      },
      {
        heading: "Think Before You Post",
        content: [
          "Before sharing something online, consider its accuracy and potential impact. Fact-check information, and remember that there's a real person behind every screen. Your online actions have a real-world impact, both on others and on your own reputation. Be a source of truth and positivity in the digital space."
        ]
      }
    ]
  }
];

const Home = ({ onNavigate }) => (
  <div className="flex flex-col items-center justify-center p-8 text-center min-h-screen">
    <h1 className="text-4xl font-extrabold text-white mb-4">Master Your Civic Sense</h1>
    <p className="text-xl text-gray-300 max-w-2xl mb-8">
      Welcome! Embark on a journey to learn about civic duties, test your knowledge, and track your progress.
    </p>
    <button
      onClick={() => onNavigate('learn')}
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
    >
      Start Learning
    </button>
  </div>
);

const Learning = ({ onNavigate }) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [summaryText, setSummaryText] = useState('');
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const chapterRef = useRef(null);

  const observerRef = useRef(null);

  useEffect(() => {
    if (chapterRef.current && window.gsap) {
      // Create a new IntersectionObserver for fade-in effect on scroll
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              window.gsap.fromTo(
                entry.target,
                { opacity: 0, y: 50, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
              );
              observerRef.current.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      // Observe all sections
      const sections = chapterRef.current.querySelectorAll('.learning-section');
      sections.forEach((section) => observerRef.current.observe(section));
    }

    // Cleanup observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [currentChapterIndex]);

  const handleNextChapter = () => {
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      chapterRef.current.scrollTop = 0; // Scroll to top of new chapter
    } else {
      onNavigate('quiz');
    }
  };

  const handlePreviousChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      chapterRef.current.scrollTop = 0;
    }
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = chapterRef.current;
    if (scrollHeight > clientHeight) {
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    }
  };

  const handleGenerateSummary = async () => {
    setIsSummarizing(true);
    setSummaryText('');
    const currentContent = chapters[currentChapterIndex].sections.map(s => s.content?.join(' ')).filter(Boolean).join(' ');
    const systemPrompt = "Act as a helpful study guide. Provide a concise, single-paragraph summary of the following text.";
    const userQuery = `Summarize the following content in a single paragraph: ${currentContent}`;
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        const generatedText = result?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (generatedText) {
            setSummaryText(generatedText);
        } else {
            setSummaryText('Failed to generate summary. Please try again.');
        }
    } catch (error) {
        console.error("Error generating summary:", error);
        setSummaryText('An error occurred. Please try again.');
    } finally {
        setIsSummarizing(false);
    }
  };

  const currentChapter = chapters[currentChapterIndex];

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-6">Learning Center</h2>
      <div className="bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-4xl text-gray-200">
        <h3 className="text-2xl font-semibold text-purple-400 mb-4 text-center">{currentChapter.title}</h3>

        {/* Overall Chapter Progress Bar */}
        <div className="w-full h-2 mb-4 bg-gray-600 rounded-full">
          <div
            className="h-2 bg-green-500 rounded-full transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        <div
          ref={chapterRef}
          className="relative max-h-[60vh] overflow-y-auto pr-4"
          onScroll={handleScroll}
        >
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-600 rounded-full z-0 transform -translate-x-1/2"></div>

          {currentChapter.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="learning-section relative pl-12 py-8 group">
              {/* Timeline circle */}
              <div className="absolute left-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-purple-300"></div>

              <div className="bg-gray-700 rounded-2xl shadow-inner p-6 transform transition-all duration-300 group-hover:scale-[1.02]">
                <h4 className="text-xl font-bold text-white mb-4">{section.heading}</h4>
                {section.lottie && (
                  <div className="w-64 h-64 mx-auto mb-6 flex items-center justify-center">
                    <lottie-player
                      src={JSON.stringify(section.lottie)}
                      autoplay
                      loop
                      mode="normal"
                      style={{ width: '100%', height: '100%' }}
                    ></lottie-player>
                  </div>
                )}
                {section.svg && (
                  <div className="w-64 h-64 mx-auto mb-6 flex items-center justify-center" dangerouslySetInnerHTML={{ __html: section.svg }}></div>
                )}
                {section.content && section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4 text-lg leading-relaxed">{paragraph}</p>
                ))}
                {section.tip && (
                  <div className="mt-4">
                    <TipCard tip={section.tip} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6 w-full max-w-sm">
          <button
            onClick={handlePreviousChapter}
            disabled={currentChapterIndex === 0}
            className={`bg-gray-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ${currentChapterIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'}`}
          >
            Previous
          </button>
          <button
            onClick={handleNextChapter}
            disabled={scrollProgress < 99}
            className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ${scrollProgress < 99 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
          >
            {currentChapterIndex === chapters.length - 1 ? "Go to Quiz" : "Next Chapter"}
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleGenerateSummary}
            disabled={isSummarizing}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            {isSummarizing ? 'Summarizing...' : '✨ Get Summary'}
          </button>
        </div>
        {summaryText && (
          <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <h4 className="font-semibold mb-2">Summary:</h4>
            <p className="text-sm">{summaryText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const TipCard = ({ tip }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (isRevealed && cardRef.current && window.gsap) {
      window.gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [isRevealed]);

  return (
    <div className="bg-gray-600 rounded-xl p-4 transition-all duration-300">
      <button
        onClick={() => setIsRevealed(!isRevealed)}
        className="flex items-center justify-between w-full text-white font-semibold mb-2 transform transition-transform duration-300 hover:scale-105"
      >
        <span>{isRevealed ? "Hide Tip" : "Read a Tip"}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isRevealed ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isRevealed && (
        <div ref={cardRef}>
          <p className="text-sm italic">{tip}</p>
        </div>
      )}
    </div>
  );
};

const quizQuestions = [
  {
    question: "You see a public park bench that is dirty. What do you do?",
    options: [
      "Find a dust cloth and wipe it clean.",
      "Ignore it and find another bench.",
      "Complain about the local government.",
    ],
    answerIndex: 0,
  },
  {
    question: "Someone is speaking loudly on their phone on a bus. What is the best action?",
    options: [
      "Start a conversation with them.",
      "Politely ask them to lower their voice.",
      "Join in and talk even louder.",
    ],
    answerIndex: 1,
  },
  {
    question: "You finish eating a snack and there is no trash can nearby. What do you do with the wrapper?",
    options: [
      "Leave it on the ground.",
      "Put it in your pocket until you find a trash can.",
      "Throw it into a bush.",
    ],
    answerIndex: 1,
  },
];

const Quiz = ({ onNavigate, onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    if (index === quizQuestions[currentQuestion].answerIndex) {
      setScore(prevScore => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      onQuizComplete(score + (index === quizQuestions[currentQuestion].answerIndex ? 1 : 0));
    }
  };

  const question = quizQuestions[currentQuestion];

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-6">Civic Sense Quiz</h2>
      <div className="bg-gray-800 rounded-xl shadow-2xl p-6 md:p-10 w-full max-w-2xl text-gray-200">
        <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
        <div className="flex flex-col space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="bg-gray-700 hover:bg-purple-600 text-left text-white py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Progress = ({ score, onNavigate }) => {
  const progressPercentage = (score / quizQuestions.length) * 100;
  const [tipText, setTipText] = useState('');
  const [isGeneratingTip, setIsGeneratingTip] = useState(false);

  const handleGenerateTip = async () => {
    setIsGeneratingTip(true);
    setTipText('');
    const systemPrompt = "Act as a motivational civic sense coach. Provide a single, actionable tip based on the user's score to help them improve.";
    const userQuery = `The user scored ${score} out of ${quizQuestions.length} on a quiz about civic sense. Provide a single, concise tip to help them improve. The tip should be encouraging and focus on a specific, easy-to-do action.`;
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        const generatedText = result?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (generatedText) {
            setTipText(generatedText);
        } else {
            setTipText('Failed to generate tip. Please try again.');
        }
    } catch (error) {
        console.error("Error generating tip:", error);
        setTipText('An error occurred. Please try again.');
    } finally {
        setIsGeneratingTip(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-6">Your Progress</h2>
      <div className="bg-gray-800 rounded-xl shadow-2xl p-6 md:p-10 w-full max-w-2xl text-gray-200 text-center">
        <p className="text-xl mb-4">Your current score is: <span className="text-purple-400 font-bold">{score} / {quizQuestions.length}</span></p>
        <div className="w-full bg-gray-600 rounded-full h-4 mb-4 overflow-hidden">
          <div
            className="bg-purple-500 h-4 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-md mb-6">{progressPercentage.toFixed(0)}% Complete</p>
        <button
          onClick={handleGenerateTip}
          disabled={isGeneratingTip}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 mb-4"
        >
          {isGeneratingTip ? 'Generating Tip...' : '✨ Get a Personalized Tip'}
        </button>
        {tipText && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg">
              <h4 className="font-semibold mb-2">Your Tip:</h4>
              <p className="text-sm">{tipText}</p>
            </div>
          )}
        <button
          onClick={() => onNavigate('home')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 mt-6"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

// The main App component
const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [civicScore, setCivicScore] = useState(0);

  const handleQuizComplete = (finalScore) => {
    setCivicScore(finalScore);
    setCurrentView('progress');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={setCurrentView} />;
      case 'learn':
        return <Learning onNavigate={setCurrentView} />;
      case 'quiz':
        return <Quiz onNavigate={setCurrentView} onQuizComplete={handleQuizComplete} />;
      case 'progress':
        return <Progress score={civicScore} onNavigate={setCurrentView} />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <style>{`
        body {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        {/* Navigation bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-lg">
          <div className="flex justify-center space-x-4 md:space-x-8">
            <button
              onClick={() => setCurrentView('home')}
              className="text-gray-300 hover:text-white transition duration-200"
            >
              Home
            </button>
            <button
              onClick={() => setCurrentView('learn')}
              className="text-gray-300 hover:text-white transition duration-200"
            >
              Learn
            </button>
            <button
              onClick={() => setCurrentView('quiz')}
              className="text-gray-300 hover:text-white transition duration-200"
            >
              Quiz
            </button>
            <button
              onClick={() => setCurrentView('progress')}
              className="text-gray-300 hover:text-white transition duration-200"
            >
              Progress
            </button>
          </div>
        </nav>
        <main className="mt-20 w-full max-w-6xl">
          {renderView()}
        </main>
      </div>
    </>
  );
};

export default App;
