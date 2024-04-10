'use client';

import HeroList from '@/components/shared/heroList/HeroList';
import { useEffect, useState } from 'react';
import { useDomain } from '@/context';

export default function Home() {
  const { domain } = useDomain();

  const [heroItems, setHeroItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchHeroItems = async () => {
      try {
        const { items } = await domain.getHeroListUseCase.execute();
        setHeroItems(items.heroEntityList);
      } catch (error) {
        console.error('Error fetching hero items:', error);
      }
    };

    fetchHeroItems();
  }, [domain]);

  if (!heroItems) {
    <div>Loading...</div>;
  }

  return <HeroList heroes={heroItems}></HeroList>;
}
