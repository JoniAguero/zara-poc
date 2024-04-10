import { FromResponseToHeroEntityListEntityMapper } from '../mappers/FromResponseToHeroEntityListEntityMapper';

import { PublicFetcher } from '../../fetchers';
import { HeroEntity } from '../models/HeroEntity';
import { HeroEntityListValueObject } from '../models/HeroEntityListValueObject';

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
    try {
      const response = await this._fetcher({ search });
      const heroListEntityMapper = FromResponseToHeroEntityListEntityMapper.create();
      const heroListVO = heroListEntityMapper.map({ heroes: response.data.results });
      return { items: heroListVO.serialize() || [], metadata: { count: response.data.count } };
    } catch (error) {
      console.error(error);
    }
  }

  async getHeroDetail({ id }: { id: number }): Promise<HeroEntity | undefined> {
    try {
      const response = await this._fetcher({ id });

      const heroListEntityMapper = FromResponseToHeroEntityListEntityMapper.create();
      const heroVO = heroListEntityMapper.map({ heroes: response.data.results });

      return heroVO.heroEntityList()[0];
    } catch (error) {
      console.error(error);
    }
  }
}
