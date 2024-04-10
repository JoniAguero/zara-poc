'use client';

import React from 'react';
import styles from './HeroDetail.module.css';
import Image from 'next/image';
import { EmptyHeartIcon, HeartIcon } from '../../icons';

interface HeroDetailProps {
  name: string;
  description: string;
  image: string;
  isFavorite?: boolean;
  toggleFavorite: () => void;
}

export const HeroDetail: React.FC<HeroDetailProps> = ({ name, description, image, isFavorite, toggleFavorite }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <div className={styles.image}>
          <Image src={image} alt={name} fill={true} />
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
