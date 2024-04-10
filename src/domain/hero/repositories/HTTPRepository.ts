import { FromResponseToHeroEntityListEntityMapper } from '../mappers/FromResponseToHeroEntityListEntityMapper';

import { PublicFetcher } from '../../fetchers';
// import { UserEntity } from '../models/HeroEntity';

export class HTTPRepository {
  private _fetcher: any;
  private _url =
    'http://gateway.marvel.com/v1/public/characters?ts=1&limit=50&apikey=efe6f598233b28dd13d293fe099c2115&hash=a201c9d6c88e3047527968cb82fd6bd8';

  static create() {
    const fetcher = PublicFetcher;
    return new HTTPRepository({ fetcher });
  }

  constructor({ fetcher }: { fetcher: typeof PublicFetcher }) {
    this._fetcher = fetcher;
  }

  async getHeroList({ offset, search, rowsPerPage }: { offset: number; search: string; rowsPerPage: number }) {
    try {
      const response = await this._fetcher(this._url, {
        offset,
        search,
        rowsPerPage,
      });

      const heroListEntityMapper = FromResponseToHeroEntityListEntityMapper.create();
      const heroListVO = heroListEntityMapper.map({ heroes: response.data.results });

      return heroListVO.serialize() || [];
    } catch (error) {
      return error;
    }
  }

  // async getUserDetail({ userId }) {
  //   try {
  //     const _id = userId;
  //     const { getUsers } = await this._fetcher(GET_ADMIN_USER_LIST, {
  //       fields: ['_id'],
  //       search: _id,
  //     });

  //     const {
  //       address,
  //       createdAt,
  //       email,
  //       emailVerified,
  //       externalReferralCode,
  //       image,
  //       modifiedAt,
  //       name,
  //       referralCode,
  //       roles,
  //       surname,
  //       terms,
  //       _id: id,
  //     } = getUsers.items[0];

  //     return UserEntity.create({
  //       address,
  //       createdAt,
  //       email,
  //       emailVerified,
  //       externalReferralCode,
  //       image,
  //       modifiedAt,
  //       name,
  //       referralCode,
  //       roles,
  //       surname,
  //       terms,
  //       id,
  //     });
  //   } catch (error) {
  //     return error;
  //   }
  // }
}
