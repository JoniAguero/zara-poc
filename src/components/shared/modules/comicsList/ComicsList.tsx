'use client';

import styles from './ComicsList.module.css';
import React from 'react';
import { ComicCard } from '@/components';

interface Comic {
  id: number;
  title: string;
  year: string;
  image: string;
}

interface ComicsListProps {
  comics: Comic[] | null;
}

export const ComicsList: React.FC<ComicsListProps> = ({ comics }: ComicsListProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comics</h2>
      <div className={styles.comicsList}>
        {comics?.map((comic: Comic) => (
          <ComicCard key={comic.id} title={comic.title} image={comic.image} year={comic.year}></ComicCard>
        ))}
      </div>
    </div>
  );
};
