'use client';

import styles from './HeroList.module.css';
import React from 'react';
import { HeroCard } from '@/components';

interface Hero {
  name: string;
  image: string;
}

interface HeroListProps {
  heroes: Hero[];
}

export const HeroList: React.FC<HeroListProps> = ({ heroes }) => {
  return (
    <div className={styles.heroList}>
      {heroes?.map((hero, index) => (
        <HeroCard key={index} name={hero.name} image={hero.image}></HeroCard>
      ))}
    </div>
  );
};
