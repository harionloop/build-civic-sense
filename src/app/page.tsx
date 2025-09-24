"use client";

import categories from "@/data/Category";
import quizQuestions from "@/data/Quiz";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Progress from "@/components/Progress/Progress";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Quiz from "@/components/Quiz/Quiz";
import Learning from "@/components/Learning/Learning";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

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
        <Nav
          onNavigate={setCurrentView}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          currentView={currentView}
          selectedCategory={selectedCategory}
          handleNavigateToCategories={handleNavigateToCategories}
        />
        <main className="mt-24 w-full max-w-6xl">{renderView()}</main>
        <Footer />
      </div>
    </>
  );
};

export default App;
