import styles from './HeroCard.module.css';
import React from 'react';
import Image from 'next/image';
import { EmptyHeartIcon, HeartIcon } from '@/components';

interface HeroCardProps {
  image: string;
  blurImage: string;
  name: string;
  isFavorite?: boolean;
  handleClick?: () => void;
  toggleFavorite: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  image,
  blurImage,
  name,
  isFavorite,
  toggleFavorite,
  handleClick,
}) => {
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleFavorite();
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <Image src={image} alt={name} width={190} height={190} placeholder="blur" blurDataURL={blurImage} />
      <div className={styles.separator}></div>
      <div className={styles.containerName}>
        <div className={styles.name}>{name}</div>
        <div className={styles.icon} onClick={() => handleToggleFavorite}>
          {isFavorite ? <HeartIcon /> : <EmptyHeartIcon />}
        </div>
      </div>
    </div>
  );
};
