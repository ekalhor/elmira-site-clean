'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function HomePage() {
  return (
    <main className={`min-h-screen flex flex-col items-center bg-white px-6 py-12 ${inter.variable}`} style={{ fontFamily: 'var(--font-inter)' }}>

      {/* Top Right Navigation */}
      <div className="w-full flex justify-end mt-6 pr-6 text-sm space-x-6">
        <Link href="/#portfolio" className="text-blue-800 hover:underline">
          Portfolio
        </Link>
        <Link href="/#blog" className="text-blue-800 hover:underline">
          Blog
        </Link>
      </div>

      {/* Main Section */}
      <section className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-8">
        {/* ...rest of your content... */}
      </section>

    </main>
  );
}
