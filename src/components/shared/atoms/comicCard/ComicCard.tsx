import styles from './ComicCard.module.css';
import React from 'react';
import Image from 'next/image';

interface ComicCardProps {
  title: string;
  image: string;
  blurImage: string;
  year: string;
  handleClick?: () => void;
}

export const ComicCard: React.FC<ComicCardProps> = ({ title, image, blurImage, year, handleClick }) => {
  return (
    <div className={styles.container} onClick={handleClick}>
      <Image
        src={image}
        alt={title}
        width={180}
        height={270}
        placeholder="blur"
        blurDataURL={blurImage}
        loading="lazy"
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.year}>{year}</div>
    </div>
  );
};
