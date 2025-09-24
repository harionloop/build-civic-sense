"use client";

import React, { useState, useEffect } from "react";
import Home from "@/components/Home";
import Quiz from "@/components/Quiz/Quiz";
import Progress from "@/components/Progress/Progress";
import About from "@/components/About";
import Learning from "@/components/Learning/Learning";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "../styles/main.scss";

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
      <div className="main-container min-h-screen flex flex-col items-center justify-between p-4">
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
