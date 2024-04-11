'use client';
import styles from './HeroList.module.css';
import React from 'react';
import { Hero, HeroCard, HeroListProps } from '@/components';
import { useFavorites } from '@/context';
import { useRouter } from 'next/navigation';

export const HeroList: React.FC<HeroListProps> = ({ heroes }) => {
  const router = useRouter();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleToggleFavorite = (hero: Hero) => {
    if (favorites.some((favorite) => favorite.id === hero.id.toString())) {
      removeFavorite(hero.id.toString());
    } else {
      addFavorite({ id: hero.id.toString(), hero });
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
          isFavorite={favorites.some((favorite) => favorite.id === hero.id.toString())}
          toggleFavorite={() => handleToggleFavorite(hero)}
        ></HeroCard>
      ))}
    </div>
  );
};
