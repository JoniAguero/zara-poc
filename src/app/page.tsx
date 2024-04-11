import { HeroTemplate } from '@/components';
import { HeroEntity } from '@/domain/hero/models/HeroEntity';
import { dynamicBlurDataUrl } from '@/utils';

async function getData() {
  const DomainApp = require('@/domain').DomainApp.create();

  const { items, count } = await DomainApp.getHeroListUseCase.execute({ search: '' });

  const itemswithImageBlur = await Promise.all(
    items.map(async (hero: HeroEntity) => ({
      ...hero,
      blurImage: await dynamicBlurDataUrl(hero.image),
    }))
  );

  return {
    items: itemswithImageBlur,
    count,
  };
}

export default async function ListHero() {
  const { items, count } = await getData();
  return <HeroTemplate heroes={items} count={count} />;
}
