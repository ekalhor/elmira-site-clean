'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from './Home.module.css'; // this is where .container lives

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function HomePage() {
  return (
    <main className={`${inter.variable} ${styles.main}`}>
      <div className={styles.container}>
        {/* Navigation */}
        <div className={styles.nav}>
          <Link href="/portfolio">
			<button className={styles.navButton}>Portfolio</button>
		  </Link>
		  <Link href="/blog">
			<button className={styles.navButton}>Blog</button>
		  </Link>
        </div>

        {/* Photo */}
		<div className={styles.photoWrapper}>
		  <div className={styles.ringOuter}>
			<div className={styles.ringMiddle}>
			  <div className={styles.ringInner}>
				<Image
				  src="/headshot.jpg"
				  alt="Elmira Kalhor"
				  width={300}
				  height={300}
				  className={styles.photo}
				  priority
				/>
			  </div>
			</div>
		  </div>
		</div>
	

        {/* Text */}
        <div className={styles.textSection}>
          <div className={styles.greetingBubble}>Hi, it's me!</div>
          <h1 className={styles.title}>Elmira Kalhor</h1>
          <p className={styles.subtitle}>
            Quantitative researcher with a passion for data science and machine learning.
          </p>
          <Link href="/ElmiraKalhor_R.pdf" target="_blank">
            <button className={styles.resumeButton}>My Resume</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
