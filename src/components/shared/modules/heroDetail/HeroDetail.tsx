'use client';

import React from 'react';
import styles from './HeroDetail.module.css';
import Image from 'next/image';
import { EmptyHeartIcon, HeartIcon } from '../../icons';

interface HeroDetailProps {
  name: string;
  description: string;
  image: string;
  blurImage: string;
  isFavorite?: boolean;
  toggleFavorite: () => void;
}

export const HeroDetail: React.FC<HeroDetailProps> = ({
  name,
  description,
  image,
  blurImage,
  isFavorite,
  toggleFavorite,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <div className={styles.image}>
          <Image
            src={image}
            alt={name}
            fill={true}
            placeholder="blur"
            blurDataURL={blurImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.containerDescription}>
          <div className={styles.containerName}>
            <div className={styles.name}>{name}</div>
            <div className={styles.icon} onClick={toggleFavorite}>
              {isFavorite ? <HeartIcon /> : <EmptyHeartIcon />}
            </div>
          </div>
          <div className={styles.description}>{description ? description : 'No hay descripción'}</div>
        </div>
      </div>
    </div>
  );
};
