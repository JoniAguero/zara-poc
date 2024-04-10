'use client';

import styles from './HeroTemplate.module.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDomain } from '@/context';
import { HeroList, Loader, SearchInput } from '@/components';

export const HeroTemplate: React.FC<{}> = () => {
  const { domain } = useDomain();

  const [heroItems, setHeroItems] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);

  const fetchHeroItems = async ({ search = '' }: { search: string }) => {
    try {
      const { items, count } = await domain.getHeroListUseCase.execute({ search });
      setCount(count);
      setHeroItems(items);
    } catch (error) {
      console.error('Error fetching hero items:', error);
    }
  };

  useEffect(() => {
    fetchHeroItems({ search: '' });
  }, [domain]);

  const handleSearch = (value: string) => {
    fetchHeroItems({ search: value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerSearch}>
        <SearchInput onSearch={handleSearch} />
        <div className={styles.results}>{count} RESULTS</div>
      </div>
      {!heroItems || heroItems.length === 0 ? (
        <div className={styles.containerLoading}>
          <Loader />
        </div>
      ) : (
        <HeroList heroes={heroItems}></HeroList>
      )}
    </div>
  );
};
