import styles from './ComicCard.module.css';
import React from 'react';
import Image from 'next/image';

interface ComicCardProps {
  title: string;
  image: string;
  year: string;
  handleClick?: () => void;
}

export const ComicCard: React.FC<ComicCardProps> = ({ title, image, year, handleClick }) => {
  return (
    <div className={styles.container} onClick={handleClick}>
      <Image src={image} alt={title} width={180} height={270} />
      <div className={styles.title}>{title}</div>
      <div className={styles.year}>{year}</div>
    </div>
  );
};
