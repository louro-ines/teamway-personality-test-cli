'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Results = () => {
  const searchParams = useSearchParams();
  const result = searchParams.get('r');

  return (
    <main className='bg-neutral-50 from-pink to-yellow flex min-h-screen items-center justify-center'>
      <div className='flex flex-col p-12 xl:p-24 w-full md:w-1/2'>
        <h1 className='text-4xl font-bold'>
          You are an{' '}
          {result === 'introvert' ? (
            <span className='bg-gradient-to-r from-blue-400 via-yellow-400 to-green-300 bg-[length:100%_6px] bg-no-repeat bg-bottom'>
              {' '}
              introvert
            </span>
          ) : (
            <span className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom'>
              extrovert
            </span>
          )}
          !
        </h1>
        {result === 'introvert' ? (
          <p className='mt-8 font-light text-justify'>
            Introverts tend to find solace and energy in solitude, seeking
            moments of quiet reflection and introspection to recharge their
            internal batteries. They often prefer solitary activities like
            reading, writing, or pursuing hobbies that allow them to delve into
            their thoughts without external distractions. They cherish their
            alone time as an opportunity to rejuvenate and process their
            thoughts, finding comfort in their own company and the serenity of
            solitude.
          </p>
        ) : (
          <p className='mt-8 font-light text-justify'>
            Extroverts thrive on social interactions and external stimulation,
            feeling invigorated and alive when surrounded by others. They enjoy
            engaging in lively conversations, attending social events, and
            participating in group activities that allow them to connect with
            people and share experiences. Extroverts often seek out
            opportunities to interact with others, finding energy and excitement
            in the hustle and bustle of social settings.
          </p>
        )}
        <div className='inline-block mt-8'>
          <Link
            className='inline-block px-6 py-3 hover:bg-black border-2 hover:border-black rounded-full hover:text-white font-semibold bg-neutral-50 text-black border-black transition duration-300'
            href='/'
          >
            Start again
          </Link>
        </div>
      </div>
      <Image
        src={result === 'introvert' ? '/introvert.avif' : '/extrovert.jpg'}
        alt='Puzzle'
        className='w-1/2 h-screen hidden md:block'
        width={427}
        height={640}
        priority
      />
    </main>
  );
};

export default Results;
