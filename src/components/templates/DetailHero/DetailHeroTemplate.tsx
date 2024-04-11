'use client';

import styles from './DetailHeroTemplate.module.css';
import React from 'react';
import { HeroDetail, ComicsList, Loader } from '@/components';
import { useFavorites } from '@/context';

interface DetailHeroTemplateProps {
  id: number;
  hero: HeroDetailProps;
  comics: Comic[];
}

interface HeroDetailProps {
  name: string;
  description: string;
  image: string;
  blurImage: string;
}

interface Comic {
  id: number;
  title: string;
  year: string;
  image: string;
  blurImage: string;
}
export const DetailHeroTemplate: React.FC<DetailHeroTemplateProps> = ({ id, hero, comics }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleToggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
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
          isFavorite={favorites.includes(id)}
          toggleFavorite={() => handleToggleFavorite(id)}
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
