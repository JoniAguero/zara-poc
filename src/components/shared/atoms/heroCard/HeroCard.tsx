import styles from './HeroCard.module.css';
import React from 'react';
import Image from 'next/image';
import { EmptyHeartIcon, HeartIcon } from '@/components';

interface HeroCardProps {
  image: string;
  name: string;
  isFavorite?: boolean;
  handleClick?: () => void;
  toggleFavorite: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ image, name, isFavorite, toggleFavorite, handleClick }) => {
  return (
    <div className={styles.container} onClick={handleClick}>
      <Image src={image} alt={name} width={190} height={190} />
      <div className={styles.separator}></div>
      <div className={styles.containerName}>
        <div className={styles.name}>{name}</div>
        <div className={styles.icon} onClick={toggleFavorite}>
          {isFavorite ? <HeartIcon /> : <EmptyHeartIcon />}
        </div>
      </div>
    </div>
  );
};
