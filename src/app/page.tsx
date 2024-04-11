import { HeroTemplate } from '@/components';
import { getHeroListService } from '@/services';

async function getData() {
  const { items, count } = await getHeroListService();

  return {
    items,
    count,
  };
}

export default async function ListHero() {
  const { items, count } = await getData();
  return <HeroTemplate heroes={items} count={count} />;
}
