'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Quattrocento } from 'next/font/google';

const quattrocento = Quattrocento({ subsets: ['latin'], weight: '400', variable: '--font-quattrocento' });

export default function HomePage() {
  return (
    <main className={`min-h-screen flex items-center justify-center bg-white px-6 py-12 ${quattrocento.variable}`}>
      <section className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text section */}
        <div className="text-left md:w-1/2" style={{ fontFamily: 'var(--font-quattrocento)' }}>
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

        {/* Photo */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/IMG_1032.jpg"
            alt="Elmira Kalhor"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-xl"
            priority
          />
        </div>
      </section>
    </main>
  );
}
