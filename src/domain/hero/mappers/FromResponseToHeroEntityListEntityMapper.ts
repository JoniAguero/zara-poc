import { HeroEntity } from '../models/HeroEntity';
import { HeroEntityListValueObject } from '../models/HeroEntityListValueObject';

export class FromResponseToHeroEntityListEntityMapper {
  static create() {
    return new FromResponseToHeroEntityListEntityMapper();
  }

  map(response: { heroes: Array<Response> }): HeroEntityListValueObject {
    const { heroes } = response;

    const heroList: Array<HeroEntity> | undefined = heroes?.map((hero: any) => {
      const { id, name, description, modified, resourceURI, urls, thumbnail } = hero;

      const heroEntity: HeroEntity = HeroEntity.create({
        id,
        name,
        description,
        modified,
        resourceURI,
        urls,
        thumbnail,
      });

      return heroEntity;
    });

    const heroEntityList: HeroEntityListValueObject = HeroEntityListValueObject.create({
      heroEntityList: heroList,
    });

    return heroEntityList;
  }
}
