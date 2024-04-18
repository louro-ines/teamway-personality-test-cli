'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IoChevronForward, IoChevronBackOutline } from 'react-icons/io5';
import { backendRequest } from '../utils/backendApi';

const Question = ({
  question,
  onPrevious,
  onNext,
  currentQuestionIndex,
  totalQuestions,
}) => {
  const { push } = useRouter();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [result, setResult] = useState({});

  const handleSelectAnswers = (answer) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [currentQuestionIndex]: answer,
    }));
  };

  const handleSetResult = async () => {
    try {
      const response = await backendRequest.post('questions/compute_score', {
        answers: Object.values(selectedAnswers),
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (result?.result) {
      push(`/results?r=${result.result}`);
    }
  }, [result, push]);

  return (
    <main className='flex flex-col sm:flex-row justify-center items-center h-screen w-screen'>
      <div className='w-full sm:w-1/2 h-4/5 text-base sm:text-2xl p-8 xs:p-12 flex flex-col justify-between'>
        <p className='font-light'>
          Question {currentQuestionIndex + 1} / {totalQuestions}
        </p>
        <p className='font-light'>{question?.body}</p>
        <div className='flex justify-between'>
          <button
            type='button'
            onClick={onPrevious}
            disabled={currentQuestionIndex === 0}
            className={`inline-block p-2 border-2 rounded-full font-semibold transition duration-300 ${
              currentQuestionIndex === 0
                ? 'bg-gray-50 text-gray-200 border-gray-200 hover:bg-gray-50 hover:text-gray-200 hover:border-gray-200'
                : 'bg-neutral-50 text-black border-black hover:bg-black hover:border-black hover:text-white'
            }`}
          >
            <IoChevronBackOutline />
          </button>
          {currentQuestionIndex === totalQuestions - 1 &&
          selectedAnswers[currentQuestionIndex] ? (
            <button
              type='button'
              onClick={handleSetResult}
              disabled={
                currentQuestionIndex === totalQuestions ||
                !selectedAnswers[currentQuestionIndex]
              }
              className='inline-block flex items-center gap-2 p-2 border-2 rounded-full font-semibold text-base transition duration-300 bg-neutral-50 text-black border-black hover:bg-black hover:border-black hover:text-white'
            >
              See Result <IoChevronForward />
            </button>
          ) : (
            <button
              type='button'
              onClick={onNext}
              disabled={
                currentQuestionIndex === totalQuestions ||
                !selectedAnswers[currentQuestionIndex]
              }
              className={`inline-block p-2 border-2 rounded-full font-semibold transition duration-300 ${
                currentQuestionIndex === totalQuestions - 1 ||
                !selectedAnswers[currentQuestionIndex]
                  ? 'bg-gray-50 text-gray-200 border-gray-200 hover:bg-gray-50 hover:text-gray-200 hover:border-gray-200'
                  : 'bg-neutral-50 text-black border-black hover:bg-black hover:border-black hover:text-white'
              }`}
            >
              <IoChevronForward />
            </button>
          )}
        </div>
      </div>
      <ul className='pt-0 pb-8 pr-8 pl-8 md:pl-0 md:pt-12 w-full sm:w-1/2 flex flex-col justify-between h-4/5'>
        {question?.answers.map((answer) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <li
            className={`border-2 border-black rounded-md my-1 xs:my-2 grow px-4 text-sm md:text-base lg:text-lg flex items-center hover:cursor-pointer ${
              selectedAnswers[currentQuestionIndex] === answer
                ? 'bg-black text-white'
                : 'text-black'
            }`}
            key={answer.id}
            onClick={() => handleSelectAnswers(answer)}
          >
            {answer.body}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Question;
