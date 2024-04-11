'use client';

import styles from './HeroList.module.css';
import React from 'react';
import { HeroCard, HeroListProps } from '@/components';
import { useFavorites } from '@/context';
import { useRouter } from 'next/navigation';

export const HeroList: React.FC<HeroListProps> = ({ heroes }) => {
  const router = useRouter();
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
          blurImage={hero.blurImage}
          handleClick={() => router.push(`heroes/${hero.id}`)}
          isFavorite={favorites.includes(hero.id)}
          toggleFavorite={() => handleToggleFavorite(hero.id)}
        ></HeroCard>
      ))}
    </div>
  );
};
