import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* Top Right Navigation */}
      <div className={styles.navbar}>
        <Link href="/portfolio" className={styles.navlink}>Portfolio</Link>
        <Link href="/blog" className={styles.navlink}>Blog</Link>
      </div>

      {/* Photo */}
      <div className={styles.photoWrapper}>
        <Image
          src="/IMG_1032.JPG"
          alt="Elmira Kalhor"
          width={300}
          height={300}
          className={styles.photo}
          priority
        />
      </div>

      {/* Greeting and Resume */}
      <div className={styles.content}>
        <span className={styles.tag}>It's me</span>
        <h1 className={styles.title}>Elmira Kalhor</h1>
        <p className={styles.subtitle}>
          Quantitative researcher with a passion for data science and machine learning.
        </p>
        <Link
          href="/ElmiraKalhor_R.pdf"
          target="_blank"
          className={styles.resumeButton}
        >
          My Resume
        </Link>
      </div>
    </main>
  );
}
