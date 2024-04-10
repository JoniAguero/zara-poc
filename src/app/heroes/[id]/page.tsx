import { DetailHeroTemplate } from '@/components';

export default function DetailHero({ params }: { params: { id: number } }) {
  return <DetailHeroTemplate id={params.id} />;
}
