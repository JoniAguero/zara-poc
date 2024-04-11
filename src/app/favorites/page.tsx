'use client';

import { HeroTemplate } from '@/components';
import { useEffect, useState } from 'react';

export default function ListHero() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('favorites') || '[]');
    const heroes = data.map((item: any) => item.hero);
    setHeroes(heroes);
  }, []);

  return <>{heroes && <HeroTemplate heroes={heroes} showSearch={false} />}</>;
}
