import Image from 'next/image';
import React from 'react';
import styles from './BannerWithDetails.module.css'; // Import the CSS module

const BannerWithDetails: React.FC = () => {
  return (
    <div className={styles.splitScreen}>
      {/* Left Side: Banner */}
      <div className={styles.banner}>
        <Image
          src="/banner.jpg" // Banner image in the public folder
          alt="Owo Youth Festival"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Right Side: Event Details */}
      <div className={styles.details}>
        <h1 className={styles.heading}>Owo Youth Festival</h1>
        <p className={styles.paragraph}>
          Join us for the exciting Owo Youth Festival. This event is packed with music, performances, and activities that will define the youthful experience!
        </p>
        <button className={styles.button}>Anticipate!</button>
      </div>
    </div>
  );
};

export default BannerWithDetails;
