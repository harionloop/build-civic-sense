'use client';

import categories from '@/data/Category';
import quizQuestions from '@/data/Quiz';
import React, { useState, useEffect, useRef } from 'react';

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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [summaryText, setSummaryText] = useState('');
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const chapterRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Check if gsap and ScrollTrigger are available before using them
    if (chapterRef.current && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
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
  }, [selectedCategory, currentChapterIndex]);

  const handleNextChapter = () => {
    if (currentChapterIndex < selectedCategory.chapters.length - 1) {
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
    } else {
      setSelectedCategory(null);
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
    const currentContent = selectedCategory.chapters[currentChapterIndex].sections.map(s => s.content?.join(' ')).filter(Boolean).join(' ');
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

  if (!selectedCategory) {
    return (
      <div className="flex flex-col items-center p-8 min-h-screen">
        <h2 className="text-3xl font-bold text-white mb-6">Choose a Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentChapterIndex(0);
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  const currentChapter = selectedCategory.chapters[currentChapterIndex];

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-6">Learning Center</h2>
      <div className="bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-4xl text-gray-200">
        <h3 className="text-2xl font-semibold text-purple-400 mb-4 text-center">{selectedCategory.title} - {currentChapter.title}</h3>

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
            className={`bg-gray-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ${currentChapterIndex === 0 && selectedCategory ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'}`}
          >
            {currentChapterIndex === 0 ? "Back to Categories" : "Previous Chapter"}
          </button>
          <button
            onClick={handleNextChapter}
            disabled={scrollProgress < 99}
            className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ${scrollProgress < 99 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
          >
            {currentChapterIndex === selectedCategory.chapters.length - 1 ? "Go to Quiz" : "Next Chapter"}
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

const CategoryCard = ({ category, onClick }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Check if gsap is available before using it
    if (window.gsap) {
      window.gsap.fromTo(cardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  const handleMouseEnter = () => {
    if(window.gsap) {
        window.gsap.to(cardRef.current, { scale: 1.05, duration: 0.3 });
    }
  };

  const handleMouseLeave = () => {
    if(window.gsap) {
        window.gsap.to(cardRef.current, { scale: 1, duration: 0.3 });
    }
  };

  return (
    <div
      ref={cardRef}
      className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-300 hover:shadow-purple-500/30"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={category.imageUrl} alt={category.title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h4 className="text-xl font-bold text-white mb-2">{category.title}</h4>
        <p className="text-sm text-gray-400">{category.description}</p>
      </div>
    </div>
  );
};


const TipCard = ({ tip }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    // Check if gsap is available before using it
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
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
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
