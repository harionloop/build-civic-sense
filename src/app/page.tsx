"use client";

import categories from "@/data/Category";
import quizQuestions from "@/data/Quiz";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [civicScore, setCivicScore] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  const handleQuizComplete = (finalScore) => {
    setCivicScore(finalScore);
    setCurrentView("progress");
  };

  const handleNavigateToCategories = () => {
    setSelectedCategory(null);
    setCurrentView("learn");
  };

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <Home onNavigate={setCurrentView} />;
      case "learn":
        return (
          <Learning
            onNavigate={setCurrentView}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case "quiz":
        return (
          <Quiz
            onNavigate={setCurrentView}
            onQuizComplete={handleQuizComplete}
          />
        );
      case "progress":
        return <Progress score={civicScore} onNavigate={setCurrentView} />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        /* Base styles for dark mode */
        body, html {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        .dark body, .dark html {
          background: linear-gradient(135deg, #0d1222 0%, #171d2b 100%);
          color: #fff;
        }
        .light body, .light html {
          background: linear-gradient(135deg, #eaf0f9 0%, #f6f9fc 100%);
          color: #2c3e50;
        }

        /* Glass card effect for dark mode */
        .dark .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          transition: all 0.3s ease;
        }
        .dark .glass-card:hover {
            box-shadow: 0 8px 48px 0 rgba(109, 40, 217, 0.5);
            transform: translateY(-5px);
        }
        /* Glass card effect for light mode */
        .light .glass-card {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .light .glass-card:hover {
            box-shadow: 0 8px 48px 0 rgba(109, 40, 217, 0.2);
            transform: translateY(-5px);
        }

        /* Navigation links for dark mode */
        .dark .nav-link, .dark .nav-icon {
          color: #e0e7ff;
          transition: all 0.3s ease;
        }
        .dark .nav-link:hover, .dark .nav-icon:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.15);
        }

        /* Navigation links for light mode */
        .light .nav-link, .light .nav-icon {
          color: #2c3e50;
          transition: all 0.3s ease;
        }
        .light .nav-link:hover, .light .nav-icon:hover {
          color: #000;
          background: rgba(0, 0, 0, 0.1);
        }

        /* Themed text colors */
        .themed-text {
          transition: color 0.3s ease;
        }
        .dark .themed-text { color: #fff; }
        .light .themed-text { color: #1e273a; }
        .dark .themed-subtext { color: #a5b4fc; }
        .light .themed-subtext { color: #4a5568; }
        .dark .themed-card-text { color: #fff; }
        .light .themed-card-text { color: #1e273a; }
        .dark .themed-card-subtext { color: #d1d5db; }
        .light .themed-card-subtext { color: #4a5568; }
        .dark .themed-link { color: #c4b5fd; }
        .light .themed-link { color: #7c3aed; }
        .input-field {
          transition: all 0.3s ease;
        }
        .dark .input-field {
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
        }
        .light .input-field {
            background-color: rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(0, 0, 0, 0.1);
            color: #000;
        }
        .input-field::placeholder {
            color: #9ca3af;
        }
        .light .input-field::placeholder {
            color: #4b5563;
        }
      `}</style>
      <div className="main-container min-h-screen flex flex-col items-center justify-between p-4">
        {/* Navigation bar with glassy effect */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 glass-card backdrop-blur-sm shadow-lg rounded-b-3xl">
          <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
            {/* Left side for back button */}
            <div className="flex items-center">
              {currentView === "learn" && selectedCategory && (
                <button
                  onClick={handleNavigateToCategories}
                  className="mr-4 transition duration-200 nav-icon p-2 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </button>
              )}
            </div>
            {/* Center navigation buttons */}
            <div className="flex space-x-2 md:space-x-4">
              <button
                onClick={() => setCurrentView("home")}
                className="nav-link font-medium px-3 py-2 md:px-4 md:py-2 rounded-full"
              >
                Home
              </button>
              <button
                onClick={() => setCurrentView("learn")}
                className="nav-link font-medium px-3 py-2 md:px-4 md:py-2 rounded-full"
              >
                Learn
              </button>
              <button
                onClick={() => setCurrentView("quiz")}
                className="nav-link font-medium px-3 py-2 md:px-4 md:py-2 rounded-full"
              >
                Quiz
              </button>
              <button
                onClick={() => setCurrentView("progress")}
                className="nav-link font-medium px-3 py-2 md:px-4 md:py-2 rounded-full"
              >
                Progress
              </button>
              <button
                onClick={() => setCurrentView("about")}
                className="nav-link font-medium px-3 py-2 md:px-4 md:py-2 rounded-full"
              >
                About
              </button>
              <button
                onClick={() => setCurrentView("contact")}
                className="nav-link font-medium px-3 py-2 md:px-4 md:py-2 rounded-full"
              >
                Contact
              </button>
            </div>
            {/* Right side for theme toggle */}
            <div className="flex items-center">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="nav-icon transition duration-200 p-2 rounded-full"
              >
                {isDarkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.847 1.57a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM12 18a.75.75 0 01.75-.75v2.25a.75.75 0 01-1.5 0V18a.75.75 0 01.75-.75zM17.653 1.57a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM12 1.5a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25A.75.75 0 0112 1.5zM3.52 4.12a.75.75 0 011.06-1.06l1.59 1.59a.75.75 0 11-1.06 1.06L3.52 4.12zM12 18.75a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.544 1.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM6.53 4.672a.75.75 0 011.06-1.06l1.59 1.59a.75.75 0 11-1.06 1.06l-1.59-1.59zM2.25 9.75a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM4.12 17.653a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06zM9.75 22.25a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM17.653 19.88a.75.75 0 01-1.06 1.06l-1.59-1.59a.75.75 0 111.06-1.06l1.59 1.59zM21.75 9.75a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM19.88 4.672a.75.75 0 01-1.06 0l-1.59-1.59a.75.75 0 111.06-1.06l1.59 1.59a.75.75 0 010 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
        <main className="mt-24 w-full max-w-6xl">{renderView()}</main>
        <Footer />
      </div>
    </>
  );
};

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

const Learning = ({ onNavigate, selectedCategory, setSelectedCategory }) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [summaryText, setSummaryText] = useState("");
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const chapterRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (chapterRef.current && gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      // Create a new IntersectionObserver for fade-in effect on scroll
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                entry.target,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 1.2,
                  ease: "power3.out",
                }
              );
              observerRef.current.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      // Observe all sections
      const sections = chapterRef.current.querySelectorAll(".learning-section");
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
      onNavigate("quiz");
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
    setSummaryText("");
    const currentContent = selectedCategory.chapters[
      currentChapterIndex
    ].sections
      .map((s) => s.content?.join(" "))
      .filter(Boolean)
      .join(" ");
    const systemPrompt =
      "Act as a helpful study guide. Provide a concise, single-paragraph summary of the following text.";
    const userQuery = `Summarize the following content in a single paragraph: ${currentContent}`;
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      const generatedText = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (generatedText) {
        setSummaryText(generatedText);
      } else {
        setSummaryText("Failed to generate summary. Please try again.");
      }
    } catch (error) {
      console.error("Error generating summary:", error);
      setSummaryText("An error occurred. Please try again.");
    } finally {
      setIsSummarizing(false);
    }
  };

  if (!selectedCategory) {
    return (
      <div className="flex flex-col items-center p-8 min-h-[calc(100vh-6rem)]">
        <h2 className="text-3xl font-bold themed-text mb-6">
          Choose a Category
        </h2>
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
    <div className="flex flex-col items-center p-8 min-h-[calc(100vh-6rem)]">
      <h2 className="text-3xl font-bold themed-text mb-6">Learning Center</h2>
      <div className="glass-card rounded-3xl p-6 md:p-10 w-full max-w-4xl themed-subtext">
        <h3 className="text-2xl font-semibold themed-link mb-4 text-center">
          {selectedCategory.title} - {currentChapter.title}
        </h3>

        {/* Overall Chapter Progress Bar */}
        <div className="w-full h-2 mb-4 bg-white bg-opacity-10 rounded-full dark:bg-opacity-10 light:bg-gray-300">
          <div
            className="h-2 bg-gradient-to-r from-purple-400 to-green-300 rounded-full transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        <div
          ref={chapterRef}
          className="relative max-h-[60vh] overflow-y-auto pr-4"
          onScroll={handleScroll}
        >
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-white bg-opacity-10 rounded-full z-0 transform -translate-x-1/2 dark:bg-opacity-10 light:bg-gray-300"></div>

          {currentChapter.sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="learning-section relative pl-12 py-8 group"
            >
              {/* Timeline circle */}
              <div className="absolute left-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400 z-10 transition-all duration-300 group-hover:scale-150 group-hover:bg-purple-300"></div>

              <div className="glass-card rounded-2xl shadow-inner p-6 transform transition-all duration-300 group-hover:scale-[1.02]">
                <h4 className="text-xl font-bold themed-card-text mb-4">
                  {section.heading}
                </h4>
                {section.lottie && (
                  <div className="w-64 h-64 mx-auto mb-6 flex items-center justify-center">
                    <lottie-player
                      src={JSON.stringify(section.lottie)}
                      autoplay
                      loop
                      mode="normal"
                      style={{ width: "100%", height: "100%" }}
                    ></lottie-player>
                  </div>
                )}
                {section.svg && (
                  <div
                    className="w-64 h-64 mx-auto mb-6 flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: section.svg }}
                  ></div>
                )}
                {section.content &&
                  section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="mb-4 text-lg leading-relaxed themed-card-subtext"
                    >
                      {paragraph}
                    </p>
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
            onClick={() => setSelectedCategory(null)}
            className={`glass-card themed-card-text font-bold py-2 px-6 rounded-full transition duration-300 dark:bg-opacity-10 dark:hover:bg-opacity-20 light:bg-gray-200 light:text-gray-800 light:hover:bg-gray-300`}
          >
            Back to Categories
          </button>
          <button
            onClick={handleNextChapter}
            disabled={scrollProgress < 99}
            className={`bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition duration-300 ${
              scrollProgress < 99
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105"
            }`}
          >
            {currentChapterIndex === selectedCategory.chapters.length - 1
              ? "Go to Quiz"
              : "Next Chapter"}
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleGenerateSummary}
            disabled={isSummarizing}
            className="glass-card themed-card-text font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 dark:bg-opacity-10 dark:hover:bg-opacity-20 light:bg-gray-200 light:text-gray-800 light:hover:bg-gray-300"
          >
            {isSummarizing ? "Summarizing..." : "✨ Get Summary"}
          </button>
        </div>
        {summaryText && (
          <div className="mt-6 p-4 glass-card rounded-lg themed-subtext">
            <h4 className="font-semibold mb-2 themed-text">Summary:</h4>
            <p className="text-sm opacity-80">{summaryText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const CategoryCard = ({ category, onClick }) => {
  const cardRef = useRef(null);
  const gsap = window.gsap;

  useEffect(() => {
    if (gsap) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  const handleMouseEnter = () => {
    if (window.gsap) {
      window.gsap.to(cardRef.current, { scale: 1.05, duration: 0.3 });
    }
  };

  const handleMouseLeave = () => {
    if (window.gsap) {
      window.gsap.to(cardRef.current, { scale: 1, duration: 0.3 });
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
      <img
        src={category.imageUrl}
        alt={category.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-bold themed-card-text mb-2">
          {category.title}
        </h4>
        <p className="text-sm themed-card-subtext opacity-80">
          {category.description}
        </p>
      </div>
    </div>
  );
};

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

const Quiz = ({ onNavigate, onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    if (index === quizQuestions[currentQuestion].answerIndex) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      onQuizComplete(
        score + (index === quizQuestions[currentQuestion].answerIndex ? 1 : 0)
      );
    }
  };

  const question = quizQuestions[currentQuestion];

  return (
    <div className="flex flex-col items-center p-8 min-h-[calc(100vh-6rem)]">
      <h2 className="text-3xl font-bold themed-text mb-6">Civic Sense Quiz</h2>
      <div className="glass-card rounded-xl p-6 md:p-10 w-full max-w-2xl themed-card-subtext">
        <h3 className="text-xl font-semibold mb-4 themed-card-text">
          {question.question}
        </h3>
        <div className="flex flex-col space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="bg-white bg-opacity-10 hover:bg-opacity-20 text-left themed-card-text py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
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
  const [tipText, setTipText] = useState("");
  const [isGeneratingTip, setIsGeneratingTip] = useState(false);

  const handleGenerateTip = async () => {
    setIsGeneratingTip(true);
    setTipText("");
    const systemPrompt =
      "Act as a motivational civic sense coach. Provide a single, actionable tip based on the user's score to help them improve.";
    const userQuery = `The user scored ${score} out of ${quizQuestions.length} on a quiz about civic sense. Provide a single, concise tip to help them improve. The tip should be encouraging and focus on a specific, easy-to-do action.`;
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      const generatedText = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (generatedText) {
        setTipText(generatedText);
      } else {
        setTipText("Failed to generate tip. Please try again.");
      }
    } catch (error) {
      console.error("Error generating tip:", error);
      setTipText("An error occurred. Please try again.");
    } finally {
      setIsGeneratingTip(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-[calc(100vh-6rem)]">
      <h2 className="text-3xl font-bold themed-text mb-6">Your Progress</h2>
      <div className="glass-card rounded-xl p-6 md:p-10 w-full max-w-2xl themed-subtext text-center">
        <p className="text-xl mb-4">
          Your current score is:{" "}
          <span className="themed-link font-bold">
            {score} / {quizQuestions.length}
          </span>
        </p>
        <div className="w-full bg-white bg-opacity-10 rounded-full h-4 mb-4 overflow-hidden dark:bg-opacity-10 light:bg-gray-300">
          <div
            className="h-4 bg-gradient-to-r from-purple-400 to-green-300 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-md mb-6">
          {progressPercentage.toFixed(0)}% Complete
        </p>
        <button
          onClick={handleGenerateTip}
          disabled={isGeneratingTip}
          className="glass-card themed-card-text font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 mb-4 dark:bg-opacity-10 dark:hover:bg-opacity-20 light:bg-gray-200 light:text-gray-800 light:hover:bg-gray-300"
        >
          {isGeneratingTip ? "Generating Tip..." : "✨ Get a Personalized Tip"}
        </button>
        {tipText && (
          <div className="mt-4 p-4 glass-card rounded-lg themed-subtext">
            <h4 className="font-semibold mb-2 themed-text">Your Tip:</h4>
            <p className="text-sm opacity-80">{tipText}</p>
          </div>
        )}
        <button
          onClick={() => onNavigate("home")}
          className="glass-card themed-card-text font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 dark:bg-opacity-10 dark:hover:bg-opacity-20 light:bg-gray-200 light:bg-opacity-70 light:text-gray-800 light:hover:bg-gray-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSubmitMessage(
          "Message sent successfully! We'll get back to you shortly."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        setSubmitMessage("Failed to send message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-[calc(100vh-6rem)]">
      <h2 className="text-3xl font-bold themed-text mb-6">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Left side for contact information */}
        <div className="glass-card rounded-3xl p-8">
          <h4 className="text-xl font-bold themed-text mb-4">
            Contact Information
          </h4>
          <p className="text-md themed-subtext mb-6">
            Fill up the form to reach out to us.
          </p>
          <div className="flex flex-col space-y-6">
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 themed-link flex-shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-1 7.07V21h2v-1.93c3.29-.68 6-3.69 6-7.07h-2c0 2.53-1.93 4.54-4 4.93V17h-2v-1.93c-2.07-.39-4-2.4-4-4.93H3c0 3.38 2.71 6.39 6 7.07z" />
              </svg>
              <div className="ml-4">
                <p className="font-semibold themed-card-text">Address</p>
                <p className="text-sm themed-card-subtext opacity-80">
                  123 Civic Street, Community City
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 themed-link flex-shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <div className="ml-4">
                <p className="font-semibold themed-card-text">Email</p>
                <p className="text-sm themed-card-subtext opacity-80">
                  contact@civicsense.com
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 themed-link flex-shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 15.546c-1.571-2.062-4.205-3.04-7.53-3.04-3.326 0-5.959.978-7.53 3.04l-1.47 1.937c-1.042.483-1.52.898-1.52 1.494 0 1.498 1.258 2.552 2.784 2.552 1.527 0 2.785-1.054 2.785-2.552 0-.596-.478-1.01-1.52-1.494l-1.47-1.937c1.571-2.062 4.205-3.04 7.53-3.04s5.959.978 7.53 3.04l-1.47-1.937c-1.042-.483-1.52-.898-1.52-1.494 0-1.498 1.258-2.552 2.784-2.552 1.527 0 2.785-1.054 2.785-2.552 0-.596-.478-1.01-1.52-1.494l-1.47-1.937zM12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 7.07V21h2v-1.93c3.29-.68 6-3.69 6-7.07h-2c0 2.53-1.93 4.54-4 4.93V17h-2v-1.93c-2.07-.39-4-2.4-4-4.93H3c0 3.38 2.71 6.39 6 7.07z" />
              </svg>
              <div className="ml-4">
                <p className="font-semibold themed-card-text">Phone</p>
                <p className="text-sm themed-card-subtext opacity-80">
                  +1 234 567 890
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right side for contact form */}
        <div className="glass-card rounded-3xl p-8">
          <h4 className="text-xl font-bold themed-text mb-4">Send a Message</h4>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg input-field transition-colors duration-300"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg input-field transition-colors duration-300"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 rounded-lg input-field transition-colors duration-300"
              />
              {errors.subject && (
                <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg input-field transition-colors duration-300"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submitMessage && (
              <p className="text-center mt-4 themed-text">{submitMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
