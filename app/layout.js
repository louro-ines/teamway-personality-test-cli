import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Introvert or Extrovert Quizz',
  description:
    'Introverts tend to recharge by spending time alone, while extroverts feel energized by social interactions. Which one do you identify with?',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
