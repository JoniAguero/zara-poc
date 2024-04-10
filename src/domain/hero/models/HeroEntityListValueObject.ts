import { HeroEntity } from './HeroEntity';

export class HeroEntityListValueObject {
  private _heroEntityList: HeroEntity[];

  static create({ heroEntityList }: { heroEntityList: HeroEntity[] }): HeroEntityListValueObject {
    return new HeroEntityListValueObject({
      heroEntityList: heroEntityList,
    });
  }

  constructor({ heroEntityList }: { heroEntityList: HeroEntity[] }) {
    this._heroEntityList = heroEntityList;
  }

  heroEntityList(): HeroEntity[] {
    return this._heroEntityList;
  }

  serialize(): { heroEntityList: any[] } {
    return {
      heroEntityList: this.heroEntityList().map((entity) => entity.serialize()),
    };
  }
}
