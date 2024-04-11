import { DetailHeroTemplate } from '@/components';
import { getHeroDetailService } from '@/services';

async function getData({ id }: { id: number }) {
  const { hero, comics } = await getHeroDetailService({ id });

  return {
    hero,
    comics,
  };
}

export default async function DetailHero({ params }: { params: { id: number } }) {
  const { hero, comics } = await getData({ id: params.id });

  return <DetailHeroTemplate id={params.id} hero={hero} comics={comics} />;
}
