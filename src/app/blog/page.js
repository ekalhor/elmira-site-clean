'use client';
import Image from 'next/image';
import styles from '../Home.module.css';

export default function BlogPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>

        {/* Blog image with 3-ring styling */}
        <div className={styles.photoWrapper}>
          <div className={styles.ringOuter}>
            <div className={styles.ringMiddle}>
              <div className={styles.ringInner}>
                <Image
                  src="/blog_AI.jpg"
                  alt="Blog Preview"
                  width={300}
                  height={300}
                  className={styles.photo}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Centered Message */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#334155',
            fontFamily: 'system-ui, sans-serif'
          }}>
            Blog page is coming soon...
          </h1>
        </div>

      </div>
    </main>
  );
}
