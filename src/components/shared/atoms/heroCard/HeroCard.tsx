import styles from './HeroCard.module.css';
import React from 'react';
import Image from 'next/image';
import { HeartIcon } from '@/components';

interface HeroCardProps {
  image: string;
  name: string;
}

export const HeroCard: React.FC<HeroCardProps> = ({ image, name }) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt={name} width={190} height={190} />
      <div className={styles.separator}></div>
      <div className={styles.containerName}>
        <div className={styles.name}>{name}</div>
        <div className={styles.icon}>
          <HeartIcon />
        </div>
      </div>
    </div>
  );
};
