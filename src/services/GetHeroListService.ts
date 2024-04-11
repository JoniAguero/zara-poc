import { HeroEntity } from '@/domain/hero/models/HeroEntity';
import { dynamicBlurDataUrl } from '@/utils';

export const getHeroListService = async () => {
  const DomainApp = require('@/domain').DomainApp.create();

  const { items: itemsResponse, count } = await DomainApp.getHeroListUseCase.execute({ search: '' });

  const items = await Promise.all(
    itemsResponse.map(async (hero: HeroEntity) => ({
      ...hero,
      blurImage: await dynamicBlurDataUrl(hero.image),
    }))
  );

  return {
    items,
    count,
  };
};
