'use client';

import { HeroTemplate } from '@/components';

export default function ListHero() {
  const data = JSON.parse(localStorage.getItem('favorites') || '[]');
  const heroes = data.map((item: any) => item.hero);

  return <HeroTemplate heroes={heroes} showSearch={false} />;
}
