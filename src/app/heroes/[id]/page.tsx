import { DetailHeroTemplate } from '@/components';
import { ComicEntity } from '@/domain/comic/models/ComicEntity';
import { dynamicBlurDataUrl } from '@/utils';

async function getData({ id }: { id: number }) {
  const DomainApp = require('@/domain').DomainApp.create();

  const hero = await DomainApp.getHeroDetailUseCase.execute({ id });
  const comics = await DomainApp.getComicListUseCase.execute({ id });

  const heroWithImageBlur = {
    ...hero,
    blurImage: await dynamicBlurDataUrl(hero.image),
  };

  const itemsComicswithImageBlur = await Promise.all(
    comics.items.map(async (comic: ComicEntity) => ({
      ...comic,
      blurImage: await dynamicBlurDataUrl(comic.image),
    }))
  );

  return {
    hero: heroWithImageBlur,
    comics: itemsComicswithImageBlur,
  };
}

export default async function DetailHero({ params }: { params: { id: number } }) {
  const { hero, comics } = await getData({ id: params.id });

  return <DetailHeroTemplate id={params.id} hero={hero} comics={comics} />;
}
