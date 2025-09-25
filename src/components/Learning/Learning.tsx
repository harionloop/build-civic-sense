import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TipCard from "./TipCard";
import CategoryCard from "./CategoryCard";
import { useState, useEffect, useRef } from "react";
import categories from "@/data/Category";

gsap.registerPlugin(ScrollTrigger);

const Learning = ({ onNavigate, selectedCategory, setSelectedCategory }) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [summaryText, setSummaryText] = useState("");
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showChapterComplete, setShowChapterComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(3);
  const chapterRef = useRef(null);
  const observerRef = useRef(null);
  const confettiRef = useRef(null);
  const lottieRef = useRef(null);

  const isLastChapter =
    selectedCategory?.chapters &&
    currentChapterIndex === selectedCategory.chapters.length - 1;
  const isScrollComplete = scrollProgress >= 99;

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (chapterRef.current && gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
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
      const sections = chapterRef.current.querySelectorAll(".learning-section");
      sections.forEach((section) => observerRef.current.observe(section));
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [selectedCategory, currentChapterIndex]);

  useEffect(() => {
    if (showChapterComplete && confettiRef.current) {
      let countdown = 3;
      setTimer(countdown);

      gsap.fromTo(
        confettiRef.current,
        { opacity: 0, y: -50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        }
      );

      const timerInterval = setInterval(() => {
        countdown--;
        setTimer(countdown);
        if (countdown === 0) {
          clearInterval(timerInterval);
          gsap.to(confettiRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              setShowChapterComplete(false);
              setShowModal(true);
            },
          });
        }
      }, 1000);
    }
  }, [showChapterComplete]);

  const handleNextChapter = () => {
    if (scrollProgress < 99) return;

    if (isLastChapter) {
      setShowChapterComplete(true);
    } else {
      setCurrentChapterIndex(currentChapterIndex + 1);
      if (chapterRef.current) {
        chapterRef.current.scrollTop = 0;
      }
    }
  };

  const handleGoToQuiz = () => {
    setShowModal(false);
    onNavigate("quiz");
  };

  const handleGoToCategories = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  const handleScroll = () => {
    if (chapterRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chapterRef.current;
      if (scrollHeight > clientHeight) {
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(progress);
      }
    }
  };

  const handleGenerateSummary = async () => {
    setIsSummarizing(true);
    setSummaryText("");
    const currentContent = selectedCategory.chapters[currentChapterIndex].sections
      .map((s) => s.content?.join(" "))
      .filter(Boolean)
      .join(" ");
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
      // console.error("Error generating summary:", error);
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

        {/* Lottie Animation at the top of the chapter */}
        <div className="w-64 h-64 mx-auto mb-6 flex items-center justify-center">
          <lottie-player
            ref={lottieRef}
            // src="https://lottie.host/dc9ae052-081d-45ab-bca5-7f314cfa27a6/NwEErtUVwN.json"
            src="https://lottie.host/42f98f19-ceba-46f7-b6af-b824f8eec804/yQVGDJs3Rs.json"
            // src={currentChapter.lottie}
            autoplay
            loop={true}
            mode="normal"
            style={{ width: "100%", height: "100%" }}
          ></lottie-player>
        </div>

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
                      src={section.lottie}
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

        {showChapterComplete && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm z-50">
            <div
              ref={confettiRef}
              className="text-center text-white text-4xl font-extrabold flex flex-col items-center"
            >
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_touohxv0.json"
                autoplay
                loop={true}
                mode="normal"
                style={{ width: "300px", height: "300px" }}
              ></lottie-player>
              <h4 className="themed-text text-xl md:text-2xl mt-4">
                Congratulations!
              </h4>
              <p className="themed-subtext opacity-80 mt-2">
                Chapter complete.
              </p>
              <p className="themed-text mt-4 text-sm font-light">
                This window will close in {timer} seconds...
              </p>
            </div>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] bg-gray-900 bg-opacity-70 backdrop-blur-sm">
            <div className="glass-card p-8 rounded-3xl text-center max-w-sm w-full">
              <h3 className="text-2xl font-bold themed-text mb-4">
                Chapter Completed!
              </h3>
              <p className="themed-subtext mb-6">
                You've successfully finished this chapter.
              </p>
              <div className="flex flex-col space-y-4">
                <button
                  onClick={handleGoToQuiz}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                  Start Quiz
                </button>
                <button
                  onClick={handleGoToCategories}
                  className="glass-card themed-card-text font-bold py-3 px-8 rounded-full transition duration-300 dark:bg-opacity-10 dark:hover:bg-opacity-20 light:bg-gray-200 light:text-gray-800 light:hover:bg-gray-300"
                >
                  Back to Categories
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-between mt-6 w-full max-w-sm">
          <button
            onClick={handleGoToCategories}
            className={`glass-card themed-card-text font-bold py-2 px-6 rounded-full transition duration-300 dark:bg-opacity-10 dark:hover:bg-opacity-20 light:bg-gray-200 light:text-gray-800 light:hover:bg-gray-300`}
          >
            Back to Categories
          </button>
          <button
            onClick={handleNextChapter}
            disabled={!isScrollComplete}
            className={`bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition duration-300 ${
              !isScrollComplete
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105"
            }`}
          >
            {isLastChapter ? "Complete!" : "Next Chapter"}
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

export default Learning;
