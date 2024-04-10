import { FromResponseToComicEntityListEntityMapper } from '../mappers/FromResponseToComicEntityListEntityMapper';

import { PublicFetcher } from '../../fetchers';
import { ComicEntity } from '../models/ComicEntity';

interface IGetComicList {
  items: {
    comicEntityList: Array<ComicEntity>;
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

  async getComicList({ id }: { id: number }): Promise<IGetComicList | undefined> {
    let url = `https://gateway.marvel.com/v1/public/characters/${id}/comics`;

    try {
      const response = await this._fetcher({ baseUrl: url });
      const comicListEntityMapper = FromResponseToComicEntityListEntityMapper.create();
      const comicListVO = comicListEntityMapper.map({ comics: response.data.results });
      return { items: comicListVO.serialize() || [], metadata: { count: response.data.count } };
    } catch (error) {
      console.error(error);
    }
  }
}
