import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='bg-neutral-50 from-pink to-yellow flex min-h-screen items-center justify-center'>
      <div className='flex flex-col p-12 xl:p-24 w-full md:w-1/2'>
        <h1 className='text-4xl font-bold'>
          Are you an{' '}
          <span className='bg-gradient-to-r from-blue-400 via-yellow-400 to-green-300 bg-[length:100%_6px] bg-no-repeat bg-bottom'>
            {' '}
            introvert
          </span>{' '}
          or an{' '}
          <span className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom'>
            extrovert
          </span>
          ?
        </h1>
        <p className='mt-8 font-light'>
          Introverts tend to recharge by spending time alone, while extroverts
          feel energized by social interactions.
        </p>
        <p className='mt-8 text-xl font-light'>Which one do you identify with?</p>{' '}
        <div className='inline-block mt-8'>
          <Link
            className='inline-block px-6 py-3 hover:bg-black border-2 hover:border-black rounded-full hover:text-white font-semibold bg-neutral-50 text-black border-black transition duration-300'
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
