'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>

        {/* Top navigation */}
        <div className={styles.navbar}>
          <Link href="/portfolio">
            <button className={styles.navButton}>Portfolio</button>
          </Link>
          <Link href="/blog">
            <button className={styles.navButton}>Blog</button>
          </Link>
        </div>

        {/* Profile photo with triple ring */}
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

        {/* Greeting and content */}
        <div className={styles.content}>
          <div className={styles.greetingBubble}>Hi, it's me!</div>
          <h1 className={styles.title}>Elmira Kalhor</h1>
          <p className={styles.subtitle}>
            Quantitative researcher with a passion for data science and machine learning.
          </p>

          <Link href="/ElmiraKalhor_R.pdf" target="_blank">
            <button className={styles.resumeButton}>My Resume</button>
          </Link>

          {/* Social buttons */}
          <div className={styles.socialButtons}>
            <Link href="https://www.linkedin.com/in/elmira-kalhor" target="_blank">
              <button className={styles.socialButton}>LinkedIn</button>
            </Link>
            <Link href="https://github.com/ekalhor" target="_blank">
              <button className={styles.socialButton}>GitHub</button>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
