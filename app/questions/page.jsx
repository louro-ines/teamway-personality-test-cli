'use client';

import React, { useState, useEffect } from 'react';
import { backendRequest } from '../utils/backendApi';
import Question from '../components/question';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await backendRequest.get(
          'questions'
        );
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchQuestions();
  }, []);

  return (
    <main className='bg-neutral-50 from-pink to-yellow flex flex-col min-h-screen items-center justify-center'>
      <div>
        <Question
          question={questions[currentQuestionIndex]}
          onPrevious={handlePreviousQuestion}
          onNext={handleNextQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
        />
      </div>
    </main>
  );
};

export default Questions;
