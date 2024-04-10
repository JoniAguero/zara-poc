import { ComicEntity } from '../models/ComicEntity';
import { ComicEntityListValueObject } from '../models/ComicEntityListValueObject';

export class FromResponseToComicEntityListEntityMapper {
  static create() {
    return new FromResponseToComicEntityListEntityMapper();
  }

  map(response: { comics: Array<Response> }): ComicEntityListValueObject {
    const { comics } = response;

    const comicList: Array<ComicEntity> | undefined = comics?.map((comic: any) => {
      const { id, title, description, dates, thumbnail } = comic;

      const image = `${thumbnail.path}.${thumbnail.extension}`;

      const comicEntity: ComicEntity = ComicEntity.create({
        id,
        description,
        title,
        year: new Date(dates[0].date).getFullYear().toString(),
        image,
      });

      return comicEntity;
    });

    const comicEntityList: ComicEntityListValueObject = ComicEntityListValueObject.create({
      comicEntityList: comicList,
    });

    return comicEntityList;
  }
}
