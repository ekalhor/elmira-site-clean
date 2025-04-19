'use client';
import Image from 'next/image';
import styles from '../Home.module.css';

export default function PortfolioPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>

        {/* Portfolio image with same ring styling as headshot */}
        <div className={styles.photoWrapper}>
          <div className={styles.ringOuter}>
            <div className={styles.ringMiddle}>
              <div className={styles.ringInner}>
                <Image
                  src="/portfolio_AI.jpg"
                  alt="Portfolio Preview"
                  width={300}
                  height={300}
                  className={styles.photo}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text message */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#334155',
            fontFamily: 'system-ui, sans-serif'
          }}>
            Portfolio page is coming soon...
          </h1>
        </div>

      </div>
    </main>
  );
}
