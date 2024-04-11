'use client';

import styles from './HeroTemplate.module.css';
import React, { use, useEffect } from 'react';
import { useState } from 'react';
import { useDomain } from '@/context';
import { HeroList, Loader, SearchInput } from '@/components';
import { HeroEntity } from '@/domain/hero/models/HeroEntity';
import { dynamicBlurDataUrl } from '@/utils';

export interface Hero {
  id: number;
  name: string;
  description: string;
  image: string;
  blurImage: string;
}

export interface HeroListProps {
  heroes: Hero[];
  count?: number;
  showSearch?: boolean;
}

export const HeroTemplate: React.FC<HeroListProps> = ({ heroes, count = 0, showSearch = true }) => {
  const { domain } = useDomain();
  const [heroItems, setHeroItems] = useState<any[]>(heroes);
  const [countItems, setCountItems] = useState<number>(count);

  useEffect(() => {
    setHeroItems(heroes);
  }, [heroes]);

  const fetchHeroItems = async ({ search = '' }: { search: string }) => {
    try {
      const { items, count } = await domain.getHeroListUseCase.execute({ search });

      const data = await Promise.all(
        items.map(async (hero: HeroEntity) => ({
          ...hero,
          blurImage: await dynamicBlurDataUrl(hero.image),
        }))
      );

      setHeroItems(data);
      setCountItems(count);
    } catch (error) {
      console.error('Error fetching hero items:', error);
    }
  };

  const handleSearch = (value: string) => {
    fetchHeroItems({ search: value });
  };

  return (
    <div className={styles.container}>
      {showSearch && (
        <div className={styles.containerSearch}>
          <SearchInput onSearch={handleSearch} />
          <div className={styles.results}>{countItems} RESULTS</div>
        </div>
      )}
      {!heroItems || heroItems.length === 0 ? (
        <div>
          <Loader />
        </div>
      ) : (
        <HeroList heroes={heroItems}></HeroList>
      )}
    </div>
  );
};
