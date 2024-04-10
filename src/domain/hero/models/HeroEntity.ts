interface Thumbnail {
  path: string;
  extension: string;
}

export class HeroEntity {
  static create({
    id,
    name,
    description,
    modified,
    resourceURI,
    urls,
    thumbnail,
  }: {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: string[];
    thumbnail: Thumbnail;
  }) {
    return new HeroEntity({
      id,
      name,
      description,
      modified,
      resourceURI,
      urls,
      thumbnail,
    });
  }

  private _id: number;
  private _name: string;
  private _description: string;
  private _modified: string;
  private _resourceURI: string;
  private _urls: string[];
  private _thumbnail: Thumbnail;

  constructor({
    id,
    name,
    description,
    modified,
    resourceURI,
    urls,
    thumbnail,
  }: {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: string[];
    thumbnail: Thumbnail;
  }) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._modified = modified;
    this._resourceURI = resourceURI;
    this._urls = urls;
    this._thumbnail = thumbnail;
  }

  id() {
    return this._id;
  }
  name() {
    return this._name;
  }
  description() {
    return this._description;
  }
  modified() {
    return this._modified;
  }
  resourceURI() {
    return this._resourceURI;
  }
  urls() {
    return this._urls;
  }
  thumbnail() {
    return this._thumbnail;
  }

  serialize() {
    return {
      id: this.id(),
      name: this.name(),
      description: this.description(),
      modified: this.modified(),
      resourceURI: this.resourceURI(),
      urls: this.urls(),
      thumbnail: this.thumbnail(),
    };
  }
}
