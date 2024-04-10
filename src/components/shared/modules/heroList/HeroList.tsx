'use client';

import styles from './HeroList.module.css';
import React from 'react';
import { HeroCard } from '@/components';
import { useFavorites } from '@/context';

interface Hero {
  id: number;
  name: string;
  image: string;
}

interface HeroListProps {
  heroes: Hero[];
}

export const HeroList: React.FC<HeroListProps> = ({ heroes }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleToggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div className={styles.heroList}>
      {heroes?.map((hero) => (
        <HeroCard
          key={hero.id}
          name={hero.name}
          image={hero.image}
          isFavorite={favorites.includes(hero.id)}
          toggleFavorite={() => handleToggleFavorite(hero.id)}
        ></HeroCard>
      ))}
    </div>
  );
};
