import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='bg-neutral-50 from-pink to-yellow flex min-h-screen items-center justify-center'>
      <div className='flex flex-col p-12 xl:p-24 w-full md:w-1/2'>
        <h1 class='text-4xl font-bold'>
          Are you an{' '}
          <span class='bg-gradient-to-r from-blue-400 via-yellow-400 to-green-300 bg-[length:100%_6px] bg-no-repeat bg-bottom'>
            {' '}
            introvert
          </span>{' '}
          or an{' '}
          <span class='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom'>
            extrovert
          </span>
          ?
        </h1>
        <p className='mt-8'>
          Introverts tend to recharge by spending time alone, while extroverts
          feel energized by social interactions.
        </p>
        <p className='mt-8 text-xl'>Which one do you identify with?</p>{' '}
        <div className='inline-block mt-8'>
          <Link
            className='inline-block px-6 py-3 bg-black border-2 border-black rounded-full text-white font-semibold hover:bg-neutral-50 hover:text-black hover:border-2 hover:border-black transition duration-300'
            href='/questions'
          >
            Start Quizz
          </Link>
        </div>
      </div>
      <Image
        src='/cover.jpg'
        alt='Puzzle'
        className='w-1/2 h-screen hidden md:block'
        width={427}
        height={640}
        priority
      />
    </main>
  );
}
