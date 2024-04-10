import { HeroEntity } from '../models/HeroEntity';
import { HeroEntityListValueObject } from '../models/HeroEntityListValueObject';

export class FromResponseToHeroEntityListEntityMapper {
  static create() {
    return new FromResponseToHeroEntityListEntityMapper();
  }

  map(response: { heroes: Array<Response> }): HeroEntityListValueObject {
    const { heroes } = response;

    const heroList: Array<HeroEntity> | undefined = heroes?.map((hero: any) => {
      const { id, name, thumbnail } = hero;

      const image = `${thumbnail.path}.${thumbnail.extension}`;

      const heroEntity: HeroEntity = HeroEntity.create({
        id,
        name: name.toUpperCase(),
        image,
      });

      return heroEntity;
    });

    const heroEntityList: HeroEntityListValueObject = HeroEntityListValueObject.create({
      heroEntityList: heroList,
    });

    return heroEntityList;
  }
}
