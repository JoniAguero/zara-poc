'use client';

import { useEffect, useState } from 'react';
import { useDomain } from '@/context';
import { HeroList } from '@/components';

export default function Home() {
  const { domain } = useDomain();

  const [heroItems, setHeroItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchHeroItems = async () => {
      try {
        // const { items } = await domain.getHeroListUseCase.execute();

        const items = [
          {
            id: 1011334,
            name: '3-D MAN',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
          },
          {
            id: 1017100,
            name: 'A-BOMB (HAS)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
          },
          {
            id: 1009144,
            name: 'A.I.M.',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec.jpg',
          },
          {
            id: 1010699,
            name: 'AARON STACK',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1009146,
            name: 'ABOMINATION (EMIL BLONSKY)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg',
          },
          {
            id: 1016823,
            name: 'ABOMINATION (ULTIMATE)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1009148,
            name: 'ABSORBING MAN',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7.jpg',
          },
          {
            id: 1009149,
            name: 'ABYSS',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64.jpg',
          },
          {
            id: 1010903,
            name: 'ABYSS (AGE OF APOCALYPSE)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548.jpg',
          },
          {
            id: 1011266,
            name: 'ADAM DESTINE',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1010354,
            name: 'ADAM WARLOCK',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg',
          },
          {
            id: 1010846,
            name: 'AEGIS (TREY ROLLINS)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d.gif',
          },
          {
            id: 1017851,
            name: 'AERO (AERO)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1012717,
            name: 'AGATHA HARKNESS',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/a0/4ce5a9bf70e19.jpg',
          },
          {
            id: 1011297,
            name: 'AGENT BRAND',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e.jpg',
          },
          {
            id: 1011031,
            name: 'AGENT X (NIJO)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1009150,
            name: 'AGENT ZERO',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790.jpg',
          },
          {
            id: 1011198,
            name: 'AGENTS OF ATLAS',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5.jpg',
          },
          {
            id: 1011175,
            name: 'AGINAR',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1011136,
            name: 'AIR-WALKER (GABRIEL LAN)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1011176,
            name: 'AJAK',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215.jpg',
          },
          {
            id: 1010870,
            name: 'AJAXIS',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/70/4c0035adc7d3a.jpg',
          },
          {
            id: 1011194,
            name: 'AKEMI',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1011170,
            name: 'ALAIN',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1009240,
            name: 'ALBERT CLEARY',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1011120,
            name: 'ALBION',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1010836,
            name: 'ALEX POWER',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce5a385a2e82.jpg',
          },
          {
            id: 1010755,
            name: 'ALEX WILDER',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/2/c0/4c00377144d5a.jpg',
          },
          {
            id: 1011214,
            name: 'ALEXA MENDEZ',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1009497,
            name: 'ALEXANDER PIERCE',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1014990,
            name: 'ALICE',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/4cd061e6d6573.jpg',
          },
          {
            id: 1009435,
            name: 'ALICIA MASTERS',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/4c003d40ac7ae.jpg',
          },
          {
            id: 1010370,
            name: 'ALPHA FLIGHT',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088.jpg',
          },
          {
            id: 1011324,
            name: 'ALPHA FLIGHT (ULTIMATE)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1011164,
            name: 'ALVIN MAKER',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1011227,
            name: 'AMADEUS CHO',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/80/520288b9cb581.jpg',
          },
          {
            id: 1009567,
            name: 'AMANDA SEFTON',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1011382,
            name: 'AMAZONESS',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1011361,
            name: 'AMERICAN EAGLE (JASON STRONGBOW)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/f/80/4ce5a6d8b8f2a.jpg',
          },
          {
            id: 1009151,
            name: 'AMIKO',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1010672,
            name: 'AMORA',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1010673,
            name: 'AMPHIBIAN (EARTH-712)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1010905,
            name: 'AMUN',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1009152,
            name: 'ANCIENT ONE',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac.jpg',
          },
          {
            id: 1016824,
            name: 'ANCIENT ONE (ULTIMATE)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1011684,
            name: 'ANGEL (ANGEL SALVADORE)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1011396,
            name: 'ANGEL (THOMAS HALLOWAY)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/531769834b15f.jpg',
          },
          {
            id: 1011338,
            name: 'ANGEL (ULTIMATE)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/4/50/531769ae4399f.jpg',
          },
          {
            id: 1009153,
            name: 'ANGEL (WARREN WORTHINGTON III)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          },
          {
            id: 1017574,
            name: 'ANGELA (ALDRIF ODINSDOTTIR)',
            image: 'http://i.annihil.us/u/prod/marvel/i/mg/7/00/545a82f59dd73.jpg',
          },
        ];

        setHeroItems(items);
      } catch (error) {
        console.error('Error fetching hero items:', error);
      }
    };

    fetchHeroItems();
  }, [domain]);

  if (!heroItems) {
    <div>Loading...</div>;
  }

  return <HeroList heroes={heroItems}></HeroList>;
}
