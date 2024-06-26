import { ComicEntity } from '@/domain/comic/models/ComicEntity';
import { dynamicBlurDataUrl } from '@/utils';
import { DomainApp } from './domain';

export const getHeroDetailService = async ({ id }: { id: number }) => {
  const heroResponse = await DomainApp.getHeroDetailUseCase.execute({ id });
  const comicsResponse = await DomainApp.getComicListUseCase.execute({ id });

  const hero = {
    ...heroResponse,
    blurImage: await dynamicBlurDataUrl(heroResponse.image),
  };

  const comics = await Promise.all(
    comicsResponse.items.map(async (comic: ComicEntity) => ({
      ...comic,
      blurImage: await dynamicBlurDataUrl(comic.image),
    }))
  );

  return {
    hero,
    comics,
  };
};
