import { FromResponseToHeroEntityListEntityMapper } from '../mappers/FromResponseToHeroEntityListEntityMapper';

import { PublicFetcher } from '../../fetchers';
import { HeroEntity } from '../models/HeroEntity';
// import { UserEntity } from '../models/HeroEntity';
import { metadata } from '../../../app/layout';

interface IGetHeroList {
  items: {
    heroEntityList: Array<HeroEntity>;
  };
  metadata: {
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
