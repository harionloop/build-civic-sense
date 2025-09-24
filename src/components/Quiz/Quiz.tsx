'use client';

import React, { useState } from 'react';
import quizQuestions from '@/data/Quiz';

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

export default Quiz;
