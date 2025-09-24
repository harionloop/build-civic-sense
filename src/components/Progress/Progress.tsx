'use client';

import React, { useState } from 'react';
import quizQuestions from '@/data/Quiz';

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

export default Progress;
