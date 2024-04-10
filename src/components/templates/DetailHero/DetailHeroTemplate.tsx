'use client';

import { useDomain } from '@/context';
import { HeroEntity } from '@/domain/hero/models/HeroEntity';
import React, { useEffect, useState } from 'react';

interface DetailHeroTemplateProps {
  id: number;
}

export const DetailHeroTemplate: React.FC<DetailHeroTemplateProps> = ({ id }) => {
  const { domain } = useDomain();
  const [hero, setHero] = useState<HeroEntity | null>(null);

  const fetchHero = async () => {
    try {
      const response = await domain.getHeroDetailUseCase.execute({ id });
      setHero(response);
    } catch (error) {
      console.error('Error fetching hero items:', error);
    }
  };

  useEffect(() => {
    fetchHero();
  }, [domain]);

  return <div>{id}</div>;
};
