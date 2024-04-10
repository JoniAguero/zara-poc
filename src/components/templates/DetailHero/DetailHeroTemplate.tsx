'use client';

import styles from './DetailHeroTemplate.module.css';
import { HeroDetail, ComicsList } from '@/components';
import { useDomain, useFavorites } from '@/context';
import React, { useEffect, useState } from 'react';

interface DetailHeroTemplateProps {
  id: number;
}

interface HeroDetailProps {
  name: string;
  description: string;
  image: string;
}

interface Comic {
  id: number;
  title: string;
  year: string;
  image: string;
}

export const DetailHeroTemplate: React.FC<DetailHeroTemplateProps> = ({ id }) => {
  const { domain } = useDomain();
  const [hero, setHero] = useState<HeroDetailProps | null>(null);
  const [comics, setComics] = useState<Comic[] | null>(null);
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleToggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  const fetchHeroComics = async () => {
    try {
      const responseHero = await domain.getHeroDetailUseCase.execute({ id });
      const responseComics = await domain.getComicListUseCase.execute({ id });
      setHero(responseHero);
      setComics(responseComics.items);
    } catch (error) {
      console.error('Error fetching hero items:', error);
    }
  };

  useEffect(() => {
    fetchHeroComics();
  }, [domain]);

  return (
    <div className={styles.container}>
      <HeroDetail
        name={hero?.name || ''}
        description={hero?.description || ''}
        image={hero?.image || ''}
        isFavorite={favorites.includes(id)}
        toggleFavorite={() => handleToggleFavorite(id)}
      />
      <div className={styles.containerComics}>
        <ComicsList comics={comics} />
      </div>
    </div>
  );
};
