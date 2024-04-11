import { FromResponseToHeroEntityListEntityMapper } from '../mappers/FromResponseToHeroEntityListEntityMapper';

import { PublicFetcher } from '../../fetchers';
import { HeroEntity } from '../models/HeroEntity';

interface IGetHeroList {
  items: {
    heroEntityList: Array<HeroEntity>;
  };
  metadata?: {
    count: number;
  };
}

export class HTTPRepository {
  private _fetcher: any;

  static create() {
    const fetcher = PublicFetcher;
    return new HTTPRepository({ fetcher });
  }

  constructor({ fetcher }: { fetcher: typeof PublicFetcher }) {
    this._fetcher = fetcher;
  }

  async getHeroList({ search = '' }): Promise<IGetHeroList | undefined> {
    let url = 'https://gateway.marvel.com/v1/public/characters?';

    if (search) {
      url = url + `nameStartsWith=${encodeURIComponent(search)}&`;
    } else {
      url = url + 'limit=50&';
    }

    try {
      const response = await this._fetcher({ baseUrl: url });
      const heroListEntityMapper = FromResponseToHeroEntityListEntityMapper.create();
      const heroListVO = heroListEntityMapper.map({ heroes: response.data.results });
      return { items: heroListVO.serialize() || [], metadata: { count: response.data.count } };
    } catch (error) {
      console.error(error);
    }
  }

  async getHeroDetail({ id }: { id: number }): Promise<HeroEntity | undefined> {
    let baseUrl = `https://gateway.marvel.com/v1/public/characters/${id}?`;

    try {
      const response = await this._fetcher({ baseUrl });

      const heroListEntityMapper = FromResponseToHeroEntityListEntityMapper.create();
      const heroVO = heroListEntityMapper.map({ heroes: response.data.results });

      return heroVO.heroEntityList()[0];
    } catch (error) {
      console.error(error);
    }
  }
}
