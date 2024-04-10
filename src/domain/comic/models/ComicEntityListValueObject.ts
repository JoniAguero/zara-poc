import { ComicEntity } from './ComicEntity';

export class ComicEntityListValueObject {
  private _comicEntityList: ComicEntity[];

  static create({ comicEntityList }: { comicEntityList: ComicEntity[] }): ComicEntityListValueObject {
    return new ComicEntityListValueObject({
      comicEntityList: comicEntityList,
    });
  }

  constructor({ comicEntityList }: { comicEntityList: ComicEntity[] }) {
    this._comicEntityList = comicEntityList;
  }

  comicEntityList(): ComicEntity[] {
    return this._comicEntityList;
  }

  serialize(): { comicEntityList: any[] } {
    return {
      comicEntityList: this.comicEntityList().map((entity) => entity.serialize()),
    };
  }
}
