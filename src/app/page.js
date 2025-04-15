'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function HomePage() {
  return (
    <main
      className={`min-h-screen flex flex-col items-center bg-white px-6 py-12 ${inter.variable}`}
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {/* Top Right Navigation */}
      <div className="w-full flex justify-end mt-6 pr-6 text-sm">
        <div className="flex gap-4">
          <Link href="/portfolio">
            <button className="px-4 py-1 text-sm text-blue-800 hover:underline border border-transparent">
              Portfolio
            </button>
          </Link>
          <Link href="/blog">
            <button className="px-4 py-1 text-sm text-blue-800 hover:underline border border-transparent">
              Blog
            </button>
          </Link>
        </div>
      </div>

      {/* Photo - Centered under nav */}
      <div className="flex justify-center mt-10">
        <Image
          src="/IMG_1032.JPG"
          alt="Elmira Kalhor"
          width={300}
          height={300}
          className="rounded-full object-cover shadow-xl"
          priority
        />
      </div>

      {/* Greeting Text - Left aligned */}
      <div className="w-full max-w-3xl mt-10 text-left">
        <span className="inline-block px-4 py-1 mb-4 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
          It's me
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Elmira Kalhor</h1>
        <p className="text-lg text-zinc-700 mb-6">
          Quantitative researcher with a passion for data science and machine learning.
        </p>
        <Link
          href="/ElmiraKalhor_R.pdf"
          target="_blank"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          My Resume
        </Link>
      </div>
    </main>
  );
}
