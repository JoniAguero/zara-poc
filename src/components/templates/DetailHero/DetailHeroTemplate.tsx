'use client';

import styles from './DetailHeroTemplate.module.css';
import React from 'react';
import { HeroDetail, ComicsList, Loader, Hero } from '@/components';
import { useFavorites } from '@/context';

interface Comic {
  id: number;
  title: string;
  year: string;
  image: string;
  blurImage: string;
}

interface DetailHeroTemplateProps {
  id: number;
  hero: Hero;
  comics: Comic[];
}

export const DetailHeroTemplate: React.FC<DetailHeroTemplateProps> = ({ id, hero, comics }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleToggleFavorite = (hero: Hero) => {
    if (favorites.some((favorite) => favorite.id === hero.id.toString())) {
      removeFavorite(hero.id.toString());
    } else {
      addFavorite({ id: hero.id.toString(), hero });
    }
  };

  if (!hero || !comics) {
    return (
      <div className={styles.containerLoading}>
        <Loader />;
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {hero && (
        <HeroDetail
          name={hero?.name}
          description={hero?.description}
          image={hero?.image}
          blurImage={hero?.blurImage}
          isFavorite={favorites.some((favorite) => favorite.id === hero.id.toString())}
          toggleFavorite={() => handleToggleFavorite(hero)}
        />
      )}
      {comics && (
        <div className={styles.containerComics}>
          <ComicsList comics={comics} />
        </div>
      )}
    </div>
  );
};
